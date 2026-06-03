"use client";

import React from "react";
import {
  countrySectionShell,
  CountryMarkupTable,
  CountrySectionHeading,
  CountrySectionIntro,
  CountrySubsectionTitle,
  CountryTableBodyStriped,
  CountryTableCell,
  CountryTableHead,
  CountryTableHeaderCell,
  CountryTableWrap,
} from "./countrySectionUi";

export type ExamTableColumn = {
  key: string;
  label: string;
};

export type ExamRequirementsTable = {
  title: string;
  columns: ExamTableColumn[];
  rows: Record<string, string>[];
  emphasizeFirstColumn?: boolean;
};

export type ExamEligibilityRequirementProps = {
  id?: string;
  title: string;
  intro: string[];
  academicEligibility: ExamRequirementsTable;
  englishRequirements: ExamRequirementsTable;
  className?: string;
};

function RequirementsTable({
  title,
  columns,
  rows,
  emphasizeFirstColumn = false,
}: ExamRequirementsTable) {
  if (!rows.length) return null;

  return (
    <div className="min-w-0">
      <CountrySubsectionTitle>{title}</CountrySubsectionTitle>
      <CountryTableWrap>
        <CountryMarkupTable minWidthClass="max-lg:min-w-[720px]">
          <CountryTableHead>
            <tr>
              {columns.map((col) => (
                <CountryTableHeaderCell key={col.key}>{col.label}</CountryTableHeaderCell>
              ))}
            </tr>
          </CountryTableHead>
          <CountryTableBodyStriped>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <CountryTableCell
                    key={col.key}
                    className={
                      emphasizeFirstColumn && colIndex === 0
                        ? "font-bold text-[#002147]"
                        : undefined
                    }
                  >
                    {row[col.key]}
                  </CountryTableCell>
                ))}
              </tr>
            ))}
          </CountryTableBodyStriped>
        </CountryMarkupTable>
      </CountryTableWrap>
    </div>
  );
}

export default function ExamEligibilityRequirement({
  id = "country-exams",
  title,
  intro,
  academicEligibility,
  englishRequirements,
  className = "",
}: ExamEligibilityRequirementProps) {
  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} />
      <CountrySectionIntro paragraphs={intro} />
      <RequirementsTable {...academicEligibility} emphasizeFirstColumn />
      <RequirementsTable {...englishRequirements} />
    </section>
  );
}
