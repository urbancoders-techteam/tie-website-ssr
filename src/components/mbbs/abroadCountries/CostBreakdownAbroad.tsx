"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadCostBreakdownContent } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

interface CostBreakdownAbroadProps {
  content: AbroadCostBreakdownContent;
}

export default function CostBreakdownAbroad({ content }: CostBreakdownAbroadProps) {
  return (
    <section
      className="bg-[#F8FAFC] py-12 md:py-14"
      aria-labelledby="cost-breakdown-heading"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="cost-breakdown-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
            {/* Left: tables */}
            <div className="flex h-full min-h-0 min-w-0 flex-col gap-6">
              <div>
                <h3 className="mb-2 text-[15px] font-bold text-[#143C83] md:text-base">{content.tuitionTableTitle}</h3>
                <div className="overflow-x-auto overflow-y-visible rounded-xl border border-[#E8D5D8] shadow-sm [-webkit-overflow-scrolling:touch]">
                  <table className="w-full min-w-[320px] border-collapse text-left text-[12px] md:min-w-0 md:text-[13px]">
                    <thead>
                      <tr className="bg-[#00999E] text-white">
                        <th scope="col" className="px-3 py-3 font-semibold md:px-4">
                          University
                        </th>
                        <th scope="col" className="whitespace-nowrap px-3 py-3 font-semibold md:px-4">
                          {content.tuitionColAnnual}
                        </th>
                        <th scope="col" className="whitespace-nowrap px-3 py-3 font-semibold md:px-4">
                          {content.tuitionColSixYear}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.tuitionRows.map((row, i) => (
                        <tr
                          key={row.university}
                          className={i % 2 === 0 ? "bg-white" : "bg-rose-50/60"}
                        >
                          <td className="border-t border-[#F3E8EA] px-3 py-2.5 font-medium text-[#1f2937] md:px-4">
                            {row.university}
                          </td>
                          <td className="border-t border-[#F3E8EA] px-3 py-2.5 text-[#374151] md:px-4">
                            {row.annualTuition}
                          </td>
                          <td className="border-t border-[#F3E8EA] px-3 py-2.5 font-medium text-[#0E4797] md:px-4">
                            {row.sixYearTotal}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-[15px] font-bold text-[#143C83] md:text-base">{content.livingTableTitle}</h3>
                <div className="overflow-x-auto overflow-y-visible rounded-xl border border-[#E8D5D8] shadow-sm [-webkit-overflow-scrolling:touch]">
                  <table className="w-full min-w-[300px] border-collapse text-left text-[12px] md:min-w-0 md:text-[13px]">
                    <thead>
                      <tr className="bg-[#00999E] text-white">
                        <th scope="col" className="px-3 py-3 font-semibold md:px-4">
                          Living Expense
                        </th>
                        <th scope="col" className="whitespace-nowrap px-3 py-3 font-semibold md:px-4">
                          {content.livingColMonthly}
                        </th>
                        <th scope="col" className="whitespace-nowrap px-3 py-3 font-semibold md:px-4">
                          {content.livingColAnnual}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.livingRows.map((row, i) => (
                        <tr
                          key={row.item}
                          className={i % 2 === 0 ? "bg-white" : "bg-rose-50/60"}
                        >
                          <td className="border-t border-[#F3E8EA] px-3 py-2.5 font-medium text-[#1f2937] md:px-4">
                            {row.item}
                          </td>
                          <td className="border-t border-[#F3E8EA] px-3 py-2.5 text-[#374151] md:px-4">
                            {row.monthly}
                          </td>
                          <td className="border-t border-[#F3E8EA] px-3 py-2.5 text-[#374151] md:px-4">
                            {row.annual}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right: summary card — stretches to match left column height on lg */}
            <div className="flex min-h-0 min-w-0 flex-col lg:h-full">
              <div className="flex h-full min-h-0 flex-1 flex-col rounded-2xl bg-gradient-to-br from-[#0D3B8E] to-[#0a2f6e] px-5 py-6 text-white shadow-[0_12px_40px_rgba(13,59,142,0.25)] md:px-6 md:py-8">
                <h3 className="shrink-0 font-serif text-[20px] font-semibold leading-snug md:text-[22px]">
                  {content.summaryCardTitle}
                </h3>
                <ul className="mt-5 flex-1 divide-y divide-white/20">
                  {content.summaryLines.map((line) => (
                    <li
                      key={line.label}
                      className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-[12px] leading-snug md:text-[13px]"
                    >
                      <span className="text-sky-100/95">{line.label}</span>
                      <span className="shrink-0 font-semibold tabular-nums text-white">{line.value}</span>
                    </li>
                  ))}
                  <li className="flex flex-wrap items-baseline justify-between gap-2 py-4 text-[14px] font-bold md:text-[15px]">
                    <span>{content.summaryTotalLabel}</span>
                    <span className="shrink-0 tabular-nums text-amber-200">{content.summaryTotalValue}</span>
                  </li>
                </ul>
                <p className="mt-auto shrink-0 border-t border-white/15 pt-4 text-[11px] leading-relaxed text-sky-100/90 md:text-[12px]">
                  {content.summaryFootnote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
