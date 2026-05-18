"use client";

import LikeCounter from "@/components/LikeCounter";
import Marquee from "react-fast-marquee";
import {
  studyAbroadImpactCountryLinks,
  studyAbroadImpactStats,
} from "@/constants/study_abroad/study-abroad";

const MARQUEE_CLASS =
  "overflow-hidden py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_.rfm-marquee]:overflow-hidden [&_.rfm-marquee-container]:overflow-hidden [&_.rfm-marquee-container]:[-ms-overflow-style:none] [&_.rfm-marquee-container]:[scrollbar-width:none] [&_.rfm-marquee-container::-webkit-scrollbar]:hidden";

function parseCountryLabel(item: string) {
  const space = item.indexOf(" ");
  if (space === -1) return { code: item, name: item };
  return { code: item.slice(0, space), name: item.slice(space + 1) };
}

function ImpactBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(15,179,169,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(7,27,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 50% 35% at 0% 80%, rgba(15,179,169,0.08) 0%, transparent 45%), linear-gradient(180deg, #f0fdfa 0%, #eefaf8 45%, #e8f7f4 100%)",
        }}
      />
      <div className="absolute -left-24 top-[20%] h-72 w-72 rounded-full bg-[#0fb3a9]/10 blur-3xl" />
      <div className="absolute -right-16 bottom-[10%] h-64 w-64 rounded-full bg-[#071b3a]/5 blur-3xl" />
      <svg
        className="absolute left-[4%] top-[28%] h-48 w-48 text-[#0fb3a9]/[0.06] lg:h-56 lg:w-56"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
      >
        <ellipse cx="100" cy="100" rx="88" ry="52" />
        <path d="M30 95c25-18 55-22 70-8s45 8 70-12" />
        <path d="M45 115c30 12 60 8 90 4s40-4 65 14" />
      </svg>
      <svg
        className="absolute bottom-[18%] right-[5%] hidden h-40 w-40 text-[#071b3a]/[0.04] sm:block"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M60 8L8 42v70h104V42L60 8z" />
        <path d="M48 112V72h24v40" />
      </svg>
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #0fb3a9 0.75px, transparent 0.75px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

export default function OurImpact() {
  return (
    <section className="relative overflow-hidden">
      <ImpactBackground />

      <div className="relative z-[1] overflow-hidden border-y border-[#0d9488]/25 bg-gradient-to-r from-[#0a7f7a] via-[#0fb3a9] to-[#0a7f7a] text-white shadow-[0_8px_32px_rgba(15,179,169,0.25)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.12)_48%,transparent_100%)]"
        />
        <Marquee speed={55} gradient={false} autoFill className={MARQUEE_CLASS}>
          {studyAbroadImpactCountryLinks.map((item) => {
            const { code, name } = parseCountryLabel(item);
            return (
              <span
                key={item}
                className="mx-6 inline-flex items-center gap-2.5 whitespace-nowrap sm:mx-8"
              >
                <span className="inline-flex h-6 min-w-[2rem] items-center justify-center rounded-md bg-white/15 px-1.5 text-[10px] font-black tracking-wider ring-1 ring-white/20">
                  {code}
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-white/95">
                  {name}
                </span>
                <span className="text-[#a7f3f0] opacity-80" aria-hidden>
                  ✦
                </span>
              </span>
            );
          })}
        </Marquee>
      </div>

      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#0fb3a9]/25 bg-white/70 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#078a86] shadow-[0_4px_20px_rgba(15,179,169,0.12)] backdrop-blur-sm sm:text-[11px]">
          <span className="text-[#0fb3a9]" aria-hidden>
            ✦
          </span>
          Our Impact
        </p>

        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#071b3a] sm:mt-7 sm:text-4xl lg:text-[44px]">
          A Decade of Turning{" "}
          <span className="bg-gradient-to-r from-[#0fb3a9] to-[#0d9488] bg-clip-text text-transparent">
            Global Dreams
          </span>{" "}
          Into Reality
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#506070] sm:text-base">
          Indian students continue to choose UK, Germany, Ireland, Australia, Canada and Europe for
          globally recognised degrees, strong career outcomes and life-changing experiences.
        </p>

        <div className="relative mx-auto mt-10 max-w-5xl lg:mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[52%] hidden h-px bg-gradient-to-r from-transparent via-[#0fb3a9]/25 to-transparent lg:block"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {studyAbroadImpactStats.map((stat, index) => {
              const isLightCard = index >= 2;

              return (
                <article
                  key={stat.label}
                  className={`group relative flex min-h-[158px] flex-col items-center justify-center overflow-hidden rounded-[24px] px-5 py-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_64px_rgba(7,27,58,0.18)] sm:min-h-[172px] ${stat.cardClassName}`}
                >
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                    aria-hidden
                  />

                  <span
                    className={`absolute right-4 top-4 text-[10px] font-black tabular-nums ${isLightCard ? "text-[#0fb3a9]/25" : "text-white/25"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] backdrop-blur-sm transition duration-300 group-hover:scale-110 sm:text-3xl ${
                      isLightCard
                        ? "bg-[#0fb3a9]/12 ring-1 ring-[#0fb3a9]/25"
                        : "bg-white/15 ring-1 ring-white/20"
                    }`}
                  >
                    {stat.icon}
                  </span>

                  <div
                    className={`relative mt-4 text-4xl font-black leading-none tracking-[-0.04em] tabular-nums sm:text-[42px] ${stat.valueClassName}`}
                  >
                    <LikeCounter
                      target={stat.value}
                      durationMs={1600}
                      startDelayMs={index * 120}
                      suffix={stat.suffix}
                      useGrouping
                    />
                  </div>

                  <p className="relative mt-3 max-w-[11rem] text-xs font-bold leading-snug opacity-90">
                    {stat.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-10 inline-flex max-w-xl items-center justify-center gap-2 rounded-full border border-[#0fb3a9]/20 bg-white/60 px-5 py-2.5 text-xs font-semibold text-[#506070] shadow-sm backdrop-blur-sm sm:text-sm">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-[#0fb3a9] shadow-[0_0_8px_rgba(15,179,169,0.8)]"
            aria-hidden
          />
          Trusted by thousands of Indian students every admission cycle
        </p>
      </div>
    </section>
  );
}
