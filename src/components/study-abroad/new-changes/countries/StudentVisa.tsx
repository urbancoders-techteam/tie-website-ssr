"use client";

import Image from "next/image";
import React from "react";
import { MdCheckCircle, MdWarningAmber } from "react-icons/md";
import {
  countrySectionShell,
  CountrySectionHeading,
  CountrySectionIntro,
} from "./countrySectionUi";

export type VisaStep = {
  number: number | string;
  title: string;
  description: string;
};

export type VisaFeaturedImage = {
  src: string;
  alt: string;
  caption: string;
};

export type VisaRequirementItem = {
  label: string;
  description: string;
};

export type VisaKeyDetailRow = {
  detail: string;
  information: string;
};

export type VisaKeyDetailsTable = {
  title: string;
  rows: VisaKeyDetailRow[];
};

export type VisaNote = {
  label: string;
  text: string;
};

export type StudentVisaProps = {
  id?: string;
  title: string;
  intro: string[];
  steps: VisaStep[];
  featuredImage: VisaFeaturedImage;
  requirements: {
    title: string;
    items: VisaRequirementItem[];
  };
  keyDetails?: VisaKeyDetailsTable;
  note?: VisaNote;
  className?: string;
};

function VisaSteps({ steps }: { steps: VisaStep[] }) {
  if (!steps.length) return null;

  return (
    <div
      className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:mt-3.5 lg:gap-2.5"
      role="list"
    >
      {steps.map((step) => (
        <div
          key={`${step.number}-${step.title}`}
          className="min-w-0 rounded-[0.9rem] border border-[#cbecef] bg-[#f3fbfb] p-4 lg:rounded-xl lg:p-3.5"
          role="listitem"
        >
          <div
            className="inline-flex h-[1.9rem] w-[1.9rem] items-center justify-center rounded-full bg-[#00999e] text-[0.8rem] font-extrabold text-white"
            aria-hidden
          >
            {step.number}
          </div>
          <h4 className="mt-2.5 text-[0.9rem] font-extrabold leading-snug text-[#0b162c] lg:mt-2 lg:text-[0.8125rem]">
            {step.title}
          </h4>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-slate-500 lg:mt-1 lg:text-xs lg:leading-[1.55]">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function VisaRequirements({
  title,
  items,
}: {
  title: string;
  items: VisaRequirementItem[];
}) {
  if (!items.length) return null;

  return (
    <div className="mt-6 min-w-0 lg:mt-4">
      <h3 className="mb-4 text-[1.0625rem] font-extrabold text-[#002147] lg:mb-2.5 lg:text-[1rem]">
        {title}
      </h3>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li
            key={item.label}
            className="mb-3 flex min-w-0 items-start gap-2.5 last:mb-0 lg:mb-2"
          >
            <MdCheckCircle
              className="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-[#00999e]"
              aria-hidden
            />
            <div className="flex min-w-0 flex-wrap gap-1.5 leading-relaxed">
              <span className="text-[0.9rem] font-bold text-[#0b162c] lg:text-[0.8125rem]">
                {item.label}
              </span>
              <span className="text-[0.9rem] text-slate-500 lg:text-[0.8125rem]">
                {item.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VisaKeyDetails({ title, rows }: VisaKeyDetailsTable) {
  if (!rows.length) return null;

  return (
    <div className="mt-6 min-w-0 lg:mt-4">
      <h3 className="mb-4 text-[1.0625rem] font-extrabold text-[#002147] lg:mb-2.5 lg:text-[1rem]">
        {title}
      </h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white lg:rounded-lg">
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch] max-lg:max-w-full lg:overflow-x-visible">
          <table className="w-full min-w-[520px] table-fixed border-collapse text-sm lg:min-w-0 lg:text-[0.8125rem] lg:leading-[1.45]">
            <thead className="bg-[#002147]">
              <tr>
                <th
                  scope="col"
                  className="w-[36%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  Detail
                </th>
                <th
                  scope="col"
                  className="w-[64%] px-3 py-2.5 text-left text-xs font-bold text-white lg:px-2.5 lg:py-2 lg:text-[0.6875rem] lg:leading-[1.35]"
                >
                  Information
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.detail}
                  className="border-b border-slate-200 last:border-0 even:bg-[#f4f8fb] odd:bg-white"
                >
                  <td className="px-3 py-2.5 align-top font-semibold text-slate-600 lg:px-2.5 lg:py-2">
                    {row.detail}
                  </td>
                  <td className="px-3 py-2.5 align-top text-slate-500 [overflow-wrap:anywhere] lg:px-2.5 lg:py-2">
                    {row.information}
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

function VisaNoteCallout({ label, text }: VisaNote) {
  return (
    <div
      className="mt-3.5 flex min-w-0 overflow-hidden rounded-xl border border-amber-200 bg-amber-50 lg:mt-2.5"
      role="note"
    >
      <div className="w-[5px] shrink-0 bg-amber-500" aria-hidden />
      <p className="m-0 px-4 py-3.5 text-sm leading-relaxed text-stone-500 lg:px-3.5 lg:py-3 lg:text-[0.8125rem] lg:leading-[1.55]">
        <MdWarningAmber
          className="mr-1.5 inline-block h-[1.1rem] w-[1.1rem] align-[-0.2em] text-amber-500"
          aria-hidden
        />
        <strong className="font-extrabold text-amber-800">{label}:</strong> {text}
      </p>
    </div>
  );
}

export default function StudentVisa({
  id = "country-student-visa",
  title,
  intro,
  steps,
  featuredImage,
  requirements,
  keyDetails,
  note,
  className = "",
}: StudentVisaProps) {
  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} />
      <CountrySectionIntro paragraphs={intro} className="max-w-[60rem]" />

      <VisaSteps steps={steps} />

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

      <VisaRequirements title={requirements.title} items={requirements.items} />

      {keyDetails ? (
        <VisaKeyDetails title={keyDetails.title} rows={keyDetails.rows} />
      ) : null}

      {note ? <VisaNoteCallout label={note.label} text={note.text} /> : null}
    </section>
  );
}
