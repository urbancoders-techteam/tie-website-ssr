"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { IndiaPopular } from "@/constants/internation-relation";

const CoursesOffered = () => {
  const settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 2 } },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 4000,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="text-center mt-10 mb-16 px-4 sm:px-10 md:px-40">
      {/* Tabs - for demo, only "Popular Programs" shown */}
      <div className="w-full bg-white shadow-md p-3">
        <div className="flex justify-around overflow-x-auto scrollbar-hide">
          <button className="text-[#00999e] text-base font-medium px-4 py-2 rounded-md bg-white hover:bg-[#00999e] hover:text-white transition-all duration-200">
            Popular Programs
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-10">
        <Slider {...settings}>
          {IndiaPopular?.map((item, index) => (
            <div key={index} className="px-2 mb-6">
              <div className="w-[220px] h-[250px] flex flex-col justify-between p-4 shadow-lg transition duration-300 hover:bg-[#63D7DB] rounded-md mx-auto">
                <div className="w-full h-[120px] flex items-center justify-center overflow-hidden rounded">
                  <Image
                    src={item.Image}
                    alt={item.title}
                    width={110}
                    height={130}
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/fallback.png"; // Make sure this file exists in /public
                    }}
                  />
                </div>
                <div className="h-[60px] flex items-center justify-center text-center">
                  <p className="font-bold text-base">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CoursesOffered;
