"use client";

import type { CountrySidebarLink } from "@/lib/study-abroad/countryPageTypes";

export type CountryPageMobileNavProps = {
  links: CountrySidebarLink[];
  activeSectionId: string;
  onNavigate: (sectionId: string) => void;
  stickyTopPx: number;
  ariaLabel?: string;
};

export default function CountryPageMobileNav({
  links,
  activeSectionId,
  onNavigate,
  stickyTopPx,
  ariaLabel = "Jump to page section",
}: CountryPageMobileNavProps) {
  if (!links.length) return null;

  return (
    <div
      className="uk-country-mobile-nav sticky z-30 -mx-4 border-b border-slate-200 bg-white px-4 py-3 shadow-[0_4px_12px_-6px_rgba(11,22,44,0.12)] sm:-mx-6 sm:px-6 md:-mx-8 md:px-8"
      style={{ top: stickyTopPx }}
    >
      <label htmlFor="uk-country-section-jump" className="mb-1.5 block text-[0.6875rem] font-bold uppercase tracking-wide text-slate-500">
        On this page
      </label>
      <select
        id="uk-country-section-jump"
        value={activeSectionId}
        onChange={(e) => onNavigate(e.target.value)}
        aria-label={ariaLabel}
        className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat py-2.5 pl-3 pr-10 text-sm font-semibold text-slate-800 outline-none transition focus:border-[#00999e] focus:ring-2 focus:ring-[#00999e]/25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
        }}
      >
        {links.map((link) => (
          <option key={link.id} value={link.sectionId}>
            {link.label}
          </option>
        ))}
      </select>
    </div>
  );
}
