"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadEducationLoanContent, AbroadEducationLoanPairCard } from "@/constants/abroad/russiaAbroadConstent";
import { ABROAD_SECTION_EYEBROW, ABROAD_SECTION_TITLE } from "@/constants/abroadSectionTheme";
import { FaBuilding, FaCreditCard, FaLightbulb } from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";

interface EducationLoanAbroadProps {
  content: AbroadEducationLoanContent;
}

function LoanPairCard({
  card,
  icon: Icon,
  iconClassName,
  variant = "grid",
}: {
  card: AbroadEducationLoanPairCard;
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
        <h3 className="min-w-0 flex-1 text-[13px] font-bold leading-snug text-[#143C83] md:text-[14px]">{card.title}</h3>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-[#5B6475] md:text-[14px]">{card.description}</p>
      <ul className="mt-3 flex flex-1 flex-col gap-2 text-[13px] leading-relaxed text-[#5B6475] md:text-[14px]">
        {card.bullets.map((line, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-0.5 shrink-0 font-semibold text-emerald-600" aria-hidden>
              ✓
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

const SLIDER_SETTINGS: Settings = {
  dots: true,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  adaptiveHeight: true,
};

export default function EducationLoanAbroad({ content }: EducationLoanAbroadProps) {
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

  return (
    <section
      className="bg-[#F8F9FA] py-12 md:py-16"
      aria-labelledby="education-loan-heading"
      id="education-loan-russia"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="education-loan-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.title}
            </h2>
          </div>

          {/* md+: two columns */}
          <div className="mt-10 hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-5 md:items-stretch">
            {pairCards.map(({ key, card, Icon, iconClassName }) => (
              <LoanPairCard key={key} card={card} icon={Icon} iconClassName={iconClassName} variant="grid" />
            ))}
          </div>

          {/* Mobile: slider — no edge shadows on track */}
          <div
            className="mt-10 pb-8 md:hidden [&_.slick-dots]:bottom-[-6px] [&_.slick-dots_li.slick-active_button:before]:text-[#00999E] [&_.slick-dots_li_button:before]:text-[#cbd5e1] [&_.slick-list]:shadow-none [&_.slick-slider]:shadow-none [&_.slick-track]:shadow-none [&_.slick-slide]:px-1.5 [&_.slick-slide>div]:h-full"
            role="region"
            aria-roledescription="carousel"
            aria-label={content.title}
          >
            <Slider {...SLIDER_SETTINGS}>
              {pairCards.map(({ key, card, Icon, iconClassName }) => (
                <div key={key} className="outline-none">
                  <LoanPairCard card={card} icon={Icon} iconClassName={iconClassName} variant="slider" />
                </div>
              ))}
            </Slider>
          </div>

          {/* Full-width support card */}
          <div className="mt-4 md:mt-5">
            <div className="rounded-xl border border-sky-200/90 bg-sky-50/90 p-4 md:p-5">
              <div className="flex items-center gap-2.5 border-b border-sky-200/80 pb-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-amber-500" aria-hidden>
                  <FaLightbulb className="h-5 w-5" />
                </span>
                <h3 className="min-w-0 flex-1 text-[13px] font-bold leading-snug text-[#143C83] md:text-[14px]">
                  {content.support.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5B6475] md:text-[14px]">{content.support.description}</p>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
