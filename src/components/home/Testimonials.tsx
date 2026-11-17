"use client";

import { useEffect, useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import { baseUrl } from "@/utils/config";
import TestimonialSlider from "../slider/TestimonialSlider";
import { CircularProgress } from "@mui/material";
import type { TestimonialWebRaw } from "@/utils/testimonialWeb";
import { normalizeWebTestimonial } from "@/utils/testimonialWeb";
import type { TestimonialViewModel } from "@/utils/testimonialWeb";
import HomeSectionHeader from "./HomeSectionHeader";

const SECTION_EYEBROW = "TRIUMPH TALES";
const SECTION_TITLE = "What Our Students Say About Taksheela";
const SECTION_SUB =
  "As trusted abroad education consultants in India, Taksheela has placed 5,000+ students globally across 30+ countries. Here is what some of them have to say.";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialViewModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(false);

  const fetchTestimonials = async () => {
    setLoading(true);
    setError(false);
    try {
      if (!baseUrl) throw new Error("Testimonials API URL is not configured");
      const response = await fetch(`${baseUrl}testimonial/web`, {
        method: "POST",
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      });

      if (!response.ok) throw new Error(`Testimonials request failed: ${response.status}`);
      const result = await response.json();
      if (!result?.success || !Array.isArray(result.data)) {
        throw new Error("Invalid testimonials response");
      }
      const raw: TestimonialWebRaw[] = Array.isArray(result?.data)
        ? result.data
        : [];
      const normalized = raw.map((row) =>
        normalizeWebTestimonial(row as TestimonialWebRaw)
      );
      setTestimonials(result?.success ? normalized : []);
    } catch {
      setError(true);
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
        <HomeSectionHeader
          headerClassName="mx-auto mb-10 max-w-3xl text-center md:mb-12"
          eyebrow={SECTION_EYEBROW}
          title={SECTION_TITLE}
          subtitle={SECTION_SUB}
          eyebrowClassName="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#00a88f] sm:text-xs"
          titleClassName="mt-3 text-balance text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl md:text-[1.85rem] lg:text-[2rem]"
          subtitleClassName="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] md:text-base"
        />

        {loading ? (
          <div
            className="flex justify-center py-12"
            style={{
              alignItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "#00a88f" }} />
          </div>
        ) : error ? (
          <div className="py-10 text-center" role="status">
            <p className="text-lg text-slate-600">
              Testimonials could not be loaded. Please try again.
            </p>
            <button
              type="button"
              onClick={fetchTestimonials}
              className="mt-4 rounded-full bg-[#00999E] px-6 py-2 font-semibold text-white transition hover:bg-[#007c80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00999E]"
            >
              Retry
            </button>
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
