"use client";

import type { ComponentType } from "react";
import {
  FaBook,
  FaComments,
  FaGlobeAmericas,
  FaGraduationCap,
  FaHome,
  FaPlane,
  FaSuitcase,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

import ModalTrigger from "@/components/ModalTrigger";
import { whatTaksheelaContent } from "@/constants/study_abroad/whatTaksheela";

type SvgIconProps = { className?: string };

const FEATURE_ICONS: Record<string, ComponentType<SvgIconProps>> = {
  roadmap: FaBook,
  match: FaGlobeAmericas,
  documents: FiFileText,
  scholarship: FaGraduationCap,
  visa: FaPlane,
  accommodation: FaHome,
  predeparture: FaSuitcase,
  postenrol: FaComments,
};

/** Icon tile: subtle tinted panel + icon colour per card (matches reference “colourful” icons). */
const ICON_TILE: Record<string, { wrap: string; icon: string }> = {
  roadmap: { wrap: "bg-[#1a2d4a] text-[#6eb5ff]", icon: "text-[#8ec5ff]" },
  match: { wrap: "bg-[#153a3d] text-[#4dd4c4]", icon: "text-[#5eead4]" },
  documents: { wrap: "bg-[#2a1f45] text-[#b89cff]", icon: "text-[#c4b5fd]" },
  scholarship: { wrap: "bg-[#1a3528] text-[#6ee7a8]", icon: "text-[#86efac]" },
  visa: { wrap: "bg-[#1a2840] text-[#7cb8ff]", icon: "text-[#93c5fd]" },
  accommodation: { wrap: "bg-[#3a2818] text-[#fbbf77]", icon: "text-[#fcd34d]" },
  predeparture: { wrap: "bg-[#3a2440] text-[#f0abfc]", icon: "text-[#e879f9]" },
  postenrol: { wrap: "bg-[#153535] text-[#5eead4]", icon: "text-[#5eead4]" },
};

export default function WhatTaksheela() {
  const { eyebrow, heading, description, features, ctaText } = whatTaksheelaContent;

  return (
    <section className="relative overflow-hidden bg-[#050d1a] py-12 sm:py-14 lg:py-16">
      {/* Corner glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#0fb3a9]/25 blur-[100px] sm:h-[480px] sm:w-[480px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full bg-[#0a7a8f]/30 blur-[90px] sm:h-[440px] sm:w-[440px]"
      />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/95 sm:text-[11px]">
            <span className="text-[#5eead4]" aria-hidden>
              ●
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:mt-7 sm:text-3xl sm:leading-[1.2] lg:text-[2rem] xl:text-[2.125rem] xl:leading-snug">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {features.map((f) => {
            const Icon = FEATURE_ICONS[f.id] ?? FaBook;
            const tile = ICON_TILE[f.id] ?? ICON_TILE.roadmap;

            return (
              <article
                key={f.id}
                className="flex flex-col rounded-2xl border border-[#1e3a52]/80 bg-[#111d2e]/95 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tile.wrap}`}
                  >
                    <Icon className={`h-5 w-5 ${tile.icon}`} aria-hidden />
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-bold leading-snug text-white sm:text-base">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65 sm:text-sm">{f.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <ModalTrigger
            text={ctaText}
            variant="custom"
            className="inline-flex w-full max-w-xl items-center justify-center rounded-full bg-[#0fb3a9] px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_12px_40px_rgba(15,179,169,0.35)] transition hover:bg-[#0ca89f] sm:w-auto sm:px-10 sm:py-4 sm:text-[15px]"
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </section>
  );
}
