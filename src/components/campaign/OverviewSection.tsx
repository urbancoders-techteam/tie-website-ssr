"use client";

import { useState, useCallback } from "react";
import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";

export interface OverviewContent {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

export interface OverviewTestimonial {
  name: string;
  location: string;
  quote: string;
  university: string;
}

export interface OverviewSectionProps {
  overviewContent: OverviewContent;
  testimonials: OverviewTestimonial[];
  countryName?: string;
}

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: true,
  responsive: [{ breakpoint: 1024, settings: { arrows: false, dots: true } }],
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function OverviewSection({ overviewContent, testimonials, countryName = "Russia" }: OverviewSectionProps) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = useCallback(() => setShowMore((prev) => !prev), []);

  return (
    <section id="why" className=" pt-0 pb-8 md:pb-14 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-gray-900">
              Overview of MBBS in <span className="text-[#00999E]">{countryName}</span>
            </h2>

            <div className="mt-4 sm:mt-6 space-y-3 text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
              <p>{overviewContent.first}</p>
              <p>{overviewContent.second}</p>
              <p>{overviewContent.third}</p>
              {showMore && (
                <>
                  <p>{overviewContent.fourth}</p>
                  <p>{overviewContent.fifth}</p>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={toggleShowMore}
              className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-lg bg-[#00999E] px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#007a7f] transition-colors"
            >
              {showMore ? "Show Less" : "Show More"}
              <FaChevronRight
                className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform ${showMore ? "rotate-90" : ""}`}
                aria-hidden
              />
            </button>
          </div>

          <div className="lg:col-span-1 relative testimonial-slider-overview min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] [&_.slick-dots]:bottom-[-28px] [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
            <Slider {...SLIDER_SETTINGS}>
              {testimonials.map((t) => (
                <div key={t.name} className="px-1 h-full">
                  <div className="h-full min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] rounded-xl border border-gray-200/80 bg-white p-4 sm:p-6 shadow-md shadow-gray-200/50 flex flex-col overflow-hidden">
                    <div className="flex items-center gap-3 pb-4 border-b border-[#00999E]">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full bg-[#00999E]/10 flex items-center justify-center text-[#00999E]">
                        <span className="text-sm sm:text-lg font-bold leading-none">{getInitials(t.name)}</span>
                      </div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</p>
                    </div>
                    <div className="relative mt-4 sm:mt-5 flex-1">
                      <span className="absolute left-0 top-0 text-2xl sm:text-3xl font-serif text-[#00999E]/20 leading-none" aria-hidden>&ldquo;</span>
                      <p className="pl-2 sm:pl-2 text-xs sm:text-sm text-gray-600 text-justify leading-relaxed">
                        {t.quote}
                        <span className="inline-block text-2xl sm:text-3xl font-serif text-[#00999E]/20 leading-none align-bottom ml-0.5 sm:ml-1" aria-hidden>&rdquo;</span>
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-100">
                      <p className="text-[10px] sm:text-xs font-semibold text-gray-900 uppercase tracking-wide leading-snug">
                        {t.university}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
