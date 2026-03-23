import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Me - Money₂Time",
  description:
    "Contact Money₂Time for support, feedback, feature ideas, or privacy requests.",
};

export const runtime = "nodejs";

function Brand() {
  return (
    <span className="font-black text-lg tracking-[-0.9px] flex items-baseline">
      <span style={{ color: "#F37D57" }}>Money</span>
      <sub
        className="text-[11px] font-black ml-[1px]"
        style={{ color: "#F6B750" }}
      >
        2
      </sub>
      <span className="ml-[-1px]" style={{ color: "#B65F48" }}>
        Time
      </span>
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/icon.png"
              alt="Money2Time"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <Brand />
          </Link>
        </div>
      </nav>

      <main className="relative overflow-hidden pt-28 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(246,183,80,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(182,95,72,0.16),_transparent_40%)]" />

        <div className="mx-auto max-w-3xl px-6">
          <section className="space-y-6">
            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                Contact Me
              </h1>

              <p className="max-w-2xl text-base leading-7 text-foreground-soft sm:text-lg">
                For support, bugs, feedback, or privacy questions.
              </p>
            </div>

            <div className="rounded-[36px] border border-border/60 bg-card p-6 shadow-[0_24px_70px_rgba(26,46,42,0.08)] sm:p-8">
              <div className="border-b border-border/60 pb-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                    Contact Form
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/icon.png"
              alt="Money2Time"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="font-black text-sm tracking-[-0.9px] flex items-baseline">
              <span style={{ color: "#F37D57" }}>Money</span>
              <sub
                className="text-[9px] font-black ml-[1px]"
                style={{ color: "#F6B750" }}
              >
                2
              </sub>
              <span className="ml-[-1px]" style={{ color: "#B65F48" }}>
                Time
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-foreground-muted">
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
          </div>

          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Money₂Time. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
