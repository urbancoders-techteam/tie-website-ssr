"use client";

import { useEffect, useRef, useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import MbbsHubSectionHeader from "./MbbsHubSectionHeader";

type CriteriaRow = {
  label: string;
  value: string;
};

const eligibilityData: Record<"indian" | "npbd", CriteriaRow[]> = {
  indian: [
    {
      label: "Academic Qualification",
      value:
        "10+2 with Physics, Chemistry, Biology and English from a recognised board. Minimum 50% aggregate in PCB (45% for SC/ST/OBC).",
    },
    {
      label: "NEET Score",
      value:
        "Valid NEET-UG score mandatory as per NMC regulations (March 2019 onwards). Score must be within 3 years of result declaration date.",
    },
    {
      label: "Age Requirement",
      value:
        "Minimum 17 years on or before December 31 of the admission year.",
    },
    {
      label: "Language Tests",
      value:
        "Russia, Philippines, Kazakhstan, Bangladesh, Kyrgyzstan, Uzbekistan, Nepal - no additional language test required.",
    },
    {
      label: "Post-Degree Licensing",
      value:
        "Must clear FMGE / NExT exam to practise medicine in India after completing MBBS abroad. Taksheela provides FMGE preparation resources throughout your program.",
    },
  ],
  npbd: [
    {
      label: "Academic Qualification",
      value:
        "Higher Secondary (10+2) with Biology, Chemistry, Physics - minimum 50% in science subjects from a recognised board in Nepal or Bangladesh.",
    },
    {
      label: "Entrance Exams",
      value:
        "Nepali students: Valid NEET score or Nepali national medical entry exam equivalent. Bangladeshi students: DGME-administered national MBBS entry test score.",
    },
    {
      label: "Age Requirement",
      value:
        "Minimum 17 years at the time of admission to the university.",
    },
    {
      label: "Language Tests",
      value:
        "English-medium programs are widely available across all budget destinations. Taksheela provides integrated IELTS/TOEFL preparation for premium destinations where required.",
    },
    {
      label: "Visa and Documentation",
      value:
        "Taksheela provides complete student visa support for all 12 destination countries - document checklist, embassy interview coaching, and visa tracking - for Nepali and Bangladeshi students.",
    },
  ],
};

const tabStyles =
  "border-b-2 px-1 pb-2 text-[11px] md:text-xs font-semibold tracking-wide transition-colors";

export default function EligibilityCriteria() {
  const [activeTab, setActiveTab] = useState<"indian" | "npbd">("indian");
  const [tableMinHeight, setTableMinHeight] = useState(0);
  const indianMeasureRef = useRef<HTMLDivElement | null>(null);
  const npbdMeasureRef = useRef<HTMLDivElement | null>(null);
  const rows = eligibilityData[activeTab];

  useEffect(() => {
    const measureHeights = () => {
      const indianHeight = indianMeasureRef.current?.offsetHeight ?? 0;
      const npbdHeight = npbdMeasureRef.current?.offsetHeight ?? 0;
      setTableMinHeight(Math.max(indianHeight, npbdHeight));
    };

    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, []);

  const renderRows = (tableRows: CriteriaRow[]) =>
    tableRows.map((row, index) => (
      <div
        key={`${row.label}-${index}`}
        className={`grid grid-cols-1 md:grid-cols-[220px_1fr] border-b border-[#dfe5ee] last:border-b-0 ${
          index % 2 === 1 ? "bg-[#f5f8fc]" : "bg-white"
        }`}
      >
        <div className="border-b border-[#dfe5ee] p-4 text-sm font-semibold text-[#00999E] md:border-b-0 md:border-r">
          {row.label}
        </div>
        <div className="p-4 text-sm leading-relaxed text-[#21334f]">{row.value}</div>
      </div>
    ));

  return (
    <section className="bg-[#f4f6f9] py-12 md:py-14">
      <ContainerWrapper>
        <div className="mx-auto max-w-6xl">
          <MbbsHubSectionHeader
            title="Eligibility Criteria"
            description="Standard requirements for international medical programs are essential to evaluate. Families should carefully review the total cost of studying MBBS abroad before finalising their admission destination."
            descriptionClassName="max-w-2xl"
          />

          <div className="mt-8 border-b border-[#d8dee8]">
            <div className="flex items-center gap-8 md:gap-10">
              <button
                type="button"
                onClick={() => setActiveTab("indian")}
                className={`${tabStyles} ${
                  activeTab === "indian"
                    ? "border-[#00999E] text-[#00999E]"
                    : "border-transparent text-[#7b879b] hover:text-[#35547c]"
                }`}
              >
                IN Indian Students
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("npbd")}
                className={`${tabStyles} ${
                  activeTab === "npbd"
                    ? "border-[#00999E] text-[#00999E]"
                    : "border-transparent text-[#7b879b] hover:text-[#35547c]"
                }`}
              >
                NP BD Nepal & Bangladesh
              </button>
            </div>
          </div>

          <div className="relative mt-3">
            <div
              className="absolute inset-x-0 top-0 invisible pointer-events-none"
              aria-hidden="true"
            >
              <div ref={indianMeasureRef} className="overflow-hidden bg-white">
                {renderRows(eligibilityData.indian)}
              </div>
              <div ref={npbdMeasureRef} className="mt-3 overflow-hidden bg-white">
                {renderRows(eligibilityData.npbd)}
              </div>
            </div>

            <div
              className="overflow-hidden bg-white"
              style={tableMinHeight ? { minHeight: `${tableMinHeight}px` } : undefined}
            >
              {renderRows(rows)}
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
