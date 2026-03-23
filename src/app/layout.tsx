import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Money₂Time - See What Your Money Really Costs",
  description:
    "Convert every purchase into hours of your life. Money₂Time helps you understand the true cost of spending by showing how long you worked to earn it.",
  keywords: [
    "money to time",
    "expense tracker",
    "hourly wage calculator",
    "spending awareness",
    "personal finance",
    "time cost",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Money₂Time - See What Your Money Really Costs",
    description:
      "Convert every purchase into hours of your life. Understand the true cost of spending.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
