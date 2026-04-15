import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Statement Import - Money₂Time",
  description:
    "Learn how to import your bank statements into Money₂Time using the AI-powered statement import flow.",
};

export default function StatementsImport() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/icon.png" alt="Money2Time" width={36} height={36} className="rounded-lg" />
            <span className="font-black text-lg tracking-[-0.9px] flex items-baseline">
              <span style={{ color: "#F37D57" }}>Money</span>
              <sub className="text-[11px] font-black ml-[1px]" style={{ color: "#F6B750" }}>2</sub>
              <span className="ml-[-1px]" style={{ color: "#B65F48" }}>Time</span>
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Statement Import
        </h1>
        <p className="text-foreground-muted text-[15px] mb-10">
          Watch the short walkthrough below to see how to import your bank
          statements into Money₂Time with the help of AI.
        </p>

        <div className="mx-auto w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden border border-border/60 bg-black">
          <iframe
            src="https://www.youtube.com/embed/3XC6Zjwl7eM"
            title="Money₂Time — Statement Import walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </main>

      <footer className="py-12 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-1.5">
              <Image src="/icon.png" alt="Money2Time" width={28} height={28} className="rounded-md" />
              <span className="font-black text-sm tracking-[-0.9px] flex items-baseline">
                <span style={{ color: "#F37D57" }}>Money</span>
                <sub className="text-[9px] font-black ml-[1px]" style={{ color: "#F6B750" }}>2</sub>
                <span className="ml-[-1px]" style={{ color: "#B65F48" }}>Time</span>
              </span>
            </Link>
            <div className="flex items-center gap-6 text-sm text-foreground-muted">
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
            <p className="text-foreground-muted text-sm">
              &copy; {new Date().getFullYear()} Money₂Time. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
