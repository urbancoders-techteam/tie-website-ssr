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
import { useCallback, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaLink } from "react-icons/fa";

interface RulesAndComplainsAbroadProps {
  content: AbroadRegulatoryFrameworkContent;
}

function RuleCard({
  icon,
  title,
  description,
  gridClassName,
}: {
  icon: string;
  title: string;
  description: string;
  gridClassName?: string;
}) {
  return (
    <article
      className={`flex h-full w-full min-w-0 flex-col rounded-xl border border-[#E5E9F2] border-l-[5px] border-l-[#143C83] bg-white px-4 py-4 shadow-sm ${gridClassName ?? ""}`}
    >
      <div className="flex gap-3">
        <span className="shrink-0 text-2xl leading-none" aria-hidden>
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold leading-snug text-[#143C83] md:text-[15px]">{title}</h3>
          <p className="mt-2 text-[12px] leading-relaxed text-[#4B5563]">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function RulesAndComplainsAbroad({ content }: RulesAndComplainsAbroadProps) {
  const firstRow = content.rules.slice(0, 4);
  const secondRow = content.rules.slice(4, 6);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollSlide = useCallback((direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-reg-slide]");
    const gap = 16;
    const delta = (slide?.offsetWidth ?? el.clientWidth * 0.92) + gap;
    el.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  }, []);

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

          {/* Mobile: horizontal snap slider */}
          <div className="relative mt-10 md:hidden">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent"
              aria-hidden
            />
            <div className="mb-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollSlide("prev")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#143C83] shadow-sm transition hover:bg-[#F3F4F6]"
                aria-label="Previous rule"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlide("next")}
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
              className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-visible scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {content.rules.map((rule, i) => (
                <div
                  key={i}
                  data-reg-slide
                  className="flex w-[min(100%,calc(100vw-2.5rem))] max-w-[min(420px,calc(100vw-2rem))] shrink-0 snap-center"
                >
                  <RuleCard icon={rule.icon} title={rule.title} description={rule.description} />
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-[#8B93A4]">Swipe or use arrows to browse rules</p>
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
