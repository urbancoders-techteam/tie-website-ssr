"use client";

import { useState } from "react";

const engagementTabs = [
  { label: "Student Recruitment", targetId: "international-student-recruitment" },
  { label: "Global Immersion", targetId: "global-immersion" },
  { label: "Exchange Semester Abroad", targetId: "student-exchange-semester-abroad" },
  { label: "Research & Seminars", targetId: "collaborative-research-seminars" },
  { label: "Dual & Joint Degree", targetId: "twinning-programmes" },
  { label: "Internship Opportunities", targetId: "internship-opportunities" },
];

export default function EngagementTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (targetId: string, index: number) => {
    setActiveTab(index);
    const section = document.getElementById(targetId);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - 118;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="International engagement programmes"
      className="border-y border-[#00999E]/15 bg-gradient-to-r from-[#effdff] via-white to-[#effdff] py-6 shadow-[0_8px_26px_-22px_rgba(0,153,158,0.9)]"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-8">
        {engagementTabs.map((tab, index) => (
          <button
            key={tab.targetId}
            type="button"
            onClick={() => scrollToSection(tab.targetId, index)}
            className={`w-full rounded-full border px-5 py-2 text-sm font-bold leading-tight transition duration-200 sm:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(16.666%-0.625rem)] ${
              activeTab === index
                ? "border-[#00999E] bg-[#00999E] py-3 text-white shadow-[0_8px_16px_-8px_rgba(0,153,158,0.85)]"
                : "border-[#18B7BC]/65 bg-white/75 text-[#087279] hover:-translate-y-0.5 hover:border-[#00999E] hover:bg-[#e5fbfc]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
