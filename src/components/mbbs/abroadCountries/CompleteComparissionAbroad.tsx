"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import type { AbroadComparisonTableRow } from "@/constants/abroad/russiaAbroadConstent";
import type { ReactNode } from "react";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

/** Same object as `abroadCopy.comparison` from `getAbroadFullPageCopy`. */
type ComparisonSectionContent = AbroadFullPageCopy["comparison"];

interface CompleteComparissionAbroadProps {
  content: ComparisonSectionContent;
}

/** Fixed widths so sticky `left` offsets stay aligned at md+ (must match exactly). */
const COL_PARAM = "w-[10rem] min-w-[10rem] max-w-[10rem] shrink-0";
const COL_FEATURED = "w-[10rem] min-w-[10rem] max-w-[10rem] shrink-0";
const STICKY_FEATURED_LEFT = "md:left-[10rem]";

const V_BODY = "border-r border-[#E2E8F0]";
/** Scroll-area country headers sit on dark blue — use light column rules */
const V_HEAD_SCROLL = "border-r border-white/15";
const V_HEAD_PARAM = "border-r border-white/25";
const V_HEAD_FEATURED = "border-r border-white/30";

type DataColumn = "featured" | "indiaGovt" | "indiaPrivate" | "bangladesh" | "philippines";

function cellText(row: AbroadComparisonTableRow, column: DataColumn): string {
  switch (column) {
    case "featured":
      return row.featured;
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

function DonationCell({
  tone,
  children,
  isFeaturedColumn,
}: {
  tone: "none" | "check";
  children: ReactNode;
  isFeaturedColumn?: boolean;
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
        <span
          className={`min-w-0 break-words leading-snug [overflow-wrap:anywhere] ${isFeaturedColumn ? "text-[#00999E]" : "text-[#143C83]"}`}
        >
          {children}
        </span>
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
      <span className="min-w-0 break-words leading-snug [overflow-wrap:anywhere] text-[#143C83]">{children}</span>
    </span>
  );
}

function ComparisonCell({
  row,
  column,
}: {
  row: AbroadComparisonTableRow;
  column: DataColumn;
}) {
  const text = cellText(row, column);

  if (row.isDonationRow) {
    if (column === "featured") {
      return <DonationCell tone="none" isFeaturedColumn>{text}</DonationCell>;
    }
    if (column === "indiaGovt" || column === "bangladesh" || column === "philippines") {
      return <DonationCell tone="none">{text}</DonationCell>;
    }
    return <DonationCell tone="check">{text}</DonationCell>;
  }

  const isFeatured = column === "featured";
  const base = isFeatured
    ? "text-[13px] font-medium leading-snug text-[#00999E] md:text-[14px]"
    : "text-[13px] font-medium leading-snug text-[#1e3a5f] md:text-[14px]";

  return (
    <span className={`${row.isSummaryRow ? `${base} font-semibold` : base} min-w-0 break-words [overflow-wrap:anywhere]`}>
      {text}
    </span>
  );
}

function ScrollCountryHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <th
      scope="col"
      className={`min-w-[10.5rem] break-words border-b border-white/10 bg-[#143C83] px-3 py-3.5 text-center text-[11px] font-semibold uppercase tracking-wide text-white/95 [overflow-wrap:anywhere] md:min-w-[11rem] md:px-3.5 md:text-[12px] lg:py-3.5 ${V_HEAD_SCROLL} ${className}`}
    >
      {children}
    </th>
  );
}

function BodyCell({
  zebra,
  children,
  lastColumn = false,
  className = "",
}: {
  zebra: string;
  children: ReactNode;
  lastColumn?: boolean;
  className?: string;
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
      className="relative bg-gradient-to-b from-[#EEF2FF] via-[#F8FAFC] to-[#F1F5F9] py-10 sm:py-12 md:py-14 lg:py-16"
      aria-labelledby="complete-comparison-heading"
      id="complete-comparison"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00999E]/40 to-transparent"
        aria-hidden
      />
      <ContainerWrapper>
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{content.eyebrow}</p>
            <h2 id="complete-comparison-heading" className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>{content.subtitle}</p>
          </div>

          <div className="mt-8 w-full min-w-0 sm:mt-9 md:mt-11">
            <div className="flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-white/80 p-4 shadow-[0_8px_40px_rgba(15,40,95,0.06)] backdrop-blur-sm md:flex-row md:items-center md:justify-between md:gap-8 md:p-5">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#00999E]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0d6b6f]">
                    Matrix
                  </span>
                  <h3 className="text-left text-[17px] font-semibold tracking-tight text-[#143C83] md:text-[18px]">
                    {content.blockHeading}
                  </h3>
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-[#64748B] md:hidden">
                  Swipe the table sideways — parameter and your destination column stay fixed on larger screens.
                </p>
                <p className="mt-2 hidden flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[#64748B] md:flex md:text-[13px]">
                  <span className="inline-flex items-center rounded-md border border-[#CFFAFE] bg-[#ECFEFF] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#0e7490]">
                    Pinned
                  </span>
                  <span>{content.colParameter}</span>
                  <span className="text-[#CBD5E1]">+</span>
                  <span className="font-medium text-[#475569]">{content.colFeatured}</span>
                  <span className="text-[#94A3B8]">·</span>
                  <span>Other countries scroll horizontally.</span>
                </p>
              </div>
              <p className="w-full min-w-0 text-[12px] leading-relaxed text-[#64748B] md:w-auto md:max-w-xs md:shrink-0 md:text-right md:text-[13px]">
                <span className="font-semibold text-[#334155]">Tip:</span>{" "}
                <span className="md:hidden">Scroll the wide table below to compare every column.</span>
                <span className="hidden md:inline">
                  Drag or swipe, or click inside the table and shift-scroll with the trackpad.
                </span>
              </p>
            </div>

            <div className="relative mt-5 w-full min-w-0 overflow-hidden rounded-2xl border border-[#E3E8F1] bg-white shadow-[0_12px_48px_rgba(15,40,95,0.08)] ring-1 ring-black/[0.04] sm:mt-6 md:rounded-3xl">
              <div
                role="region"
                aria-label="MBBS comparison table. Scroll horizontally; on medium screens and up the parameter and destination columns remain visible while other countries scroll."
                tabIndex={0}
                className="w-full min-w-0 overflow-x-auto overflow-y-visible rounded-[inherit] outline-none [-webkit-overflow-scrolling:touch] motion-safe:scroll-smooth [touch-action:pan-x_pan-y] focus-visible:ring-2 focus-visible:ring-[#00999E]/35 focus-visible:ring-offset-2 [-ms-overflow-style:none] [overscroll-behavior-x:contain] [scrollbar-color:#94a3b8_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#94A3B8] [&::-webkit-scrollbar-thumb]:hover:bg-[#64748B] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#F1F5F9]"
              >
                <table className="w-full min-w-[92rem] border-separate border-spacing-0 text-left">
                  <caption className="sr-only">
                    Multi-country MBBS comparison. Scroll horizontally on small screens. On medium and larger screens
                    the parameter column and the featured destination column stay pinned while other countries scroll.
                  </caption>
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className={`relative md:sticky md:left-0 md:z-[50] ${COL_PARAM} break-words rounded-tl-2xl bg-[#0a1628] px-3 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wide text-white [overflow-wrap:anywhere] md:px-3.5 md:text-xs ${V_HEAD_PARAM} md:shadow-[3px_0_20px_-4px_rgba(15,40,95,0.35)]`}
                      >
                        {content.colParameter}
                      </th>
                      <th
                        scope="col"
                        className={`relative md:sticky ${STICKY_FEATURED_LEFT} md:z-[48] ${COL_FEATURED} break-words bg-gradient-to-br from-[#0b8f95] via-[#00999E] to-[#007a82] px-3 py-3.5 text-center text-[11px] font-semibold uppercase leading-snug tracking-wide text-white [overflow-wrap:anywhere] md:px-3.5 md:text-xs ${V_HEAD_FEATURED} md:shadow-[3px_0_20px_-4px_rgba(0,153,158,0.35)]`}
                      >
                        {content.colFeatured}
                      </th>
                      <ScrollCountryHeader>{content.colIndiaGovt}</ScrollCountryHeader>
                      <ScrollCountryHeader>{content.colIndiaPrivate}</ScrollCountryHeader>
                      <ScrollCountryHeader>{content.colBangladesh}</ScrollCountryHeader>
                      <ScrollCountryHeader className="rounded-tr-2xl border-r-0">{content.colPhilippines}</ScrollCountryHeader>
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
                            className={`relative md:sticky md:left-0 md:z-[40] ${COL_PARAM} break-words border-t border-[#E8ECF2] px-3 py-2.5 text-left text-[12px] font-semibold text-[#143C83] [overflow-wrap:anywhere] ${V_BODY} md:shadow-[3px_0_14px_-4px_rgba(15,40,95,0.12)] md:py-3 md:text-[13px] ${zebra} ${row.isSummaryRow ? "font-bold" : ""} ${isLast ? "rounded-bl-2xl" : ""}`}
                          >
                            {row.parameter}
                          </th>
                          <td
                            className={`relative md:sticky ${STICKY_FEATURED_LEFT} md:z-[38] border-t border-[#E8ECF2] px-3 py-2.5 align-top ${V_BODY} md:shadow-[3px_0_14px_-4px_rgba(0,153,158,0.1)] md:py-3 ${COL_FEATURED} ${zebra} ${index % 2 === 0 ? "bg-[#f6fffe]" : "bg-[#eefcfb]"}`}
                          >
                            <ComparisonCell row={row} column="featured" />
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
                          <BodyCell zebra={zebra} lastColumn className={isLast ? "rounded-br-2xl" : ""}>
                            <ComparisonCell row={row} column="philippines" />
                          </BodyCell>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 border-t border-[#EEF2F7] bg-gradient-to-r from-[#F8FAFC] via-white to-[#F8FAFC] px-4 py-3 text-center md:flex-row md:gap-4">
                <p className="text-[11px] font-medium tracking-wide text-[#94A3B8] md:text-xs">
                  <span className="md:hidden">Scroll sideways for India, Bangladesh &amp; Philippines</span>
                  <span className="hidden md:inline">India · Bangladesh · Philippines — horizontal scroll</span>
                </p>
                <span className="hidden h-3 w-px bg-[#E2E8F0] md:inline" aria-hidden />
                <p className="hidden text-[11px] text-[#B4BCC8] md:block md:text-xs">
                  First two columns stay fixed while you browse
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
