"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { useMemo } from "react";
import { FaBuilding, FaCreditCard, FaLightbulb } from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";

/** Same object as `abroadCopy.educationLoan` from `getAbroadFullPageCopy`. */
type EducationLoanSectionContent = AbroadFullPageCopy["educationLoan"];
type LoanPairCardModel = EducationLoanSectionContent["nationalised"];

interface EducationLoanAbroadProps {
  content: EducationLoanSectionContent;
  /**
   * Country slug for a stable section anchor, e.g. `georgia` → `id="education-loan-georgia"`.
   * Omit to use the generic `education-loan-abroad` id.
   */
  sectionSlug?: string;
}

function LoanPairCard({
  card,
  icon: Icon,
  iconClassName,
  variant = "grid",
}: {
  card: LoanPairCardModel;
  icon: typeof FaBuilding;
  iconClassName: string;
  variant?: "grid" | "slider";
}) {
  const isSlider = variant === "slider";

  return (
    <article
      className={`flex h-full min-h-0 flex-col rounded-xl border border-[#E8ECF2] bg-white p-4 md:p-5 ${
        isSlider ? "shadow-none" : "shadow-[0_2px_12px_rgba(15,40,95,0.05)]"
      }`}
    >
      <div className="flex items-center gap-2.5 border-b border-[#F1F5F9] pb-3">
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center ${iconClassName}`}
          aria-hidden
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="min-w-0 flex-1 break-words text-[13px] font-bold leading-snug text-[#143C83] md:text-[14px]">
          {card.title}
        </h3>
      </div>
      <p className="mt-3 break-words text-[13px] leading-relaxed text-[#5B6475] md:text-[14px]">{card.description}</p>
      <ul className="mt-3 flex flex-1 flex-col gap-2 text-[13px] leading-relaxed text-[#5B6475] md:text-[14px]">
        {card.bullets.map((line, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-0.5 shrink-0 font-semibold text-emerald-600" aria-hidden>
              ✓
            </span>
            <span className="min-w-0 break-words">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function EducationLoanAbroad({ content, sectionSlug }: EducationLoanAbroadProps) {
  const sectionId = sectionSlug ? `education-loan-${sectionSlug}` : "education-loan-abroad";
  const headingId = "education-loan-heading";

  const pairCards = [
    {
      key: "nationalised",
      card: content.nationalised,
      Icon: FaBuilding,
      iconClassName: "text-[#64748B]",
    },
    {
      key: "private",
      card: content.privateNbfc,
      Icon: FaCreditCard,
      iconClassName: "text-[#1e40af]",
    },
  ] as const;

  const sliderSettings: Settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipe: true,
      touchMove: true,
      draggable: true,
      adaptiveHeight: true,
    }),
    []
  );

  return (
    <section
      className="overflow-x-hidden bg-[#F8F9FA] py-10 sm:py-12 md:py-14 lg:py-16"
      aria-labelledby={headingId}
      id={sectionId}
    >
      <ContainerWrapper>
        <div className="mx-auto min-w-0 max-w-6xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{content.eyebrow}</p>
            <h2 id={headingId} className={ABROAD_SECTION_TITLE}>
              {content.title}
            </h2>
            {content.intro ? (
              <p className={`${ABROAD_SECTION_SUBTITLE} text-pretty`}>{content.intro}</p>
            ) : null}
          </div>

          <div className="mt-8 hidden grid-cols-1 gap-4 sm:mt-9 md:grid md:grid-cols-2 md:gap-5 md:items-stretch">
            {pairCards.map(({ key, card, Icon, iconClassName }) => (
              <LoanPairCard key={key} card={card} icon={Icon} iconClassName={iconClassName} variant="grid" />
            ))}
          </div>

          <div
            className="mt-8 pb-8 sm:mt-9 md:hidden [&_.slick-dots]:bottom-[-6px] [&_.slick-dots_li.slick-active_button:before]:text-[#00999E] [&_.slick-dots_li_button:before]:text-[#cbd5e1] [&_.slick-list]:shadow-none [&_.slick-slider]:shadow-none [&_.slick-track]:shadow-none [&_.slick-slide]:px-1.5 [&_.slick-slide>div]:h-full"
            role="region"
            aria-roledescription="carousel"
            aria-label={content.title}
          >
            <Slider {...sliderSettings}>
              {pairCards.map(({ key, card, Icon, iconClassName }) => (
                <div key={key} className="outline-none">
                  <LoanPairCard card={card} icon={Icon} iconClassName={iconClassName} variant="slider" />
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-4 md:mt-5">
            <div className="rounded-xl border border-sky-200/90 bg-sky-50/90 p-4 md:p-5">
              <div className="flex items-center gap-2.5 border-b border-sky-200/80 pb-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-amber-500" aria-hidden>
                  <FaLightbulb className="h-5 w-5" />
                </span>
                <h3 className="min-w-0 flex-1 break-words text-[13px] font-bold leading-snug text-[#143C83] md:text-[14px]">
                  {content.support.title}
                </h3>
              </div>
              <p className="mt-3 break-words text-[13px] leading-relaxed text-[#5B6475] md:text-[14px]">
                {content.support.description}
              </p>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
