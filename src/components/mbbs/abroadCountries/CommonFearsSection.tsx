"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadCountry } from "@/components/mbbs/abroadCountries/AbroadHeroSection";
import type { AbroadFearsContent, AbroadFearsItem } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

interface CommonFearsSectionProps {
  country: AbroadCountry;
  /** When set, pain/solution columns are driven from this object (fully custom). */
  fears?: AbroadFearsContent;
}

const DEFAULT_FEARS: AbroadFearsContent = {
  painTitle: "Common Pain Points",
  solutionTitle: "Taksheela's Solutions",
  painPoints: [
    {
      icon: "🎯",
      title: "Admission Uncertainty",
      description: "Students are unsure which universities are reliable and genuinely aligned with licensing goals.",
    },
    {
      icon: "💰",
      title: "Budget Planning Stress",
      description: "Families worry about hidden tuition, hostel, and forex costs while planning the full MBBS journey.",
    },
    {
      icon: "🧭",
      title: "Country Selection Confusion",
      description: "Choosing between multiple destinations without clear performance benchmarks creates indecision.",
    },
    {
      icon: "📚",
      title: "Licensing Exam Anxiety",
      description: "Students fear whether their university training will prepare them for FMGE/NExT pathways.",
    },
    {
      icon: "🍛",
      title: "Lifestyle Adjustment",
      description: "Questions around food, climate, language, and student support communities remain major concerns.",
    },
  ],
  solutions: [
    {
      icon: "✅",
      title: "Verified University Matching",
      description: "We shortlist only vetted, NMC-aligned universities based on your budget, profile, and career goals.",
    },
    {
      icon: "📊",
      title: "Transparent Cost Planning",
      description: "You get a clear, line-by-line fee and living-cost projection before any decision is finalized.",
    },
    {
      icon: "🧠",
      title: "Data-Backed Counselling",
      description: "Every recommendation is driven by outcomes, compliance, and student-fit instead of commission bias.",
    },
    {
      icon: "🎓",
      title: "FMGE/NExT-Oriented Guidance",
      description: "From day one, we align students with institutions and study systems that improve exam readiness.",
    },
    {
      icon: "🤝",
      title: "On-Ground Student Support",
      description: "Pre-departure orientation and active student communities help faster adaptation in new environments.",
    },
  ],
};

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
  const content = fears ?? DEFAULT_FEARS;

  return (
    <section className="bg-white py-12 md:py-16" id="common-fears-abroad">
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              Challenges & Solutions
            </p>
            <h2 className={ABROAD_SECTION_TITLE}>
              Common Fears About MBBS in {country.title} —{" "}
              <span className={ABROAD_SECTION_ACCENT}>And the Real Answers</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              Every aspiring student carries genuine concerns. Here is an honest breakdown of each challenge and
              exactly how Taksheela resolves it.
            </p>
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
