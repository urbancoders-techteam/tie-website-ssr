"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

/** Same object as `abroadCopy.keyFacts` from `getAbroadFullPageCopy`. */
type KeyFactsSectionContent = AbroadFullPageCopy["keyFacts"];
type KeyFactItem = KeyFactsSectionContent["items"][number];

interface KeyFactsAbroadProps {
  content: KeyFactsSectionContent;
  /**
   * Country slug for a stable section anchor, e.g. `georgia` → `id="key-facts-georgia"`.
   * Omit to use the generic `key-facts-abroad` id.
   */
  sectionSlug?: string;
}

function FactCard({ item }: { item: KeyFactItem }) {
  return (
    <div className="flex h-full min-h-[152px] flex-col items-center justify-center gap-2 rounded-2xl border border-[#E8ECF2] bg-white px-3 py-5 text-center shadow-[0_2px_12px_rgba(15,40,95,0.05)] sm:min-h-[168px] sm:gap-2.5 sm:px-4 sm:py-6 md:min-h-[176px]">
      <span className="select-none text-[26px] leading-none sm:text-[30px]" aria-hidden>
        {item.icon}
      </span>
      <p className="break-words text-[15px] font-bold leading-tight text-[#00999E] sm:text-base md:text-[17px]">
        {item.value}
      </p>
      <p className="max-w-[12rem] break-words text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#143C83] sm:max-w-none sm:text-[10px] sm:tracking-[0.14em] md:text-[11px]">
        {item.label}
      </p>
    </div>
  );
}

export default function KeyFactsAbroad({ content, sectionSlug }: KeyFactsAbroadProps) {
  const sectionId = sectionSlug ? `key-facts-${sectionSlug}` : "key-facts-abroad";
  const headingId = "key-facts-heading";

  return (
    <section
      className="overflow-x-hidden bg-[#FAFBFC] py-10 sm:py-12 md:py-14 lg:py-16"
      aria-labelledby={headingId}
      id={sectionId}
    >
      <ContainerWrapper>
        <div className="mx-auto min-w-0 max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{content.eyebrow}</p>
            <h2 id={headingId} className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
          </div>

          <ul
            className="mt-8 grid list-none grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4 md:mt-10 lg:grid-cols-5"
            role="list"
          >
            {content.items.map((item, index) => (
              <li key={`${item.label}-${index}`} className="min-h-0 min-w-0">
                <FactCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </ContainerWrapper>
    </section>
  );
}
