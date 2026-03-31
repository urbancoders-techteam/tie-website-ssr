"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { ReactNode } from "react";
import type {
  AbroadCompleteComparisonContent,
  AbroadComparisonTableRow,
} from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

interface CompleteComparissionAbroadProps {
  content: AbroadCompleteComparisonContent;
}

const COL1_W = "w-[10rem] min-w-[10rem] max-w-[11rem]";

/** Vertical line between columns (body / light cells) */
const V_BODY = "border-r border-[#E2E8F0]";
/** Header column separators on dark backgrounds */
const V_HEAD = "border-r border-white/20";
const V_HEAD_RU = "border-r border-white/25";
const V_HEAD_BLUE = "border-r border-white/15";

type ComparisonColumn = "russia" | "indiaGovt" | "indiaPrivate" | "bangladesh" | "philippines";

function DonationCell({
  tone,
  children,
  isRussiaColumn,
}: {
  tone: "none" | "check";
  children: ReactNode;
  isRussiaColumn?: boolean;
}) {
  if (tone === "none") {
    return (
      <span className="inline-flex items-start gap-2">
        <span
          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100"
          aria-hidden
        >
          ✓
        </span>
        <span className={`leading-snug ${isRussiaColumn ? "text-[#00999E]" : "text-[#143C83]"}`}>{children}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-start gap-2">
      <span
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-red-50 text-[11px] font-semibold text-red-700 ring-1 ring-red-100"
        aria-hidden
      >
        ✕
      </span>
      <span className="leading-snug text-[#143C83]">{children}</span>
    </span>
  );
}

function cellText(row: AbroadComparisonTableRow, column: ComparisonColumn): string {
  switch (column) {
    case "russia":
      return row.russia;
    case "indiaGovt":
      return row.indiaGovt;
    case "indiaPrivate":
      return row.indiaPrivate;
    case "bangladesh":
      return row.bangladesh;
    case "philippines":
      return row.philippines;
    default:
      return "";
  }
}

function ComparisonCell({
  row,
  column,
}: {
  row: AbroadComparisonTableRow;
  column: ComparisonColumn;
}) {
  const text = cellText(row, column);

  if (row.isDonationRow) {
    if (column === "russia") {
      return <DonationCell tone="none" isRussiaColumn>{text}</DonationCell>;
    }
    if (column === "indiaGovt" || column === "bangladesh" || column === "philippines") {
      return <DonationCell tone="none">{text}</DonationCell>;
    }
    return <DonationCell tone="check">{text}</DonationCell>;
  }

  const isRu = column === "russia";
  const base = isRu
    ? "text-[13px] font-medium leading-snug text-[#00999E] md:text-[14px]"
    : "text-[13px] font-medium leading-snug text-[#1e3a5f] md:text-[14px]";

  return <span className={row.isSummaryRow ? `${base} font-semibold` : base}>{text}</span>;
}

function ScrollCountryHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <th
      scope="col"
      className={`min-w-[10.5rem] border-b border-white/10 bg-[#002D72] px-3 py-3.5 text-center text-[11px] font-semibold uppercase tracking-wide text-white/95 md:min-w-[11rem] md:px-3.5 md:text-[12px] lg:py-3.5 ${V_HEAD_BLUE} ${className}`}
    >
      {children}
    </th>
  );
}

function BodyCell({
  zebra,
  children,
  className = "",
  lastColumn = false,
}: {
  zebra: string;
  children: ReactNode;
  className?: string;
  lastColumn?: boolean;
}) {
  const vertical = lastColumn ? "" : V_BODY;
  return (
    <td
      className={`border-t border-[#E8ECF2] px-3 py-2.5 align-top md:py-3 ${zebra} min-w-[10.5rem] md:min-w-[11rem] ${vertical} ${className}`}
    >
      {children}
    </td>
  );
}

export default function CompleteComparissionAbroad({ content }: CompleteComparissionAbroadProps) {
  return (
    <section
      className="bg-[#F4F6FB] py-12 md:py-14"
      aria-labelledby="complete-comparison-heading"
      id="complete-comparison"
    >
      <ContainerWrapper>
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="complete-comparison-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.subtitle}
            </p>
          </div>

          <div className="mt-9 w-full md:mt-10">
            <div className="flex flex-col gap-3 border-b border-[#E3E8F1] pb-4 md:flex-row md:items-end md:justify-between md:gap-6">
              <div>
                <h3 className="text-left text-[18px] font-semibold tracking-tight text-[#143C83] md:text-[19px]">
                  {content.blockHeading}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-[#64748B] md:hidden">
                  Swipe the table sideways to compare every country in one scroll.
                </p>
                <p className="mt-2 hidden flex-wrap items-center gap-2 text-[12px] text-[#64748B] md:flex md:text-[13px]">
                  <span className="inline-flex items-center rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#475569]">
                    Fixed
                  </span>
                  <span className="text-[#94A3B8]">Parameter</span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span className="text-[#94A3B8]">Russia</span>
                  <span className="hidden text-[#CBD5E1] sm:inline">—</span>
                  <span className="w-full text-[#64748B] sm:w-auto">Other destinations scroll under the table.</span>
                </p>
              </div>
              <p className="text-[12px] leading-relaxed text-[#64748B] md:max-w-sm md:text-right md:text-[13px]">
                <span className="font-medium text-[#475569]">Tip:</span>{" "}
                <span className="md:hidden">Use the table below to scroll the full comparison.</span>
                <span className="hidden md:inline">
                  Drag / swipe horizontally, or click inside the table and use touchpad shift-scroll.
                </span>
              </p>
            </div>

            <div className="relative mt-5 w-full overflow-hidden rounded-2xl border border-[#E3E8F1] bg-white shadow-[0_4px_32px_rgba(15,40,95,0.07)] ring-1 ring-black/[0.03]">
              <div
                role="region"
                aria-label="MBBS comparison table. Scroll horizontally; on large screens the first two columns stay visible while you scroll."
                tabIndex={0}
                className="w-full overflow-x-auto rounded-xl outline-none motion-safe:scroll-smooth [touch-action:pan-x_pan-y] focus-visible:ring-2 focus-visible:ring-[#143C83]/20 focus-visible:ring-offset-2 [-ms-overflow-style:none] [overscroll-behavior-x:contain] [scrollbar-color:#CBD5E1_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#CBD5E1] [&::-webkit-scrollbar-thumb]:hover:bg-[#94A3B8] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#F1F5F9]"
              >
                <table className="w-full min-w-[92rem] border-separate border-spacing-0 text-left">
                  <caption className="sr-only">
                    Multi-country MBBS comparison. On small screens scroll the full table horizontally. On medium and
                    larger screens the Parameter and Russia columns stay pinned while other countries scroll.
                  </caption>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className={`relative md:sticky md:left-0 md:z-[50] ${COL1_W} rounded-tl-xl bg-[#002D72] px-3 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white md:px-3.5 md:text-xs ${V_HEAD} md:shadow-[2px_0_14px_-2px_rgba(15,40,95,0.18)]`}
                      >
                        {content.colParameter}
                      </th>
                      <th
                        scope="col"
                        className={`relative md:sticky md:left-[10rem] md:z-[45] w-[10rem] min-w-[10rem] bg-[#00999E] px-3 py-3.5 text-center text-[11px] font-semibold uppercase leading-snug tracking-wide text-white md:px-3.5 md:text-xs ${V_HEAD_RU} md:shadow-[2px_0_14px_-2px_rgba(15,40,95,0.18)]`}
                      >
                        {content.colRussia}
                      </th>
                      <ScrollCountryHeader>{content.colIndiaGovt}</ScrollCountryHeader>
                      <ScrollCountryHeader>{content.colIndiaPrivate}</ScrollCountryHeader>
                      <ScrollCountryHeader>{content.colBangladesh}</ScrollCountryHeader>
                      <ScrollCountryHeader className="rounded-tr-xl border-r-0">{content.colPhilippines}</ScrollCountryHeader>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] leading-snug text-[#334155] md:text-[13px] md:leading-relaxed">
                    {content.rows.map((row, index) => {
                      const zebra = index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]";
                      const isLast = index === content.rows.length - 1;
                      return (
                        <tr key={row.parameter} className={zebra}>
                          <th
                            scope="row"
                            className={`relative md:sticky md:left-0 md:z-[40] ${COL1_W} border-t border-[#E8ECF2] px-3 py-2.5 text-left text-[12px] font-semibold text-[#143C83] ${V_BODY} md:shadow-[2px_0_12px_-2px_rgba(15,40,95,0.12)] md:py-3 md:text-[13px] ${zebra} ${row.isSummaryRow ? "font-bold" : ""} ${isLast ? "rounded-bl-xl" : ""}`}
                          >
                            {row.parameter}
                          </th>
                          <td
                            className={`relative md:sticky md:left-[10rem] md:z-[35] border-t border-[#E8ECF2] px-3 py-2.5 align-top ${V_BODY} md:shadow-[2px_0_12px_-2px_rgba(15,40,95,0.12)] md:py-3 ${zebra} w-[10rem] min-w-[10rem]`}
                          >
                            <ComparisonCell row={row} column="russia" />
                          </td>
                          <BodyCell zebra={zebra}>
                            <ComparisonCell row={row} column="indiaGovt" />
                          </BodyCell>
                          <BodyCell zebra={zebra}>
                            <ComparisonCell row={row} column="indiaPrivate" />
                          </BodyCell>
                          <BodyCell zebra={zebra}>
                            <ComparisonCell row={row} column="bangladesh" />
                          </BodyCell>
                          <BodyCell zebra={zebra} lastColumn className={isLast ? "rounded-br-xl" : ""}>
                            <ComparisonCell row={row} column="philippines" />
                          </BodyCell>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-t border-[#F1F5F9] px-4 py-2.5 text-center md:flex-row md:gap-3">
                <p className="text-[11px] font-medium tracking-wide text-[#94A3B8] md:hidden md:text-xs">
                  Scroll sideways to see all columns
                </p>
                <p className="hidden text-[11px] font-medium tracking-wide text-[#94A3B8] md:block md:text-xs">
                  India · Bangladesh · Philippines — scroll horizontally
                </p>
                <span className="hidden h-3 w-px bg-[#E2E8F0] md:inline" aria-hidden />
                <p className="hidden text-[11px] text-[#B4BCC8] md:block md:text-xs">Parameter &amp; Russia stay pinned</p>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
