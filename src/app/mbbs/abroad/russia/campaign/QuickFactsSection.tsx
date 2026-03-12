"use client";

import { useRef } from "react";
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
import ModalTrigger from "@/components/ModalTrigger";

const QUICK_FACTS = [
  {
    icon: FaUserGraduate,
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Students",
    desc: "Over 27,000 Indian students are currently pursuing MBBS in Russia, making it one of the most preferred destinations for medical education abroad.",
  },
  {
    icon: FaClock,
    iconBg: "bg-[#bfdbfe]",
    iconColor: "text-[#1e40af]",
    title: "Course Duration",
    desc: "The MBBS program in Russia typically spans 6 years, which includes academic study along with practical clinical training.",
  },
  {
    icon: FaCalendarAlt,
    iconBg: "bg-[#fed7aa]",
    iconColor: "text-[#c2410c]",
    title: "Admission Intakes",
    desc: "Most Russian medical universities offer their main intake in September, while some institutions may provide an additional February intake.",
  },
  {
    icon: FaClipboardCheck,
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Eligibility",
    desc: "Students must have at least 50% in Physics, Chemistry, and Biology in 10+2, be 17 years or older, and qualify NEET as per current regulations.",
  },
  {
    icon: FaBook,
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#3730a3]",
    title: "Medium of Instruction",
    desc: "Many universities offer MBBS programs in English, while some institutions may include Russian language training for clinical practice.",
  },
  {
    icon: FaRubleSign,
    iconBg: "bg-[#fce7f3]",
    iconColor: "text-[#9d174d]",
    title: "Tuition Range",
    desc: "The average tuition fee ranges from ₹2.7 lakh to ₹5 lakh per year, depending on the university and city.",
  },
  {
    icon: FaGlobe,
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#047857]",
    title: "Recognition",
    desc: "Students generally spend around ₹3–4 lakh per year on living expenses, depending on accommodation choices and lifestyle.",
  },
  {
    icon: FaUniversity,
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
    title: "Top Universities",
    desc: "Most medical universities in Russia are recognised by WHO, NMC, and the Russian Ministry of Education, ensuring globally accepted medical qualifications.",
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
    <section id="quick-facts" className="font-sans py-14 md:py-18 bg-gradient-to-br from-[#5dd4d9] via-[#0f172a]/90 to-[#5dd4d9]/40 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Title, description, CTA */}
          <div className="lg:pt-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              MBBS in Russia -{" "}
              <span className="relative inline-block pb-1 text-[#5dd4d9]">
                Quick Facts
                <span className="absolute left-0 bottom-0 w-full h-1 bg-[#5dd4d9] rounded-full" aria-hidden />
              </span>
            </h2>
            <p className="text-white/90 mt-4 text-base md:text-lg max-w-xl">
              Explore the essential details about studying <span className="text-[#5dd4d9] font-bold">MBBS in Russia</span> for Indian students with the expert guidance of <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>. Our advisors help you understand the admission process, eligibility, costs, and university options before you begin your medical journey abroad.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              {/* <Link
                href="#apply"
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Talk to an Expert <span aria-hidden>&gt;</span>
              </Link> */}
              <ModalTrigger text="Talk to an Expert" className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors" />
            </div>
          </div>

          {/* Right: Quick Facts slider */}
          <div>
            <Slider ref={sliderRef} {...sliderSettings}>
              {QUICK_FACTS.map((item) => (
                <div key={item.title} className="p-2">
                  <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-5 flex flex-col h-full min-h-[200px]">
                    <div className="flex items-center gap-2">
                      <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} text-xl shrink-0`}>
                        <item.icon className="w-6 h-6" /> </div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3> </div>
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
