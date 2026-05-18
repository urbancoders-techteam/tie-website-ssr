"use client";

import type { ComponentType } from "react";
import { FaBullseye, FaClock, FaGlobeAmericas, FaMedal } from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ModalTrigger from "@/components/ModalTrigger";
import {
  findingYourEducationContent,
  type FundingCard,
  type FundingCardVariant,
} from "@/constants/study_abroad/findingYourEducation";

const ICONS: Record<FundingCard["icon"], ComponentType<{ className?: string }>> = {
  medal: FaMedal,
  clock: FaClock,
  globe: FaGlobeAmericas,
  target: FaBullseye,
};

const TOP_STYLES: Record<
  FundingCardVariant,
  { section: string; title: string; iconWrap: string; icon: string }
> = {
  teal: {
    section: "bg-[#d8f6f2]",
    title: "text-[#001f3f]",
    iconWrap: "border-teal-200/90 bg-white/85",
    icon: "text-[#14b8a6]",
  },
  peach: {
    section: "bg-[#ffedd5]",
    title: "text-[#001f3f]",
    iconWrap: "border-orange-200/90 bg-white/85",
    icon: "text-[#ea580c]",
  },
  navy: {
    section: "bg-[#0a1628]",
    title: "text-white",
    iconWrap: "border-white/35 bg-white/15",
    icon: "text-white",
  },
  lavender: {
    section: "bg-[#ede9fe]",
    title: "text-[#001f3f]",
    iconWrap: "border-violet-200/90 bg-white/85",
    icon: "text-[#7c3aed]",
  },
};

const MOBILE_SLIDER_SETTINGS: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4800,
  pauseOnHover: true,
};

const mobileSliderClassName =
  "lg:hidden [&_.slick-list]:mx-[-6px] [&_.slick-list]:overflow-visible [&_.slick-slide]:px-1.5 [&_.slick-slide>div]:h-full [&_ul.slick-dots]:!bottom-[-36px] [&_ul.slick-dots>li]:!m-0 [&_ul.slick-dots>li>button:before]:!text-[#14b8a6] [&_ul.slick-dots>li>button:before]:!text-[11px] [&_ul.slick-dots>li>button:before]:!opacity-35 [&_ul.slick-dots>li.slick-active>button:before]:!opacity-100";

function FundingCardItem({ card }: { card: FundingCard }) {
  const Icon = ICONS[card.icon];
  const t = TOP_STYLES[card.variant];

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-[0_8px_30px_rgba(0,31,63,0.06)] transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:border-[#14b8a6]/70 hover:shadow-[0_22px_48px_rgba(20,184,166,0.22),0_12px_28px_rgba(0,31,63,0.12)] hover:ring-2 hover:ring-[#14b8a6]/30">
      <div className={`px-5 pb-6 pt-8 text-center transition-[filter] duration-300 sm:px-6 sm:pb-7 sm:pt-9 ${t.section} group-hover:brightness-[1.02]`}>
        <div
          className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-sm transition-all duration-300 ease-out sm:h-16 sm:w-16 ${t.iconWrap} group-hover:scale-110 group-hover:border-[#14b8a6] group-hover:shadow-[0_0_0_4px_rgba(20,184,166,0.35),0_8px_20px_rgba(20,184,166,0.25)]`}
        >
          <Icon
            className={`h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110 sm:h-7 sm:w-7 ${t.icon}`}
            aria-hidden
          />
        </div>
        <h3 className={`mt-4 text-base font-extrabold leading-snug sm:mt-5 sm:text-lg ${t.title}`}>
          {card.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col border-t border-gray-100 bg-white px-5 pb-5 pt-5 transition-colors duration-300 sm:px-6 sm:pb-6 sm:pt-6 group-hover:bg-[#fafefe]">
        <p className="flex-1 text-left text-[13px] leading-relaxed text-[#5a6570] transition-colors duration-300 group-hover:text-[#374151] sm:text-sm">
          {card.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full bg-[#e6faf8] px-2.5 py-1 text-[11px] font-semibold text-[#0d9488] shadow-sm transition-all duration-300 group-hover:bg-[#ccfbf1] group-hover:shadow-md sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function FindingYourEducation() {
  const { eyebrow, heading, description, cards, ctaText } = findingYourEducationContent;

  return (
    <section className="bg-[#f0faf7] py-12 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#e6faf8] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0d9488] sm:text-[11px]">
            <span className="text-[#14b8a6]" aria-hidden>
              ●
            </span>
            {eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#001f3f] sm:mt-5 sm:text-3xl lg:text-[2rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5a6570] sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        {/* Mobile & tablet: slick slider */}
        <div className={`${mobileSliderClassName} mx-auto mt-10 max-w-md pb-10 sm:mt-12 sm:max-w-lg`}>
          <Slider {...MOBILE_SLIDER_SETTINGS}>
            {cards.map((c) => (
              <div key={c.id}>
                <FundingCardItem card={c} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="mx-auto mt-10 hidden max-w-6xl grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mx-0 lg:mt-14 lg:grid lg:max-w-none lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {cards.map((c) => (
            <FundingCardItem key={c.id} card={c} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <ModalTrigger
            text={ctaText}
            variant="custom"
            className="inline-flex w-full max-w-lg items-center justify-center rounded-full bg-[#14b8a6] px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_28px_rgba(20,184,166,0.35)] transition hover:bg-[#0d9488] sm:w-auto sm:px-10 sm:py-4 sm:text-[15px]"
            redirectPath="/thankyou"
          />
        </div>
      </div>
    </section>
  );
}
