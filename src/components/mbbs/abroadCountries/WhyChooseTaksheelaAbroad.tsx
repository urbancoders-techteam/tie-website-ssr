"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_SUBTITLE,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { useMemo } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";

/** Same object as `abroadCopy.whyTaksheela` from `getAbroadFullPageCopy`. */
type WhyTaksheelaSectionContent = AbroadFullPageCopy["whyTaksheela"];
type TaksheelaItem = WhyTaksheelaSectionContent["items"][number];

interface WhyChooseTaksheelaAbroadProps {
  content: WhyTaksheelaSectionContent;
  /**
   * Country slug for a stable section anchor, e.g. `georgia` → `id="why-taksheela-georgia"`.
   * Omit to use the generic `why-taksheela-abroad` id.
   */
  sectionSlug?: string;
}

function TaksheelaCard({ icon, title, description }: TaksheelaItem) {
  return (
    <article className="flex h-full min-h-0 flex-col rounded-2xl border border-[#E8ECF2] bg-white p-5 text-left shadow-[0_2px_12px_rgba(15,40,95,0.06)] sm:p-6 md:p-7">
      <div className="text-3xl leading-none" aria-hidden>
        {icon}
      </div>
      <h3 className="mt-4 break-words text-[16px] font-bold leading-snug text-[#143C83] md:text-[17px]">{title}</h3>
      <p className="mt-2.5 break-words text-[14px] font-medium leading-relaxed text-[#5B6475] md:text-[15px] md:leading-[1.65]">
        {description}
      </p>
    </article>
  );
}

const CARD_WRAP =
  "w-full min-w-0 max-w-md sm:max-w-lg lg:w-[min(100%,22rem)] lg:max-w-[22rem]";

export default function WhyChooseTaksheelaAbroad({ content, sectionSlug }: WhyChooseTaksheelaAbroadProps) {
  const { items } = content;
  /** Items that fill complete rows of 3 (lg). */
  const remainder = items.length % 3;
  const gridItems = remainder === 0 ? items : items.slice(0, items.length - remainder);
  /** Only when every row above is full (3 each): 1 leftover → single centered card; 2 leftovers → centered pair. */
  const trailing = remainder === 0 ? [] : items.slice(-remainder);

  const sectionId = sectionSlug ? `why-taksheela-${sectionSlug}` : "why-taksheela-abroad";
  const headingId = "why-taksheela-heading";

  const mobileSliderSettings: Settings = useMemo(
    () => ({
      dots: items.length > 1,
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
    [items.length]
  );

  const carouselLabel = `${content.titlePrimary} ${content.titleAccent}`;

  return (
    <section
      className="overflow-x-hidden bg-[#F8F9FA] py-10 sm:py-12 md:py-14 lg:py-16"
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
            <p className={`${ABROAD_SECTION_SUBTITLE} text-pretty`}>{content.subtitle}</p>
          </div>

          {/* max-sm: one card per slide; sm+ uses grid below */}
          <div
            className="why-taksheela-abroad-slider mt-8 min-w-0 pb-10 sm:hidden [&_.slick-dots]:bottom-0 [&_.slick-dots_li.slick-active_button:before]:text-[#00999E] [&_.slick-dots_li_button:before]:text-[#cbd5e1] [&_.slick-list]:overflow-visible [&_.slick-slide]:px-1.5 [&_.slick-slide>div]:h-full [&_.slick-slide>div]:min-h-0 [&_.slick-slide>div]:w-full [&_.slick-track]:!flex [&_.slick-track]:items-stretch [&_.slick-slide]:!flex [&_.slick-slide]:!h-auto [&_.slick-slide]:min-h-0 [&_.slick-slide]:flex-col"
            role="region"
            aria-roledescription="carousel"
            aria-label={carouselLabel}
          >
            <Slider {...mobileSliderSettings}>
              {items.map((item, index) => (
                <div key={`${item.title}-${index}`} className="flex h-full min-h-0">
                  <TaksheelaCard {...item} />
                </div>
              ))}
            </Slider>
          </div>

          {/* sm+: 2-col tablet, 3-col lg; optional trailing row when remainder 1 or 2 */}
          <div className="mt-8 hidden sm:mt-9 sm:block">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {gridItems.map((item, index) => (
                <div key={`${item.title}-grid-${index}`} className="min-h-0 min-w-0">
                  <TaksheelaCard {...item} />
                </div>
              ))}
            </div>

            {trailing.length === 1 ? (
              <div className="mt-5 flex justify-center sm:mt-6 lg:mt-6">
                <div className={CARD_WRAP}>
                  <TaksheelaCard {...trailing[0]} />
                </div>
              </div>
            ) : trailing.length === 2 ? (
              <div className="mt-5 flex flex-wrap justify-center gap-5 sm:mt-6 lg:mt-6">
                {trailing.map((item, index) => (
                  <div key={`${item.title}-trail-${index}`} className={CARD_WRAP}>
                    <TaksheelaCard {...item} />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
