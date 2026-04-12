"use client";

import { useEffect, useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import { baseUrl } from "@/utils/config";
import TestimonialSlider from "../slider/TestimonialSlider";
import { CircularProgress } from "@mui/material";
import type { TestimonialWebRaw } from "@/utils/testimonialWeb";
import { normalizeWebTestimonial } from "@/utils/testimonialWeb";
import type { TestimonialViewModel } from "@/utils/testimonialWeb";

const SECTION_EYEBROW = "TRIUMPH TALES";
const SECTION_TITLE = "What Our Students Say About Taksheela";
const SECTION_SUB =
  "5,000+ students placed globally across 30+ countries. Here is what some of them have to say.";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialViewModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${baseUrl}testimonial/web`, {
        method: "POST",
        cache: "no-store",
      });

      const result = await response.json();
      const raw: TestimonialWebRaw[] = Array.isArray(result?.data)
        ? result.data
        : [];
      const normalized = raw.map((row) =>
        normalizeWebTestimonial(row as TestimonialWebRaw)
      );
      setTestimonials(result?.success ? normalized : []);
    } catch (error) {
      console.error("Failed to fetch testimonials", error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className="w-full bg-slate-50 py-12 md:py-14 lg:py-16 xl:py-[4.5rem]">
      <ContainerWrapper>
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#00a88f] sm:text-xs">
            <span className="text-[#00a88f]/70" aria-hidden>
              —
            </span>{" "}
            {SECTION_EYEBROW}{" "}
            <span className="text-[#00a88f]/70" aria-hidden>
              —
            </span>
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl md:text-[1.85rem] lg:text-[2rem]">
            {SECTION_TITLE}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] md:text-base">
            {SECTION_SUB}
          </p>
        </header>

        {loading ? (
          <div
            className="flex justify-center py-12"
            style={{
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#00a88f" }} />
          </div>
        ) : testimonials.length > 0 ? (
          <TestimonialSlider testimonials={testimonials} />
        ) : (
          <div className="py-10 text-center">
            <p className="text-lg text-slate-600">
              No testimonials are available at the moment.
            </p>
          </div>
        )}
      </ContainerWrapper>
    </section>
  );
};

export default Testimonial;
