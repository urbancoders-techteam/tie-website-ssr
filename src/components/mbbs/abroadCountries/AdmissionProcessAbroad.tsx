"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";

type AdmissionStep = {
  title: string;
  description: string;
};

interface AdmissionProcessAbroadProps {
  country: AbroadCountry;
}

const DEFAULT_STEPS: AdmissionStep[] = [
  {
    title: "Free Counselling Session",
    description:
      "One-on-one session with a Taksheela specialist to assess your profile, budget, and shortlist suitable NMC-compliant universities.",
  },
  {
    title: "University Shortlist",
    description:
      "2–3 universities shortlisted with transparent fee breakdowns and track record so you can compare options clearly.",
  },
  {
    title: "Document Preparation",
    description:
      "Academic records, passport, photographs, medical certificate — compiled and verified as per embassy and university requirements.",
  },
  {
    title: "University Application",
    description:
      "We submit your application to the selected university and follow up until you receive a response.",
  },
  {
    title: "Admission Offer Letter",
    description:
      "Official offer letter received — your confirmed MBBS seat, secured through merit-based admission.",
  },
  {
    title: "Fee Payment",
    description:
      "Guided fee remittance through authorised channels directly to the university with full transparency.",
  },
  {
    title: "Visa Application",
    description:
      "Invitation and complete student visa support — documentation, medical tests, and embassy requirements.",
  },
  {
    title: "Pre-Departure & Arrival",
    description:
      "Orientation, travel checklist, and on-ground support after arrival for a smooth start abroad.",
  },
];

const RUSSIA_STEPS: AdmissionStep[] = [
  {
    title: "Free Counselling Session",
    description:
      "1:1 session with a Taksheela Russia specialist — assesses NEET score, budget, city preference, and maps the ideal NMC-compliant university for your profile.",
  },
  {
    title: "University Shortlist",
    description:
      "2-3 NMC-compliant, WHO-listed universities shortlisted with complete, transparent fee breakdowns and FMGE track record for each option.",
  },
  {
    title: "Document Preparation & Apostille",
    description:
      "10th/12th marksheets, NEET scorecard, passport, photographs, medical certificate — compiled and apostilled for Indian students. Nepal/BD students receive equivalent guidance.",
  },
  {
    title: "University Application",
    description:
      "We submit your application directly to the selected university and handle all follow-ups until confirmation is received.",
  },
  {
    title: "Admission Offer Letter",
    description:
      "Official Offer Letter received — your confirmed MBBS seat in Russia, secured without any donation or intermediary payment.",
  },
  {
    title: "Fee Payment",
    description:
      "Guided fee remittance through RBI-authorised channels directly to the university. No hidden fees, no agent commissions, no surprises.",
  },
  {
    title: "Visa Application",
    description:
      "University issues visa invitation. Taksheela prepares complete student visa package — medical tests, insurance, SOP compliant with Russian Embassy requirements.",
  },
  {
    title: "Pre-Departure & Arrival",
    description:
      "Pre-departure orientation covering forex, winter checklist, and flight planning. Airport pickup and first-week support by a local Taksheela representative in Russia.",
  },
];

const STEPS_BY_COUNTRY: Record<string, AdmissionStep[]> = {
  russia: RUSSIA_STEPS,
};

function getSlugFromPath(path: string) {
  return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
}

export default function AdmissionProcessAbroad({ country }: AdmissionProcessAbroadProps) {
  const slug = getSlugFromPath(country.path);
  const steps = STEPS_BY_COUNTRY[slug] ?? DEFAULT_STEPS;

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="admission-process-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>Step by Step</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              MBBS in {country.title}{" "}
              <span className={ABROAD_SECTION_ACCENT}>— Admission Process</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              No donation, no entrance test beyond NEET, no management quota. Fully merit-based and completely guided by
              Taksheela from start to arrival.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-4 rounded-2xl border border-[#E3E8F1] bg-white p-5 md:p-6 shadow-[0_2px_12px_rgba(15,40,95,0.06)]"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00999E] text-[15px] font-semibold text-white shadow-sm"
                  aria-hidden
                >
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[#143C83] text-[18px] md:text-[20px] font-semibold leading-[1.35]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[#6A7384] text-[15px] md:text-[16px] leading-[1.65] font-medium">
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
