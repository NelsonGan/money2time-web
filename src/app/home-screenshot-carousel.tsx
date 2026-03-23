"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";

const SCREENSHOTS = [
  {
    src: "/screenshots/01-before-you-buy.png",
    alt: "Money2Time screenshot showing the Before You Buy feature",
    label: "Before You Buy",
  },
  {
    src: "/screenshots/02-accounts.png",
    alt: "Money2Time screenshot showing account balances and totals",
    label: "Accounts",
  },
  {
    src: "/screenshots/03-savings-rate.png",
    alt: "Money2Time screenshot showing savings rate insights",
    label: "Savings Rate",
  },
  {
    src: "/screenshots/04-calendar.png",
    alt: "Money2Time screenshot showing the spending calendar",
    label: "Calendar",
  },
  {
    src: "/screenshots/05-expense-breakdown.png",
    alt: "Money2Time screenshot showing an expense breakdown",
    label: "Breakdown",
  },
  {
    src: "/screenshots/06-time-cost.png",
    alt: "Money2Time screenshot showing time cost conversion",
    label: "Time Cost",
  },
  {
    src: "/screenshots/07-add-expense.png",
    alt: "Money2Time screenshot showing the add expense flow",
    label: "Add Expense",
  },
  {
    src: "/screenshots/08-true-hourly-rate.png",
    alt: "Money2Time screenshot showing the true hourly rate calculator",
    label: "True Hourly Rate",
  },
  {
    src: "/screenshots/09-recurrings.png",
    alt: "Money2Time screenshot showing recurring expenses",
    label: "Recurrings",
  },
] as const;

export default function HomeScreenshotCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationVersion, setRotationVersion] = useState(0);
  const gestureStartXRef = useRef<number | null>(null);
  const swipeThreshold = 30;

  const advanceSlide = useEffectEvent(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % SCREENSHOTS.length);
  });

  const moveToSlide = (nextIndex: number) => {
    setActiveIndex(nextIndex);
    setRotationVersion((currentVersion) => currentVersion + 1);
  };

  const showPreviousSlide = () => {
    moveToSlide((activeIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  const showNextSlide = () => {
    moveToSlide((activeIndex + 1) % SCREENSHOTS.length);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [rotationVersion]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    gestureStartXRef.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (gestureStartXRef.current === null) {
      return;
    }

    const deltaX = event.clientX - gestureStartXRef.current;
    gestureStartXRef.current = null;

    if (Math.abs(deltaX) >= swipeThreshold) {
      if (deltaX < 0) {
        showNextSlide();
        return;
      }

      showPreviousSlide();
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const tappedLeftSide = event.clientX - bounds.left < bounds.width / 2;

    if (tappedLeftSide) {
      showPreviousSlide();
      return;
    }

    showNextSlide();
  };

  const handlePointerCancel = () => {
    gestureStartXRef.current = null;
  };

  return (
    <div className="flex w-full max-w-[320px] flex-col items-center gap-4">
      <div
        className="phone-mockup cursor-pointer select-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={handlePointerCancel}
        style={{ touchAction: "pan-y" }}
        role="group"
        aria-label="App screenshots carousel"
      >
        <div className="phone-screen overflow-hidden rounded-[32px] bg-surface">
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {SCREENSHOTS.map((screenshot, index) => (
              <div key={screenshot.src} className="relative h-full min-w-full">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  preload={index === 0}
                  loading="eager"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                  className="pointer-events-none block object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-full border border-border/80 bg-card/90 px-4 py-2 shadow-[0_10px_30px_rgba(26,46,42,0.08)] backdrop-blur-sm">
        <span className="text-xs font-bold uppercase tracking-[0.24em] text-foreground-muted">
          {String(activeIndex + 1).padStart(2, "0")} / {String(SCREENSHOTS.length).padStart(2, "0")}
        </span>
        <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
        <span className="text-sm font-semibold text-foreground">
          {SCREENSHOTS[activeIndex].label}
        </span>
      </div>

      <div className="flex items-center gap-2" aria-label="Screenshot navigation">
        {SCREENSHOTS.map((screenshot, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => moveToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive ? "w-8 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Show ${screenshot.label} screenshot`}
              aria-pressed={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}
