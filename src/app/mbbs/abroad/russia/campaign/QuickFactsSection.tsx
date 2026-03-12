"use client";

import { useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserGraduate,
  FaClock,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBook,
  FaRubleSign,
  FaGlobe,
  FaUniversity,
} from "react-icons/fa";

const QUICK_FACTS = [
  {
    icon: FaUserGraduate,
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Students",
    desc: "24,000+ total students from India (approximately)",
  },
  {
    icon: FaClock,
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Course Duration",
    desc: "6 years total course duration (including 1-year internship)",
  },
  {
    icon: FaCalendarAlt,
    iconBg: "bg-[#fed7aa]",
    iconColor: "text-[#c2410c]",
    title: "Admission Intakes",
    desc: "September is the primary intake and February is the secondary intake",
  },
  {
    icon: FaClipboardCheck,
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Eligibility",
    desc: "Basic eligibility includes 50% in 10+2 with PCB and 17 years old",
  },
  {
    icon: FaBook,
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#3730a3]",
    title: "Medium of Instruction",
    desc: "English-medium MBBS programs are available at most NMC-recognised Russian universities.",
  },
  {
    icon: FaRubleSign,
    iconBg: "bg-[#fce7f3]",
    iconColor: "text-[#9d174d]",
    title: "Tuition Range",
    desc: "Approximate annual tuition ranges from ₹2.5 lakh to ₹8.5 lakh depending on the university.",
  },
  {
    icon: FaGlobe,
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Recognition",
    desc: "Degrees from NMC-listed Russian medical universities are valid for practice in India after FMGE.",
  },
  {
    icon: FaUniversity,
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    title: "Top Universities",
    desc: "50+ medical universities in Russia are NMC-compliant and recognised by WHO, ECFMG & FAIMER.",
  },
];

export default function QuickFactsSection() {
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    rows: 2,
    slidesPerRow: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: { rows: 1, slidesPerRow: 1, slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { rows: 1, slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="quick-facts" className="font-sans py-14 md:py-18 bg-[#0f172a] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Title, description, CTA */}
          <div className="lg:pt-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              MBBS in Russia -{" "}
              <span className="relative inline-block pb-1">
                Quick Facts
                <span className="absolute left-0 bottom-0 w-full h-1 bg-[#5dd4d9] rounded-full" aria-hidden />
              </span>
            </h2>
            <p className="text-white/90 mt-4 text-base md:text-lg max-w-xl">
              Access key information regarding pursuing an MBBS in Russia for Indian medical aspirants to take a quick peek into the process.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Talk to an Expert <span aria-hidden>&gt;</span>
              </Link>
            </div>
          </div>

          {/* Right: Quick Facts slider */}
          <div>
            <Slider ref={sliderRef} {...sliderSettings}>
              {QUICK_FACTS.map((item) => (
                <div key={item.title} className="p-2">
                  <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-5 flex flex-col h-full min-h-[180px]">
                    <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} text-xl shrink-0`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mt-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 flex-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="flex justify-center gap-3 mt-4">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-10 h-10 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => sliderRef.current?.slickNext()}
                className="w-10 h-10 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
