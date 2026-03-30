"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type {
  AbroadTeachingMethodologyContent,
  AbroadTeachingMethodologyItem,
} from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { useCallback, useMemo, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DEFAULT_SECTION_ID = "teaching-methodology";
const DEFAULT_HEADING_ID = "teaching-methodology-heading";

interface TeachingMethodologyAbroadProps {
  content: AbroadTeachingMethodologyContent;
  /** Section root `id` for anchors; must be unique when this block appears more than once on a page. */
  sectionId?: string;
  /** Heading `id` for `aria-labelledby`; must be unique when this block appears more than once on a page. */
  headingId?: string;
  /** Accessible name for the mobile carousel region. */
  carouselAriaLabel?: string;
}

function splitIntoTwoRows<T>(items: T[]): [T[], T[]] {
  const firstCount = Math.min(5, items.length);
  return [items.slice(0, firstCount), items.slice(firstCount)];
}

function splitIntoThreeRows<T>(items: T[]): [T[], T[], T[]] {
  const n = items.length;
  const r1 = Math.ceil(n / 3);
  const r2 = Math.ceil((n - r1) / 2);
  return [
    items.slice(0, r1),
    items.slice(r1, r1 + r2),
    items.slice(r1 + r2),
  ];
}

/** Grid classes for a single row by number of cards (tablet & desktop). */
function rowGridClass(rowLength: number): string {
  if (rowLength === 0) return "";
  if (rowLength === 5) {
    return "grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-5";
  }
  if (rowLength === 4) {
    return "grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 w-full max-w-6xl mx-auto";
  }
  if (rowLength === 3) {
    return "grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5 w-full max-w-5xl mx-auto";
  }
  if (rowLength === 2) {
    return "grid grid-cols-2 gap-4 md:gap-5 w-full max-w-2xl mx-auto";
  }
  if (rowLength === 1) {
    return "grid grid-cols-1 w-full max-w-sm mx-auto";
  }
  return "grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-5";
}

function DesktopRows({ items }: { items: AbroadTeachingMethodologyItem[] }) {
  const rows = useMemo(() => {
    if (items.length > 8) {
      const [a, b, c] = splitIntoThreeRows(items);
      return [a, b, c].filter((r) => r.length > 0);
    }
    const [a, b] = splitIntoTwoRows(items);
    return [a, b].filter((r) => r.length > 0);
  }, [items]);

  return (
    <div className="mt-9 hidden md:block">
      {rows.map((row, idx) => (
        <div key={idx} className={idx > 0 ? "mt-5 md:mt-6" : ""}>
          <div className={rowGridClass(row.length)}>
            {row.map((item) => (
              <div key={item.title} className="min-h-0 min-w-0">
                <MethodologyCard icon={item.icon} title={item.title} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MethodologyCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const isLetterBadge = /^[A-Z]{2}$/.test(icon.trim());

  return (
    <article className="flex h-full w-full min-w-0 flex-col items-center rounded-2xl border border-[#E3E8F1] bg-white px-5 py-5 text-center shadow-[0_2px_10px_rgba(15,40,95,0.06)]">
      <div
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF4F6] leading-none text-[#143C83] ${
          isLetterBadge ? "text-[11px] font-bold tracking-tight" : "text-2xl"
        }`}
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="mt-4 text-[17px] font-semibold leading-snug text-[#143C83] md:text-[18px]">{title}</h3>
      <p className="mt-2 text-[14px] font-medium leading-relaxed text-[#637086] md:text-[15px] md:leading-[1.65]">
        {description}
      </p>
    </article>
  );
}

export default function TeachingMethodologyAbroad({
  content,
  sectionId = DEFAULT_SECTION_ID,
  headingId = DEFAULT_HEADING_ID,
  carouselAriaLabel = "Teaching methodology",
}: TeachingMethodologyAbroadProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollSlide = useCallback((direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-teaching-slide]");
    const gap = 16;
    const delta = (slide?.offsetWidth ?? el.clientWidth * 0.92) + gap;
    el.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  }, []);

  const { items } = content;

  return (
    <section
      className="bg-[#F4F6FB] py-12 md:py-16"
      aria-labelledby={headingId}
      id={sectionId}
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2 id={headingId} className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            {content.intro ? (
              <p className={ABROAD_SECTION_SUBTITLE}>
                {content.intro}
              </p>
            ) : null}
          </div>

          {/* Mobile: horizontal slider */}
          <div className="relative mt-9 md:hidden">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F4F6FB] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F4F6FB] to-transparent"
              aria-hidden
            />
            <div className="mb-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollSlide("prev")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Previous card"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlide("next")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Next card"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div
              ref={scrollRef}
              role="region"
              aria-roledescription="carousel"
              aria-label={carouselAriaLabel}
              className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item) => (
                <div
                  key={item.title}
                  data-teaching-slide
                  className="flex w-[min(100%,calc(100vw-2.5rem))] max-w-[min(400px,calc(100vw-2rem))] shrink-0 snap-center"
                >
                  <MethodologyCard icon={item.icon} title={item.title} description={item.description} />
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-[#8B93A4]">Swipe or use arrows to browse</p>
          </div>

          {/* Tablet & desktop: ≤8 items → 2 rows (first row max 5); &gt;8 → 3 rows */}
          <DesktopRows items={items} />
        </div>
      </ContainerWrapper>
    </section>
  );
}
