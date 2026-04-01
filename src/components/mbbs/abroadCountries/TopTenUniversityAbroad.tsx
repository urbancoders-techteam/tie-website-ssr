"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type {
  AbroadTopUniversitiesContent,
  AbroadTopUniversitiesFilterId,
  AbroadTopUniversityCard,
  QuickComparisonBlock,
  TopUniHeaderTagVariant,
} from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const UNI_CAROUSEL_AUTOPLAY_MS = 4500;

const TAG_STYLES: Record<TopUniHeaderTagVariant, string> = {
  emerald: "bg-emerald-600 text-white",
  sky: "bg-sky-500 text-white",
  amber: "bg-amber-400 text-[#422006]",
  rose: "bg-rose-50 text-rose-800 border border-rose-200",
};

function matchesFilter(
  card: AbroadTopUniversityCard,
  filter: AbroadTopUniversitiesFilterId,
  topFmgeFilterIds?: readonly string[]
): boolean {
  switch (filter) {
    case "all":
      return true;
    case "moscow":
      return card.region === "moscow";
    case "other":
      return card.region === "other";
    case "budget":
      return card.budgetFriendly;
    case "top_fmge":
      if (topFmgeFilterIds?.length) {
        return topFmgeFilterIds.includes(card.id);
      }
      return card.fmgePercent >= 38;
    default:
      return true;
  }
}

function UniversityCard({ card, watermarkCode }: { card: AbroadTopUniversityCard; watermarkCode: string }) {
  const subline =
    card.subtitle ?? `${card.abbreviation} • Est. ${card.established} • ${card.locationLine}`;

  return (
    <article className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border border-[#E5E9F2] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)] md:rounded-2xl">
      <div className="relative flex min-h-[200px] flex-col overflow-hidden rounded-t-xl bg-gradient-to-br from-[#0c4a6e] via-[#0a3d63] to-[#082f4d] px-4 pb-4 pt-4 text-white md:min-h-[175px] md:rounded-t-2xl lg:min-h-[150px] lg:px-3.5 lg:pb-3 lg:pt-3.5">
        {card.imageSrc ? (
          <Image
            src={card.imageSrc}
            alt=""
            fill
            className="object-cover opacity-[0.18]"
            sizes="(max-width: 768px) 100vw, 28vw"
            aria-hidden
          />
        ) : null}
        {card.headerEmoji ? (
          <div
            className="absolute right-3 top-3 z-20 text-3xl opacity-90 drop-shadow-md md:text-4xl lg:text-3xl"
            aria-hidden
          >
            {card.headerEmoji}
          </div>
        ) : null}
        <div className={card.headerEmoji ? "relative z-10 pr-11 md:pr-12" : "relative z-10"}>
          <div className="flex flex-wrap gap-1.5 md:gap-1.5">
            {card.headerTags.map((t) => (
              <span
                key={t.label}
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold md:text-[10px] ${TAG_STYLES[t.variant]}`}
              >
                {t.label}
              </span>
            ))}
          </div>
          <p className="mt-2 text-[11px] font-semibold text-amber-200/95 md:mt-1.5 md:text-[11px]">{card.rankTag}</p>
          <h3 className="mt-1.5 line-clamp-2 font-serif text-[17px] font-bold leading-snug md:text-[16px] lg:text-[15px]">
            {card.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-sky-100/90 md:text-[11px]">{subline}</p>
        </div>
        <div
          className="pointer-events-none absolute bottom-0.5 right-1.5 select-none font-serif text-[3rem] font-black leading-none text-white/10 md:text-[2.75rem] lg:text-[2.25rem]"
          aria-hidden
        >
          {watermarkCode}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3 md:px-4 md:pb-4 lg:px-3.5 lg:pb-3.5 lg:pt-2.5">
        <div className="grid min-h-0 grid-cols-2 gap-1.5 md:gap-1.5">
          {card.stats.map((cell) => (
            <StatCell key={`${cell.label}-${cell.value}`} label={cell.label} value={cell.value} />
          ))}
        </div>

        <div className="mt-3 flex min-h-0 flex-col justify-center rounded-lg border border-[#E8ECF3] bg-[#FAFBFD] px-2.5 py-2 md:mt-2.5 md:py-2">
          {card.fmge.type === "text" ? (
            <p className="line-clamp-2 text-[12px] leading-relaxed text-[#374151] md:line-clamp-2 lg:text-[11px]">
              {card.fmge.text}
            </p>
          ) : (
            <>
              <p className="line-clamp-2 text-[12px] font-medium leading-snug text-[#00999E] lg:text-[11px]">
                {card.fmge.barLabel}
              </p>
              <div className="mt-1.5 h-2 w-full shrink-0 overflow-hidden rounded-full bg-[#E5E7EB]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#DC2626] to-[#F87171]"
                  style={{ width: `${Math.min(100, Math.max(0, card.fmge.barPercent))}%` }}
                />
              </div>
            </>
          )}
        </div>

        <div className="mt-3 min-h-0 flex-1 text-[12px] leading-relaxed text-[#4B5563] md:mt-2.5">
          <div className="space-y-2">
            {card.description.map((p, i) => (
              <p key={i}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap content-start gap-1.5 md:mt-2.5">
          {card.featureTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-900 ring-1 ring-sky-100 md:text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-[#EEF1F7] pt-3 md:pt-3">
          <Link
            href={card.applyHref}
            className="text-[13px] font-semibold text-[#00999E] transition hover:text-[#007a7d] md:text-[12px]"
          >
            Apply via Taksheela →
          </Link>
          <p className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 md:text-[11px]">
            <span className="text-emerald-600" aria-hidden>
              ✓
            </span>
            {card.availabilityText}
          </p>
        </div>
      </div>
    </article>
  );
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-[3.25rem] flex-col justify-center rounded-md bg-[#F4F6FA] px-2 py-2 md:min-h-[3rem] lg:min-h-[2.85rem] lg:px-1.5 lg:py-1.5">
      <p className="text-[9px] font-semibold uppercase tracking-wide text-[#6B7280] lg:text-[8px]">{label}</p>
      <p className="mt-0.5 line-clamp-2 text-[11px] font-semibold leading-snug text-[#0E4797] md:text-[10px] lg:text-[10px]">
        {value}
      </p>
    </div>
  );
}

function QuickComparisonTable({ block }: { block: QuickComparisonBlock }) {
  return (
    <div className="mt-14 md:mt-16">
      <h3 className="text-center font-serif text-[22px] font-semibold leading-snug text-[#143C83] md:text-[26px]">
        {block.title}
      </h3>
      <div className="mt-6 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <table className="min-w-[760px] w-full border-collapse text-left text-[13px] md:min-w-0 md:text-sm">
            <caption className="sr-only">{block.title}</caption>
            <thead>
              <tr className="bg-[#143C83] text-white">
                <th scope="col" className="whitespace-nowrap px-3 py-3.5 font-semibold md:px-4">
                  University
                </th>
                <th scope="col" className="whitespace-nowrap px-3 py-3.5 font-semibold md:px-4">
                  City
                </th>
                <th scope="col" className="whitespace-nowrap px-3 py-3.5 font-semibold md:px-4">
                  Est.
                </th>
                <th scope="col" className="whitespace-nowrap px-3 py-3.5 font-semibold md:px-4">
                  Annual Fees
                </th>
                <th scope="col" className="whitespace-nowrap px-3 py-3.5 font-semibold md:px-4">
                  FMGE Rate
                </th>
                <th scope="col" className="min-w-[10rem] whitespace-nowrap px-3 py-3.5 font-semibold md:px-4">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={`${row.university}-${i}`}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-3 py-3 font-semibold text-[#143C83] md:px-4"
                  >
                    {row.university}
                  </th>
                  <td className="whitespace-nowrap px-3 py-3 text-[#374151] md:px-4">{row.city}</td>
                  <td className="whitespace-nowrap px-3 py-3 text-[#374151] md:px-4">
                    {row.established}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-[#374151] md:px-4">
                    {row.annualFees}
                  </td>
                  <td className="px-3 py-3 md:px-4">
                    <span
                      className={`inline-flex flex-wrap items-center gap-1 ${row.fmgeHighlight ? "font-semibold text-[#00999E]" : "text-[#374151]"}`}
                    >
                      {row.fmgeRate}
                      {row.fmgeHighlight ? (
                        <FaStar className="inline h-3.5 w-3.5 shrink-0 text-amber-500" aria-hidden />
                      ) : null}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-[#374151] md:px-4">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-3xl text-center text-[11px] leading-relaxed text-[#6B7280] md:text-xs">
        {block.disclaimer}
      </p>
    </div>
  );
}

interface TopTenUniversityAbroadProps {
  content: AbroadTopUniversitiesContent;
}

export default function TopTenUniversityAbroad({ content }: TopTenUniversityAbroadProps) {
  const [activeFilter, setActiveFilter] = useState<AbroadTopUniversitiesFilterId>("all");
  const [pauseAutoplay, setPauseAutoplay] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollSlide = useCallback((direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-uni-slide]");
    const gap = 16; /* matches gap-4 */
    const delta = (slide?.offsetWidth ?? el.clientWidth * 0.92) + gap;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);

    if (direction === "next") {
      if (maxScroll > 0 && el.scrollLeft + delta >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: delta, behavior: "smooth" });
      }
    } else if (el.scrollLeft <= 2) {
      el.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -delta, behavior: "smooth" });
    }
  }, []);

  const visible = useMemo(
    () =>
      content.universities.filter((u) =>
        matchesFilter(u, activeFilter, content.topFmgeFilterIds)
      ),
    [content.universities, content.topFmgeFilterIds, activeFilter]
  );

  useEffect(() => {
    if (visible.length <= 1 || pauseAutoplay) return;
    const id = window.setInterval(() => {
      scrollSlide("next");
    }, UNI_CAROUSEL_AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [visible.length, activeFilter, pauseAutoplay, scrollSlide]);

  return (
    <section className="relative bg-[#F5F7FB] py-10 md:py-10 lg:py-11" id="top-universities">
      {/* Legacy anchor for older links / CTAs pointing to #indiaCriteria */}
      <div id="indiaCriteria" className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden" aria-hidden />
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2 className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.intro}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-5 md:gap-2.5 lg:mt-4">
            {content.filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition md:px-4 md:py-1.5 md:text-[13px] lg:text-xs ${isActive
                      ? "bg-[#00999E] text-white shadow-md"
                      : "border border-[#D1D5DB] bg-white text-[#374151] hover:border-[#00999E]/40"
                    }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-10">
            <div className="md:hidden mb-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollSlide("prev")}
                className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Previous university"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlide("next")}
                className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Next university"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={scrollRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Universities"
              onMouseEnter={() => setPauseAutoplay(true)}
              onMouseLeave={() => setPauseAutoplay(false)}
              className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:items-stretch md:gap-4 md:overflow-visible md:pb-0 md:snap-none lg:grid-cols-3 lg:gap-4 [&::-webkit-scrollbar]:hidden"
            >
              {visible.map((card) => (
                <div
                  key={card.id}
                  data-uni-slide
                  className="flex w-[min(100%,calc(100vw-2.5rem))] max-w-[420px] shrink-0 snap-center md:max-w-none md:min-h-0 md:w-auto md:snap-none"
                >
                  <UniversityCard card={card} watermarkCode={content.cardWatermarkCode} />
                </div>
              ))}
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="mt-8 text-center text-[#6B7280]">No universities match this filter.</p>
          ) : null}

          {content.quickComparison ? <QuickComparisonTable block={content.quickComparison} /> : null}
        </div>
      </ContainerWrapper>
    </section>
  );
}
