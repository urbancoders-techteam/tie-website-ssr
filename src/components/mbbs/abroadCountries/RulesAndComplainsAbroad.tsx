"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadRegulatoryFrameworkContent } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaLink } from "react-icons/fa";

interface RulesAndComplainsAbroadProps {
  content: AbroadRegulatoryFrameworkContent;
}

const MOBILE_RULES_AUTOPLAY_MS = 5000;

function RuleCard({
  icon,
  title,
  description,
  gridClassName,
  className,
  descriptionClassName,
}: {
  icon: string;
  title: string;
  description: string;
  gridClassName?: string;
  /** Extra classes (e.g. mobile slider: shadow-none, larger type) */
  className?: string;
  descriptionClassName?: string;
}) {
  return (
    <article
      className={`flex h-full w-full min-w-0 flex-col rounded-xl border border-[#E5E9F2] border-l-[5px] border-l-[#143C83] bg-white px-4 py-4 shadow-sm ${gridClassName ?? ""} ${className ?? ""}`}
    >
      <div className="flex gap-3">
        <span className="shrink-0 text-2xl leading-none" aria-hidden>
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold leading-snug text-[#143C83] md:text-[15px]">{title}</h3>
          <p
            className={`mt-2 text-[12px] leading-relaxed text-[#4B5563] ${descriptionClassName ?? ""}`}
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function RulesAndComplainsAbroad({ content }: RulesAndComplainsAbroadProps) {
  const firstRow = content.rules.slice(0, 4);
  const secondRow = content.rules.slice(4, 6);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ruleCount = content.rules.length;
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [ruleCount]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || ruleCount === 0) return;
    const slides = el.querySelectorAll<HTMLElement>("[data-reg-slide]");
    const slide = slides[slideIndex];
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }, [slideIndex, ruleCount]);

  useEffect(() => {
    if (ruleCount <= 1) return;
    const tick = () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
      setSlideIndex((i) => (i + 1) % ruleCount);
    };
    const id = setInterval(tick, MOBILE_RULES_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [ruleCount]);

  const goSlide = useCallback((direction: "prev" | "next") => {
    if (ruleCount <= 1) return;
    setSlideIndex((i) => {
      if (direction === "next") return (i + 1) % ruleCount;
      return (i - 1 + ruleCount) % ruleCount;
    });
  }, [ruleCount]);

  return (
    <section
      className="bg-white py-12 md:py-14"
      aria-labelledby="regulatory-framework-heading"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="regulatory-framework-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.subtitle}
            </p>
          </div>

          {/* Mobile: horizontal snap slider (full-bleed scroll; no edge fades) */}
          <div className="relative mt-10 md:hidden -mx-4">
            <div className="mb-2 flex items-center justify-end gap-2 px-4">
              <button
                type="button"
                onClick={() => goSlide("prev")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Previous rule"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goSlide("next")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Next rule"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div
              ref={scrollRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="NMC rules"
              className="flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto overflow-y-visible scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {content.rules.map((rule, i) => (
                <div
                  key={i}
                  data-reg-slide
                  className="flex w-[calc(100vw-2rem)] max-w-[32rem] shrink-0 snap-center"
                >
                  <RuleCard
                    icon={rule.icon}
                    title={rule.title}
                    description={rule.description}
                    className="!shadow-none"
                    descriptionClassName="text-[13px] leading-[1.6]"
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 px-4 text-center text-xs text-[#8B93A4]">
              Auto-advances every few seconds — swipe or use arrows to browse
            </p>
            <p className="sr-only" aria-live="polite">
              Rule {slideIndex + 1} of {ruleCount}
            </p>
          </div>

          {/* Tablet & desktop: grid */}
          <div className="mt-10 hidden md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-5">
            {firstRow.map((rule, i) => (
              <RuleCard key={i} icon={rule.icon} title={rule.title} description={rule.description} />
            ))}
          </div>

          <div className="mt-4 hidden md:grid md:grid-cols-2 md:gap-4 lg:mt-4 lg:grid-cols-4 lg:gap-5">
            {secondRow.map((rule, i) => (
              <RuleCard
                key={i + 4}
                icon={rule.icon}
                title={rule.title}
                description={rule.description}
                gridClassName={i === 0 ? "lg:col-start-2" : "lg:col-start-3"}
              />
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-sky-200/80 bg-[#EEF6FB] px-4 py-4 md:px-6 md:py-5">
            <div className="flex flex-col gap-2 text-[12px] leading-relaxed text-[#374151] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1 sm:gap-y-1 md:text-[13px]">
              <span className="inline-flex items-center gap-2 font-bold text-[#143C83]">
                <FaLink className="h-4 w-4 shrink-0 text-[#0E4797]" aria-hidden />
                {content.officialSourcesLabel}
              </span>
              <span className="hidden text-[#9CA3AF] sm:inline" aria-hidden>
                |
              </span>
              <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
                {content.officialLinks.map((item, idx) => (
                  <span key={item.href} className="inline-flex flex-wrap items-center gap-1">
                    {idx > 0 ? (
                      <span className="mx-1 text-[#9CA3AF]" aria-hidden>
                        ·
                      </span>
                    ) : null}
                    <span>{item.label}:</span>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0E4797] underline decoration-[#0E4797]/30 underline-offset-2 transition hover:text-[#143C83]"
                    >
                      {item.href.replace(/^https?:\/\//, "")}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
