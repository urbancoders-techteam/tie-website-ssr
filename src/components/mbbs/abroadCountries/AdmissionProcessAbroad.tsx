"use client";

import { useEffect, useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";
import {
  abroadDefaultAdmissionProcessContent,
  type AbroadAdmissionProcessContent,
} from "@/constants/abroad/russiaAbroadConstent";

interface AdmissionProcessAbroadProps {
  country: AbroadCountry;
  /** Full hero + steps. Defaults to `abroadDefaultAdmissionProcessContent`. */
  process?: AbroadAdmissionProcessContent;
}

function interpolateCountryTitle(text: string, countryTitle: string) {
  return text.replace(/\{country\}/g, countryTitle);
}

export default function AdmissionProcessAbroad({ country, process }: AdmissionProcessAbroadProps) {
  const content = process ?? abroadDefaultAdmissionProcessContent;
  const steps = content.steps;
  const uid = useId();
  const [openIndex, setOpenIndex] = useState(0);

  const { title } = country;
  const eyebrow = interpolateCountryTitle(content.eyebrow, title);
  const subtitle = interpolateCountryTitle(content.subtitle, title);

  useEffect(() => {
    setOpenIndex(0);
  }, [country.path]);

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="admission-process-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{eyebrow}</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              {content.titleLead}
              {title}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
              {content.titleTrail}
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>{subtitle}</p>
          </div>

          <div className="mt-9 space-y-3 md:hidden">
            {steps.map((step, index) => {
              const isOpen = openIndex === index;
              const headerId = `${uid}-admission-h-${index}`;
              const panelId = `${uid}-admission-p-${index}`;
              return (
                <div
                  key={`${step.title}-${index}`}
                  className="overflow-hidden rounded-2xl border border-[#E3E8F1] bg-white shadow-[0_2px_12px_rgba(15,40,95,0.06)]"
                >
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(index)}
                    className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-[#F8FAFC]"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00999E] text-[14px] font-semibold text-white shadow-sm"
                      aria-hidden
                    >
                      {index + 1}
                    </div>
                    <span className="min-w-0 flex-1 pt-1.5 text-[16px] font-semibold leading-snug text-[#143C83]">
                      {step.title}
                    </span>
                    <FaChevronDown
                      className={`mt-2 h-4 w-4 shrink-0 text-[#8B93A4] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#EEF1F6] pb-4 pl-[4.25rem] pr-4 pt-3 text-[15px] font-medium leading-[1.65] text-[#6A7384]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 hidden grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-6">
            {steps.map((step, index) => (
              <article
                key={`${step.title}-${index}`}
                className="flex gap-4 rounded-2xl border border-[#E3E8F1] bg-white p-5 md:p-6 shadow-[0_2px_12px_rgba(15,40,95,0.06)]"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00999E] text-[15px] font-semibold text-white shadow-sm"
                  aria-hidden
                >
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[18px] font-semibold leading-[1.35] text-[#143C83] md:text-[20px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-medium leading-[1.65] text-[#6A7384] md:text-[16px]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
