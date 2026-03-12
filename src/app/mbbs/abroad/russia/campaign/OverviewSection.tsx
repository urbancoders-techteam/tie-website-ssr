"use client";

import { useState } from "react";
import { FaChevronRight} from "react-icons/fa";
import Slider from "react-slick";

const OVERVIEW_CONTENT = {
  first:
    "MBBS (Bachelor of Medicine and Bachelor of Surgery) is a globally recognised undergraduate medical degree that prepares students for careers in medicine and clinical practice. The program combines strong academic learning with hands-on clinical training to develop skilled and ethical medical professionals.",
  second:
    "Russia has become one of the most preferred destinations for Indian students pursuing MBBS abroad. According to data shared by the Ministry of External Affairs (MEA) in the Winter Session of Parliament in December 2025, over 27,000 Indian students are studying overseas, with a large number choosing Russia for medical education due to its affordable tuition fees and high academic standards.",
  third:
    "With over 50 NMC-compliant medical universities and recognition from global organisations such as ECFMG, FAIMER, and WFME, Russia offers internationally accepted medical education along with extensive clinical exposure.",
  fourth:
    "At Taksheela Institute of Education, we help students confidently pursue their MBBS in Russia by guiding them through university selection, admission procedures, documentation, and visa support—ensuring a smooth and transparent journey toward a successful medical career.",
  fiveth:
    "Students graduating from NMC-recognised universities in Russia are eligible to appear for licensing examinations in India such as FMGE/NExT, subject to the applicable regulations.",
};

const TESTIMONIALS = [
  {
    name: "Aawaig Pratap Singh",
    location: "Haridwar",
    initial: "A",
    neetScore: "153",
    quote:
      "I had a seamless experience getting into Tambov University with the help of Harsh Sharma from Education Vibes. The guidance was clear, paperwork was efficient, and the transition was stress-free. Highly recommended!",
    university: "Tambov State University",
    country: "Russia",
  },
  {
    name: "Priya Sharma",
    location: "Lucknow",
    initial: "P",
    neetScore: "198",
    quote:
      "Taksheela helped me secure admission at Kazan Federal University. The counselling was professional and they handled all documentation. I am now in my second year and very satisfied with the quality of education.",
    university: "Kazan Federal University",
    country: "Russia",
  },
  {
    name: "Rahul Verma",
    location: "Patna",
    initial: "R",
    neetScore: "167",
    quote:
      "From application to visa, everything was smooth. The team explained every step clearly. I got into RUDN University and the exposure here is amazing. Thank you Taksheela!",
    university: "RUDN University",
    country: "Russia",
  },
  {
    name: "Anjali Gupta",
    location: "Jaipur",
    initial: "A",
    neetScore: "182",
    quote:
      "I was confused about which country to choose. The consultants gave me a clear comparison and Russia fit my budget and goals. Now studying at Sechenov University—dream come true!",
    university: "Sechenov University",
    country: "Russia",
  },
  {
    name: "Vikram Singh",
    location: "Dehradun",
    initial: "V",
    neetScore: "145",
    quote:
      "Affordable fees and good recognition were my priorities. Taksheela suggested the right universities and helped with NEET counselling. Admitted to Northern State Medical University. Very grateful!",
    university: "Northern State Medical University",
    country: "Russia",
  },
];

export default function OverviewSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="why" className="font-sans pt-0 pb-10 md:pb-14 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left: Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Overview of MBBS in{" "}
              <span className="text-[#00999E]">Russia</span>
            </h2>
            <div className="mt-2 w-16 h-0.5 bg-gray-800 rounded" aria-hidden />

            <div className="mt-6 space-y-3 text-gray-600 text-base leading-relaxed">
              <p>{OVERVIEW_CONTENT.first}</p>
              <p>{OVERVIEW_CONTENT.second}</p>
              <p>{OVERVIEW_CONTENT.third}</p>
              
              {showMore && (
                <>
                  <p>{OVERVIEW_CONTENT.fourth}</p>
                  <p>{OVERVIEW_CONTENT.fiveth}</p>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#00999E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#007a7f] transition-colors"
            >
              {showMore ? "Show Less" : "Show More"}
              <FaChevronRight
                className={`h-4 w-4 transition-transform ${showMore ? "rotate-90" : ""}`}
                aria-hidden
              />
            </button>
          </div>

          {/* Right: Testimonial slider */}
          <div className="lg:col-span-1 relative testimonial-slider-overview min-h-[460px] lg:min-h-[480px] [&_.slick-dots]:bottom-[-28px] [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
            <Slider
              dots
              infinite
              speed={400}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={4500}
              arrows
              // prevArrow={<PrevArrow />}
              // nextArrow={<NextArrow />}
              responsive={[
                { breakpoint: 1024, settings: { arrows: false, dots: true } },
              ]}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="px-1 h-full">
                  <div className="h-full min-h-[460px] lg:min-h-[480px] rounded-xl border-2 border-[#00999E]/40 bg-white p-5 shadow-sm flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 shrink-0 rounded-full bg-[#00999E]/20 flex items-center justify-center text-[#00999E] text-lg font-bold">
                        {t.initial}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 truncate">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.location}</p>
                        <div className="flex gap-2 mt-1.5">
                          <span className="inline-flex items-center rounded-md bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700">
                            NEET
                          </span>
                          <span className="inline-flex items-center rounded-md bg-[#00999E] px-2 py-0.5 text-xs font-medium text-white">
                            {t.neetScore}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed flex-1">{t.quote}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900">{t.university}</p>
                        <p className="text-sm text-gray-500">{t.country}</p>
                      </div>
                      <div className="h-10 w-10 shrink-0 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-medium">
                        Logo
                      </div>
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
