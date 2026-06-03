"use client";

import ModalTrigger from "@/components/ModalTrigger";
import type { CountrySidebarLink } from "@/constants/study-abroad/countryPages/countryPageTypes";
import { useEffect, useRef } from "react";

export type CountryPageSidebarProps = {
  links: CountrySidebarLink[];
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  ctaText: string;
  ariaLabel?: string;
  /** Distance from viewport top (header + sticky tabs). */
  stickyTopPx?: number;
  className?: string;
};

export default function CountryPageSidebar({
  links,
  activeSectionId,
  onNavigate,
  ctaText,
  ariaLabel = "Country study guide navigation",
  stickyTopPx = 160,
  className = "",
}: CountryPageSidebarProps) {
  const navScrollRef = useRef<HTMLDivElement>(null);
  const introLinks = links.filter((l) => l.inIntroGroup);
  const otherLinks = links.filter((l) => !l.inIntroGroup);

  useEffect(() => {
    const container = navScrollRef.current;
    if (!container) return;
    const active = container.querySelector<HTMLElement>(
      `[data-section-nav="${activeSectionId}"]`
    );
    active?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeSectionId]);

  const linkClass = (sectionId: string) =>
    [
      "block w-full border-l-[3px] border-transparent py-2.5 pl-[1.15rem] pr-4 text-left text-[0.8125rem] font-semibold leading-snug text-slate-700 transition-[color,background,border-color] duration-150",
      "hover:border-[#00999e]/30 hover:bg-[#00999e]/[0.06] hover:text-[#00999e]",
      activeSectionId === sectionId
        ? "border-[#00999e] bg-[#00999e]/[0.08] text-[#00999e]"
        : "",
    ].join(" ");

  return (
    <aside
      className={[
        "uk-country-sidebar hidden min-w-0 bg-white lg:block lg:sticky lg:z-30 lg:self-start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        top: stickyTopPx,
        maxHeight: `calc(100vh - ${stickyTopPx}px - 1rem)`,
      }}
      aria-label={ariaLabel}
    >
      <div
        ref={navScrollRef}
        className="space-y-1 overflow-y-auto overflow-x-hidden overscroll-contain pr-0.5"
      >
        {introLinks.length > 0 ? (
          <div className="mb-2 overflow-hidden rounded-xl border border-[#cbecef] bg-[#f0fafb] py-2">
            {introLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                data-section-nav={link.sectionId}
                onClick={() => onNavigate(link.sectionId)}
                className={linkClass(link.sectionId)}
              >
                {link.label}
              </button>
            ))}
          </div>
        ) : null}

        {otherLinks.map((link) => (
          <div key={link.id}>
            <button
              type="button"
              data-section-nav={link.sectionId}
              onClick={() => onNavigate(link.sectionId)}
              className={linkClass(link.sectionId)}
            >
              {link.label}
            </button>
            <div className="my-[0.15rem] h-px bg-slate-200" aria-hidden />
          </div>
        ))}

        <ModalTrigger
          variant="custom"
          text={ctaText}
          className="!mt-4 !block !w-full !rounded-lg !border-0 !bg-[#00999e] !px-4 !py-3.5 !text-center !text-sm !font-bold !text-white !shadow-none transition-colors hover:!bg-[#007f83]"
        />
      </div>
    </aside>
  );
}
