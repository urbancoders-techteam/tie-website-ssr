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


const QUICK_FACTS_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  FaUserGraduate,
  FaClock,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBook,
  FaRubleSign,
  FaGlobe,
  FaUniversity,
};

interface QuickFacts {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

export interface QuickFactsSectionProps {
  quickFacts: QuickFacts[];
  countryName?: string;
  redirectPath?: string;
}

export default function QuickFactsSection({
  quickFacts,
  countryName = "Russia",
  redirectPath = "/mbbs/abroad/russia/campaign/thankyou",
}: QuickFactsSectionProps) {
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
    <section id="quick-facts" className=" py-14 md:py-18 bg-gradient-to-br from-[#5dd4d9] via-[#0f172a]/90 to-[#5dd4d9]/40 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Title, description, CTA */}
          <div className="lg:pt-2">
            <h2 className="font-sans text-xl md:text-2xl lg:text-4xl font-[700] text-white">
              MBBS in {countryName} -{" "}
              <span className="relative inline-block pb-1 text-[#5dd4d9]">
                Quick Facts
              </span>
            </h2>
            <p className="text-white/90 mt-4 text-base md:text-lg max-w-xl">
              Explore the essential details about studying <span className="text-[#5dd4d9] font-bold">MBBS in {countryName}</span> for Indian students with the expert guidance of <span className="text-[#5dd4d9] font-bold">Taksheela Institute of Education</span>. Our advisors help you understand the admission process, eligibility, costs, and university options before you begin your medical journey abroad.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <ModalTrigger text="Talk to an Expert" className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors" redirectPath={redirectPath} />
            </div>
          </div>

          {/* Right: Quick Facts slider */}
          <div>
            <Slider ref={sliderRef} {...sliderSettings}>
              {quickFacts.map((item) => {
                const Icon = QUICK_FACTS_ICONS[item.icon];
                return (
                  <div key={item.title} className="p-2">
                    <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-5 flex flex-col h-full min-h-[200px]">
                      <div className="flex items-center gap-2">
                        <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} text-xl shrink-0`}>
                          {Icon ? <Icon className="w-6 h-6" /> : null}
                        </div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3> </div>
                      <p className="text-sm text-gray-600 mt-1 flex-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
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
