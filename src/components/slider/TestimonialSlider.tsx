"use client";

import React from "react";
import TestimonialCard from "../TestimonialCard";
import type { TestimonialViewModel } from "@/utils/testimonialWeb";

interface Props {
  testimonials: TestimonialViewModel[];
}

/** Native horizontal scroll — momentum on touch / two-finger trackpad; no carousel UI */
export default function TestimonialSlider({ testimonials }: Props) {
  const n = testimonials.length;
  if (n === 0) return null;

  return (
    <div
      role="region"
      aria-label="Student testimonials"
      className="testimonial-scroll-scroller flex w-full gap-5 overflow-x-auto overflow-y-hidden scroll-px-3 pb-2 sm:gap-6 sm:scroll-px-4 md:scroll-pl-6 md:scroll-pr-6"
    >
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="h-full w-[min(88vw,400px)] shrink-0 sm:w-[min(47%,400px)] lg:w-[min(31.5%,420px)]"
        >
          <TestimonialCard data={item} />
        </div>
      ))}
    </div>
  );
}
