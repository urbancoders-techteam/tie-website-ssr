"use client";

import type { ComponentType } from "react";
import {
  FaBookOpen,
  FaBrain,
  FaBriefcase,
  FaChartBar,
  FaCog,
  FaGraduationCap,
  FaHospital,
  FaHotel,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPalette,
  FaRobot,
  FaShieldAlt,
  FaTruck,
  FaUserNurse,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

import ModalTrigger from "@/components/ModalTrigger";
import { popularCoursesContent } from "@/constants/study_abroad/popularCourses";

type SvgIconProps = { className?: string };

const COURSE_ICONS: Record<string, ComponentType<SvgIconProps>> = {
  business: FaBriefcase,
  mba: FaGraduationCap,
  dataScience: FaChartBar,
  ai: FaRobot,
  engineering: FaCog,
  computerScience: FaLaptopCode,
  cybersecurity: FaShieldAlt,
  hospitality: FaHotel,
  healthcare: FaHospital,
  nursing: FaUserNurse,
  publicHealth: FiGlobe,
  finance: FaMoneyBillWave,
  supplyChain: FaTruck,
  design: FaPalette,
  psychology: FaBrain,
  education: FaBookOpen,
};

const ICON_STYLES = [
  { wrap: "bg-[#eff6ff] group-hover:bg-white/20", icon: "text-[#2563eb] group-hover:text-white" },
  { wrap: "bg-[#f0fdfa] group-hover:bg-white/20", icon: "text-[#0d9488] group-hover:text-white" },
  { wrap: "bg-[#f5f3ff] group-hover:bg-white/20", icon: "text-[#7c3aed] group-hover:text-white" },
  { wrap: "bg-[#ecfdf5] group-hover:bg-white/20", icon: "text-[#059669] group-hover:text-white" },
  { wrap: "bg-[#f0f9ff] group-hover:bg-white/20", icon: "text-[#0284c7] group-hover:text-white" },
  { wrap: "bg-[#fffbeb] group-hover:bg-white/20", icon: "text-[#d97706] group-hover:text-white" },
  { wrap: "bg-[#fdf4ff] group-hover:bg-white/20", icon: "text-[#c026d3] group-hover:text-white" },
  { wrap: "bg-[#ecfeff] group-hover:bg-white/20", icon: "text-[#0891b2] group-hover:text-white" },
] as const;

const HIGHLIGHT_PHRASE = "In-Demand Courses";

function CoursesBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(15,179,169,0.12) 0%, transparent 55%), linear-gradient(180deg, #f8fffe 0%, #f0fdfa 50%, #ecf9f6 100%)",
        }}
      />
      <div className="absolute -left-20 top-[18%] h-64 w-64 rounded-full bg-[#0fb3a9]/8 blur-3xl" />
      <div className="absolute -right-16 bottom-[12%] h-56 w-56 rounded-full bg-[#0fb3a9]/6 blur-3xl" />
    </div>
  );
}

function CourseCard({
  id,
  label,
  index,
}: {
  id: string;
  label: string;
  index: number;
}) {
  const Icon = COURSE_ICONS[id] ?? FaBookOpen;
  const style = ICON_STYLES[index % ICON_STYLES.length];

  return (
    <article className="group relative z-0 flex flex-col items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white px-3 py-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out hover:z-10 hover:-translate-y-1 hover:border-[#0fb3a9] hover:bg-[#0fb3a9] hover:shadow-[0_14px_40px_rgba(15,179,169,0.32)] sm:px-4 sm:py-7">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14 ${style.wrap}`}
      >
        <Icon
          className={`h-6 w-6 transition-colors duration-300 sm:h-[26px] sm:w-[26px] ${style.icon}`}
          aria-hidden
        />
      </span>
      <h3 className="mt-4 text-[13px] font-semibold leading-snug text-[#071b3a] transition-colors duration-300 group-hover:text-white sm:text-sm">
        {label}
      </h3>
    </article>
  );
}

export default function PopularCourses() {
  const { eyebrow, heading, description, courses, ctaText } = popularCoursesContent;
  const highlightIdx = heading.indexOf(HIGHLIGHT_PHRASE);
  const headingBefore = highlightIdx >= 0 ? heading.slice(0, highlightIdx) : heading;
  const headingAfter =
    highlightIdx >= 0 ? heading.slice(highlightIdx + HIGHLIGHT_PHRASE.length) : "";

  return (
    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
      <CoursesBackground />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0fb3a9]/25 bg-white/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#078a86] shadow-sm backdrop-blur-sm sm:text-[11px]">
            <span className="text-[#0fb3a9]" aria-hidden>
              ✦
            </span>
            {eyebrow}
          </p>

          <h2 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#071b3a] sm:mt-7 sm:text-3xl sm:leading-[1.2] lg:text-[2rem] xl:text-[2.125rem]">
            {headingBefore}
            {highlightIdx >= 0 ? (
              <span className="bg-gradient-to-r from-[#0fb3a9] to-[#0d9488] bg-clip-text text-transparent">
                {HIGHLIGHT_PHRASE}
              </span>
            ) : null}
            {headingAfter}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#506070] sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-4">
          {courses.map((c, i) => (
            <CourseCard key={c.id} id={c.id} label={c.label} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <ModalTrigger
            variant="custom"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0fb3a9] to-[#0d9488] px-8 py-3.5 text-center text-sm font-bold text-white shadow-[0_12px_40px_rgba(15,179,169,0.3)] transition hover:brightness-105 sm:w-auto sm:py-4 sm:text-[15px]"
            redirectPath="/thankyou"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </ModalTrigger>
        </div>
      </div>
    </section>
  );
}
