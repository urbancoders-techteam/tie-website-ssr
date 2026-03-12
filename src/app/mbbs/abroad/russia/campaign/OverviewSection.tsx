"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
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
    name: "Pratham Shrivas",
    location: "Haridwar",
    quote:
      "I had an excellent experience in securing my admission to study abroad with Taksheela. From the very beginning, they were incredibly knowledgeable, patient, and supportive. They took the time to understand my academic background, career goals, and personal preferences, then guided me to select programs and universities that matched my aspirations.",
    university: "KABARDINO-BALKARIAN STATE UNIVERSITY, RUSSIA",
  },
  {
    name: "Rinkesh Patidar",
    location: "Lucknow",
    quote:
      "My counselor is Anisha mam that helps me a lot. I am going to KEMSU Russia, thank you education vibes. Had a nice experience going to Kemerovo State University, Russia . Taksheela was very helpful throughout the process. The visa process was smooth, with no extra documentation hassles. Everything was well-organized, making the journey stress-free!",
    university: "KEMEROVO STATE UNIVERSITY, RUSSIA",
  },
  {
    name: "Vitejana Malik",
    location: "Patna",
    quote:
      "The communication between parents and the agency was very well maintained. The behaviour of the staff was also very polite. Starting from enrollment until students reached the college hostel facilities, they were very well taken care of and heard. The convenience of parents and students was their priority. I hope they keep up the good work.",
    university: "BASHKIR STATE MEDICAL UNIVERSITY, RUSSIA",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

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
          <div className="lg:col-span-1 relative testimonial-slider-overview min-h-[400px] lg:min-h-[420px] [&_.slick-dots]:bottom-[-28px] [&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
            <Slider
              dots
              infinite
              speed={400}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={4500}
              arrows
              responsive={[
                { breakpoint: 1024, settings: { arrows: false, dots: true } },
              ]}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="px-1 h-full">
                  <div className="h-full min-h-[400px] lg:min-h-[420px] rounded-xl border border-gray-200/80 bg-white p-6 shadow-md shadow-gray-200/50 flex flex-col overflow-hidden">
                    {/* Quote accent */}
                    <div className="flex items-start gap-3">
                      <div className="h-12 w-12 shrink-0 rounded-full bg-[#00999E]/10 flex items-center justify-center text-[#00999E]">
                        <span className="text-lg font-bold leading-none">{getInitials(t.name)}</span>
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="font-bold text-gray-900">{t.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{t.location}</p>
                        {/* <span className="inline-block mt-2 text-[10px] font-medium uppercase tracking-wider text-[#00999E]">
                          MBBS Student
                        </span> */}
                      </div>
                    </div>
                    {/* Quote */}
                    <div className="relative mt-5 flex-1">
                      <span className="absolute left-0 top-0 text-3xl font-serif text-[#00999E]/20 leading-none" aria-hidden>&ldquo;</span>
                      <p className="pl-5 text-sm text-gray-600 leading-relaxed">
                        {t.quote}
                        <span className="inline-block text-3xl font-serif text-[#00999E]/20 leading-none align-bottom ml-1" aria-hidden>&rdquo;</span>
                      </p>
                    </div>
                    {/* University */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide leading-snug">
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
