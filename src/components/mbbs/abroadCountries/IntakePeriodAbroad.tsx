"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadIntakeCardContent, AbroadIntakePeriodContent } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { useCallback, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface IntakePeriodAbroadProps {
  content: AbroadIntakePeriodContent;
}

function IntakeCard({
  variant,
  card,
  className = "",
}: {
  variant: "primary" | "secondary";
  card: AbroadIntakeCardContent;
  className?: string;
}) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`flex h-full min-h-0 flex-col rounded-2xl p-5 md:p-6 ${className} ${
        isPrimary
          ? "bg-gradient-to-br from-[#0D3B8E] to-[#0a2f6e] text-white shadow-[0_12px_40px_rgba(13,59,142,0.2)]"
          : "border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-2xl leading-none" aria-hidden>
          {card.icon}
        </span>
        <h3
          className={`font-serif text-[17px] font-semibold leading-snug md:text-[18px] ${
            isPrimary ? "text-amber-200" : "text-[#143C83]"
          }`}
        >
          {card.title}
        </h3>
      </div>

      <ul className="mt-5 flex-1 divide-y divide-white/15 border-t border-white/10 pt-1 [&:not(:has(+_))]:border-0">
        {card.rows.map((row) => (
          <li
            key={row.label}
            className={`flex flex-wrap items-start justify-between gap-x-3 gap-y-1 py-3 text-[12px] leading-snug md:text-[13px] ${
              isPrimary ? "" : "divide-gray-200 border-gray-200 first:border-t-0"
            }`}
          >
            <span className={isPrimary ? "text-sky-100/95" : "text-[#5B6475]"}>{row.label}</span>
            <span
              className={`max-w-[55%] text-right font-semibold tabular-nums ${
                isPrimary ? "text-white" : "text-[#0E4797]"
              }`}
            >
              {row.value}
            </span>
          </li>
        ))}
      </ul>

      <p
        className={`mt-4 border-t pt-4 text-[12px] leading-relaxed md:text-[13px] ${
          isPrimary
            ? "border-white/15 text-sky-100/90"
            : "border-[#E5E9F2] text-[#5B6475]"
        }`}
      >
        {card.footerNote}
      </p>
    </div>
  );
}

export default function IntakePeriodAbroad({ content }: IntakePeriodAbroadProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollSlide = useCallback((direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-intake-slide]");
    const gap = 16;
    const delta = (slide?.offsetWidth ?? el.clientWidth * 0.92) + gap;
    el.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      className="bg-[#F1F5F9] py-12 md:py-14"
      aria-labelledby="intake-period-heading"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="intake-period-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
          </div>

          {/* Mobile: slider */}
          <div className="relative mt-10 md:hidden">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F1F5F9] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F1F5F9] to-transparent"
              aria-hidden
            />
            <div className="mb-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollSlide("prev")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Previous intake"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlide("next")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Next intake"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div
              ref={scrollRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Intake periods"
              className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                data-intake-slide
                className="flex w-[min(100%,calc(100vw-2.5rem))] max-w-[min(520px,calc(100vw-2rem))] shrink-0 snap-center"
              >
                <IntakeCard variant="primary" card={content.primaryCard} className="w-full" />
              </div>
              <div
                data-intake-slide
                className="flex w-[min(100%,calc(100vw-2.5rem))] max-w-[min(520px,calc(100vw-2rem))] shrink-0 snap-center"
              >
                <IntakeCard variant="secondary" card={content.secondaryCard} className="w-full" />
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-[#8B93A4]">Swipe or use arrows to compare intakes</p>
          </div>

          {/* Tablet & desktop: two equal columns */}
          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 md:items-stretch">
            <IntakeCard variant="primary" card={content.primaryCard} className="h-full" />
            <IntakeCard variant="secondary" card={content.secondaryCard} className="h-full" />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
