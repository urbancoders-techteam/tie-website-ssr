"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadAccommodationClimateContent } from "@/constants/abroad/russiaAbroadConstent";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { FaHome, FaThermometerHalf } from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";

interface AccomodationAndClimateAbroadProps {
  content: AbroadAccommodationClimateContent;
}

function HostelCard({ content }: { content: AbroadAccommodationClimateContent["hostel"] }) {
  return (
    <article className="flex h-full min-h-[28rem] flex-col rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-[0_2px_12px_rgba(15,40,95,0.05)] sm:min-h-[30rem] md:p-8">
      <div className="flex items-center gap-3 border-b border-[#F1F5F9] pb-4">
        <span
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-[#143C83]"
          aria-hidden
        >
          <FaHome className="h-6 w-6" />
        </span>
        <h3 className="min-w-0 flex-1 font-serif text-lg font-semibold leading-snug text-[#143C83] md:text-xl">
          {content.title}
        </h3>
      </div>
      <ul className="mt-5 flex flex-1 flex-col gap-3.5 text-[14px] leading-relaxed text-[#5B6475] md:text-[15px]">
        {content.bullets.map((line, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-0.5 shrink-0 font-semibold text-[#00999E]" aria-hidden>
              ›
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ClimateCard({ content }: { content: AbroadAccommodationClimateContent["climate"] }) {
  return (
    <article className="flex h-full min-h-[28rem] flex-col rounded-2xl border border-[#E8ECF2] bg-white p-6 shadow-[0_2px_12px_rgba(15,40,95,0.05)] sm:min-h-[30rem] md:p-8">
      <div className="flex items-center gap-3 border-b border-[#F1F5F9] pb-4">
        <span
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center text-[#143C83]"
          aria-hidden
        >
          <FaThermometerHalf className="h-6 w-6" />
        </span>
        <h3 className="min-w-0 flex-1 font-serif text-lg font-semibold leading-snug text-[#143C83] md:text-xl">
          {content.title}
        </h3>
      </div>
      <p className="mt-5 text-[14px] leading-relaxed text-[#5B6475] md:text-[15px]">{content.intro}</p>
      <div className="mt-5 flex min-h-0 flex-1 flex-col border-t border-[#E8ECF2] pt-1">
        {content.rows.map((row, i) => (
          <div
            key={row.city}
            className="flex flex-col gap-1 border-b border-[#EEF2F7] py-3 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
          >
            <p className="shrink-0 text-[14px] font-semibold text-[#143C83] md:text-[15px]">{row.city}</p>
            <p className="text-[13px] leading-snug text-[#64748B] sm:max-w-[55%] sm:text-right md:text-[14px]">
              {row.ranges}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5 shrink-0 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3.5">
        <p className="text-[13px] font-semibold text-[#92400E] md:text-[14px]">{content.tipLabel}</p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#57534E] md:text-[14px]">{content.tipBody}</p>
      </div>
    </article>
  );
}

export default function AccomodationAndClimateAbroad({ content }: AccomodationAndClimateAbroadProps) {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className="bg-[#F8F9FA] py-12 md:py-16"
      aria-labelledby="accommodation-climate-heading"
      id="accommodation-climate"
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={ABROAD_SECTION_EYEBROW}>
              {content.eyebrow}
            </p>
            <h2
              id="accommodation-climate-heading"
              className={ABROAD_SECTION_TITLE}
            >
              {content.titlePrimary}{" "}
              <span className={ABROAD_SECTION_ACCENT}>{content.titleAccent}</span>
            </h2>
          </div>

          <div
            className="accommodation-climate-slider mt-10 -mx-2 pb-8 md:-mx-3 md:pb-10 [&_.slick-arrow]:z-10 [&_.slick-arrow:before]:text-[#143C83] [&_.slick-dots]:bottom-0 [&_.slick-dots_li.slick-active_button:before]:text-[#00999E] [&_.slick-dots_li_button:before]:text-[#cbd5e1] [&_.slick-slide]:px-2 md:[&_.slick-slide]:px-3 [&_.slick-slide>div]:h-full [&_.slick-slide>div]:w-full [&_.slick-track]:!flex [&_.slick-track]:items-stretch [&_.slick-slide]:!flex [&_.slick-slide]:!h-auto [&_.slick-slide]:flex-col"
            role="region"
            aria-roledescription="carousel"
            aria-label={`${content.titlePrimary} ${content.titleAccent}`}
          >
            <Slider {...settings}>
              <div className="h-full">
                <HostelCard content={content.hostel} />
              </div>
              <div className="h-full">
                <ClimateCard content={content.climate} />
              </div>
            </Slider>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
