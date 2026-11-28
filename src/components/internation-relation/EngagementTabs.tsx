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
      className="border-b border-[#1c555d] bg-[#102c3b] shadow-[0_5px_16px_rgba(15,39,68,0.14)]"
    >
      <div className="mx-auto flex max-w-7xl items-stretch overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:justify-between [&::-webkit-scrollbar]:hidden">
        {engagementTabs.map((tab, index) => (
          <button
            key={tab.targetId}
            type="button"
            onClick={() => scrollToSection(tab.targetId, index)}
            aria-current={activeTab === index ? "location" : undefined}
            className={`group relative flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap px-3 py-2.5 text-center text-xs font-semibold transition-colors before:absolute before:bottom-2 before:left-0 before:top-2 before:w-px before:bg-white/20 first:before:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#73e4df] sm:text-[13px] lg:flex-1 ${
              activeTab === index
                ? "text-white"
                : "text-slate-200 hover:bg-white/5 hover:text-white"
            }`}
          >
            {tab.label}
            <span aria-hidden className={`absolute inset-x-3 bottom-0 h-[3px] rounded-t-full bg-[#57d8ce] transition-opacity ${activeTab === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
          </button>
        ))}
      </div>
    </nav>
  );
}
