"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export const RUSSIA_CAMPAIGN_TABS: { label: string; href: string }[] = [
  { label: "Overview", href: "#overview" },
  { label: "Quick Facts", href: "#quick-facts" },
  { label: "Why to Choose", href: "#why-choose-russia" },
  { label: "Eligibility Criteria", href: "#eligibility-criteria" },
  { label: "Admission Process", href: "#admission-process" },
  { label: "Documents Required", href: "#documents-required" },
  { label: "Universities", href: "#universities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const GEORGIA_CAMPAIGN_TABS: { label: string; href: string }[] = [
  { label: "Overview", href: "#overview" },
  { label: "Quick Facts", href: "#quick-facts" },
  { label: "Why to Choose", href: "#why-choose-georgia" },
  { label: "Eligibility Criteria", href: "#eligibility-criteria" },
  { label: "Admission Process", href: "#admission-process" },
  { label: "Documents Required", href: "#documents-required" },
  { label: "Universities", href: "#universities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const NAVBAR_HEIGHT_PX = 72;

function getActiveHref(): string {
  if (typeof window === "undefined") return "#overview";
  return window.location.hash || "#overview";
}

export interface CampaignTabsProps {
  tabs?: { label: string; href: string }[];
}

export default function CampaignTabs({ tabs = RUSSIA_CAMPAIGN_TABS }: CampaignTabsProps) {
  const [activeHref, setActiveHref] = useState<string>("#overview");
  const [isAttached, setIsAttached] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  const checkAttach = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    if (rafIdRef.current !== null) return;
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      if (!tabsRef.current) return;
      setIsAttached(tabsRef.current.getBoundingClientRect().top <= NAVBAR_HEIGHT_PX);
    });
  }, []);

  const updateActiveHrefOnScroll = useCallback(() => {
    const viewportMiddle = NAVBAR_HEIGHT_PX + (window.innerHeight - NAVBAR_HEIGHT_PX) / 2;

    let bestHref = "#overview";
    let bestDistance = Number.POSITIVE_INFINITY;

    for (const { href } of tabs) {
      const el = document.querySelector<HTMLElement>(href);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;
      const distance = Math.abs(sectionMiddle - viewportMiddle);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestHref = href;
      }
    }

    setActiveHref(bestHref);
  }, [tabs]);

  const scrollActiveTabIntoView = useCallback((href: string) => {
    const container = tabsRef.current;
    if (!container) return;

    const link = container.querySelector<HTMLAnchorElement>(`a[href="${href}"]`);
    if (!link) return;

    const linkLeft = link.offsetLeft;
    const linkRight = linkLeft + link.offsetWidth;
    const visibleStart = container.scrollLeft;
    const visibleEnd = visibleStart + container.clientWidth;

    if (linkLeft >= visibleStart && linkRight <= visibleEnd) return;

    const targetScrollLeft = linkLeft - container.clientWidth / 2 + link.offsetWidth / 2;
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setActiveHref(getActiveHref());

    const onHashChange = () => setActiveHref(getActiveHref());

    const handleScroll = () => {
      checkAttach();
      updateActiveHrefOnScroll();
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [checkAttach, updateActiveHrefOnScroll]);

  useEffect(() => {
    scrollActiveTabIntoView(activeHref);
  }, [activeHref, scrollActiveTabIntoView]);

  const handleTabClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
    setActiveHref(href);
  }, []);

  const linkBaseClass =
    "shrink-0 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap";

  return (
    <div
      ref={tabsRef}
      className={`sticky bg-white border-b border-gray-200 shadow-sm py-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        isAttached ? "z-[49]" : "z-40"
      }`}
      style={{ top: NAVBAR_HEIGHT_PX }}
    >
      <div className="flex gap-1 md:gap-2 max-w-7xl mx-auto px-4 min-w-max md:min-w-0">
        {tabs.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={(e) => handleTabClick(e, href)}
            className={
              activeHref === href
                ? `${linkBaseClass} bg-gray-800 text-white`
                : `${linkBaseClass} text-gray-600 hover:text-gray-900 hover:bg-gray-100`
            }
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
