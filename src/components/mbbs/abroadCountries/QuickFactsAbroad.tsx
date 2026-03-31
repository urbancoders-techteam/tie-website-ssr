"use client";

import { useEffect, useMemo, useState } from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";

type QuickFactItem = {
  icon: string;
  label: string;
  value: string;
  /** Short label + value for mobile 2×2 so full card stays visible */
  mLabel?: string;
  mValue?: string;
};

interface QuickFactsAbroadProps {
  country: AbroadCountry;
}

const DEFAULT_QUICK_FACTS: QuickFactItem[] = [
  {
    icon: "🎓",
    label: "Degree Awarded",
    value: "Equivalent MBBS/MD medical degree",
    mLabel: "Degree",
    mValue: "MBBS/MD equivalent",
  },
  {
    icon: "⏱️",
    label: "Course Duration",
    value: "5-6 years (including internship)",
    mLabel: "Duration",
    mValue: "5–6 yrs + internship",
  },
  {
    icon: "📅",
    label: "Intakes",
    value: "Primary and secondary intakes by university",
    mLabel: "Intakes",
    mValue: "Primary & secondary",
  },
  {
    icon: "📋",
    label: "Eligibility",
    value: "10+2 PCB + NEET (as applicable)",
    mLabel: "Eligibility",
    mValue: "10+2 PCB + NEET",
  },
  {
    icon: "🌐",
    label: "Medium of Instruction",
    value: "English medium available",
    mLabel: "Medium",
    mValue: "English medium",
  },
  {
    icon: "💰",
    label: "Annual Tuition (Range)",
    value: "Varies by university and country",
    mLabel: "Tuition / yr",
    mValue: "Varies by uni",
  },
  {
    icon: "🏠",
    label: "Annual Living Cost",
    value: "Affordable student living options",
    mLabel: "Living / yr",
    mValue: "Affordable",
  },
  {
    icon: "✅",
    label: "Recognised By",
    value: "WHO · NMC · ECFMG · FAIMER",
    mLabel: "Recognised",
    mValue: "WHO · NMC · ECFMG…",
  },
  {
    icon: "📊",
    label: "FMGE/NExT Readiness",
    value: "NMC-aligned curriculum pathways",
    mLabel: "FMGE/NExT",
    mValue: "NMC-aligned",
  },
  {
    icon: "👩‍🎓",
    label: "International Students",
    value: "Strong IN · NP · BD presence",
    mLabel: "Students",
    mValue: "IN · NP · BD",
  },
];

const COUNTRY_QUICK_FACTS: Record<string, QuickFactItem[]> = {
  russia: [
    {
      icon: "🎓",
      label: "Degree Awarded",
      value: "MD Physician (equivalent to MBBS)",
      mLabel: "Degree",
      mValue: "MD (MBBS equiv.)",
    },
    {
      icon: "⏱️",
      label: "Course Duration",
      value: "6 Years (5 academic + 1 internship)",
      mLabel: "Duration",
      mValue: "6 yrs (5+1 intern)",
    },
    {
      icon: "🗓️",
      label: "Intakes",
      value: "September (primary) · February (secondary)",
      mLabel: "Intakes",
      mValue: "Sep · Feb",
    },
    {
      icon: "🧾",
      label: "Eligibility",
      value: "50% PCB in 10+2 + NEET qualified",
      mLabel: "Eligibility",
      mValue: "50% PCB + NEET",
    },
    {
      icon: "🌐",
      label: "Medium of Instruction",
      value: "English + Russian (clinical year subject)",
      mLabel: "Medium",
      mValue: "English + Russian",
    },
    {
      icon: "💰",
      label: "Annual Tuition (Range)",
      value: "Rs. 2.7L - Rs. 8L / year",
      mLabel: "Tuition / yr",
      mValue: "₹2.7L–₹8L",
    },
    {
      icon: "🏠",
      label: "Annual Living Cost",
      value: "Rs. 1.2 - Rs. 2.4 Lakhs / year",
      mLabel: "Living / yr",
      mValue: "₹1.2L–₹2.4L",
    },
    {
      icon: "✅",
      label: "Recognised By",
      value: "WHO · NMC · ECFMG · FAIMER · WFME",
      mLabel: "Recognised",
      mValue: "WHO · NMC · WFME…",
    },
    {
      icon: "📊",
      label: "FMGE Pass Rate 2024",
      value: "~29.5% overall · Up to 45.45% top unis",
      mLabel: "FMGE 2024",
      mValue: "~29.5% · top ~45%",
    },
    {
      icon: "👩‍🎓",
      label: "Indian Students",
      value: "27,000+ (MEA, Dec 2025)",
      mLabel: "Indians",
      mValue: "27,000+",
    },
    {
      icon: "🏛️",
      label: "NMC-Compliant Universities",
      value: "50+ government medical universities",
      mLabel: "NMC unis",
      mValue: "50+ govt. colleges",
    },
    {
      icon: "📝",
      label: "IELTS / TOEFL",
      value: "Not required for admission",
      mLabel: "IELTS/TOEFL",
      mValue: "Not required",
    },
  ],
};

function getSlugFromPath(path: string) {
  return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
}

function getQuickFactsByCountry(country: AbroadCountry) {
  const slug = getSlugFromPath(country.path);
  return COUNTRY_QUICK_FACTS[slug] ?? DEFAULT_QUICK_FACTS;
}

const MOBILE_CARDS_PER_PAGE = 4;
const MOBILE_AUTOPLAY_MS = 5000;

function chunkFacts<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

const quickFactCardClass =
  "group relative bg-white border-t-4 border-[#B43A4D] rounded-2xl px-5 py-5 shadow-[0_2px_12px_rgba(15,40,95,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(15,40,95,0.14)] hover:border-[#9F2C42]";

function QuickFactCard({
  fact,
  className = "",
  compact,
}: {
  fact: QuickFactItem;
  className?: string;
  /** Smaller type for 2×2 mobile grid */
  compact?: boolean;
}) {
  const labelText = compact && fact.mLabel ? fact.mLabel : fact.label;
  const valueText = compact && fact.mValue ? fact.mValue : fact.value;

  return (
    <article
      className={`${quickFactCardClass} ${compact ? "min-h-0 overflow-hidden" : ""} ${className}`.trim()}
    >
      <p
        className={`shrink-0 leading-none transition-transform duration-300 ease-out group-hover:scale-110 ${
          compact ? "text-[15px]" : "text-2xl"
        }`}
      >
        {fact.icon}
      </p>
      <p
        className={`uppercase text-[#697389] font-semibold ${
          compact
            ? "mt-1 line-clamp-2 min-h-0 text-[9px] leading-tight tracking-[0.06em]"
            : "mt-4 min-h-[30px] text-[11px] tracking-[0.12em]"
        }`}
      >
        {labelText}
      </p>
      <p
        title={compact ? fact.value : undefined}
        className={`min-h-0 break-words font-semibold text-[#143C83] ${
          compact
            ? "mt-1 line-clamp-3 text-[11px] leading-[1.35] sm:text-[12px]"
            : "mt-2 text-[20px] leading-[1.45]"
        }`}
      >
        {valueText}
      </p>
    </article>
  );
}

function QuickFactsMobileAutoplayGrid({ facts }: { facts: QuickFactItem[] }) {
  const pages = useMemo(() => chunkFacts(facts, MOBILE_CARDS_PER_PAGE), [facts]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page >= pages.length) setPage(0);
  }, [page, pages.length]);

  useEffect(() => {
    if (pages.length <= 1) return;
    const tick = () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
      setPage((p) => (p + 1) % pages.length);
    };
    const id = setInterval(tick, MOBILE_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [pages.length]);

  if (pages.length === 0) return null;

  return (
    <div
      className="mt-9 md:hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Quick facts"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none will-change-transform"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((pageFacts, pageIndex) => (
            <div
              key={pageIndex}
              className="min-w-full shrink-0 grid grid-cols-2 gap-2 [grid-auto-rows:minmax(0,1fr)]"
              aria-hidden={pageIndex !== page}
            >
              {pageFacts.map((fact) => (
                <QuickFactCard
                  key={`${pageIndex}-${fact.label}`}
                  fact={fact}
                  compact
                  className="flex h-full min-h-0 flex-col !rounded-lg !border-t-2 !px-2 !py-2 !shadow-[0_1px_6px_rgba(15,40,95,0.06)] sm:!px-2.5 sm:!py-2.5"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {pages.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Quick facts pages">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1} of ${pages.length}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === page ? "w-7 bg-[#B43A4D]" : "w-2 bg-[#C5CCD8] hover:bg-[#9CA3AF]"
              }`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      ) : null}
      <p className="sr-only" aria-live="polite">
        Showing page {page + 1} of {pages.length}
      </p>
    </div>
  );
}

export default function QuickFactsAbroad({ country }: QuickFactsAbroadProps) {
  const quickFacts = getQuickFactsByCountry(country);

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="quick-facts-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>At A Glance</p>
            <h2 className={`${ABROAD_SECTION_TITLE} max-md:text-[22px] max-md:leading-snug`}>
              MBBS in {country.title} —{" "}
              <span className={ABROAD_SECTION_ACCENT}>Quick Facts</span>
            </h2>
            <p className={`${ABROAD_SECTION_SUBTITLE} max-md:text-sm max-md:leading-snug`}>
              Key data every student from India, Nepal and Bangladesh needs before applying for MBBS in{" "}
              {country.title} 2026-27.
            </p>
          </div>

          {/* Mobile: 2×2 grid per view, autoplay pages */}
          <QuickFactsMobileAutoplayGrid facts={quickFacts} />

          {/* Tablet & desktop: grid */}
          <div className="mt-9 hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {quickFacts.map((fact) => (
              <QuickFactCard key={fact.label} fact={fact} />
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
