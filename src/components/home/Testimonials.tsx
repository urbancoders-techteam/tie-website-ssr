"use client";

import { useEffect, useState } from "react";
import HeadingTypography from "../Heading";
import ContainerWrapper from "../ContainerWrapper";
import { baseUrl, imageBaseUrl } from "@/utils/config";
import TestimonialSlider from "../slider/TestimonialSlider";
import { CircularProgress } from "@mui/material";

interface TestimonialData {
  _id: string;
  studentName: string;
  studentImage: string;
  course: string;
  university: string;
  paragraph: string;
  rating: number;
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${baseUrl}testimonial/web`, {
        method: "POST",
        cache: "no-store", // ✅ Ensure fresh data on client fetch
      });

      const result = await response.json();
      setTestimonials(result?.success ? result.data : []);
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
    <section
      className="py-10 w-full bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${imageBaseUrl}Testimonials.svg')`,
      }}
    >
      <ContainerWrapper>
        <div className="text-center mb-10">
          <HeadingTypography
            content="Triumph Tales"
            textAlign="center"
            className="text-[#e0f2f3]"
          />
        </div>

        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              marginTop: 10,
            }}
          >
            <CircularProgress sx={{ color: "#0A9DA2" }} />
          </div>
        ) : testimonials.length > 0 ? (
          <TestimonialSlider testimonials={testimonials} />
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600 text-lg">
              No Testimonials are available at the moment..!
            </p>
          </div>
        )}
      </ContainerWrapper>
    </section>
  );
};

export default Testimonial;
