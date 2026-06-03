"use client";

import React from "react";
import {
  countrySectionShell,
  CountryFeaturedFigure,
  CountrySectionHeading,
  CountrySectionIntro,
  CountrySubsectionTitle,
  CountryMarkupTable,
  CountryTableBodyStriped,
  CountryTableCell,
  CountryTableHead,
  CountryTableHeaderCell,
  CountryTableWrap,
} from "./countrySectionUi";

export type CostOfLivingImage = {
  src: string;
  alt: string;
  caption: string;
};

export type CostOfLivingRow = {
  expense: string;
  london: string;
  outsideLondon: string;
  isTotal?: boolean;
};

export type CostOfLivingProps = {
  id?: string;
  title: string;
  intro: string[];
  featuredImage: CostOfLivingImage;
  breakdown: {
    title: string;
    rows: CostOfLivingRow[];
  };
  className?: string;
};

function LivingCostTable({ title, rows }: CostOfLivingProps["breakdown"]) {
  if (!rows.length) return null;

  const totalRowClass = "font-extrabold text-[#002147]";

  return (
    <div className="min-w-0">
      <CountrySubsectionTitle>{title}</CountrySubsectionTitle>
      <CountryTableWrap>
        <CountryMarkupTable minWidthClass="max-lg:min-w-[640px]">
          <CountryTableHead>
            <tr>
              <CountryTableHeaderCell className="w-[42%]">Expense</CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[29%]">London (approx)</CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[29%]">
                Outside London (approx)
              </CountryTableHeaderCell>
            </tr>
          </CountryTableHead>
          <CountryTableBodyStriped>
            {rows.map((row) => (
              <tr key={row.expense}>
                <CountryTableCell
                  className={
                    row.isTotal ? totalRowClass : "font-semibold text-[#334155]"
                  }
                >
                  {row.expense}
                </CountryTableCell>
                <CountryTableCell className={row.isTotal ? totalRowClass : undefined}>
                  {row.london}
                </CountryTableCell>
                <CountryTableCell className={row.isTotal ? totalRowClass : undefined}>
                  {row.outsideLondon}
                </CountryTableCell>
              </tr>
            ))}
          </CountryTableBodyStriped>
        </CountryMarkupTable>
      </CountryTableWrap>
    </div>
  );
}

export default function CostOfLiving({
  id = "country-cost-living",
  title,
  intro,
  featuredImage,
  breakdown,
  className = "",
}: CostOfLivingProps) {
  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} />
      <CountrySectionIntro paragraphs={intro} />
      <CountryFeaturedFigure
        src={featuredImage.src}
        alt={featuredImage.alt}
        caption={featuredImage.caption}
      />
      <LivingCostTable title={breakdown.title} rows={breakdown.rows} />
    </section>
  );
}
