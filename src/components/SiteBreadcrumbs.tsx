"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BREADCRUMB_SEGMENT_LABELS } from "@/constants/breadcrumbSegmentLabels";

/** Known path segments → display labels (SEO/nav friendly, not raw slugs). */
const SEGMENT_LABELS: Record<string, string> = {
  mbbs: "MBBS",
  abroad: "Abroad",
  india: "India",
  "study-abroad": "Study Abroad",
  courses: "Courses",
  country: "Destinations",
  university: "University",
  "university-finder": "University Finder",
  view: "Search results",
  compare: "Compare",
  test: "Test prep",
  immersion: "Immersion",
  "international-relation": "International Engagement",
  contact: "Contact",
  aboutus: "About Us",
  cart: "Cart",
  "terms-and-conditions": "Terms & Conditions",
  "privacy-policy": "Privacy Policy",
  "refund-policy": "Refund Policy",
  thankyou: "Thank You",
  campaign: "Campaign",
  "study-in-dubai": "Study in Dubai",
  "study-abroad-consultants-mumbai": "Study Abroad Consultants (Mumbai)",
  "study-abroad-consultants-delhi-ncr": "Study Abroad Consultants (Delhi NCR)",
  "study-abroad-consultants-bhubaneswar": "Study Abroad Consultants (Bhubaneswar)",
  "study-abroad-consultants-bangalore": "Study Abroad Consultants (Bangalore)",
  "consultants-study-abroad-kolkata": "Study Abroad Consultants (Kolkata)",
};

function labelForSegment(segment: string): string {
  const key = segment.toLowerCase();
  if (SEGMENT_LABELS[key]) return SEGMENT_LABELS[key];
  if (BREADCRUMB_SEGMENT_LABELS[key]) return BREADCRUMB_SEGMENT_LABELS[key];
  const decoded = decodeURIComponent(segment);
  return decoded
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const linkStyles =
  "text-slate-600 underline-offset-2 transition-colors hover:text-[#00999E] hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00999E]";

export default function SiteBreadcrumbs() {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  return (
    <div className="border-b border-slate-200/90 bg-slate-50/90">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-2.5 sm:px-10 md:px-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] leading-snug text-slate-500 sm:text-sm">
          <li className="min-w-0 shrink-0">
            <Link href="/" className={linkStyles}>
              Home
            </Link>
          </li>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;
            const label = labelForSegment(segment);

            return (
              <li key={`${href}-${index}`} className="flex min-w-0 items-center gap-x-2">
                <span className="text-slate-300 select-none" aria-hidden>
                  /
                </span>
                {isLast ? (
                  <span
                    className="min-w-0 font-medium text-[#143C83] [overflow-wrap:anywhere]"
                    aria-current="page"
                  >
                    {label}
                  </span>
                ) : (
                  <Link href={href} className={`min-w-0 [overflow-wrap:anywhere] ${linkStyles}`}>
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
