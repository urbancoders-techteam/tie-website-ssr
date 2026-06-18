"use client";

import {
  CountryDataTable,
  SectionTitle,
  sectionShell,
  type CountryTableRow,
} from "./countrySectionUi";

export type OverviewRow = CountryTableRow;

export type OverviewSectionProps = {
  id?: string;
  title: string;
  subtitle: string;
  overviewData: OverviewRow[];
  className?: string;
};

export default function OverviewSection({
  id = "country-overview",
  title,
  subtitle,
  overviewData,
  className = "",
}: OverviewSectionProps) {
  if (!overviewData.length) return null;

  return (
    <section id={id} className={sectionShell(className)}>
      <SectionTitle>{title}</SectionTitle>
      <p className="mt-[0.65rem] text-base leading-[1.7] text-[#64748b] lg:mt-[0.45rem] lg:text-sm lg:leading-[1.6]">
        {subtitle}
      </p>

      <CountryDataTable rows={overviewData} />
    </section>
  );
}
