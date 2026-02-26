"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import HeadingTypography from "@/components/Heading";
import ModalTrigger from "@/components/ModalTrigger";

type PlaceItem = {
  img: string;
  city: string;
};

type PlacesProps = {
  data: {
    title: string;
    data: PlaceItem[];
  };
};

const Places: React.FC<PlacesProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <HeadingTypography content={data?.title} textAlign="center" />

        {/* Slider */}
        <Slider {...settings}>
          {data?.data?.map((item, index) => (
            <div key={index} className="px-3 mt-12">
              <div className="w-[320px] h-[380px] bg-[#effdff] flex flex-col items-center justify-center mx-auto shadow-md rounded-lg overflow-hidden">
                <div className="w-[300px]">
                  <Image
                    src={item?.img}
                    alt={item?.city}
                    width={300}
                    height={200}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-semibold">{item?.city}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="mt-12 w-full text-center">
          <ModalTrigger />
        </div>
      </div>
    </section>
  );
};

export default Places;
