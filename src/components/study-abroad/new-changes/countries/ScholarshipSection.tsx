"use client";

import React from "react";
import {
  countrySectionShell,
  CountrySectionHeading,
  CountrySectionIntro,
} from "./countrySectionUi";
import {
  MdEmojiEvents,
  MdOutlineSchool,
  MdSchool,
  MdStar,
  MdWorkspacePremium,
} from "react-icons/md";

export type ScholarshipCardIcon =
  | "award"
  | "commonwealth"
  | "university"
  | "merit"
  | "future"
  | "great"
  | "trust"
  | "earlyBird";

export type ScholarshipCard = {
  icon: ScholarshipCardIcon;
  title: string;
  badge: string;
  description: string;
};

export type ScholarshipTip = {
  label: string;
  text: string;
  highlightPhrases?: string[];
};

export type ScholarshipSectionProps = {
  id?: string;
  title: string;
  intro: string[];
  cards: ScholarshipCard[];
  tip: ScholarshipTip;
  className?: string;
};

function highlightText(text: string, phrases: string[]) {
  if (!phrases.length) return text;

  let nodes: React.ReactNode[] = [text];
  phrases.forEach((phrase) => {
    nodes = nodes.flatMap((node, i) => {
      if (typeof node !== "string") return [node];
      const parts = node.split(phrase);
      if (parts.length === 1) return [node];
      const out: React.ReactNode[] = [];
      parts.forEach((part, idx) => {
        if (part) out.push(part);
        if (idx < parts.length - 1) {
          out.push(
            <strong key={`${phrase}-${i}-${idx}`} className="font-extrabold text-[#0b5f63]">
              {phrase}
            </strong>
          );
        }
      });
      return out;
    });
  });
  return nodes;
}

function CardIcon({ icon }: { icon: ScholarshipCardIcon }) {
  const className = "h-5 w-5 text-[#00999e]";
  switch (icon) {
    case "award":
    case "great":
      return <MdEmojiEvents className={className} aria-hidden />;
    case "commonwealth":
    case "trust":
      return <MdWorkspacePremium className={className} aria-hidden />;
    case "merit":
    case "future":
      return <MdStar className={className} aria-hidden />;
    case "university":
    case "earlyBird":
    default:
      return <MdSchool className={className} aria-hidden />;
  }
}

export default function ScholarshipSection({
  id = "country-scholarships",
  title,
  intro,
  cards,
  tip,
  className = "",
}: ScholarshipSectionProps) {
  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} />
      <CountrySectionIntro paragraphs={intro} />

      <div
        className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-3 lg:gap-3"
        role="list"
      >
        {cards.map((card) => (
          <article
            key={card.title}
            role="listitem"
            className="rounded-2xl border border-slate-200 bg-white p-4 transition-[border-color,box-shadow] duration-200 sm:p-5 hover:border-[#00999e] hover:shadow-[0_0_0_2px_rgba(0,153,158,0.12)] lg:rounded-xl lg:p-4"
          >
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#d7eef0] bg-[#eff7f8] lg:h-9 lg:w-9"
                aria-hidden
              >
                <CardIcon icon={card.icon} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[1rem] font-extrabold leading-snug text-[#0b162c] lg:text-[0.9375rem]">
                  {card.title}
                </h3>
                <span className="mt-2 inline-flex rounded-full border border-[#ffe08a] bg-[#fff6cc] px-2.5 py-1 text-[0.72rem] font-bold leading-none text-[#8a5b00] lg:text-[0.68rem]">
                  {card.badge}
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 lg:mt-2.5 lg:text-[0.8125rem] lg:leading-[1.55]">
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <div
        className="mt-4 rounded-r-xl border border-[#bfecef] border-l-4 border-l-[#00999e] bg-[#e6f7f7] px-4 py-3 lg:mt-3 lg:px-3.5 lg:py-2.5"
        role="note"
        aria-label={tip.label}
      >
        <p className="text-sm leading-relaxed text-[#334155] lg:text-[0.8rem] lg:leading-[1.6]">
          <MdOutlineSchool
            className="mr-1.5 inline-block h-4 w-4 align-[-2px] text-[#00999e]"
            aria-hidden
          />
          <span className="font-extrabold text-[#0b5f63]">{tip.label}:</span>{" "}
          {highlightText(tip.text, tip.highlightPhrases ?? [])}
        </p>
      </div>
    </section>
  );
}
