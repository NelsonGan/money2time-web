import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
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
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-start sm:items-center pt-24 sm:pt-20 lg:pt-16 pb-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative w-full">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] animate-fade-in-up">
              See What Your
              <br />
              Money{" "}
              <span className="text-primary relative">
                Really
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C50 2 150 2 198 5"
                    stroke="#B65F48"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-draw-underline"
                  />
                </svg>
              </span>{" "}
              Costs
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-foreground-soft max-w-xl mx-auto lg:mx-0 animate-fade-in-up [animation-delay:0.15s]">
              &ldquo;You are trading your life energy for money&rdquo;
              <br />
              <span className="text-foreground-muted text-sm sm:text-base">
                &mdash; Vicki Robin
              </span>
            </p>

            <p className="hidden sm:block mt-4 text-base text-foreground-soft max-w-lg mx-auto lg:mx-0 animate-fade-in-up [animation-delay:0.25s]">
              Convert every purchase into hours of your life. Know exactly how
              long you worked before you spend.
            </p>

            <div className="mt-5 sm:mt-8 mb-4 sm:mb-0 flex flex-row gap-3 justify-center lg:justify-start animate-fade-in-up [animation-delay:0.35s]">
              <a
                href="https://apps.apple.com"
                className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-foreground text-surface rounded-xl sm:rounded-2xl font-bold hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5 sm:w-[22px] sm:h-[22px]" viewBox="0 0 22 26" fill="currentColor">
                  <path d="M16.52 12.76c-.03-3.12 2.55-4.62 2.67-4.7-1.45-2.12-3.72-2.41-4.53-2.45-1.93-.2-3.76 1.14-4.74 1.14-.98 0-2.49-1.11-4.1-1.08-2.11.03-4.05 1.23-5.14 3.12-2.19 3.8-.56 9.43 1.57 12.52 1.04 1.5 2.29 3.2 3.92 3.14 1.57-.06 2.17-1.02 4.07-1.02 1.9 0 2.44 1.02 4.1.99 1.69-.03 2.77-1.53 3.8-3.04 1.2-1.74 1.69-3.43 1.72-3.51-.04-.02-3.3-1.27-3.34-5.01zM13.47 3.53C14.33 2.47 14.93.99 14.77 0c-1.24.05-2.75.82-3.64 1.87-.8.93-1.5 2.41-1.31 3.83 1.38.11 2.79-.7 3.65-2.17z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] sm:text-[10px] font-normal -mb-0.5">Download on the</span>
                  <span className="text-sm sm:text-lg">App Store</span>
                </span>
              </a>
              <div className="relative inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-foreground/30 text-surface/60 rounded-xl sm:rounded-2xl font-bold cursor-not-allowed">
                <svg className="w-5 h-5 sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24">
                  <path d="M1.292 2.751A2.106 2.106 0 001 3.813v16.374c0 .394.106.762.292 1.062l.058.063L9.9 12.756v-.138L1.35 4.063l-.058-.062z" fill="#4285F4" />
                  <path d="M13.003 15.86l-3.1-3.1v-.138l3.1-3.1.07.04 3.672 2.086c1.049.596 1.049 1.572 0 2.168L13.073 15.8l-.07.06z" fill="#FBBC04" />
                  <path d="M13.073 15.8L9.9 12.627 1.292 21.25c.346.365.916.41 1.56.045l10.221-5.494z" fill="#EA4335" />
                  <path d="M13.073 9.455L2.852 3.958c-.644-.362-1.214-.32-1.56.048L9.9 12.627l3.173-3.172z" fill="#34A853" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] sm:text-[10px] font-normal -mb-0.5">Get it on</span>
                  <span className="text-sm sm:text-lg">Google Play</span>
                </span>
                <span className="absolute -top-2 -right-1.5 px-1.5 py-0.5 bg-accent text-foreground text-[9px] sm:text-[10px] font-bold rounded-full">
                  Soon
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="relative animate-float w-[240px] sm:w-[280px] lg:w-auto">
              <div className="phone-mockup">
                <Image src="/screenshots/before-you-buy.png" alt="Money2Time - Before You Buy feature" width={320} height={693} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyIBuiltThis() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl translate-x-1/4" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block px-4 py-1.5 bg-primary-soft text-primary text-sm font-bold rounded-full mb-4">
            From the Developer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Why I Built This
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="hidden md:block shrink-0 w-[220px] lg:w-[260px]">
            <div className="book-cover">
              <Image
                src="/book-cover.jpg"
                alt="Your Money or Your Life by Vicki Robin"
                width={520}
                height={520}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex-1 bg-card rounded-[20px] sm:rounded-[28px] border border-border/60 p-6 sm:p-12 space-y-4 sm:space-y-5 text-foreground-soft text-[15px] sm:text-[17px] leading-relaxed">
          <p>
            After reading <em className="text-foreground font-medium">Your Money or Your Life</em>,
            something clicked for me. For most of us earning a wage, money isn&apos;t just money,
            it&apos;s our life energy. Every dollar we spend represents hours of our time, our
            effort, our life traded away.
          </p>
          <p>
            So I built this app. It helps you see your spending in a different way: not just in
            currency, but in hours of your life. Because sometimes <span className="highlight-underline">&ldquo;$20&rdquo;</span> doesn&apos;t
            feel like much, but <span className="highlight-underline">&ldquo;2 hours of my life&rdquo;</span> does. The goal is simple, to help
            you become more aware of where your money (or really, time) is going, so you can take
            back control of it.
          </p>
          <p>
            Everything stays on your device, no logins or cloud syncs. Your data is yours.
            You can also export the data as a simple JSON file if needed. The free version gives
            you everything you need to get started. Pro unlocks some extra features like unlimited
            accounts/categories/hourly rates, etc.
          </p>
          <p className="text-foreground font-medium">
            Hopefully you&apos;ll always have control of your money and your life.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1.5">
            <Image src="/icon.png" alt="Money2Time" width={28} height={28} className="rounded-md" />
            <span className="font-black text-sm tracking-[-0.9px] flex items-baseline">
              <span style={{ color: "#F37D57" }}>Money</span>
              <sub className="text-[9px] font-black ml-[1px]" style={{ color: "#F6B750" }}>2</sub>
              <span className="ml-[-1px]" style={{ color: "#B65F48" }}>Time</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-foreground-muted">
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-foreground-muted text-sm">
            &copy; {new Date().getFullYear()} Money₂Time. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyIBuiltThis />
      </main>
      <Footer />
    </>
  );
}
