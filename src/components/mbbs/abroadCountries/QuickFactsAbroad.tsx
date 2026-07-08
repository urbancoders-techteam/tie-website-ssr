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
import {
  abroadDefaultQuickFactsContent,
  type AbroadQuickFactItem,
  type AbroadQuickFactsSectionContent,
} from "@/constants/abroad/russiaAbroadConstent";

export type { AbroadQuickFactItem };

interface QuickFactsAbroadProps {
  country: AbroadCountry;
  /** Per-country cards from `*AbroadConstent` (e.g. `russiaAbroadQuickFactsContent`). */
  facts?: AbroadQuickFactItem[];
  /** Per-country section copy from `*AbroadConstent` (e.g. `russiaAbroadQuickFactsSectionContent`). */
  section?: AbroadQuickFactsSectionContent;
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
  fact: AbroadQuickFactItem;
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

function QuickFactsMobileAutoplayGrid({ facts }: { facts: AbroadQuickFactItem[] }) {
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

export default function QuickFactsAbroad({ country, facts, section }: QuickFactsAbroadProps) {
  const quickFacts = facts ?? abroadDefaultQuickFactsContent;
  const eyebrow = section?.eyebrow ?? "At A Glance";
  const titleLead = section?.titleLead ?? `MBBS in ${country.title} for Indian Students —`;
  const titleAccent = section?.titleAccent ?? "Quick Facts";
  const subtitle =
    section?.subtitle ??
    `Key data every student from India, Nepal and Bangladesh needs before applying for MBBS in ${country.title} 2026-27.`;

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="quick-facts-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{eyebrow}</p>
            <h2 className={`${ABROAD_SECTION_TITLE} max-md:text-[22px] max-md:leading-snug`}>
              {titleLead} <span className={ABROAD_SECTION_ACCENT}>{titleAccent}</span>
            </h2>
            <p className={`${ABROAD_SECTION_SUBTITLE} max-md:text-sm max-md:leading-snug`}>
              {subtitle}
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
