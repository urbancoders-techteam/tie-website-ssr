"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadKeyFactsContent, AbroadKeyFactItem } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

interface KeyFactsAbroadProps {
  content: AbroadKeyFactsContent;
}

function FactCard({ item }: { item: AbroadKeyFactItem }) {
  return (
    <div className="flex h-full min-h-[152px] flex-col items-center justify-center gap-2 rounded-2xl border border-[#E8ECF2] bg-white px-3 py-5 text-center shadow-[0_2px_12px_rgba(15,40,95,0.05)] sm:min-h-[168px] sm:gap-2.5 sm:px-4 sm:py-6 md:min-h-[176px]">
      <span className="select-none text-[26px] leading-none sm:text-[30px]" aria-hidden>
        {item.icon}
      </span>
      <p className="text-[15px] font-bold leading-tight text-[#00999E] sm:text-base md:text-[17px]">{item.value}</p>
      <p className="max-w-[12rem] text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#143C83] sm:max-w-none sm:text-[10px] sm:tracking-[0.14em] md:text-[11px]">
        {item.label}
      </p>
    </div>
  );
}

export default function KeyFactsAbroad({ content }: KeyFactsAbroadProps) {
  return (
    <section
      className="bg-[#FAFBFC] py-12 md:py-16"
      aria-labelledby="key-facts-heading"
      id="key-facts-russia"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="key-facts-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
          </div>

          <ul
            className="mt-10 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
            role="list"
          >
            {content.items.map((item) => (
              <li key={item.label} className="min-h-0 min-w-0">
                <FactCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </ContainerWrapper>
    </section>
  );
}
