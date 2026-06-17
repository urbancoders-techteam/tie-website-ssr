"use client";

import Link from "next/link";

export type OtherDestinationItem = {
  code: string;
  name: string;
  href: string;
};

export const OTHER_DESTINATIONS: OtherDestinationItem[] = [
  { code: "DE", name: "Germany", href: "/study-abroad/country/Germany" },
  { code: "IE", name: "Ireland", href: "/study-abroad/country/Ireland" },
  { code: "AU", name: "Australia", href: "/study-abroad/country/Australia" },
  { code: "CA", name: "Canada", href: "/study-abroad/country/Canada" },
  { code: "FR", name: "France", href: "/study-abroad/country/France" },
  { code: "NL", name: "Netherlands", href: "/study-abroad/country" },
];

type OtherDestinationProps = {
  /** Hide current country from the grid (e.g. `uk` on the UK page). */
  excludeSlug?: string;
  className?: string;
};

function slugMatches(slug: string, name: string, code: string) {
  const s = slug.toLowerCase();
  return (
    s === name.toLowerCase() ||
    s === code.toLowerCase() ||
    (s === "uk" && name === "United Kingdom")
  );
}

export default function OtherDestination({
  excludeSlug,
  className = "",
}: OtherDestinationProps) {
  const destinations = excludeSlug
    ? OTHER_DESTINATIONS.filter(
        (d) => !slugMatches(excludeSlug, d.name, d.code)
      )
    : OTHER_DESTINATIONS;

  if (!destinations.length) return null;

  return (
    <section
      className={`bg-[#f4f7f8] py-10 sm:py-12 lg:py-14 ${className}`.trim()}
      aria-labelledby="other-destinations-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-5 xl:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c5e8ea] bg-[#e8f6f7] px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-[#0d6b6f] sm:text-[0.6875rem]">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00999e]"
              aria-hidden
            />
            Other destinations
          </span>

          <h2
            id="other-destinations-heading"
            className="mt-4 text-balance text-xl font-extrabold leading-snug text-[#0b162c] sm:text-2xl lg:text-[1.65rem]"
          >
            Explore Other Countries to Study Abroad
          </h2>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 min-[480px]:grid-cols-3 sm:mt-10 sm:gap-4 lg:grid-cols-6 lg:gap-3 xl:gap-4">
          {destinations.map((country) => (
            <li key={country.code}>
              <Link
                href={country.href}
                className="flex min-h-[7.5rem] flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white px-3 py-6 text-center shadow-[0_1px_3px_rgba(11,22,44,0.04)] transition hover:border-[#c5e8ea] hover:shadow-[0_6px_20px_-8px_rgba(0,153,158,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00999e] sm:min-h-[8.25rem] lg:min-h-[7.75rem] lg:rounded-xl lg:py-5"
              >
                <span className="text-2xl font-extrabold leading-none tracking-tight text-[#0b162c] sm:text-[1.65rem] lg:text-2xl">
                  {country.code}
                </span>
                <span className="mt-2 text-xs font-bold text-[#0b162c] sm:text-[0.8125rem]">
                  {country.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
