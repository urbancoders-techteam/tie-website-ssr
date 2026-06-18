"use client";

import Image from "next/image";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import {
  countrySectionShell,
  CountrySectionHeading,
  CountrySectionIntro,
} from "./countrySectionUi";

export type JobsFeaturedImage = {
  src: string;
  alt: string;
  caption: string;
};

export type JobsBullet = {
  text: string;
};

export type EmployerChip = {
  label: string;
};

export type SalaryRow = {
  role: string;
  salary: string;
  cities: string;
};

export type JobsAfterMSProps = {
  id?: string;
  title: string;
  intro: string[];
  featuredImage: JobsFeaturedImage;
  employers?: {
    title: string;
    chips: EmployerChip[];
  };
  careerTip?: {
    label: string;
    title: string;
    text: string;
  };
  graduateRoute: {
    title: string;
    description: string;
    bullets: JobsBullet[];
  };
  salaries: {
    title: string;
    rows: SalaryRow[];
  };
  className?: string;
};

function EmployersChips({
  title,
  chips,
}: {
  title: string;
  chips: EmployerChip[];
}) {
  if (!chips.length) return null;

  return (
    <div className="mt-5 min-w-0 lg:mt-4">
      <h3 className="mb-3 text-[1.0625rem] font-extrabold text-[#002147] lg:mb-2 lg:text-[1rem]">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2 lg:mt-2 lg:gap-1.5" role="list">
        {chips.map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center justify-center rounded-full border border-[#cbecef] bg-[#e9f7f8] px-2.5 py-1.5 text-xs font-bold leading-tight text-[#0b162c] lg:px-2 lg:py-1 lg:text-[0.6875rem]"
            role="listitem"
          >
            {chip.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function CareerTip({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="mt-3.5 flex min-w-0 overflow-hidden rounded-xl border border-[#cbecef] bg-[#effdff] lg:mt-2.5"
      role="note"
    >
      <div className="w-[5px] shrink-0 bg-[#00999e]" aria-hidden />
      <p className="m-0 px-4 py-3.5 text-sm leading-relaxed text-slate-700 lg:px-3.5 lg:py-3 lg:text-[0.8125rem] lg:leading-[1.55]">
        <strong className="font-extrabold text-[#00999e]">{label}</strong>{" "}
        <span className="font-extrabold text-[#0b162c]">{title}:</span> {text}
      </p>
    </div>
  );
}

function GraduateRoute({
  title,
  description,
  bullets,
}: JobsAfterMSProps["graduateRoute"]) {
  return (
    <div className="mt-6 min-w-0 lg:mt-4">
      <h3 className="mb-3 text-[1.0625rem] font-extrabold text-[#002147] lg:mb-2 lg:text-[1rem]">
        {title}
      </h3>
      <p className="m-0 text-[0.9375rem] leading-[1.7] text-slate-500 lg:text-[0.875rem] lg:leading-[1.6]">
        {description}
      </p>
      {bullets.length > 0 ? (
        <ul className="m-0 mt-3.5 list-none p-0 lg:mt-3">
          {bullets.map((b) => (
            <li
              key={b.text}
              className="mb-2.5 flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-slate-500 last:mb-0 lg:mb-2 lg:text-[0.8125rem]"
            >
              <MdCheckCircle
                className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-[#00999e]"
                aria-hidden
              />
              <span>{b.text}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function SalariesTable({ title, rows }: JobsAfterMSProps["salaries"]) {
  if (!rows.length) return null;

  return (
    <div className="mt-5 min-w-0 lg:mt-3.5">
      <h3 className="mb-3 text-[1.0625rem] font-extrabold text-[#002147] lg:mb-2 lg:text-[1rem]">
        {title}
      </h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white lg:rounded-lg">
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch] max-lg:max-w-full lg:overflow-x-visible">
          <table className="w-full min-w-[640px] table-fixed border-collapse text-sm max-lg:table-auto lg:min-w-0 lg:table-fixed lg:text-[0.8125rem] lg:leading-[1.45]">
            <thead className="bg-[#002147]">
              <tr>
                <th
                  scope="col"
                  className="w-[32%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  Role / Field
                </th>
                <th
                  scope="col"
                  className="w-[28%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  Average Starting Salary (UK)
                </th>
                <th
                  scope="col"
                  className="w-[40%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  In-Demand Cities
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.role}
                  className="border-b border-slate-200 last:border-0 even:bg-[#f4f8fb] odd:bg-white"
                >
                  <td className="px-3 py-2.5 align-top font-semibold text-slate-600 [overflow-wrap:anywhere] lg:px-2.5 lg:py-2">
                    {row.role}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2.5 align-top text-slate-700 max-lg:whitespace-normal lg:px-2.5 lg:py-2">
                    {row.salary}
                  </td>
                  <td className="px-3 py-2.5 align-top text-slate-500 [overflow-wrap:anywhere] lg:px-2.5 lg:py-2">
                    {row.cities}
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

export default function JobsAfterMS({
  id = "country-jobs-after-ms",
  title,
  intro,
  featuredImage,
  employers,
  careerTip,
  graduateRoute,
  salaries,
  className = "",
}: JobsAfterMSProps) {
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

      {employers && employers.chips.length > 0 ? (
        <EmployersChips title={employers.title} chips={employers.chips} />
      ) : null}

      {careerTip ? (
        <CareerTip
          label={careerTip.label}
          title={careerTip.title}
          text={careerTip.text}
        />
      ) : null}

      <GraduateRoute
        title={graduateRoute.title}
        description={graduateRoute.description}
        bullets={graduateRoute.bullets}
      />

      <SalariesTable title={salaries.title} rows={salaries.rows} />
    </section>
  );
}
