"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { memo, useCallback, useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

/** Same shape as `abroadCopy.syllabus` from `getAbroadFullPageCopy`. */
type SyllabusSectionContent = AbroadFullPageCopy["syllabus"];
type SyllabusYearItem = SyllabusSectionContent["years"][number];

interface MbbsSylabusAbroadProps {
  content: SyllabusSectionContent;
}

const SyllabusAccordionItem = memo(function SyllabusAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
  baseId,
}: {
  item: SyllabusYearItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  baseId: string;
}) {
  const isInternship = item.badgeTone === "internship";
  const triggerId = `${baseId}-trigger-${index}`;
  const panelId = `${baseId}-panel-${index}`;

  return (
    <div className="overflow-hidden rounded-xl border border-[#E3E8F1] bg-white shadow-[0_2px_12px_rgba(15,40,95,0.06)] transition-shadow duration-200 hover:border-[#D0DAE8] hover:shadow-[0_6px_24px_rgba(15,40,95,0.08)]">
      <h3 className="m-0">
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left transition-colors sm:gap-3 sm:px-4 sm:py-3 focus-visible:ring-2 focus-visible:ring-[#143C83] focus-visible:ring-offset-2"
        >
          <div
            className={`flex h-[3rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-lg px-1 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-white shadow-sm sm:h-16 sm:w-[4.5rem] sm:text-[12px] ${
              isInternship ? "bg-[#143C83]" : "bg-[#00999E]"
            }`}
          >
            {item.yearLabel}
          </div>
          <span className="min-w-0 flex-1 text-[16px] font-semibold leading-snug tracking-tight text-[#143C83] sm:text-[17px] md:text-[18px]">
            {item.title}
          </span>
          <span
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#143C83] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            <FaChevronDown className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#EEF2F7] px-3 pb-2.5 pt-2 sm:px-4 sm:pb-3">
            {item.subjectTags && item.subjectTags.length > 0 ? (
              <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0 sm:gap-2">
                {item.subjectTags.map((tag) => (
                  <li key={tag}>
                    <span className="inline-block rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-medium leading-snug text-[#4B5568] sm:text-[12px]">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
            {item.description.trim() ? (
              <p
                className={`text-[13px] font-medium leading-relaxed text-[#637086] sm:text-[14px] ${
                  item.subjectTags?.length ? "mt-3" : ""
                }`}
              >
                {item.description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
});

export default function MbbsSylabusAbroad({ content }: MbbsSylabusAbroadProps) {
  const reactId = useId();
  const baseId = `mbbs-syllabus-${reactId.replace(/:/g, "")}`;
  const [openIndex, setOpenIndex] = useState(0);

  const onToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section
      className="bg-white py-8 md:py-10 lg:py-7 xl:py-9"
      aria-labelledby="mbbs-syllabus-heading"
      id="mbbs-syllabus"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center lg:mx-auto lg:max-w-4xl">
            <p className={ABROAD_SECTION_EYEBROW}>{content.eyebrow}</p>
            <h2 id="mbbs-syllabus-heading" className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>{content.subtitle}</p>
          </div>

          <div className="mx-auto mt-5 max-w-3xl md:mt-6">
            <div className="flex flex-col gap-2 sm:gap-2.5">
              {content.years.map((year, i) => (
                <SyllabusAccordionItem
                  key={`${year.yearLabel}-${i}`}
                  item={year}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={onToggle}
                  baseId={baseId}
                />
              ))}
            </div>
            {content.footerNote ? (
              <p className="mx-auto mt-6 max-w-3xl text-center text-[13px] font-medium leading-relaxed text-[#637086] sm:text-[14px]">
                {content.footerNote}
              </p>
            ) : null}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
