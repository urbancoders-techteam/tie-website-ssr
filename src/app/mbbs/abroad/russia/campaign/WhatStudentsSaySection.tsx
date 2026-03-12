"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Riddhi",
    university: "Omsk State Medical University",
    quote:
      "I had a seamless experience getting into Omsk University with the help of the team. The guidance was clear, paperwork was efficient, and the transition was stress-free. Highly recommended for anyone looking to pursue MBBS in Russia!",
  },
  {
    name: "Mahica Promod Yadav",
    university: "Samara State Medical University",
    quote:
      "My experience with Taksheela has been wonderful. The support, teamwork and honesty throughout the admission process made everything smooth. I am grateful for their expert guidance and assistance.",
  },
  {
    name: "Sharayu Rameshwar Patil",
    university: "Orel State Medical University",
    quote:
      "I was struggling with my NEET score and unsure about my future. I found Taksheela and they guided me to pursue MBBS in Russia. Today I am studying at Orel State Medical University. Thank you for making my dream possible!",
  },
  {
    name: "Roshan",
    university: "Omsk State Medical University",
    quote:
      "Taksheela exceeded my expectations. From expert counselling to personalised support, they made my MBBS admission journey smooth and transparent. I am now at Omsk State Medical University and very satisfied.",
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

export default function WhatStudentsSaySection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth * 0.85;
    const delta = dir === "left" ? -width : width;
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="font-sans py-14 md:py-18 bg-[#f9fafb] scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Students Say About Us
            </h2>
            <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
              Taksheela Institute of Education has helped thousands of Indian
              students to pursue their MBBS in Russia. Take a look at some of the
              success stories of students who sought our expert guidance,
              professional consultation and assistance services to apply to
              Russian MBBS universities.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonials"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-lg border border-gray-800 bg-white text-gray-800 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonials"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            aria-label="Student testimonials"
          >
            {TESTIMONIALS.map((t, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[min(100%,320px)] sm:w-[320px]"
              >
                <div className="rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-100">
                  {/* Upper: gradient + quote */}
                  <div className="relative bg-gradient-to-br from-[#0b1b1c] via-[#0a3d40] to-[#00999E] px-5 py-6 min-h-[140px] flex items-center">
                    <span
                      className="absolute left-3 top-2 text-white/30 text-4xl font-serif leading-none"
                      aria-hidden
                    >
                      "
                    </span>
                    <span
                      className="absolute right-3 bottom-2 text-white/30 text-4xl font-serif leading-none"
                      aria-hidden
                    >
                      "
                    </span>
                    <p className="relative text-white text-sm leading-relaxed line-clamp-4 pr-2">
                      {t.quote}
                    </p>
                  </div>
                  {/* Lower: white + avatar, name, university */}
                  <div className="px-5 py-4 flex items-center gap-3 bg-white">
                    <div className="w-12 h-12 rounded-full bg-[#e0f7f8] text-[#00999E] font-bold text-sm flex items-center justify-center shrink-0">
                      {getInitials(t.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 text-sm truncate">
                        {t.name}
                      </p>
                      <p className="text-gray-500 text-xs truncate">
                        {t.university}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
