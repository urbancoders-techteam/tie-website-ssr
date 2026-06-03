"use client";

import ModalTrigger from "@/components/ModalTrigger";
import { MdWarning } from "react-icons/md";
import {
  CountryMarkupTable,
  CountryFeaturedFigure,
  CountryGradientBanner,
  CountryRankBadge,
  CountrySectionHeading,
  CountrySectionIntro,
  CountryTableBlock,
  CountryTableBody,
  CountryTableCell,
  CountryTableHead,
  CountryTableHeaderCell,
  CountryTableWrap,
  CountryWarningNote,
  countrySectionShell,
} from "./countrySectionUi";

export type CostOfStudyingImage = {
  src: string;
  alt: string;
  caption: string;
};

export type TuitionLevelRow = {
  level: string;
  programmeType: string;
  avgAnnualTuition: string;
};

export type TopUniversityTuitionRow = {
  university: string;
  qsRank: string | number;
  avgMscTuition: string;
};

export type OneTimeCostRow = {
  expense: string;
  estimatedCost: string;
};

export type CostStudyBudgetCta = {
  heading: string;
  subtext: string;
  buttonText: string;
};

export type CostStudyTuitionTables = {
  byLevel: {
    title: string;
    rows: TuitionLevelRow[];
  };
  topUniversities: {
    title: string;
    rows: TopUniversityTuitionRow[];
  };
  note: string;
  oneTimeCosts?: {
    title: string;
    rows: OneTimeCostRow[];
  };
  budgetCta?: CostStudyBudgetCta;
};

export type CostOfStudyingProps = {
  id?: string;
  title: string;
  intro: string[];
  featuredImage: CostOfStudyingImage;
  tuitionTables?: CostStudyTuitionTables;
  className?: string;
};

const colLast = "text-slate-700 last:text-slate-700";
const colCenter = "text-center";

function TuitionLevelTable({
  title,
  rows,
}: {
  title: string;
  rows: TuitionLevelRow[];
}) {
  if (!rows.length) return null;

  return (
    <CountryTableBlock title={title}>
      <CountryTableWrap>
        <CountryMarkupTable>
          <CountryTableHead>
            <tr>
              <CountryTableHeaderCell className="w-[22%] lg:w-[20%]">
                Level
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className={`w-[38%] lg:w-[36%] ${colCenter}`}>
                Programme Type
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[40%]">
                Avg Annual Tuition (Int&apos;l)
              </CountryTableHeaderCell>
            </tr>
          </CountryTableHead>
          <CountryTableBody>
            {rows.map((row) => (
              <tr key={`${row.level}-${row.programmeType}`}>
                <CountryTableCell>{row.level}</CountryTableCell>
                <CountryTableCell className={colCenter}>
                  {row.programmeType}
                </CountryTableCell>
                <CountryTableCell className={colLast}>
                  {row.avgAnnualTuition}
                </CountryTableCell>
              </tr>
            ))}
          </CountryTableBody>
        </CountryMarkupTable>
      </CountryTableWrap>
    </CountryTableBlock>
  );
}

function TopUniversityTuitionTable({
  title,
  rows,
}: {
  title: string;
  rows: TopUniversityTuitionRow[];
}) {
  if (!rows.length) return null;

  return (
    <CountryTableBlock title={title}>
      <CountryTableWrap>
        <CountryMarkupTable>
          <CountryTableHead>
            <tr>
              <CountryTableHeaderCell className="w-[42%] lg:w-[38%]">
                University
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className={`w-[18%] ${colCenter}`}>
                QS World Rank 2025
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[40%] lg:w-[38%]">
                Avg MSc Tuition (Int&apos;l)
              </CountryTableHeaderCell>
            </tr>
          </CountryTableHead>
          <CountryTableBody>
            {rows.map((row) => (
              <tr key={row.university}>
                <CountryTableCell className="!font-bold !text-[#002147]">
                  {row.university}
                </CountryTableCell>
                <CountryTableCell className={`${colCenter} align-middle`}>
                  <CountryRankBadge>{row.qsRank}</CountryRankBadge>
                </CountryTableCell>
                <CountryTableCell className={colLast}>
                  {row.avgMscTuition}
                </CountryTableCell>
              </tr>
            ))}
          </CountryTableBody>
        </CountryMarkupTable>
      </CountryTableWrap>
    </CountryTableBlock>
  );
}

function OneTimeCostsTable({
  title,
  rows,
}: {
  title: string;
  rows: OneTimeCostRow[];
}) {
  if (!rows.length) return null;

  return (
    <CountryTableBlock title={title}>
      <CountryTableWrap>
        <CountryMarkupTable minWidthClass="max-lg:min-w-[360px]">
          <CountryTableHead>
            <tr>
              <CountryTableHeaderCell className="w-[52%]">
                Expense
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[48%]">
                Estimated Cost
              </CountryTableHeaderCell>
            </tr>
          </CountryTableHead>
          <CountryTableBody>
            {rows.map((row) => (
              <tr key={row.expense}>
                <CountryTableCell>{row.expense}</CountryTableCell>
                <CountryTableCell className={colLast}>
                  {row.estimatedCost}
                </CountryTableCell>
              </tr>
            ))}
          </CountryTableBody>
        </CountryMarkupTable>
      </CountryTableWrap>
    </CountryTableBlock>
  );
}

function BudgetCtaBanner({ cta }: { cta: CostStudyBudgetCta }) {
  return (
    <CountryGradientBanner>
      <h3 className="text-[clamp(1.1rem,2vw,1.35rem)] font-extrabold leading-snug text-white lg:text-base">
        {cta.heading}
      </h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/90 lg:mt-1.5 lg:text-[0.8125rem] lg:leading-snug">
        {cta.subtext}
      </p>
      <ModalTrigger
        variant="custom"
        text={cta.buttonText}
        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border-0 bg-[#3dd9de] px-5 py-2.5 text-sm font-bold text-[#002147] shadow-none transition-colors hover:bg-[#5ee4e8] lg:mt-2.5 lg:px-4 lg:py-2 lg:text-[0.8125rem]"
      />
    </CountryGradientBanner>
  );
}

export default function CostOfStudying({
  id = "country-cost",
  title,
  intro,
  featuredImage,
  tuitionTables,
  className = "",
}: CostOfStudyingProps) {
  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} className="lg:mb-2" />

      <CountrySectionIntro
        paragraphs={intro}
        className="text-base leading-[1.75] lg:[&_p+p]:mt-[0.45rem]"
      />

      <CountryFeaturedFigure
        src={featuredImage.src}
        alt={featuredImage.alt}
        caption={featuredImage.caption}
        variant="wide"
        sizes="(max-width: 1024px) 100vw, 65vw"
      />

      {tuitionTables && (
        <div className="mt-8 flex min-w-0 flex-col gap-7 lg:mt-4 lg:gap-4">
          <TuitionLevelTable
            title={tuitionTables.byLevel.title}
            rows={tuitionTables.byLevel.rows}
          />
          <TopUniversityTuitionTable
            title={tuitionTables.topUniversities.title}
            rows={tuitionTables.topUniversities.rows}
          />
          <CountryWarningNote text={tuitionTables.note} icon={MdWarning} />
          {tuitionTables.oneTimeCosts && (
            <OneTimeCostsTable
              title={tuitionTables.oneTimeCosts.title}
              rows={tuitionTables.oneTimeCosts.rows}
            />
          )}
          {tuitionTables.budgetCta && (
            <BudgetCtaBanner cta={tuitionTables.budgetCta} />
          )}
        </div>
      )}
    </section>
  );
}
