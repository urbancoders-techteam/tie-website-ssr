"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingTypography from "../Heading";
import MilestonesCard from "../MilestoneCard";
import {milestonesData} from '@/constants/study-abroad'

const Milestones = () => {
  const [showMilestones, setShowMilestones] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const threshold = 800;
      const scrollPosition = window.scrollY;

      setShowMilestones(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    dots: false,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-12 bg-[#effdff] opacity-75">
      <div className="container mx-auto px-4">
        <HeadingTypography content="Milestones"  textAlign="center" />
        {showMilestones && (
          <div className="mt-8">
            <Slider {...settings}>
              {milestonesData.map((card) => (
                <MilestonesCard key={card.id} {...card} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default Milestones;
