"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";

type QuickFactItem = {
  icon: string;
  label: string;
  value: string;
};

interface QuickFactsAbroadProps {
  country: AbroadCountry;
}

const DEFAULT_QUICK_FACTS: QuickFactItem[] = [
  { icon: "🎓", label: "Degree Awarded", value: "Equivalent MBBS/MD medical degree" },
  { icon: "⏱️", label: "Course Duration", value: "5-6 years (including internship)" },
  { icon: "📅", label: "Intakes", value: "Primary and secondary intakes by university" },
  { icon: "📋", label: "Eligibility", value: "10+2 PCB + NEET (as applicable)" },
  { icon: "🌐", label: "Medium of Instruction", value: "English medium available" },
  { icon: "💰", label: "Annual Tuition (Range)", value: "Varies by university and country" },
  { icon: "🏠", label: "Annual Living Cost", value: "Affordable student living options" },
  { icon: "✅", label: "Recognised By", value: "WHO · NMC · ECFMG · FAIMER" },
  { icon: "📊", label: "FMGE/NExT Readiness", value: "NMC-aligned curriculum pathways" },
  { icon: "👩‍🎓", label: "International Students", value: "Strong IN · NP · BD presence" },
];

const COUNTRY_QUICK_FACTS: Record<string, QuickFactItem[]> = {
  russia: [
    { icon: "🎓", label: "Degree Awarded", value: "MD Physician (equivalent to MBBS)" },
    { icon: "⏱️", label: "Course Duration", value: "6 Years (5 academic + 1 internship)" },
    { icon: "🗓️", label: "Intakes", value: "September (primary) · February (secondary)" },
    { icon: "🧾", label: "Eligibility", value: "50% PCB in 10+2 + NEET qualified" },
    { icon: "🌐", label: "Medium of Instruction", value: "English + Russian (clinical year subject)" },
    { icon: "💰", label: "Annual Tuition (Range)", value: "Rs. 2.7L - Rs. 8L / year" },
    { icon: "🏠", label: "Annual Living Cost", value: "Rs. 1.2 - Rs. 2.4 Lakhs / year" },
    { icon: "✅", label: "Recognised By", value: "WHO · NMC · ECFMG · FAIMER · WFME" },
    { icon: "📊", label: "FMGE Pass Rate 2024", value: "~29.5% overall · Up to 45.45% top unis" },
    { icon: "👩‍🎓", label: "Indian Students", value: "27,000+ (MEA, Dec 2025)" },
    { icon: "🏛️", label: "NMC-Compliant Universities", value: "50+ government medical universities" },
    { icon: "📝", label: "IELTS / TOEFL", value: "Not required for admission" },
  ],
};

function getSlugFromPath(path: string) {
  return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
}

function getQuickFactsByCountry(country: AbroadCountry) {
  const slug = getSlugFromPath(country.path);
  return COUNTRY_QUICK_FACTS[slug] ?? DEFAULT_QUICK_FACTS;
}

export default function QuickFactsAbroad({ country }: QuickFactsAbroadProps) {
  const quickFacts = getQuickFactsByCountry(country);

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="quick-facts-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>At A Glance</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              MBBS in {country.title} —{" "}
              <span className={ABROAD_SECTION_ACCENT}>Quick Facts</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              Key data every student from India, Nepal and Bangladesh needs before applying for MBBS in{" "}
              {country.title} 2025-26.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {quickFacts.map((fact) => (
              <article
                key={fact.label}
                className="group relative bg-white border-t-4 border-[#B43A4D] rounded-2xl px-5 py-5 shadow-[0_2px_12px_rgba(15,40,95,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(15,40,95,0.14)] hover:border-[#9F2C42]"
              >
                {/* <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-[#B43A4D]" /> */}
                <p className="text-2xl leading-none transition-transform duration-300 ease-out group-hover:scale-110">
                  {fact.icon}
                </p>
                <p className="mt-4 text-[11px] tracking-[0.12em] uppercase text-[#697389] font-semibold min-h-[30px]">
                  {fact.label}
                </p>
                <p className="mt-2 text-[20px] font-semibold leading-[1.45] text-[#143C83]">{fact.value}</p>
              </article>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
