"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadWhyChooseTaksheelaContent } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";

interface WhyChooseTaksheelaAbroadProps {
  content: AbroadWhyChooseTaksheelaContent;
}

function TaksheelaCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E8ECF2] bg-white p-6 text-left shadow-[0_2px_12px_rgba(15,40,95,0.06)] md:p-7">
      <div className="text-3xl leading-none" aria-hidden>
        {icon}
      </div>
      <h3 className="mt-4 text-[16px] font-bold leading-snug text-[#143C83] md:text-[17px]">{title}</h3>
      <p className="mt-2.5 text-[14px] font-medium leading-relaxed text-[#5B6475] md:text-[15px] md:leading-[1.65]">
        {description}
      </p>
    </article>
  );
}

export default function WhyChooseTaksheelaAbroad({ content }: WhyChooseTaksheelaAbroadProps) {
  const { items } = content;
  const firstRow = items.slice(0, 5);
  const secondRow = items.slice(5);

  return (
    <section
      className="bg-[#F8F9FA] py-12 md:py-16"
      aria-labelledby="why-taksheela-heading"
      id="why-taksheela-russia"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="why-taksheela-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.subtitle}
            </p>
          </div>

          {/* Row 1: five cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {firstRow.map((item) => (
              <div key={item.title} className="min-h-0 min-w-0">
                <TaksheelaCard icon={item.icon} title={item.title} description={item.description} />
              </div>
            ))}
          </div>

          {/* Row 2: single card centered */}
          {secondRow.length > 0 ? (
            <div className="mt-5 flex justify-center sm:mt-6 lg:mt-6">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-[min(100%,22rem)]">
                <TaksheelaCard
                  icon={secondRow[0].icon}
                  title={secondRow[0].title}
                  description={secondRow[0].description}
                />
              </div>
            </div>
          ) : null}
        </div>
      </ContainerWrapper>
    </section>
  );
}
