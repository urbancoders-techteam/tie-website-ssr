"use client";

import { useMemo, useState } from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";

type EligibilityRow = {
  label: string;
  value: string;
};

type EligibilityContent = {
  indian: EligibilityRow[];
  npbd: EligibilityRow[];
};

type SpecialNoteCard = {
  code: string;
  heading: string;
  title: string;
  points: string[];
  footerTitle: string;
  footerText: string;
  accentClass: string;
  noteBgClass: string;
};

type AudienceTab = "indian" | "npbd";

interface EligibilityCriteraAbroadProps {
  country: AbroadCountry;
}

const DEFAULT_CONTENT: EligibilityContent = {
  indian: [
    {
      label: "Academic Qualification",
      value: "10+2 (HSC) with Physics, Chemistry, Biology and English from a recognised board.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "General: 50% aggregate in PCB. Reserved categories: as per current NMC criteria.",
    },
    {
      label: "NEET Score",
      value: "Valid NEET-UG qualifying score is mandatory for students planning to practice in India.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years on or before 31st December of the admission year.",
    },
    {
      label: "Documents",
      value: "Passport, marksheets, transfer certificate, medical fitness, and visa documentation.",
    },
    {
      label: "Language Tests",
      value: "IELTS/TOEFL only for select countries. Most MBBS abroad destinations do not require it.",
    },
    {
      label: "Post-Degree Licensing",
      value: "Graduates must clear required licensing pathways (FMGE/NExT, USMLE, PLAB, AMC etc.)",
    },
  ],
  npbd: [
    {
      label: "Academic Qualification",
      value: "Equivalent higher secondary qualification with PCB from a recognised board.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "Universities generally require strong science scores; exact cutoff varies by destination.",
    },
    {
      label: "Entry Examination",
      value: "NEET or equivalent national eligibility route as applicable to student citizenship pathway.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years at the time of admission in most universities.",
    },
    {
      label: "Documentation",
      value: "Passport, academics, embassy forms, financial documents, and attestation as required.",
    },
    {
      label: "Language Tests",
      value: "Most English-medium MBBS destinations do not require IELTS/TOEFL at admission stage.",
    },
    {
      label: "Post-Degree Licensing",
      value: "Graduates must follow licensing rules in home country / intended practice destination.",
    },
  ],
};

const RUSSIA_CONTENT: EligibilityContent = {
  indian: [
    {
      label: "Academic Qualification",
      value: "10+2 (HSC) with Physics, Chemistry, Biology and English as core subjects from a recognised board.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "General category: minimum 50% aggregate in Physics, Chemistry and Biology. SC/ST/OBC: minimum 40% aggregate.",
    },
    {
      label: "NEET Score",
      value: "Valid NEET-UG qualifying score mandatory (NMC regulations, effective March 2019). Score valid for 3 years from result date. No minimum score set by Russian universities - NEET qualification only.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years on or before 31st December of the admission year. No maximum age limit at most Russian universities.",
    },
    {
      label: "MEA Apostille",
      value: "All academic documents must be apostilled by Ministry of External Affairs (MEA), India - mandatory for visa and university admission.",
    },
    {
      label: "Language Tests",
      value: "No IELTS or TOEFL required for any of the 10 featured Russian medical universities.",
    },
    {
      label: "Post-Degree Licensing",
      value: "Must clear GOZZ (Russian state medical licensing exam) then FMGE or NExT to practice medicine in India.",
    },
  ],
  npbd: [
    {
      label: "Academic Qualification",
      value: "Equivalent higher secondary (science stream) with Biology, Chemistry, Physics and English.",
    },
    {
      label: "Minimum Marks in PCB",
      value: "Recommended 50%+ aggregate in PCB for smoother admissions and stronger university options.",
    },
    {
      label: "Entry Pathway",
      value: "Students should meet national eligibility norms applicable to eventual licensing destination.",
    },
    {
      label: "Age Requirement",
      value: "Minimum 17 years by year of admission in line with university and regulatory requirements.",
    },
    {
      label: "Document Legalisation",
      value: "Academic records, passport, and required documents must be properly attested/legalised before visa filing.",
    },
    {
      label: "Language Tests",
      value: "IELTS/TOEFL not required for Russia MBBS admissions in most universities.",
    },
    {
      label: "Post-Degree Licensing",
      value: "Graduates must clear licensing examination process of their home/target practice country after graduation.",
    },
  ],
};

const CONTENT_BY_COUNTRY: Record<string, EligibilityContent> = {
  russia: RUSSIA_CONTENT,
};

const DEFAULT_SPECIAL_NOTES: SpecialNoteCard[] = [
  {
    code: "NP",
    heading: "Special Note - Nepali Students",
    title: "Why this is the right choice for Nepal students",
    points: [
      "English-medium universities with affordable fee structures and supportive hostels.",
      "Eligibility and documentation aligned with destination-country admission requirements.",
      "Student communities and on-ground support help faster adaptation after arrival.",
      "Licensing planning is mapped based on intended country of medical practice.",
    ],
    footerTitle: "Nepal Licensing Note:",
    footerText:
      "Graduates must follow Nepal Medical Council (NMC-Nepal) licensing pathway before clinical practice in Nepal.",
    accentClass: "border-[#00B94A] text-[#2C9B5D]",
    noteBgClass: "bg-[#F1FAF4] border-[#D6EEDF]",
  },
  {
    code: "BD",
    heading: "Special Note - Bangladeshi Students",
    title: "Why this is the right choice for Bangladesh students",
    points: [
      "Universities selected for international recognition, safety, and curriculum quality.",
      "Admission support includes document compliance, visa support, and travel planning.",
      "City-level food and community insights are shared before final university shortlisting.",
      "Licensing guidance is provided based on Bangladesh and global career pathways.",
    ],
    footerTitle: "Bangladesh Licensing Note:",
    footerText:
      "Graduates must follow Bangladesh Medical and Dental Council (BMDC) licensing requirements for local practice.",
    accentClass: "border-[#0066FF] text-[#285F9A]",
    noteBgClass: "bg-[#F2F7FE] border-[#D6E3F5]",
  },
];

const RUSSIA_SPECIAL_NOTES: SpecialNoteCard[] = [
  {
    code: "NP",
    heading: "Special Note - Nepali Students",
    title: "Why Russia is the Right Choice for Nepal Students",
    points: [
      "No IELTS/TOEFL required - all 10 featured universities admit Nepali students without English proficiency tests.",
      "NEET or equivalent accepted - valid NEET score or Nepali national medical entry test both qualify for admission.",
      "Fees in NPR - total 6-year program ~ NPR 29-58 lakh (Rs. 18-36L x ~1.6 NPR/INR rate, varies by university).",
      "Established Nepali communities at Kazan KSMU, NSMU Arkhangelsk, and Tver TSMU - peer support from Day 1.",
      "Nepal NMC licensing pathway - Taksheela advises on both FMGE/NExT (India) and Nepal Medical Council exam routes after graduation.",
    ],
    footerTitle: "Nepal Licensing Note:",
    footerText:
      "Graduates must clear the Nepal Medical Council (NMC-Nepal) licensing examination to practice in Nepal. Taksheela counsels on both the Indian FMGE/NExT and the Nepal NMC pathways based on each student's career plan.",
    accentClass: "border-[#00B94A] text-[#2C9B5D]",
    noteBgClass: "bg-[#F1FAF4] border-[#D6EEDF]",
  },
  {
    code: "BD",
    heading: "Special Note - Bangladeshi Students",
    title: "Why Russia is the Right Choice for Bangladesh Students",
    points: [
      "Full DGME alignment - all 10 featured universities satisfy DGME Bangladesh requirements - English medium, WHO-listed, 6-year duration, government recognised.",
      "DGME entry test accepted - Bangladeshi students qualifying the national DGME-administered medical entry test are eligible - Taksheela confirms eligibility documentation.",
      "Fees in BDT - total 6-year program ~ BDT 24-49 lakh (Rs. 18-36L x ~1.35 BDT/INR rate, varies by university).",
      "Halal food confirmed at Kazan (large Muslim-majority Tatar population), Ufa/BSMU (Bashkortostan), and Moscow - key cities for Bangladeshi students.",
      "Taksheela BD support - DGME document compliance, Russian Embassy visa from Dhaka, certified translation, and full on-ground support after arrival.",
    ],
    footerTitle: "Bangladesh Licensing Note:",
    footerText:
      "BMDC (Bangladesh Medical and Dental Council) recognises degrees from WHO-listed, DGME-compliant universities. Graduates must clear the BMDC licensing exam to practice in Bangladesh. Taksheela advises on both BMDC and Indian FMGE pathways.",
    accentClass: "border-[#0066FF] text-[#285F9A]",
    noteBgClass: "bg-[#F2F7FE] border-[#D6E3F5]",
  },
];

const SPECIAL_NOTES_BY_COUNTRY: Record<string, SpecialNoteCard[]> = {
  russia: RUSSIA_SPECIAL_NOTES,
};

function getSlugFromPath(path: string) {
  return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
}

export default function EligibilityCriteraAbroad({ country }: EligibilityCriteraAbroadProps) {
  const [activeTab, setActiveTab] = useState<AudienceTab>("indian");
  const slug = getSlugFromPath(country.path);

  const content = useMemo(() => CONTENT_BY_COUNTRY[slug] ?? DEFAULT_CONTENT, [slug]);
  const specialNotes = useMemo(() => SPECIAL_NOTES_BY_COUNTRY[slug] ?? DEFAULT_SPECIAL_NOTES, [slug]);
  const rows = content[activeTab];

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="eligibility-criteria-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>Who Can Apply</p>
            <h2 className={ABROAD_SECTION_TITLE}>
              Eligibility Criteria for MBBS in{" "}
              <span className={ABROAD_SECTION_ACCENT}>{country.title}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              Requirements for students from India, Nepal and Bangladesh - based on NMC guidelines and university
              requirements.
            </p>
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
                  IN Indian Students
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("npbd")}
                  className={`text-[12px] md:text-[13px] font-semibold transition-colors ${
                    activeTab === "npbd" ? "text-[#00999E]" : "text-[#6E7688] hover:text-[#143C83]"
                  }`}
                >
                  NP BD Nepal & Bangladesh
                </button>
              </div>
              <div className="flex flex-col text-[#A5ACBA] leading-none select-none" aria-hidden>
                <span className="text-[11px]">▲</span>
                <span className="text-[11px] mt-0.5">▼</span>
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
                    <p key={point} className="flex items-start gap-2 text-[#50607A] text-[15px] md:text-[16px] leading-[1.65]">
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
