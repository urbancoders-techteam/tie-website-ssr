"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { AbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";
import {
  ABROAD_SECTION_ACCENT,
  ABROAD_SECTION_EYEBROW,
  ABROAD_SECTION_TITLE,
} from "@/constants/abroadSectionTheme";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import type { Settings } from "react-slick";

/** Same object as `abroadCopy.stories` from `getAbroadFullPageCopy`. */
type StoriesSectionContent = AbroadFullPageCopy["stories"];
type StoryItem = StoriesSectionContent["stories"][number];

interface OurStoriesAbroadProps {
  content: StoriesSectionContent;
  /**
   * Country slug for a stable section anchor, e.g. `georgia` → `id="our-stories-georgia"`.
   * Omit to use the generic `our-stories-abroad` id.
   */
  sectionSlug?: string;
}

function StarRow({ rating }: { rating: number }) {
  const n = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={`h-4 w-4 ${i < n ? "text-amber-400" : "text-[#E8E8E8]"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function StoryCard({ story }: { story: StoryItem }) {
  return (
    <article className="flex h-[22rem] w-full min-h-0 flex-col rounded-2xl border border-[#E8ECF2] bg-white p-4 shadow-[0_2px_12px_rgba(15,40,95,0.05)] sm:h-[24rem] sm:p-6 md:h-[26rem] md:p-7">
      <StarRow rating={story.rating} />
      <blockquote className="mt-4 min-h-0 flex-1 overflow-y-auto pr-0.5 font-serif text-[15px] leading-[1.65] text-[#1a1a1a] md:text-[16px] md:leading-[1.7]">
        &ldquo;<span className="break-words">{story.quote}</span>&rdquo;
      </blockquote>
      <footer className="mt-6 flex shrink-0 items-center gap-3 border-t border-[#F1F5F9] pt-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00999E] text-[15px] font-semibold text-white shadow-sm"
          aria-hidden
        >
          {story.initial}
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold leading-tight text-[#0f172a]">{story.name}</p>
          <p className="mt-1 break-words text-[13px] leading-snug text-[#64748B]">{story.meta}</p>
        </div>
      </footer>
    </article>
  );
}

export default function OurStoriesAbroad({ content, sectionSlug }: OurStoriesAbroadProps) {
  const count = content.stories.length;
  const sectionId = sectionSlug ? `our-stories-${sectionSlug}` : "our-stories-abroad";
  const headingId = "our-stories-heading";

  const sliderSettings: Settings = useMemo(
    () => ({
      dots: count > 1,
      infinite: count > 3,
      speed: 500,
      slidesToShow: Math.min(3, count),
      slidesToScroll: 1,
      arrows: count > 1,
      autoplay: count > 2,
      autoplaySpeed: 4500,
      pauseOnHover: true,
      swipe: true,
      touchMove: true,
      draggable: true,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(2, count),
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    }),
    [count]
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
          </div>

          <div
            className="our-stories-abroad-slider mt-8 min-w-0 pb-10 sm:mt-9 sm:-mx-2 sm:pb-11 md:mt-10 md:-mx-3 md:pb-12 [&_.slick-arrow]:z-10 [&_.slick-arrow]:h-9 [&_.slick-arrow]:w-9 [&_.slick-arrow:before]:text-[15px] [&_.slick-arrow:before]:text-[#143C83] [&_.slick-dots]:bottom-0 [&_.slick-dots_li.slick-active_button:before]:text-[#00999E] [&_.slick-dots_li_button:before]:text-[#cbd5e1] [&_.slick-list]:overflow-visible [&_.slick-slide]:px-2 sm:[&_.slick-slide]:px-2 md:[&_.slick-slide]:px-3 [&_.slick-slide>div]:h-full [&_.slick-slide>div]:min-h-0 [&_.slick-slide>div]:w-full [&_.slick-track]:!flex [&_.slick-track]:items-stretch [&_.slick-slide]:!flex [&_.slick-slide]:!h-auto [&_.slick-slide]:min-h-0 [&_.slick-slide]:flex-col"
            role="region"
            aria-roledescription="carousel"
            aria-label={carouselLabel}
          >
            <Slider {...sliderSettings}>
              {content.stories.map((story, index) => (
                <div key={`${story.name}-${story.initial}-${index}`} className="flex h-full min-h-0">
                  <StoryCard story={story} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
