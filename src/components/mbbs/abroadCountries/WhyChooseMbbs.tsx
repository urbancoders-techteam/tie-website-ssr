"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";

type WhyChooseItem = {
  icon: string;
  title: string;
  description: string;
};

interface WhyChooseMbbsProps {
  country: AbroadCountry;
}

const DEFAULT_REASONS: WhyChooseItem[] = [
  {
    icon: "🎯",
    title: "Affordable and Transparent Costs",
    description:
      "Tuition and living costs remain significantly lower than many private alternatives, with clear fee structures.",
  },
  {
    icon: "✅",
    title: "Recognised Universities",
    description:
      "Students can target institutions listed under globally accepted frameworks and aligned with NMC pathways.",
  },
  {
    icon: "🌐",
    title: "English-Medium Learning",
    description:
      "Most popular destinations provide full English-medium programs for international medical aspirants.",
  },
  {
    icon: "🏥",
    title: "Clinical Exposure",
    description:
      "Teaching hospitals and practical rotations build patient-facing confidence and real-world readiness.",
  },
  {
    icon: "🚫",
    title: "Merit-Based Admissions",
    description:
      "No donation or capitation model in many destinations, making admission outcomes cleaner and fair.",
  },
  {
    icon: "👩‍🎓",
    title: "Strong Student Communities",
    description: "Indian, Nepali, and Bangladeshi student networks help smoother transition and peer support.",
  },
  {
    icon: "🎓",
    title: "Global Degree Mobility",
    description: "Graduates can pursue licensing pathways such as FMGE/NExT, USMLE, PLAB, or AMC as applicable.",
  },
  {
    icon: "📚",
    title: "Long-Term Career Foundation",
    description:
      "Structured curriculum, internships, and mentoring support students toward PG and specialist goals.",
  },
];

const RUSSIA_REASONS: WhyChooseItem[] = [
  {
    icon: "🔥",
    title: "Government-Subsidised Affordable Fees",
    description:
      "Annual tuition from Rs. 2.7 lakh at government universities - total 6-year program Rs. 18-36L versus Rs. 50L-1.5Cr at Indian private colleges. Russian government subsidises medical education structurally.",
  },
  {
    icon: "✅",
    title: "50+ NMC-Compliant Universities",
    description:
      "The largest pool of NMC-compliant medical institutions in any single country - maximum choice across cities, fee levels, and specialisations for students from all three target countries.",
  },
  {
    icon: "🌐",
    title: "English-Medium Programs, No IELTS",
    description:
      "All 10 featured universities offer MBBS entirely in English. Russian language is taught as a compulsory subject. No IELTS or TOEFL required for admission - accessible for all NEET-qualified students.",
  },
  {
    icon: "🏥",
    title: "World-Class Clinical Training",
    description:
      "Clinical rotations at large government teaching hospitals from Year 3. High patient volumes and diverse disease exposure - a significant advantage for FMGE preparation and real-world competence.",
  },
  {
    icon: "🚫",
    title: "Zero Donation or Capitation",
    description:
      "Admission is purely merit-based and transparent. No donation, no capitation, no management quota. You pay only the published fee, directly to the university - a stark contrast to Indian private colleges.",
  },
  {
    icon: "👥",
    title: "Largest Indian Student Community",
    description:
      "27,000+ Indians enrolled - the most developed Indian student ecosystem of any MBBS abroad destination. Peer mentorship, Indian food, Diwali celebrations, Holi on campus - a genuine home away from home.",
  },
  {
    icon: "🏅",
    title: "Globally Recognised Degrees",
    description:
      "WHO-listed, NMC-compliant degrees qualify graduates for FMGE/NExT (India), USMLE (USA), PLAB (UK), and AMC (Australia) - a genuinely global medical career from one degree.",
  },
  {
    icon: "🧪",
    title: "200+ Years of Medical Heritage",
    description:
      "Sechenov University founded 1758. Kazan State Medical University 1814. Russian medical education has been a global benchmark for over two centuries - producing Nobel laureates and internationally respected clinicians.",
  },
];

const REASONS_BY_COUNTRY: Record<string, WhyChooseItem[]> = {
  russia: RUSSIA_REASONS,
};

function getSlugFromPath(path: string) {
  return path.split("/").filter(Boolean).pop()?.toLowerCase() ?? "";
}

function getWhyChooseReasons(country: AbroadCountry) {
  const slug = getSlugFromPath(country.path);
  return REASONS_BY_COUNTRY[slug] ?? DEFAULT_REASONS;
}

export default function WhyChooseMbbs({ country }: WhyChooseMbbsProps) {
  const reasons = getWhyChooseReasons(country);

  return (
    <section className="bg-[#F4F6FB] py-12 md:py-16" id="why-choose-mbbs-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              Why Choose {country.title}
            </p>
            <h2 className={ABROAD_SECTION_TITLE}>
              Why Study MBBS in <span className={ABROAD_SECTION_ACCENT}>{country.title}</span>?
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              Eight evidence-backed reasons why {country.title} is a top MBBS abroad destination for students from
              India, Nepal and Bangladesh.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl border border-[#E3E8F1] bg-white px-5 py-5 shadow-[0_2px_10px_rgba(15,40,95,0.06)]"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF4F6] text-lg">
                  {reason.icon}
                </div>
                <h3 className="mt-4 text-[18px] font-semibold leading-[1.35] text-[#143C83] md:text-[20px]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-[#637086] text-[15px] md:text-[16px] leading-[1.65] font-medium">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
