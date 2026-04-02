"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { FaHome, FaThermometerHalf } from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";

/** Same object as `abroadCopy.accommodation` from `getAbroadFullPageCopy`. */
type AccommodationSectionContent = AbroadFullPageCopy["accommodation"];

interface AccomodationAndClimateAbroadProps {
  content: AccommodationSectionContent;
}

const CARD_ICON_BOX =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8ECF2] bg-[#F8FAFC] text-[#143C83]";

function CardHeader({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#F1F5F9] pb-4">
      <span className={CARD_ICON_BOX} aria-hidden>
        {icon}
      </span>
      <h3 className="min-w-0 flex-1 break-words font-serif text-base font-semibold leading-snug text-[#143C83] sm:text-lg md:text-xl">
        {title}
      </h3>
    </div>
  );
}

function HostelCard({ content }: { content: AccommodationSectionContent["hostel"] }) {
  return (
    <article className="flex h-full min-h-0 flex-col rounded-2xl border border-[#E8ECF2] bg-white p-4 shadow-[0_2px_12px_rgba(15,40,95,0.05)] sm:p-6 md:p-8">
      <CardHeader icon={<FaHome className="h-6 w-6 shrink-0" />} title={content.title} />
      <ul className="mt-4 flex min-h-0 flex-1 flex-col gap-3 text-[13px] leading-relaxed text-[#5B6475] sm:mt-5 sm:gap-3.5 sm:text-[14px] md:text-[15px]">
        {content.bullets.map((line, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-0.5 shrink-0 font-semibold text-[#00999E]" aria-hidden>
              ›
            </span>
            <span className="min-w-0 break-words">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ClimateCard({ content }: { content: AccommodationSectionContent["climate"] }) {
  return (
    <article className="flex h-full min-h-0 flex-col rounded-2xl border border-[#E8ECF2] bg-white p-4 shadow-[0_2px_12px_rgba(15,40,95,0.05)] sm:p-6 md:p-8">
      <CardHeader
        icon={<FaThermometerHalf className="h-6 w-6 shrink-0" />}
        title={content.title}
      />
      <p className="mt-4 break-words text-[13px] leading-relaxed text-[#5B6475] sm:mt-5 sm:text-[14px] md:text-[15px]">
        {content.intro}
      </p>
      <div className="mt-4 flex min-h-0 flex-1 flex-col border-t border-[#E8ECF2] pt-1 sm:mt-5">
        {content.rows.map((row) => (
          <div
            key={row.city}
            className="flex flex-col gap-1 border-b border-[#EEF2F7] py-3 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
          >
            <p className="min-w-0 shrink-0 break-words text-[13px] font-semibold text-[#143C83] sm:text-[14px] md:text-[15px]">
              {row.city}
            </p>
            <p className="min-w-0 flex-1 text-[12px] leading-snug text-[#64748B] sm:max-w-[58%] sm:text-right sm:text-[13px] md:text-[14px]">
              {row.ranges}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 shrink-0 rounded-xl border border-amber-200/90 bg-amber-50/90 px-3 py-3 sm:mt-5 sm:px-4 sm:py-3.5">
        <p className="text-[12px] font-semibold text-[#92400E] sm:text-[13px] md:text-[14px]">{content.tipLabel}</p>
        <p className="mt-1.5 break-words text-[12px] leading-relaxed text-[#57534E] sm:text-[13px] md:text-[14px]">
          {content.tipBody}
        </p>
      </div>
    </article>
  );
}

export default function AccomodationAndClimateAbroad({ content }: AccomodationAndClimateAbroadProps) {
  const settings: Settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      swipe: true,
      touchMove: true,
      draggable: true,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    }),
    []
  );

  return (
    <section
      className="overflow-x-hidden bg-[#F8F9FA] py-10 sm:py-12 md:py-14 lg:py-16"
      aria-labelledby="accommodation-climate-heading"
      id="accommodation-climate"
    >
      <ContainerWrapper>
        <div className="mx-auto min-w-0 max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>{content.eyebrow}</p>
            <h2 id="accommodation-climate-heading" className={ABROAD_SECTION_TITLE}>
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
          </div>

          <div
            className="accommodation-climate-slider mt-8 min-w-0 pb-10 sm:mt-9 sm:-mx-2 sm:pb-11 md:mt-10 md:-mx-3 md:pb-12 [&_.slick-arrow]:z-10 [&_.slick-arrow]:h-9 [&_.slick-arrow]:w-9 [&_.slick-arrow]:before]:text-[15px] [&_.slick-arrow:before]:text-[#143C83] [&_.slick-dots]:bottom-0 [&_.slick-dots_li.slick-active_button:before]:text-[#00999E] [&_.slick-dots_li_button:before]:text-[#cbd5e1] [&_.slick-list]:overflow-visible [&_.slick-slide]:px-2 sm:[&_.slick-slide]:px-2 md:[&_.slick-slide]:px-3 [&_.slick-slide>div]:h-full [&_.slick-slide>div]:min-h-0 [&_.slick-slide>div]:w-full [&_.slick-track]:!flex [&_.slick-track]:items-stretch [&_.slick-slide]:!flex [&_.slick-slide]:!h-auto [&_.slick-slide]:min-h-0 [&_.slick-slide]:flex-col"
            role="region"
            aria-roledescription="carousel"
            aria-label={`${content.titlePrimary} ${content.titleAccent}`}
          >
            <Slider {...settings}>
              <div className="flex h-full min-h-0">
                <HostelCard content={content.hostel} />
              </div>
              <div className="flex h-full min-h-0">
                <ClimateCard content={content.climate} />
              </div>
            </Slider>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
