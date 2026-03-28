"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadConsiderBeforeContent } from "@/constants/abroad/russiaAbroadConstent";
import { ABROAD_SECTION_EYEBROW, ABROAD_SECTION_SUBTITLE, ABROAD_SECTION_TITLE } from "@/constants/abroadSectionTheme";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";

interface ConsiderBeforeAbroadProps {
  content: AbroadConsiderBeforeContent;
}

export default function ConsiderBeforeAbroad({ content }: ConsiderBeforeAbroadProps) {
  return (
    <section className="bg-[#F5F7FB] py-12 md:py-16" aria-labelledby="consider-before-heading">
      <ContainerWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="consider-before-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.title}
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:items-stretch">
            <div className="flex h-full flex-col rounded-2xl border border-emerald-200/90 bg-emerald-50/80 p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm"
                  aria-hidden
                >
                  <FaCheck className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-emerald-900 md:text-xl">{content.advantagesTitle}</h3>
              </div>
              <ul className="flex flex-1 flex-col gap-3.5 text-[15px] leading-relaxed text-[#1f2937]">
                {content.advantages.map((line, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 font-semibold text-emerald-700" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-rose-200/90 bg-rose-50/80 p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-amber-950 shadow-sm"
                  aria-hidden
                >
                  <FaExclamationTriangle className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-rose-900 md:text-xl">{content.challengesTitle}</h3>
              </div>
              <ul className="flex flex-1 flex-col gap-3.5 text-[15px] leading-relaxed text-[#1f2937]">
                {content.challenges.map((line, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 font-semibold text-rose-700/90" aria-hidden>
                      →
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
