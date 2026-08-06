"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import { MdSearch } from "react-icons/md";

const HERO_STATS = [
  { value: "5,000+", label: "Students Guided" },
  { value: "30+", label: "Countries Covered" },
  { value: "200+", label: "Blog Articles" },
  { value: "15+", label: "Years Trusted" },
  { value: "500+", label: "Partner Universities" },
] as const;

export default function BlogHeroSearch({
  query,
  onChangeQuery,
}: {
  query: string;
  onChangeQuery: (next: string) => void;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Stats bar */}
      <div className="border-b border-slate-100 bg-white">
        <ContainerWrapper>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 sm:gap-x-10 sm:py-5 lg:gap-x-14">
            {HERO_STATS.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="text-lg font-extrabold leading-none text-[#00B2B8] sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-[#0B162C] sm:text-xs">{stat.label}</p>
              </li>
            ))}
          </ul>
        </ContainerWrapper>
      </div>

      {/* Hero */}
      <div
        className="relative py-14 text-white sm:py-16 lg:py-20"
        style={{
          background:
            "radial-gradient(circle at 78% 28%, rgba(0,178,184,0.32), transparent 38%), linear-gradient(100deg, #0a1628 0%, #0f2d3d 52%, #007f83 100%)",
        }}
      >
        <ContainerWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00B2B8]/35 bg-[#00B2B8]/12 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#5eead4] sm:px-5 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
              <span className="text-[#6CE0D7]" aria-hidden>
                •
              </span>
              Insights &amp; Guides
            </span>

            <h1 className="mt-5 text-balance text-3xl font-black leading-[1.15] tracking-tight sm:mt-6 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Your Trusted Guide to{" "}
              <span className="text-[#5eead4]">Global Education</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base sm:leading-8">
              Expert articles on Study Abroad, MBBS, Test Prep, Immersion Programs and more — all
              from India&apos;s most trusted education partner.
            </p>

            <label className="mx-auto mt-8 flex max-w-2xl items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] sm:mt-10 sm:pl-6">
              <span className="sr-only">Search blog articles</span>
              <input
                type="search"
                value={query}
                onChange={(event) => onChangeQuery(event.target.value)}
                placeholder="Search articles — IELTS tips, MBBS Russia, Canada PR..."
                className="min-w-0 flex-1 bg-transparent py-3 text-sm font-medium text-[#0B162C] outline-none placeholder:text-slate-400 sm:text-[15px]"
              />
              <button
                type="button"
                aria-label="Search articles"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00B2B8] text-white transition hover:bg-[#00999E] sm:h-12 sm:w-12"
              >
                <MdSearch className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
              </button>
            </label>
          </div>
        </ContainerWrapper>
      </div>ev
    </section>
  );
}
