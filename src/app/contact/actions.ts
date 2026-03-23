"use server";

import nodemailer from "nodemailer";

import { CONTACT_EMAIL, createContactMailto } from "@/lib/contact";

type ContactField = "name" | "email" | "subject" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;

type ContactPayload = {
  email: string;
  honeypot: string;
  message: string;
  name: string;
  subject: string;
};

export type ContactFormState = {
  errors?: ContactErrors;
  mailtoUrl?: string;
  message: string;
  status: "idle" | "success" | "error" | "mailto";
};

export const initialContactFormState: ContactFormState = {
  message: "",
  status: "idle",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;
const MAX_SUBJECT_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 3000;

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function validateContactPayload(payload: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};

  if (!payload.name) {
    errors.name = "Please enter your name.";
  } else if (payload.name.length > MAX_NAME_LENGTH) {
    errors.name = `Please keep your name under ${MAX_NAME_LENGTH} characters.`;
  }

  if (!payload.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Please use a valid email address.";
  }

  if (payload.subject.length > MAX_SUBJECT_LENGTH) {
    errors.subject = `Please keep the subject under ${MAX_SUBJECT_LENGTH} characters.`;
  }

  if (!payload.message) {
    errors.message = "Please share a short message.";
  } else if (payload.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Please keep the message under ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return errors;
}

function getTransportConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const parsedPort = Number.parseInt(process.env.SMTP_PORT ?? "465", 10);
  const port = Number.isNaN(parsedPort) ? 465 : parsedPort;
  const secure = (process.env.SMTP_SECURE ?? String(port === 465)) === "true";
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    process.env.SMTP_FROM?.trim() ||
    user;

  return {
    auth: { pass, user },
    from,
    host,
    port,
    secure,
  };
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const payload: ContactPayload = {
    email: getField(formData, "email"),
    honeypot: getField(formData, "company"),
    message: getField(formData, "message"),
    name: getField(formData, "name"),
    subject: getField(formData, "subject"),
  };

  if (payload.honeypot) {
    return {
      message: "Thanks for reaching out. Your note is on its way.",
      status: "success",
    };
  }

  const errors = validateContactPayload(payload);
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: "Please fix the highlighted fields and try again.",
      status: "error",
    };
  }

  const mailtoUrl = createContactMailto(payload);
  const transportConfig = getTransportConfig();

  if (!transportConfig) {
    return {
      mailtoUrl,
      message:
        "Your default mail app is opening with the message prefilled. If nothing opens, email me directly.",
      status: "mailto",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      auth: transportConfig.auth,
      host: transportConfig.host,
      port: transportConfig.port,
      secure: transportConfig.secure,
    });

    await transporter.sendMail({
      from: `Money2Time Contact <${transportConfig.from}>`,
      replyTo: payload.email,
      subject: payload.subject
        ? `Money2Time contact: ${payload.subject}`
        : "Money2Time contact form",
      text: [
        "New message from the Money2Time website.",
        "",
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Subject: ${payload.subject || "Not provided"}`,
        "",
        payload.message,
      ].join("\n"),
      to: CONTACT_EMAIL,
    });

    return {
      message: "Message sent. I’ll get back to you soon.",
      status: "success",
    };
  } catch (error) {
    console.error("Failed to send contact form email", error);

    return {
      mailtoUrl,
      message:
        "Direct sending is unavailable right now. Your default mail app is opening with everything filled in instead.",
      status: "mailto",
    };
  }
}
