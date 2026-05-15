"use client";

import { FaExclamationTriangle } from "react-icons/fa";

import ModalTrigger from "@/components/ModalTrigger";
import { englishRequirementContent } from "@/constants/study_abroad/englishRequirement";

export default function EnglishRequirement() {
  const {
    eyebrow,
    heading,
    intro,
    testTags,
    importantLead,
    importantBody,
    primaryCta,
    moiCardHeading,
    moiCardIntro,
    moiSteps,
    moiSecondaryCta,
  } = englishRequirementContent;

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16 xl:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-8 xl:gap-12">
          {/* Left — 50% on laptop+ */}
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e6faf8] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0d9488] sm:text-[11px]">
              <span className="text-[#14b8a6]" aria-hidden>
                ●
              </span>
              {eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#001f3f] sm:mt-5 sm:text-3xl lg:mt-4 lg:text-[1.6rem] lg:leading-snug xl:text-[1.85rem] xl:leading-tight">
              {heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5a6570] sm:text-base lg:mt-3 lg:max-w-none lg:text-[15px] xl:max-w-xl">
              {intro}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-2.5 lg:gap-2">
              {testTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1.5 text-left text-[11px] font-semibold leading-snug text-[#001f3f] shadow-sm sm:gap-2 sm:px-3 sm:py-2 sm:text-[12px] lg:text-[11px] xl:text-[13px]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14b8a6]" aria-hidden />
                  <span className="min-w-0">{tag}</span>
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-xl border-l-4 border-[#f59e0b] bg-[#fffbeb] px-3.5 py-3 sm:mt-6 sm:px-4 sm:py-3.5 lg:mt-4 lg:px-3.5 lg:py-2.5">
              <p className="flex gap-2 text-[13px] leading-snug text-[#78350f] sm:gap-2.5 sm:text-sm lg:text-[12.5px] lg:leading-relaxed xl:text-sm">
                <FaExclamationTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#ea580c] sm:h-5 sm:w-5" aria-hidden />
                <span>
                  <strong className="font-bold">{importantLead}</strong> {importantBody}
                </span>
              </p>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-5">
              <ModalTrigger
                text={primaryCta}
                variant="custom"
                className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-[#14b8a6] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_10px_28px_rgba(20,184,166,0.3)] transition hover:bg-[#0d9488] sm:w-auto sm:px-8 sm:py-3.5 sm:text-[15px] lg:max-w-full lg:px-6 lg:py-3 lg:text-[13px] xl:max-w-md xl:py-4 xl:text-[15px]"
                redirectPath="/thankyou"
              />
            </div>
          </div>

          {/* Right — MOI card: tighter on lg–xl so it fits laptop viewports */}
          <div className="min-w-0">
            <div className="flex flex-col rounded-2xl border border-[#0f2847]/80 bg-[#0a1628] p-5 shadow-[0_16px_40px_rgba(0,31,63,0.16)] sm:rounded-3xl sm:p-6 lg:p-3.5 xl:p-7">
              <h3 className="text-lg font-extrabold leading-tight text-white sm:text-xl lg:text-[0.95rem] xl:text-2xl">
                {moiCardHeading}
              </h3>
              <p
                className="mt-2 text-[13px] leading-snug text-white/75 sm:mt-2.5 sm:text-sm sm:leading-relaxed lg:mt-1.5 lg:text-[11px] lg:leading-snug lg:line-clamp-2 xl:mt-4 xl:line-clamp-none xl:text-[15px] xl:leading-relaxed"
                title={moiCardIntro}
              >
                {moiCardIntro}
              </p>

              <ol className="mt-3 space-y-3 sm:mt-4 sm:space-y-3.5 lg:mt-2 lg:space-y-1.5 xl:mt-5 xl:space-y-4">
                {moiSteps.map((step) => (
                  <li key={step.num} className="flex gap-2 sm:gap-2.5 lg:gap-2 lg:items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[11px] font-bold text-white sm:h-8 sm:w-8 sm:text-xs lg:h-5 lg:w-5 lg:text-[10px] xl:h-8 xl:w-8 xl:text-sm">
                      {step.num}
                    </span>
                    <div className="min-w-0 lg:-mt-0.5">
                      <p className="text-sm font-bold leading-tight text-[#5eead4] sm:text-[15px] lg:text-[11px] xl:text-base">
                        {step.title}
                      </p>
                      <p
                        className="mt-0.5 text-[12px] leading-snug text-white/85 sm:mt-1 sm:text-[13px] sm:leading-relaxed lg:mt-0 lg:text-[11px] lg:leading-[1.35] lg:line-clamp-2 xl:mt-1.5 xl:line-clamp-none xl:text-sm xl:leading-relaxed"
                        title={step.body}
                      >
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-4 sm:mt-6 lg:mt-2.5 xl:mt-8">
                <ModalTrigger
                  text={moiSecondaryCta}
                  variant="custom"
                  className="flex w-full items-center justify-center rounded-full bg-white px-3 py-2.5 text-center text-[11px] font-bold leading-snug text-[#14b8a6] shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition hover:bg-gray-100 sm:px-5 sm:py-3.5 sm:text-sm lg:py-2 lg:leading-tight lg:tracking-tight xl:py-4 xl:text-[15px]"
                  redirectPath="/thankyou"
                  title={moiSecondaryCta}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
