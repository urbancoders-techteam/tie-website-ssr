import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";
import { medicalEducationAbroad } from "@/constants/home";
import HomeSectionHeader from "./HomeSectionHeader";

/** Slightly lighter navy than pure #0a192f — easier on the eyes */
const NAVY = "#152a42";
const TEAL = "#00c2a8";

const BADGE_STYLES: Record<
  string,
  { className: string }
> = {
  teal: {
    className:
      "border border-[#00c2a8]/40 bg-[#00c2a8]/15 text-[#5eead4]",
  },
  green: {
    className:
      "border border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
  },
  blue: {
    className: "border border-sky-500/40 bg-sky-500/15 text-sky-300",
  },
  cyan: {
    className:
      "border border-[#00a88f]/40 bg-[#00a88f]/15 text-[#5eead4]",
  },
};

export default function MedicalEducation() {
  const data = medicalEducationAbroad;

  return (
    <section
      className="relative overflow-hidden py-12 md:py-16 lg:py-20 xl:py-[5.5rem]"
      style={{ backgroundColor: NAVY }}
    >
      <p
        className="pointer-events-none absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 select-none font-bold uppercase leading-none tracking-tight text-white/[0.045] sm:translate-x-0 sm:translate-y-0"
        style={{ fontSize: "clamp(4rem, 18vw, 14rem)" }}
        aria-hidden
      >
        {data.watermark}
      </p>

      <ContainerWrapper className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left side: section heading, country highlights, and CTA buttons */}
          <div className="min-w-0">
            <HomeSectionHeader
              headerClassName="text-center lg:text-left"
              eyebrow={data.eyebrow}
              title={data.title}
              subtitle={data.description}
              eyebrowClassName="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:text-xs lg:text-left"
              eyebrowStyle={{ color: TEAL }}
              markerClassName="opacity-70"
              titleClassName="mt-3 text-balance text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[1.85rem] lg:text-left lg:text-[1.9rem] xl:text-[2.1rem]"
              subtitleClassName="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem] lg:mx-0 lg:max-w-none lg:text-left lg:text-base"
            />

            {/* Left side content group: country cards (horizontal on mobile, stacked on desktop) */}
            <div
              className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-visible pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] [scroll-padding-inline:0.25rem] lg:mt-10 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20"
            >
              {data.countries.map((c) => {
                const badge = BADGE_STYLES[c.badgeTone] ?? BADGE_STYLES.teal;
                return (
                  <div
                    key={c.id}
                    className="w-[calc(100%-0.25rem)] shrink-0 snap-start sm:min-w-[360px] sm:w-auto lg:min-w-0"
                  >
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3.5 backdrop-blur-sm sm:items-stretch sm:gap-4 sm:px-4 sm:py-4">
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/20 sm:h-12 sm:w-12">
                        <Image
                          src={c.flag}
                          alt={`${c.name} flag`}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-white">{c.name}</p>
                        <p className="mt-1 text-[0.75rem] leading-snug text-slate-400 sm:text-[0.8125rem]">
                          {c.detail}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 self-start rounded-md px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wide sm:self-center sm:px-2.5 sm:text-[0.7rem] ${badge.className}`}
                      >
                        {c.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start lg:mt-10">
              <Link
                href={data.primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-center text-sm font-bold text-[#0f172a] shadow-lg transition hover:brightness-105 sm:text-base"
                style={{ backgroundColor: TEAL }}
              >
                {data.primaryCta.label}
              </Link>
              <Link
                href={data.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-transparent px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
              >
                {data.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right side: hero image with floating information card overlay */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-900/50 shadow-2xl ring-1 ring-white/10 sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={data.heroImage}
                alt="Medical education — anatomy and clinical learning"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#152a42]/45 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
