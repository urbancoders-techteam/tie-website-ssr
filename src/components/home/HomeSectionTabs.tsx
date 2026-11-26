"use client";

import { useEffect, useRef, useState } from "react";

const tabs = [
  { label: "Our Services", id: "home-services" },
  { label: "Global Reach", id: "home-global-reach" },
  { label: "MBBS Abroad", id: "home-mbbs" },
  { label: "Study in India", id: "home-study-india" },
  { label: "Global Immersion", id: "home-immersion" },
  { label: "Test Prep", id: "home-test-prep" },
  { label: "Why Taksheela", id: "home-why-taksheela" },
  { label: "Testimonials", id: "home-testimonials" },
  { label: "FAQs", id: "home-faq" },
];

export default function HomeSectionTabs() {
  const [active, setActive] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-sticky-chrome]");
    if (!header) return;
    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const offset = headerHeight + (navRef.current?.offsetHeight ?? 0);
      let current: string | null = null;
      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (section && section.getBoundingClientRect().top <= offset + 40) current = tab.id;
      }
      setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [headerHeight]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const offset = headerHeight + (navRef.current?.offsetHeight ?? 0);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - offset - 8, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <nav ref={navRef} aria-label="Home page sections" style={{ top: headerHeight }} className="sticky z-50 border-b border-[#1c555d] bg-[#102c3b] shadow-[0_5px_16px_rgba(15,39,68,0.14)]">
      <div className="mx-auto flex max-w-7xl items-stretch overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:justify-between [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" onClick={() => scrollToSection(tab.id)} aria-current={active === tab.id ? "location" : undefined} className={`group relative flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap px-3 py-2.5 text-center text-xs font-semibold transition-colors before:absolute before:bottom-2 before:left-0 before:top-2 before:w-px before:bg-white/20 first:before:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#73e4df] sm:text-[13px] lg:flex-1 ${active === tab.id ? "text-white" : "text-slate-200 hover:bg-white/5 hover:text-white"}`}>
            {tab.label}
            <span aria-hidden className={`absolute inset-x-3 bottom-0 h-[3px] rounded-t-full bg-[#57d8ce] transition-opacity ${active === tab.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
          </button>
        ))}
      </div>
    </nav>
  );
}
