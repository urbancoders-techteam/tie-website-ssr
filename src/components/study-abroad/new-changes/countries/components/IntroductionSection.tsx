"use client";

import Image from "next/image";
import React from "react";
import {
  MdApartment,
  MdAssignment,
  MdCalendarToday,
  MdFlight,
  MdGroups,
  MdOutlineSchool,
  MdPublic,
} from "react-icons/md";
import {
  SectionHeading,
  SectionIntro,
  sectionShell,
} from "./countrySectionUi";

export type IntroductionGalleryIcon = "building" | "campus" | "globe" | "community";

export type IntroductionGalleryItem = {
  src: string;
  label: string;
  wide?: boolean;
  icon?: IntroductionGalleryIcon;
};

export type IntroductionStatIcon =
  | "building"
  | "globe"
  | "graduation"
  | "calendar"
  | "flight"
  | "clipboard";

export type IntroductionStatItem = {
  icon: IntroductionStatIcon;
  label: string;
  value: string;
};

export type IntroductionSectionProps = {
  id?: string;
  heading: string;
  paragraphs: string[];
  highlightPhrases?: string[];
  gallery: IntroductionGalleryItem[];
  stats: IntroductionStatItem[];
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
            <strong key={`${phrase}-${i}-${idx}`}>{phrase}</strong>
          );
        }
      });
      return out;
    });
  });
  return nodes;
}

function GalleryLabelIcon({ type }: { type?: IntroductionGalleryIcon }) {
  const className = "h-4 w-4 shrink-0 drop-shadow-sm lg:h-3.5 lg:w-3.5";
  switch (type) {
    case "campus":
      return <MdGroups className={className} aria-hidden />;
    case "globe":
    case "community":
      return <MdPublic className={className} aria-hidden />;
    case "building":
    default:
      return <MdApartment className={className} aria-hidden />;
  }
}

function StatIcon({ type }: { type: IntroductionStatIcon }) {
  const className = "h-7 w-7 lg:h-[1.35rem] lg:w-[1.35rem]";
  switch (type) {
    case "globe":
      return <MdPublic className={className} aria-hidden />;
    case "graduation":
      return <MdOutlineSchool className={className} aria-hidden />;
    case "calendar":
      return <MdCalendarToday className={className} aria-hidden />;
    case "flight":
      return <MdFlight className={className} aria-hidden />;
    case "clipboard":
      return <MdAssignment className={className} aria-hidden />;
    case "building":
    default:
      return <MdApartment className={className} aria-hidden />;
  }
}

export default function IntroductionSection({
  id = "country-intro",
  heading,
  paragraphs,
  highlightPhrases = [],
  gallery,
  stats,
  className = "",
}: IntroductionSectionProps) {
  return (
    <section id={id} className={sectionShell(className)}>
      <SectionHeading title={heading} />

      <SectionIntro tone="body">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {highlightText(paragraph, highlightPhrases)}
          </p>
        ))}
      </SectionIntro>

      {gallery.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-[4fr_3fr_3fr] sm:gap-[5px] sm:overflow-hidden sm:rounded-xl sm:bg-slate-200 sm:h-[280px] lg:mt-4 lg:h-[210px]">
          {gallery.map((item) => (
            <div
              key={item.label}
              className="relative h-[200px] w-full overflow-hidden rounded-xl bg-slate-200 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(to_top,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.28)_32%,transparent_62%)] sm:h-full sm:min-h-[280px] sm:rounded-none lg:min-h-[210px]"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 40vw, 400px"
                unoptimized
              />
              <span className="absolute bottom-[15px] left-[15px] z-[2] inline-flex items-center gap-1.5 text-[0.8125rem] font-bold leading-tight text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.65)] lg:bottom-3 lg:left-3 lg:text-xs">
                <GalleryLabelIcon type={item.icon} />
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {stats.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-3.5 min-[480px]:grid-cols-2 md:grid-cols-3 lg:mt-4 lg:gap-2.5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-indigo-100 bg-slate-50 px-3 py-[1.15rem] text-center lg:px-[0.45rem] lg:py-[0.65rem]"
            >
              <div className="mx-auto mb-[0.65rem] flex h-11 w-11 items-center justify-center text-[#00999e] lg:mb-[0.35rem] lg:h-8 lg:w-8">
                <StatIcon type={stat.icon} />
              </div>
              <p className="text-[0.625rem] font-bold uppercase leading-snug tracking-wider text-slate-500 lg:text-[0.5625rem]">
                {stat.label}
              </p>
              <p className="mt-1.5 text-[clamp(1.35rem,2.5vw,1.75rem)] font-extrabold leading-tight text-[#002147] lg:mt-[0.2rem] lg:text-[1.2rem]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
