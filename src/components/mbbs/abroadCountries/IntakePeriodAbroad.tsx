"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/** Intake payload for `/mbbs/abroad/[slug]` — same object as `abroadCopy.intake` from `getAbroadFullPageCopy`. */
type IntakeSectionContent = AbroadFullPageCopy["intake"];
type IntakeCardModel = IntakeSectionContent["primaryCard"];

interface IntakePeriodAbroadProps {
  content: IntakeSectionContent;
}

const NAV_BTN_CLASS =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]";

const SCROLLER_CLASS =
  "flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const SLIDE_WRAP =
  "flex w-[min(100%,calc(100vw-2.5rem))] max-w-[min(520px,calc(100vw-2rem))] shrink-0 snap-center";

function CarouselNavButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  const Icon = direction === "prev" ? FaChevronLeft : FaChevronRight;
  return (
    <button type="button" onClick={onClick} className={NAV_BTN_CLASS} aria-label={label}>
      <Icon className="h-4 w-4" />
    </button>
  );
}

const IntakeCard = memo(function IntakeCard({
  variant,
  card,
  className = "",
}: {
  variant: "primary" | "secondary";
  card: IntakeCardModel;
  className?: string;
}) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`relative flex h-full min-h-0 flex-col rounded-2xl p-5 md:p-6 ${className} ${
        isPrimary
          ? "bg-gradient-to-br from-[#0D3B8E] to-[#0a2f6e] text-white shadow-[0_12px_40px_rgba(13,59,142,0.2)]"
          : "border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm"
      }`}
    >
      {isPrimary ? (
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-amber-200/90 to-amber-400/40"
          aria-hidden
        />
      ) : null}

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

      <ul
        className={`mt-5 flex-1 border-t pt-3 ${
          isPrimary ? "divide-y divide-white/15 border-white/10" : "divide-y divide-[#E5E9F2] border-[#E5E9F2]"
        }`}
      >
        {card.rows.map((row) => (
          <li
            key={row.label}
            className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 py-3 text-[12px] leading-snug first:pt-0 md:text-[13px]"
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
          isPrimary ? "border-white/15 text-sky-100/90" : "border-[#E5E9F2] text-[#5B6475]"
        }`}
      >
        {card.footerNote}
      </p>
    </div>
  );
});

const INTAKE_SLIDES = [
  { key: "primary" as const, variant: "primary" as const, cardKey: "primaryCard" as const },
  { key: "secondary" as const, variant: "secondary" as const, cardKey: "secondaryCard" as const },
];

export default function IntakePeriodAbroad({ content }: IntakePeriodAbroadProps) {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [content.primaryCard.title, content.secondaryCard.title]);

  useLayoutEffect(() => {
    slideRefs.current[slideIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [slideIndex]);

  const goSlide = useCallback((direction: "prev" | "next") => {
    setSlideIndex((i) => {
      if (direction === "next") return (i + 1) % INTAKE_SLIDES.length;
      return (i - 1 + INTAKE_SLIDES.length) % INTAKE_SLIDES.length;
    });
  }, []);

  const setSlideEl = useCallback((index: number) => (node: HTMLDivElement | null) => {
    slideRefs.current[index] = node;
  }, []);

  return (
    <section className="bg-[#F1F5F9] py-12 md:py-14" aria-labelledby="intake-period-heading">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{content.eyebrow}</p>
            <h2 id="intake-period-heading" className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
          </div>

          <div className="relative mt-10 md:hidden">
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="flex gap-1.5 pl-1" aria-label="Choose intake slide">
                {INTAKE_SLIDES.map((slide, i) => (
                  <button
                    key={slide.key}
                    type="button"
                    onClick={() => setSlideIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      slideIndex === i ? "w-6 bg-[#0D3B8E]" : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                    }`}
                    aria-label={`Show intake ${i + 1} of ${INTAKE_SLIDES.length}`}
                    aria-current={slideIndex === i ? "true" : undefined}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <CarouselNavButton direction="prev" onClick={() => goSlide("prev")} label="Previous intake" />
                <CarouselNavButton direction="next" onClick={() => goSlide("next")} label="Next intake" />
              </div>
            </div>
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Intake periods"
              className={SCROLLER_CLASS}
            >
              {INTAKE_SLIDES.map((slide, i) => (
                <div key={slide.key} ref={setSlideEl(i)} className={SLIDE_WRAP}>
                  <IntakeCard
                    variant={slide.variant}
                    card={content[slide.cardKey]}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-[#8B93A4]">Swipe or use arrows to compare intakes</p>
          </div>

          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-2 md:items-stretch">
            <IntakeCard variant="primary" card={content.primaryCard} className="h-full" />
            <IntakeCard variant="secondary" card={content.secondaryCard} className="h-full" />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
