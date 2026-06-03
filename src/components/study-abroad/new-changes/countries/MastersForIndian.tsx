"use client";

import React from "react";
import {
  MdArrowRightAlt,
  MdCheckCircle,
  MdFlight,
  MdInfoOutline,
  MdPublic,
  MdSavings,
  MdTimer,
} from "react-icons/md";
import {
  CountryMarkupTable,
  CountryFeaturedFigure,
  CountryGradientBanner,
  CountrySectionHeading,
  CountrySectionIntro,
  CountrySubsectionTitle,
  CountryTableBlock,
  CountryTableBodyStriped,
  CountryTableCell,
  CountryTableHead,
  CountryTableHeaderCell,
  CountryTableWrap,
  countrySectionShell,
} from "./countrySectionUi";

export type MastersWhyIcon = "time" | "cost" | "global" | "work";

export type MastersWhyCard = {
  icon: MastersWhyIcon;
  title: string;
  description: string;
};

export type MastersFeaturedImage = {
  src: string;
  alt: string;
  caption: string;
};

export type MastersUniversityRow = {
  university: string;
  popularProgrammes: string;
  minCgpa: string;
  fees: string;
};

export type MastersUniversitiesTable = {
  title: string;
  rows: MastersUniversityRow[];
};

export type MastersApplicationProcess = {
  title: string;
  steps: string[];
};

export type MastersForIndianProps = {
  id?: string;
  title: string;
  intro: string[];
  featuredImage: MastersFeaturedImage;
  whyChoose: {
    title: string;
    cards: MastersWhyCard[];
  };
  eligibility: {
    title: string;
    items: string[];
  };
  universitiesTable?: MastersUniversitiesTable;
  applicationProcess?: MastersApplicationProcess;
  children?: React.ReactNode;
  className?: string;
};

function MastersUniversities({ title, rows }: MastersUniversitiesTable) {
  if (!rows.length) return null;

  return (
    <CountryTableBlock title={title} className="mt-7 lg:mt-4">
      <CountryTableWrap>
        <CountryMarkupTable minWidthClass="max-lg:min-w-[700px]">
          <CountryTableHead>
            <tr>
              <CountryTableHeaderCell className="w-[24%]">
                University
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[44%]">
                Popular MS Programmes
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[15%]">
                Min. CGPA / %
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[17%] text-right">
                Fees (approx)
              </CountryTableHeaderCell>
            </tr>
          </CountryTableHead>
          <CountryTableBodyStriped>
            {rows.map((row) => (
              <tr key={row.university}>
                <CountryTableCell className="!font-bold !text-[#002147]">
                  {row.university}
                </CountryTableCell>
                <CountryTableCell>{row.popularProgrammes}</CountryTableCell>
                <CountryTableCell className="whitespace-nowrap text-slate-600 max-lg:whitespace-normal">
                  {row.minCgpa}
                </CountryTableCell>
                <CountryTableCell className="text-right whitespace-nowrap !text-slate-700 max-lg:whitespace-normal">
                  {row.fees}
                </CountryTableCell>
              </tr>
            ))}
          </CountryTableBodyStriped>
        </CountryMarkupTable>
      </CountryTableWrap>
    </CountryTableBlock>
  );
}

function MastersProcess({ title, steps }: MastersApplicationProcess) {
  if (!steps.length) return null;

  return (
    <CountryGradientBanner className="mt-5 lg:mt-3.5">
      <p className="m-0 flex items-center gap-2 text-[0.95rem] font-extrabold leading-snug text-white lg:text-[0.9rem]">
        <MdInfoOutline
          className="h-[1.15rem] w-[1.15rem] shrink-0 text-white/90"
          aria-hidden
        />
        {title}
      </p>
      <ul className="m-0 mt-3.5 list-none p-0 lg:mt-3" role="list">
        {steps.map((step) => (
          <li
            key={step}
            className="flex items-start gap-2 py-1.5 text-sm leading-snug text-white/90 lg:py-1 lg:text-[0.8125rem]"
          >
            <MdArrowRightAlt
              className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-white/90"
              aria-hidden
            />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </CountryGradientBanner>
  );
}

function WhyIcon({ type }: { type: MastersWhyIcon }) {
  const className = "h-6 w-6";
  switch (type) {
    case "cost":
      return <MdSavings className={`${className} text-emerald-600`} aria-hidden />;
    case "global":
      return <MdPublic className={`${className} text-sky-600`} aria-hidden />;
    case "work":
      return <MdFlight className={`${className} text-violet-600`} aria-hidden />;
    case "time":
    default:
      return <MdTimer className={`${className} text-amber-600`} aria-hidden />;
  }
}

export default function MastersForIndian({
  id = "country-masters",
  title,
  intro,
  featuredImage,
  whyChoose,
  eligibility,
  universitiesTable,
  applicationProcess,
  children,
  className = "",
}: MastersForIndianProps) {
  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} className="mb-4 lg:mb-2.5" />

      <CountrySectionIntro paragraphs={intro} />

      <CountryFeaturedFigure
        src={featuredImage.src}
        alt={featuredImage.alt}
        caption={featuredImage.caption}
        figureClassName="rounded-2xl md:rounded-[1.25rem]"
      />

      {whyChoose.cards.length > 0 && (
        <>
          <CountrySubsectionTitle>{whyChoose.title}</CountrySubsectionTitle>
          <ul
            className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-3 lg:gap-2.5"
            role="list"
          >
            {whyChoose.cards.map((card) => (
              <li
                key={card.title}
                className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-4 lg:px-3 lg:py-3.5"
                role="listitem"
              >
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center lg:mb-2 lg:h-8 lg:w-8">
                  <WhyIcon type={card.icon} />
                </div>
                <h4 className="text-[0.9rem] font-bold leading-snug text-[#002147] lg:text-[0.8125rem]">
                  {card.title}
                </h4>
                <p className="mt-1.5 text-[0.8125rem] leading-snug text-slate-500 lg:mt-1 lg:text-xs lg:leading-normal">
                  {card.description}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}

      {eligibility.items.length > 0 && (
        <>
          <CountrySubsectionTitle>{eligibility.title}</CountrySubsectionTitle>
          <ul className="m-0 list-none p-0">
            {eligibility.items.map((item) => (
              <li
                key={item}
                className="mb-2.5 flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-slate-500 last:mb-0 lg:mb-2 lg:text-[0.8125rem]"
              >
                <MdCheckCircle
                  className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#00999e]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {universitiesTable ? (
        <MastersUniversities
          title={universitiesTable.title}
          rows={universitiesTable.rows}
        />
      ) : null}

      {applicationProcess ? (
        <MastersProcess
          title={applicationProcess.title}
          steps={applicationProcess.steps}
        />
      ) : null}

      {children ? (
        <div className="mt-6 min-w-0 lg:mt-4">{children}</div>
      ) : null}
    </section>
  );
}
