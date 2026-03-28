"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";
import type { AbroadOverviewContent } from "@/constants/abroad/russiaAbroadConstent";
import { ABROAD_SECTION_EYEBROW, ABROAD_SECTION_TITLE } from "@/constants/abroadSectionTheme";

interface OverviewAbroadProps {
  country: AbroadCountry;
  /** When set, all overview copy is driven from this object (fully custom). */
  overview?: AbroadOverviewContent;
}

function applyOverviewPlaceholders(
  template: string,
  countryName: string,
  universityCount: number
) {
  return template
    .replaceAll("{countryName}", countryName)
    .replaceAll("{universityCount}", String(universityCount));
}

function getOverviewParagraphs(country: AbroadCountry) {
  const safe = country.content?.trim() ?? "";
  if (!safe) return [];

  const parts = safe
    .split(/(?<=[.!?])\s+/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (parts.length <= 3) return parts;
  return [
    parts.slice(0, 2).join(" "),
    parts.slice(2, 4).join(" "),
    parts.slice(4).join(" "),
  ].filter(Boolean);
}

type OverviewView = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  officialLead: string;
  officialBefore: string;
  officialBold: string;
  officialAfter: string;
  media: AbroadOverviewContent["mediaPlaceholder"];
  recognised: AbroadOverviewContent["recognisedStrip"];
};

function buildOverviewView(
  country: AbroadCountry,
  overview: AbroadOverviewContent | undefined,
  universityCount: number
): OverviewView {
  if (overview) {
    const { leadBold, textBeforeBold, textBold, textAfterBold } = overview.officialData;
    return {
      eyebrow: overview.eyebrow,
      heading: overview.heading,
      paragraphs: overview.paragraphs,
      officialLead: leadBold,
      officialBefore: applyOverviewPlaceholders(textBeforeBold, country.title, universityCount),
      officialBold: applyOverviewPlaceholders(textBold, country.title, universityCount),
      officialAfter: textAfterBold,
      media: overview.mediaPlaceholder,
      recognised: overview.recognisedStrip,
    };
  }

  return {
    eyebrow: "Overview",
    heading: `Overview of MBBS in ${country.title}`,
    paragraphs: getOverviewParagraphs(country),
    officialLead: "Official Data (MEA, Dec 2025):",
    officialBefore: `${country.title} has `,
    officialBold: `${universityCount}+ recognised medical universities`,
    officialAfter:
      " and remains one of the strongest MBBS destinations for South Asian students pursuing globally accepted medical degrees.",
    media: {
      emoji: "🏛️",
      title: `[${country.title} Medical University Campus Image]`,
      subtitle: "Replace with actual asset",
    },
    recognised: {
      label: "Recognised by:",
      body: "WHO (WDOMS) · NMC India · Russian Ministry of Health · ECFMG · FAIMER - enabling FMGE/NExT (India), USMLE (USA), PLAB (UK), AMC (Australia).",
    },
  };
}

export default function OverviewAbroad({ country, overview }: OverviewAbroadProps) {
  const universityCount = country.colleges?.length ?? 10;
  const view = buildOverviewView(country, overview, universityCount);

  return (
    <section className="bg-white py-10 md:py-14" id="overview-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8 lg:gap-12 items-start">
          <div>
            <p className={ABROAD_SECTION_EYEBROW}>{view.eyebrow}</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              {view.heading}
            </h2>

            <div className="mt-5 space-y-3.5 text-[15px] leading-relaxed text-[#5B6475] md:text-[16px] md:leading-[1.7]">
              {view.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 max-w-[840px] rounded-2xl bg-[#0E4797] text-white px-5 py-5 md:px-6 md:py-5">
              <p className="text-[15px] md:text-[17px] leading-[1.65]">
                <span className="font-semibold">{view.officialLead}</span> {view.officialBefore}
                <span className="font-semibold">{view.officialBold}</span>
                {view.officialAfter}
              </p>
            </div>
          </div>

          <div className="pt-1">
            <div className="rounded-2xl border border-[#E8ECF3] bg-gradient-to-b from-[#F1F3F8] to-[#F7F8FB] px-8 py-12 text-center min-h-[248px] flex flex-col justify-center">
              <div className="text-6xl text-[#8E93A8] leading-none">{view.media.emoji}</div>
              <p className="mt-6 text-[#646D7F] text-[20px]">{view.media.title}</p>
              <p className="mt-1 text-[#8E96A8] text-sm">{view.media.subtitle}</p>
            </div>

            <div className="mt-4 rounded-2xl border border-[#F0DBDF] bg-[#FFF8F8] px-5 py-4">
              <p className="text-[15px] leading-[1.6] text-[#525B6F]">
                <span className="font-semibold text-[#B45555]">{view.recognised.label}</span> {view.recognised.body}
              </p>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
