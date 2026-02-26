// app/components/TestimonialSlider.tsx
"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "../TestimonialCard";


interface TestimonialData {
  _id: string;
  studentName: string;
  studentImage: string;
  course: string;
  university: string;
  paragraph: string;
  rating: number;
}

interface Props {
  testimonials: TestimonialData[];
}

const TestimonialSlider = ({ testimonials }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: windowWidth < 768 ? 1 : 2,
    slidesToScroll: 1,
    arrows: windowWidth >= 1024,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((item) => (
        <div key={item._id}>
          <TestimonialCard
            name={item.studentName}
            icon={item.studentImage}
            about={item.course}
            university={item.university}
            review={item.paragraph}
            star={item.rating}
          />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
