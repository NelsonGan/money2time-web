import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col">
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

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-8xl font-black tracking-tight mb-6" style={{ color: "#B65F48" }}>
            404
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight mb-3">
            Page not found
          </h1>
          <p className="text-foreground-muted text-[15px] mb-8">
            This page doesn&apos;t exist. Maybe it costs too much of your time anyway.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            Go home
          </Link>
        </div>
      </main>
    </div>
  );
}
