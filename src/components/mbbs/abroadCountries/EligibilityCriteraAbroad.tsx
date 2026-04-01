"use client";

import { useState } from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";
import {
  abroadDefaultEligibilityContent,
  type AbroadEligibilityContent,
} from "@/constants/abroad/russiaAbroadConstent";

type AudienceTab = "indian" | "npbd";

interface EligibilityCriteraAbroadProps {
  country: AbroadCountry;
  /** Full section copy (tables + special notes + headings). Defaults to `abroadDefaultEligibilityContent`. */
  eligibility?: AbroadEligibilityContent;
}

function interpolateCountryTitle(text: string, countryTitle: string) {
  return text.replace(/\{country\}/g, countryTitle);
}

export default function EligibilityCriteraAbroad({ country, eligibility }: EligibilityCriteraAbroadProps) {
  const [activeTab, setActiveTab] = useState<AudienceTab>("indian");
  const content = eligibility ?? abroadDefaultEligibilityContent;
  const { title } = country;

  const subtitle = interpolateCountryTitle(content.subtitle, title);
  const eyebrow = interpolateCountryTitle(content.eyebrow, title);

  const rows = content[activeTab];
  const specialNotes = content.specialNotes;

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="eligibility-criteria-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{eyebrow}</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              {content.titleLead}
              <span className={ABROAD_SECTION_ACCENT}>{title}</span>
              {content.titleTrail}
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>{subtitle}</p>
          </div>

          <div className="mt-9 rounded-2xl border border-[#E3E8F1] bg-white overflow-hidden">
            <div className="border-b border-[#E3E8F1] px-4 md:px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-6 md:gap-8">
                <button
                  type="button"
                  onClick={() => setActiveTab("indian")}
                  className={`text-[12px] md:text-[13px] font-semibold transition-colors ${
                    activeTab === "indian" ? "text-[#00999E]" : "text-[#6E7688] hover:text-[#143C83]"
                  }`}
                >
                  {content.tabIndian}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("npbd")}
                  className={`text-[12px] md:text-[13px] font-semibold transition-colors ${
                    activeTab === "npbd" ? "text-[#00999E]" : "text-[#6E7688] hover:text-[#143C83]"
                  }`}
                >
                  {content.tabNpbd}
                </button>
              </div>
            </div>

            <div>
              {rows.map((row, index) => (
                <div
                  key={`${row.label}-${index}`}
                  className={`grid grid-cols-1 md:grid-cols-[245px_1fr] border-b border-[#E8ECF3] last:border-b-0 ${
                    index % 2 === 1 ? "bg-[#F5F7FB]" : "bg-white"
                  }`}
                >
                  <div className="px-4 md:px-6 py-4 text-[15px] md:text-[16px] font-semibold text-[#1D3A72] border-b md:border-b-0 md:border-r border-[#E8ECF3]">
                    {row.label}
                  </div>
                  <div className="px-4 md:px-6 py-4 text-[15px] md:text-[16px] leading-[1.6] text-[#4D596E]">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {specialNotes.map((card) => (
              <article
                key={card.code}
                className={`rounded-2xl border bg-white px-5 py-5 md:px-6 md:py-6 border-l-[6px] ${card.accentClass}`}
              >
                <p className={`text-[14px] uppercase tracking-[0.14em] font-semibold ${card.accentClass.split(" ")[1]}`}>
                  {card.code} {card.heading}
                </p>
                <h3 className="mt-3 text-[#173B74] text-[22px] md:text-[24px] font-semibold leading-[1.35]">
                  {card.title}
                </h3>

                <div className="mt-4 space-y-3.5">
                  {card.points.map((point) => (
                    <p
                      key={point}
                      className="flex items-start gap-2 text-[#50607A] text-[15px] md:text-[16px] leading-[1.65]"
                    >
                      <span className={`mt-0.5 text-sm ${card.accentClass.split(" ")[1]}`} aria-hidden>
                        ✓
                      </span>
                      <span>{point}</span>
                    </p>
                  ))}
                </div>

                <div className={`mt-4 rounded-lg border px-4 py-3 ${card.noteBgClass}`}>
                  <p className="text-[#29415F] text-[14px] md:text-[15px] leading-[1.65]">
                    <span className="font-semibold">{card.footerTitle}</span> {card.footerText}
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
