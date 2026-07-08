"use client";

import { useEffect, useState } from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";
import {
  abroadDefaultWhyChooseMbbsContent,
  abroadDefaultWhyChooseMbbsSectionContent,
  type AbroadWhyChooseMbbsContent,
  type AbroadWhyChooseMbbsItem,
} from "@/constants/abroad/russiaAbroadConstent";

export type { AbroadWhyChooseMbbsContent, AbroadWhyChooseMbbsItem };

function interpolateCountryTitle(text: string, countryTitle: string) {
  return text.replace(/\{country\}/g, countryTitle);
}

interface WhyChooseMbbsProps {
  country: AbroadCountry;
  /** Section headings + reason cards from `*AbroadConstent` (e.g. `russiaAbroadWhyChooseMbbsContent`). */
  content?: AbroadWhyChooseMbbsContent;
}

const reasonCardClass =
  "flex h-full flex-col rounded-2xl border border-[#E3E8F1] bg-white px-5 py-5 shadow-[0_2px_10px_rgba(15,40,95,0.06)]";

function WhyChooseReasonCard({ reason }: { reason: AbroadWhyChooseMbbsItem }) {
  return (
    <article className={reasonCardClass}>
      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF4F6] text-lg">
        {reason.icon}
      </div>
      <h3 className="mt-4 text-[18px] font-semibold leading-[1.35] text-[#143C83] md:text-[20px]">
        {reason.title}
      </h3>
      <p className="mt-2 text-[15px] font-medium leading-[1.65] text-[#637086] md:text-[16px]">
        {reason.description}
      </p>
    </article>
  );
}

const MOBILE_AUTOPLAY_MS = 5000;

function WhyChooseMbbsMobileCarousel({
  reasons,
  countryTitle,
}: {
  reasons: AbroadWhyChooseMbbsItem[];
  countryTitle: string;
}) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (reasons.length <= 1) return;
    const tick = () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
      setSlide((s) => (s + 1) % reasons.length);
    };
    const id = setInterval(tick, MOBILE_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reasons.length]);

  if (reasons.length === 0) return null;

  const n = reasons.length;
  /** Track is n× viewport width; each slide is 1/n of track so translate % is relative to track (correct slide steps). */
  const trackPct = n * 100;
  const slidePct = 100 / n;
  const translatePct = (slide / n) * 100;

  return (
    <div className="mt-9 md:hidden">
      <div
        role="region"
        aria-label={`Why study MBBS in ${countryTitle}`}
        aria-roledescription="carousel"
        className="w-full max-w-full overflow-hidden rounded-2xl"
      >
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none will-change-transform"
          style={{
            width: `${trackPct}%`,
            transform: `translateX(-${translatePct}%)`,
          }}
        >
          {reasons.map((reason, i) => (
            <div
              key={`${reason.title}-${i}`}
              className="box-border min-w-0 shrink-0 px-1"
              style={{ width: `${slidePct}%` }}
              aria-hidden={i !== slide}
            >
              <WhyChooseReasonCard reason={reason} />
            </div>
          ))}
        </div>
      </div>

      {reasons.length > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Carousel pages">
          {reasons.map((reason, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === slide}
              aria-label={`Reason ${i + 1} of ${reasons.length}: ${reason.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === slide ? "w-7 bg-[#143C83]" : "w-2 bg-[#C5CCD8] hover:bg-[#9CA3AF]"
              }`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function WhyChooseMbbs({ country, content }: WhyChooseMbbsProps) {
  const section = content?.section ?? abroadDefaultWhyChooseMbbsSectionContent;
  const reasons = content?.reasons ?? abroadDefaultWhyChooseMbbsContent;
  const { title } = country;

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="why-choose-mbbs-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{interpolateCountryTitle(section.eyebrow, title)}</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              {section.titleLead}
              <span className={ABROAD_SECTION_ACCENT}>{title}</span>
              {" "}{section.titleTrail}
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>{interpolateCountryTitle(section.subtitle, title)}</p>
          </div>

          {/* Mobile: autoplay carousel */}
          <WhyChooseMbbsMobileCarousel
            key={country.path}
            reasons={reasons}
            countryTitle={country.title}
          />

          {/* Tablet & desktop: grid */}
          <div className="mt-9 hidden md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {reasons.map((reason) => (
              <WhyChooseReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
