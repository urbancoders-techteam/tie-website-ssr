"use client";

import type { ComponentType } from "react";

import ModalTrigger from "@/components/ModalTrigger";
import { ourProcessContent, type ProcessIconKey, type ProcessStep } from "@/constants/StudyAbroad/ourProcess";
import {
  FaClipboardList,
  FaCommentDots,
  FaEnvelope,
  FaFileAlt,
  FaGlobeAmericas,
  FaGraduationCap,
  FaHome,
  FaIdCard,
  FaLayerGroup,
  FaPlaneDeparture,
  FaUniversity,
} from "react-icons/fa";

const PROCESS_ICONS: Record<ProcessIconKey, ComponentType<{ className?: string }>> = {
  comments: FaCommentDots,
  clipboard: FaClipboardList,
  globe: FaGlobeAmericas,
  layers: FaLayerGroup,
  university: FaUniversity,
  document: FaFileAlt,
  envelope: FaEnvelope,
  gradcap: FaGraduationCap,
  idcard: FaIdCard,
  home: FaHome,
  plane: FaPlaneDeparture,
};

const ICON_COLORS: Record<ProcessIconKey, string> = {
  comments: "text-[#0ea5e9]",
  clipboard: "text-[#8b5cf6]",
  globe: "text-[#14b8a6]",
  layers: "text-[#f59e0b]",
  university: "text-[#6366f1]",
  document: "text-[#ec4899]",
  envelope: "text-[#10b981]",
  gradcap: "text-[#eab308]",
  idcard: "text-[#3b82f6]",
  home: "text-[#f97316]",
  plane: "text-[#06b6d4]",
};

function ProcessStepItem({ step }: { step: ProcessStep }) {
  const Icon = PROCESS_ICONS[step.icon] as ComponentType<{ className?: string }>;
  const color = ICON_COLORS[step.icon];

  return (
    <div className="group flex w-[40%] max-w-[8.25rem] cursor-default flex-col items-center sm:w-[28%] sm:max-w-[9.25rem] md:max-w-[9.75rem] lg:w-28 lg:max-w-none lg:shrink-0">
      <div className="relative">
        <div
          className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm transition-all duration-300 ease-out group-hover:border-[#14b8a6] group-hover:shadow-[0_0_0_3px_rgba(20,184,166,0.28)] group-hover:scale-[1.03] sm:h-16 sm:w-16 lg:h-[4.25rem] lg:w-[4.25rem]"
        >
          <Icon
            className={`h-4 w-4 transition-transform duration-300 ease-out group-hover:scale-110 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${color}`}
            aria-hidden
          />
        </div>
        <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#0d9488] px-0.5 text-[9px] font-bold text-white shadow ring-1 ring-white/40 sm:h-5 sm:min-w-[1.35rem] sm:text-[10px] lg:h-6 lg:min-w-[1.5rem] lg:text-[10px]">
          {step.num}
        </span>
      </div>
      <p className="mt-2.5 max-w-[9rem] text-center text-[10px] font-bold leading-snug text-[#001f3f] transition-colors duration-300 group-hover:text-[#0d9488] sm:mt-3 sm:max-w-[10rem] sm:text-[11px] lg:max-w-[7.5rem] lg:text-xs lg:leading-tight">
        {step.label}
      </p>
    </div>
  );
}

export default function OurProcess() {
  const { eyebrow, heading, subheading, steps, ctaText } = ourProcessContent;
  const row1 = steps.slice(0, 6);
  const row2 = steps.slice(6);

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e6faf8] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0d9488] sm:text-[11px]">
            <span className="text-[#14b8a6]" aria-hidden>
              ●
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#001f3f] sm:mt-5 sm:text-3xl lg:text-[2rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5a6570] sm:mt-5 sm:text-base">
            {subheading}
          </p>
        </header>

        {/* Mobile / tablet: responsive grid */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-10 sm:mt-12 sm:gap-x-6 sm:gap-y-11 lg:hidden">
          {steps.map((s) => (
            <ProcessStepItem key={s.id} step={s} />
          ))}
        </div>

        {/* Laptop+: centered 6 + 5 rows */}
        <div className="mt-10 hidden flex-col items-center gap-12 sm:mt-14 lg:flex">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 xl:gap-x-8">
            {row1.map((s) => (
              <ProcessStepItem key={s.id} step={s} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 xl:gap-x-8">
            {row2.map((s) => (
              <ProcessStepItem key={s.id} step={s} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <ModalTrigger
            text={ctaText}
            variant="custom"
            className="inline-flex w-full max-w-lg items-center justify-center rounded-full bg-[#14b8a6] px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_28px_rgba(20,184,166,0.35)] transition hover:bg-[#0d9488] sm:w-auto sm:px-10 sm:py-4 sm:text-[15px]"
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </section>
  );
}
