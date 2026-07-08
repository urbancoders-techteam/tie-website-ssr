"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";
import {
  abroadDefaultFearsContent,
  abroadDefaultFearsSectionContent,
  type AbroadFearsContent,
  type AbroadFearsItem,
} from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

interface CommonFearsSectionProps {
  country: AbroadCountry;
  /** Full section copy from `*AbroadConstent` (e.g. `russiaAbroadFearsContent`). Defaults to `abroadDefaultFearsContent`. */
  fears?: AbroadFearsContent;
}

function interpolateCountryTitle(text: string, countryTitle: string) {
  return text.replace(/\{country\}/g, countryTitle);
}

function ListItem({ item }: { item: AbroadFearsItem }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-[20px]" aria-hidden>
        {item.icon}
      </span>
      <div>
        <p className="text-[#13243D] text-[18px] md:text-[20px] font-medium leading-[1.35]">{item.title}</p>
        <p className="mt-1.5 text-[#596274] text-[15px] md:text-[16px] font-medium leading-[1.65]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function CommonFearsSection({ country, fears }: CommonFearsSectionProps) {
  const content = fears ?? abroadDefaultFearsContent;
  const section = content.section ?? abroadDefaultFearsSectionContent;
  const { title } = country;

  return (
    <section className="bg-white py-12 md:py-16" id="common-fears-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{interpolateCountryTitle(section.eyebrow, title)}</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              {section.titleLead} {" "}
              {title}
              {section.titleMiddle}
              <span className={ABROAD_SECTION_ACCENT}>{section.titleAccent}</span>
              {section.titleTrail}
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>{interpolateCountryTitle(section.subtitle, title)}</p>
          </div>

          <div className="mt-9 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-[#EEDADF] bg-[#FFF7F8] px-6 py-6 md:px-7 md:py-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#C05666] font-semibold">
                ⚠️ {content.painTitle}
              </p>
              <div className="mt-5 space-y-6">
                {content.painPoints.map((item) => (
                  <ListItem key={item.title} item={item} />
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-[#D5ECDD] bg-[#F2FBF4] px-6 py-6 md:px-7 md:py-7">
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#31A464] font-semibold">
                ✅ {content.solutionTitle}
              </p>
              <div className="mt-5 space-y-6">
                {content.solutions.map((item) => (
                  <ListItem key={item.title} item={item} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
