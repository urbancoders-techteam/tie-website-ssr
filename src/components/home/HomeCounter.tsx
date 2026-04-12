"use client";

import LikeCounter from "@/components/LikeCounter";

const STATS = [
  { end: 5000, label: "Students placed globally" },
  { end: 500, label: "University partners" },
  { end: 30, label: "Countries covered" },
  { end: 15, label: "Years of expertise" },
] as const;

const ITEM_DURATION_MS = 4500;
const STAGGER_MS = 120;

const VALUE_CLASS =
  "min-h-[1.15em] text-3xl font-extrabold tracking-tight tabular-nums antialiased sm:text-4xl md:text-[2.75rem] md:leading-none";

function cellBorderClass(index: number) {
  if (index === 0) return "border-r border-b border-white/15 lg:border-b-0";
  if (index === 1) return "border-b border-white/15 lg:border-b-0 lg:border-r";
  if (index === 2) return "border-r border-white/15";
  return "";
}

export default function HomeCounter() {
  return (
    <section
      className="w-full bg-[#00A99D] text-white"
      aria-label="Taksheela Institute at a glance"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-10 md:py-12 ${cellBorderClass(i)}`}
          >
            <p className={VALUE_CLASS} aria-live="off">
              <LikeCounter
                target={stat.end}
                durationMs={ITEM_DURATION_MS}
                startDelayMs={i * STAGGER_MS}
                easing="linear"
                suffix="+"
                useGrouping
                className="text-inherit"
              />
            </p>
            <p className="mt-2 max-w-[12rem] text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/95 sm:max-w-none sm:text-xs sm:tracking-[0.14em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
