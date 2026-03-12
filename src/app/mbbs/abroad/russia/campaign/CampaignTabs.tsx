"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const TABS: { label: string; href: string }[] = [
  { label: "Overview", href: "#overview" },
  { label: "Quick Facts", href: "#quick-facts" },
  { label: "Why to Choose", href: "#why-choose-russia" },
  { label: "Eligibility Criteria", href: "#eligibility-criteria" },
  { label: "Admission Process", href: "#admission-process" },
  { label: "Documents Required", href: "#documents-required" },
  { label: "Universities", href: "#universities" },
];

const NAVBAR_HEIGHT_PX = 72;

function getActiveHref() {
  if (typeof window === "undefined") return "#overview";
  return window.location.hash || "#overview";
}

export default function CampaignTabs() {
  const [activeHref, setActiveHref] = useState("#overview");
  const [isAttached, setIsAttached] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveHref(getActiveHref());
    const onHashChange = () => setActiveHref(getActiveHref());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    let ticking = false;
    const checkAttach = () => {
      if (ticking || !tabsRef.current) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (tabsRef.current) {
          const top = tabsRef.current.getBoundingClientRect().top;
          setIsAttached(top <= NAVBAR_HEIGHT_PX);
        }
        ticking = false;
      });
    };
    checkAttach();
    window.addEventListener("scroll", checkAttach, { passive: true });
    return () => window.removeEventListener("scroll", checkAttach);
  }, []);

  return (
    <div
      ref={tabsRef}
      className={`sticky bg-white border-b border-gray-200 shadow-sm py-2 overflow-x-auto ${
        isAttached ? "z-[49]" : "z-40"
      }`}
      style={{ top: NAVBAR_HEIGHT_PX }}
    >
      <div className="flex gap-1 md:gap-2 max-w-7xl mx-auto px-4 min-w-max md:min-w-0">
        {TABS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={(e) => {
              const el = document.querySelector(href);
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", href);
                setActiveHref(href);
              }
            }}
            className={`
              shrink-0 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap
              ${
                activeHref === href
                  ? "bg-gray-800 text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }
            `}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
