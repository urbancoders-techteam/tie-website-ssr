"use client";

import ModalTrigger from "@/components/ModalTrigger";
import React from "react";
import {
  MdBolt,
  MdFlight,
  MdOutlineSchool,
  MdPublic,
  MdScience,
  MdWorkOutline,
} from "react-icons/md";
import { SectionIntro, SectionTitle, sectionShell } from "./countrySectionUi";

export type WhyStudyCardIcon =
  | "graduation"
  | "bolt"
  | "flight"
  | "globe"
  | "briefcase"
  | "science";

export type WhyStudyCard = {
  icon: WhyStudyCardIcon;
  title: string;
  description: string;
  featured?: boolean;
};

export type WhyStudyKeyFact = {
  badge: string;
  label: string;
  text: string;
  highlightPhrases?: string[];
};

export type WhyStudyCta = {
  heading: string;
  subtext: string;
  buttonText: string;
};

export type WhyStudyProps = {
  id?: string;
  title: string;
  intro: string[];
  cards: WhyStudyCard[];
  keyFact: WhyStudyKeyFact;
  cta: WhyStudyCta;
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
            <strong key={`${phrase}-${i}-${idx}`} className="font-bold text-[#007f83]">
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

function CardIcon({ type }: { type: WhyStudyCardIcon }) {
  const className = "h-7 w-7 lg:h-[1.35rem] lg:w-[1.35rem]";
  switch (type) {
    case "bolt":
      return <MdBolt className={`${className} text-amber-500`} aria-hidden />;
    case "flight":
      return <MdFlight className={`${className} text-sky-600`} aria-hidden />;
    case "globe":
      return <MdPublic className={`${className} text-emerald-600`} aria-hidden />;
    case "briefcase":
      return <MdWorkOutline className={`${className} text-amber-800`} aria-hidden />;
    case "science":
      return <MdScience className={`${className} text-violet-600`} aria-hidden />;
    case "graduation":
    default:
      return (
        <MdOutlineSchool className={`${className} text-[#00999e]`} aria-hidden />
      );
  }
}

export default function WhyStudy({
  id = "country-why-study",
  title,
  intro,
  cards,
  keyFact,
  cta,
  className = "",
}: WhyStudyProps) {
  if (!cards.length) return null;

  const featuredIndex = cards.findIndex((c) => c.featured);

  return (
    <section id={id} className={sectionShell(className)}>
      <SectionTitle>{title}</SectionTitle>

      {intro.length > 0 && (
        <SectionIntro className="mt-3 lg:mt-3">
          {intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </SectionIntro>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-4 lg:grid-cols-3 lg:gap-[0.65rem]">
        {cards.map((card, index) => {
          const isFeatured =
            card.featured || (featuredIndex === -1 && index === 0);

          return (
            <article
              key={card.title}
              className={`rounded-[0.875rem] border bg-white px-[1.15rem] py-5 transition-[border-color,box-shadow] duration-200 lg:px-3 lg:py-[0.85rem] ${
                isFeatured
                  ? "border-[#00999e] shadow-[0_0_0_1px_rgba(0,153,158,0.15)]"
                  : "border-slate-200"
              }`}
            >
              <div className="mb-[0.85rem] flex h-10 w-10 items-center justify-center lg:mb-2 lg:h-8 lg:w-8">
                <CardIcon type={card.icon} />
              </div>
              <h3 className="text-[1rem] font-bold leading-snug text-[#002147] lg:text-[0.875rem]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748b] lg:mt-[0.35rem] lg:text-xs lg:leading-normal">
                {card.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 flex overflow-hidden rounded-xl border border-[#cbecef] bg-[#f0fafb] lg:mt-[0.85rem]">
        <div className="w-[5px] shrink-0 bg-[#00999e]" aria-hidden />
        <p className="px-[1.15rem] py-4 text-[0.9375rem] leading-[1.7] text-slate-600 lg:px-[0.85rem] lg:py-3 lg:text-[0.8125rem] lg:leading-snug">
          <span className="mr-1.5 inline-flex items-center justify-center rounded bg-[#00999e] px-1.5 py-0.5 align-middle text-[0.7rem] font-extrabold text-white">
            {keyFact.badge}
          </span>
          <strong className="font-bold text-[#00999e]">{keyFact.label}</strong>{" "}
          {highlightText(keyFact.text, keyFact.highlightPhrases ?? [])}
        </p>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#0a4d52] via-[#0d6b6f] to-[#00999e] px-6 py-7 after:pointer-events-none after:absolute after:right-[-3rem] after:top-1/2 after:h-56 after:w-56 after:-translate-y-1/2 after:rounded-full after:bg-white/[0.08] lg:mt-4 lg:px-4 lg:py-[1.15rem]">
        <div className="relative z-[1] max-w-xl">
          <h3 className="text-[clamp(1.1rem,2vw,1.35rem)] font-extrabold leading-snug text-white lg:text-[1.0625rem]">
            {cta.heading}
          </h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/90 lg:mt-[0.35rem] lg:text-[0.8125rem]">
            {cta.subtext}
          </p>
          <ModalTrigger
            variant="custom"
            text={cta.buttonText}
            className="!mt-[1.15rem] inline-flex !items-center !justify-center !gap-1.5 !rounded-full !border-0 !bg-[#3dd9de] !px-[1.35rem] !py-[0.7rem] !text-sm !font-bold !text-[#002147] !shadow-none transition-[background,transform] duration-150 hover:!bg-[#5ee4e8] lg:!mt-3 lg:!px-4 lg:!py-[0.55rem] lg:!text-[0.8125rem]"
          />
        </div>
      </div>
    </section>
  );
}
