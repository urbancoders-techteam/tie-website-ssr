"use client";

import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import {
  countrySectionShell,
  CountrySectionHeading,
  CountrySectionIntro,
} from "./countrySectionUi";

export type MbaFeaturedImage = {
  src: string;
  alt: string;
  caption: string;
};

export type MbaProgrammeRow = {
  businessSchool: string;
  duration: string;
  fees: string;
  ftRank: string;
};

export type MbaReasonBullet = {
  text: string;
};

export type MbaSectionProps = {
  id?: string;
  title: string;
  intro: string[];
  featuredImage: MbaFeaturedImage;
  programmes: {
    title: string;
    rows: MbaProgrammeRow[];
  };
  eligibility: {
    title: string;
    items: string[];
  };
  whyBanner: {
    title: string;
    bullets: MbaReasonBullet[];
  };
  className?: string;
};

function ProgrammeTable({ title, rows }: MbaSectionProps["programmes"]) {
  if (!rows.length) return null;

  return (
    <div className="mt-6 min-w-0 lg:mt-4">
      <h3 className="mb-3 text-base font-extrabold text-[#002147] lg:mb-2 lg:text-[0.9rem]">
        {title}
      </h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white lg:rounded-lg">
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch] max-lg:max-w-full lg:overflow-x-visible">
          <table className="w-full min-w-[720px] table-fixed border-collapse text-sm max-lg:table-auto lg:min-w-0 lg:table-fixed lg:text-[0.8125rem] lg:leading-[1.45]">
            <thead className="bg-[#002147]">
              <tr>
                <th
                  scope="col"
                  className="w-[42%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  Business School
                </th>
                <th
                  scope="col"
                  className="w-[18%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  MBA Duration
                </th>
                <th
                  scope="col"
                  className="w-[20%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  Approx Fees
                </th>
                <th
                  scope="col"
                  className="w-[20%] px-3 py-2.5 text-right text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  FT Global Rank
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.businessSchool}
                  className="border-b border-slate-200 last:border-0 even:bg-[#f4f8fb] odd:bg-white"
                >
                  <td className="px-3 py-2.5 align-top font-bold text-[#002147] [overflow-wrap:anywhere] lg:px-2.5 lg:py-2">
                    {row.businessSchool}
                  </td>
                  <td className="px-3 py-2.5 align-top text-slate-500 [overflow-wrap:anywhere] lg:px-2.5 lg:py-2">
                    {row.duration}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 align-top text-slate-700 max-lg:whitespace-normal lg:px-2.5 lg:py-2">
                    {row.fees}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 text-right align-top text-slate-700 max-lg:whitespace-normal lg:px-2.5 lg:py-2">
                    {row.ftRank}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function EligibilityList({ title, items }: MbaSectionProps["eligibility"]) {
  if (!items.length) return null;

  return (
    <div className="mt-6 min-w-0 lg:mt-4">
      <h3 className="mb-3 text-base font-extrabold text-[#002147] lg:mb-2 lg:text-[0.9rem]">
        {title}
      </h3>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
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
    </div>
  );
}

function WhyBanner({ title, bullets }: MbaSectionProps["whyBanner"]) {
  if (!bullets.length) return null;

  return (
    <div
      className="relative mt-5 overflow-hidden rounded-[1.25rem] bg-[#0b162c] p-5 lg:mt-3.5 lg:rounded-2xl lg:p-4"
      role="note"
    >
      <div className="relative z-[1]">
        <h4 className="m-0 text-[0.95rem] font-extrabold leading-snug text-white lg:text-[0.9rem]">
          {title}
        </h4>
        <ul className="m-0 mt-3.5 list-none p-0 lg:mt-3">
          {bullets.map((b) => (
            <li
              key={b.text}
              className="flex items-start gap-2 py-1.5 text-sm leading-snug text-white/90 lg:py-1.5 lg:text-[0.8125rem]"
            >
              <span className="mt-0.5 shrink-0 text-white/90" aria-hidden>
                →
              </span>
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function MbaSection({
  id = "country-mba",
  title,
  intro,
  featuredImage,
  programmes,
  eligibility,
  whyBanner,
  className = "",
}: MbaSectionProps) {
  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} />
      <CountrySectionIntro paragraphs={intro} />

      <figure className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:rounded-[1.25rem] lg:mt-3.5">
        <div className="relative aspect-[16/9] min-h-[200px] w-full max-h-[420px] bg-slate-200 lg:aspect-[2.35/1] lg:h-[185px] lg:max-h-[185px] lg:min-h-0">
          <Image
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 65vw"
            unoptimized
          />
        </div>
        <figcaption className="border-t border-slate-200 bg-[#f1f5f9] px-4 py-3.5 text-[0.8125rem] italic leading-snug text-slate-400 lg:px-3.5 lg:py-2.5 lg:text-xs">
          {featuredImage.caption}
        </figcaption>
      </figure>

      <ProgrammeTable title={programmes.title} rows={programmes.rows} />
      <EligibilityList title={eligibility.title} items={eligibility.items} />
      <WhyBanner title={whyBanner.title} bullets={whyBanner.bullets} />
    </section>
  );
}
