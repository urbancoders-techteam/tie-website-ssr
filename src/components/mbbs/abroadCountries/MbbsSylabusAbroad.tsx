"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadMbbsSyllabusContent, AbroadMbbsSyllabusYearItem } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

interface MbbsSylabusAbroadProps {
  content: AbroadMbbsSyllabusContent;
}

function SyllabusYearCard({ item }: { item: AbroadMbbsSyllabusYearItem }) {
  const isInternship = item.badgeTone === "internship";

  return (
    <article className="flex h-full min-h-0 gap-3 rounded-2xl border border-[#E3E8F1] bg-white p-4 shadow-[0_2px_12px_rgba(15,40,95,0.06)] transition-shadow duration-200 hover:border-[#D8E0ED] hover:shadow-[0_8px_28px_rgba(15,40,95,0.09)] sm:gap-5 sm:p-5 md:p-6 lg:gap-3 lg:p-3.5 lg:rounded-xl">
      <div
        className={`flex h-[4.5rem] w-[5rem] shrink-0 flex-col items-center justify-center self-start rounded-xl px-1.5 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-white shadow-sm sm:h-[5rem] sm:w-[5.5rem] sm:text-[11px] sm:tracking-[0.1em] md:h-[5.5rem] md:w-[6.25rem] md:text-xs lg:h-[3.75rem] lg:w-[4.5rem] lg:text-[9px] lg:leading-tight lg:tracking-[0.06em] xl:h-[4rem] xl:w-[4.75rem] xl:text-[10px] ${
          isInternship ? "bg-[#143C83]" : "bg-[#00999E]"
        }`}
      >
        {item.yearLabel}
      </div>

      <div className="min-w-0 flex-1 self-center py-0.5 text-left">
        <h3 className="text-[16px] font-semibold leading-snug tracking-tight text-[#143C83] sm:text-[17px] md:text-[18px] lg:text-[14px] lg:leading-tight xl:text-[15px]">
          {item.title}
        </h3>
        <p className="mt-2 text-[13px] font-medium leading-[1.6] text-[#637086] sm:text-[14px] sm:leading-[1.65] md:text-[15px] lg:mt-1.5 lg:text-[12px] lg:leading-[1.45] xl:text-[13px] xl:leading-[1.5]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function MbbsSylabusAbroad({ content }: MbbsSylabusAbroadProps) {
  return (
    <section
      className="bg-white py-10 md:py-12 lg:py-8 xl:py-10"
      aria-labelledby="mbbs-syllabus-heading"
      id="mbbs-syllabus-russia"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center lg:max-w-4xl lg:mx-auto">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="mbbs-syllabus-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.subtitle}
            </p>
          </div>

          {/* Laptop: 2 cols (3 rows) · wide laptop: 3 cols (2 rows) — zyada rows ek hi viewport me */}
          <div className="mx-auto mt-6 max-w-4xl md:mt-8 lg:mt-5 lg:max-w-6xl xl:max-w-7xl">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-2.5 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-2.5 2xl:gap-y-3">
              {content.years.map((year) => (
                <SyllabusYearCard key={year.yearLabel} item={year} />
              ))}
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
