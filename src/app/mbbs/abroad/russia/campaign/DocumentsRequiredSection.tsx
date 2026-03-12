"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaIdCard,
  FaPassport,
  FaFileAlt,
  FaCamera,
  FaStethoscope,
  FaSyringe,
  FaMoneyCheckAlt,
  FaFileMedical,
} from "react-icons/fa";

type DocItem = { title: string; icon: React.ComponentType<{ className?: string }> };

// const LEFT_IMAGE_URL = "/images/universityViewBanner.png";

const ITEMS_PER_SLIDE = 4; // 2x2 grid per slide

export default function DocumentsRequiredSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({ isDragging: false, startX: 0, startScrollLeft: 0 });

  const items = useMemo<DocItem[]>(
    () => [
      { title: "10th & 12th Mark Sheets", icon: FaFileAlt },
      { title: "NEET Score Card (3 years validity)", icon: FaStethoscope },
      { title: "Valid Passport (6 months of validity)", icon: FaPassport },
      { title: "5-10 Passport-sized Photographs (35mm x 45mm)", icon: FaCamera },
      // { title: "Birth Certificate", icon: FaIdCard },
      // { title: "Medical Fitness Certificate", icon: FaFileMedical },
      // { title: "HIV Test Report", icon: FaSyringe },
      // { title: "Bank Statement / Proof of Funds", icon: FaMoneyCheckAlt },
    ],
    []
  );

  const slides = useMemo(() => {
    const s: DocItem[][] = [];
    for (let i = 0; i < items.length; i += ITEMS_PER_SLIDE) {
      s.push(items.slice(i, i + ITEMS_PER_SLIDE));
    }
    return s;
  }, [items]);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    const delta = dir === "left" ? -width : width;
    sliderRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!sliderRef.current || e.button !== 0) return;
    dragRef.current = { isDragging: true, startX: e.clientX, startScrollLeft: sliderRef.current.scrollLeft };
    sliderRef.current.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!sliderRef.current || !dragRef.current.isDragging) return;
    e.preventDefault();
    const dx = e.clientX - dragRef.current.startX;
    sliderRef.current.scrollLeft = dragRef.current.startScrollLeft - dx;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (sliderRef.current) sliderRef.current.releasePointerCapture?.(e.pointerId);
    dragRef.current.isDragging = false;
  };
  const onPointerLeave = () => { dragRef.current.isDragging = false; };
  const onWheel = (e: React.WheelEvent) => {
    if (!sliderRef.current || (e.deltaX !== 0 && Math.abs(e.deltaX) >= Math.abs(e.deltaY))) return;
    e.preventDefault();
    sliderRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section
      id="documents-required"
      className="font-sans py-14 md:py-18 bg-[#f9fafb] scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          <div className="flex justify-center items-center w-full min-h-[450px] lg:min-h-0 lg:h-full">
            <div className="relative w-full max-w-[350px] h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b1b1c] via-[#0a3d40] to-[#00999E] shadow-xl shrink-0">
              {/* Inner arch cutout area with lighter gradient */}
              <div
                className="absolute inset-x-0 top-0 h-[70%] w-full"
                style={{
                  clipPath: "ellipse(90% 85% at 50% -15%)",
                  background: "linear-gradient(180deg, #e0f7f8 0%, #b8e8ea 50%, rgba(0,153,158,0.3) 100%)",
                }}
              />
              {/* Student image container - centered in arch (replace inner div with Next/Image when you have /images/eligibility-student.jpg) */}
              <div
                className="absolute inset-0 flex items-center justify-center pt-[8%]"
                style={{ clipPath: "ellipse(75% 70% at 50% 5%)" }}
              >
                <div className="relative w-[85%] aspect-[3/4] max-h-[90%] rounded-2xl overflow-hidden bg-gradient-to-b from-[#b8e8ea] to-[#00999E]/30 flex items-center justify-center">
                  <span className="text-[#00999E] font-semibold text-lg">Student</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:pt-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Documents Required to{" "}
              <span className="text-[#00999E]">Study</span> MBBS in Russia
            </h2>
            <div className="mt-2 w-14 h-1 bg-[#00999E] rounded-full" aria-hidden />
            <p className="text-gray-600 mt-5 text-sm md:text-base leading-relaxed max-w-2xl">
              To apply for <span className="text-[#00999E] font-bold">MBBS in Russia</span>, students must submit a set of academic,
              identification, and visa-related documents that comply with the
              requirements of the university and relevant government authorities,
              especially the <span className="text-[#00999E] font-bold">National Medical Commission (NMC)</span> and the <span className="text-[#00999E] font-bold">Russian Ministry of Education</span>. Here is the list of required documents.
            </p>

            <div className="mt-8 overflow-hidden w-full">
              <div
                ref={sliderRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerLeave}
                onPointerLeave={onPointerLeave}
                onWheel={onWheel}
                className="flex overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none touch-pan-x"
                role="region"
                aria-label="Required documents slider"
              >
                {slides.map((slideItems, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="grid grid-cols-2 gap-5 shrink-0 w-full min-w-full snap-start"
                  >
                    {slideItems.map((doc) => {
                      const Icon = doc.icon;
                      return (
                        <div
                          key={doc.title}
                          className="rounded-xl bg-white border border-gray-200 shadow-sm px-4 py-4 flex items-center gap-3 min-h-[88px]"
                        >
                          <div className="h-10 w-10 rounded-lg bg-[#e0f7f8] text-[#00999E] flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="font-semibold text-gray-800 text-sm">
                            {doc.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="h-11 w-11 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                aria-label="Previous documents"
              >
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="h-11 w-11 rounded-xl border border-[#00999E] bg-white text-[#00999E] hover:bg-[#e0f7f8] flex items-center justify-center"
                aria-label="Next documents"
              >
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

