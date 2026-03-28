"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type {
  AbroadScholarshipCard,
  AbroadScholarshipsContent,
  AbroadScholarshipIconKey,
} from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { FaBook, FaBuilding, FaGlobe, FaGraduationCap } from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";

interface ScholarshipsAbroadProps {
  content: AbroadScholarshipsContent;
}

const ICON_MAP: Record<
  AbroadScholarshipIconKey,
  { Icon: typeof FaBuilding; className: string }
> = {
  building: { Icon: FaBuilding, className: "text-[#64748B]" },
  graduation: { Icon: FaGraduationCap, className: "text-[#1e293b]" },
  books: { Icon: FaBook, className: "text-[#B45309]" },
  globe: { Icon: FaGlobe, className: "text-[#2563EB]" },
};

function ScholarshipCard({
  card,
  variant = "grid",
}: {
  card: AbroadScholarshipCard;
  variant?: "grid" | "slider";
}) {
  const { Icon, className: iconColor } = ICON_MAP[card.iconKey];
  const isSlider = variant === "slider";

  return (
    <article
      className={`flex h-full min-h-0 flex-col rounded-xl border border-[#E8ECF2] bg-white p-4 md:p-5 ${
        isSlider ? "shadow-none" : "shadow-[0_2px_12px_rgba(15,40,95,0.05)]"
      }`}
    >
      <div className="flex items-center gap-2.5 border-b border-[#F1F5F9] pb-3">
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center ${iconColor}`}
          aria-hidden
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="min-w-0 flex-1 text-[13px] font-bold leading-snug text-[#143C83] md:text-[14px]">
          {card.title}
        </h3>
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

export default function ScholarshipsAbroad({ content }: ScholarshipsAbroadProps) {
  return (
    <section
      className="bg-[#F8F9FA] py-12 md:py-16"
      aria-labelledby="scholarships-heading"
      id="scholarships-russia"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="scholarships-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.title}
            </h2>
            <p className={ABROAD_SECTION_SUBTITLE}>
              {content.subtitle}
            </p>
          </div>

          {/* Laptop / tablet (md+): full 2×2 grid — completely visible */}
          <div className="mt-10 hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-5 md:items-stretch">
            {content.cards.map((card) => (
              <ScholarshipCard key={card.title} card={card} variant="grid" />
            ))}
          </div>

          {/* Mobile: slider — no box-shadow on track/list (edge shadows); cards are border-only */}
          <div
            className="mt-10 pb-8 md:hidden [&_.slick-dots]:bottom-[-6px] [&_.slick-dots_li.slick-active_button:before]:text-[#00999E] [&_.slick-dots_li_button:before]:text-[#cbd5e1] [&_.slick-list]:shadow-none [&_.slick-slider]:shadow-none [&_.slick-track]:shadow-none [&_.slick-slide]:px-1.5 [&_.slick-slide>div]:h-full"
            role="region"
            aria-roledescription="carousel"
            aria-label={content.title}
          >
            <Slider {...SLIDER_SETTINGS}>
              {content.cards.map((card) => (
                <div key={card.title} className="outline-none">
                  <ScholarshipCard card={card} variant="slider" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
