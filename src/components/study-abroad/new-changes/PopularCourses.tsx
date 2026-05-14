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
import { popularCoursesContent } from "@/constants/StudyAbroad/popularCourses";

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

/** Tinted icon wells — colourful on dark cards (aligned with WhatTaksheela). */
const TILE_STYLES = [
  { wrap: "bg-[#1a2d4a] text-[#6eb5ff]", icon: "text-[#8ec5ff]" },
  { wrap: "bg-[#153a3d] text-[#4dd4c4]", icon: "text-[#5eead4]" },
  { wrap: "bg-[#2a1f45] text-[#b89cff]", icon: "text-[#c4b5fd]" },
  { wrap: "bg-[#1a3528] text-[#6ee7a8]", icon: "text-[#86efac]" },
  { wrap: "bg-[#1a2840] text-[#7cb8ff]", icon: "text-[#93c5fd]" },
  { wrap: "bg-[#3a2818] text-[#fbbf77]", icon: "text-[#fcd34d]" },
  { wrap: "bg-[#3a2440] text-[#f0abfc]", icon: "text-[#e879f9]" },
  { wrap: "bg-[#1e3a2a] text-[#6ee7b7]", icon: "text-[#6ee7b7]" },
] as const;

export default function PopularCourses() {
  const { eyebrow, heading, description, courses, ctaText } = popularCoursesContent;

  return (
    <section className="relative overflow-hidden bg-[#050c1c] py-12 sm:py-14 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-[#0fb3a9]/20 blur-[100px] sm:h-[460px] sm:w-[460px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-20 h-[360px] w-[360px] rounded-full bg-[#0a4d5c]/25 blur-[90px]"
      />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white sm:text-[11px]">
            <span className="text-white/90" aria-hidden>
              ●
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-white sm:mt-7 sm:text-3xl sm:leading-[1.2] lg:text-[2rem] xl:text-[2.125rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        <div className="mx-auto mt-10 grid grid-cols-2 gap-4 sm:mt-12 md:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-4">
          {courses.map((c, i) => {
            const Icon = COURSE_ICONS[c.id] ?? FaBookOpen;
            const tile = TILE_STYLES[i % TILE_STYLES.length];

            return (
              <article
                key={c.id}
                className="group relative z-0 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 ease-out hover:z-10 hover:border-white/25 hover:bg-[#0fb3a9] hover:shadow-[0_0_0_1px_rgba(94,234,212,0.35),0_12px_40px_rgba(15,179,169,0.45),0_0_56px_rgba(15,179,169,0.35)] sm:px-4 sm:py-7"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ease-out group-hover:!bg-white/20 group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] sm:h-14 sm:w-14 ${tile.wrap}`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors duration-300 ease-out group-hover:!text-white sm:h-7 sm:w-7 ${tile.icon}`}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-3.5 text-[13px] font-semibold leading-snug text-white sm:mt-4 sm:text-sm">
                  {c.label}
                </h3>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <ModalTrigger
            text={ctaText}
            variant="custom"
            className="inline-flex w-full max-w-md items-center justify-center rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-[#0fb3a9] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition hover:bg-gray-100 sm:w-auto sm:py-4 sm:text-[15px]"
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </section>
  );
}
