"use client";

import Slider from "react-slick";
import WebinarCard from "../WebinarCard";

interface EventData {
  title: string;
  description: string;
  image: string;
  date: string;
}

export default function WebinarSlider({ eventData }: { eventData: EventData[] }) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: eventData.length >= 3 ? 3 : eventData.length,
    slidesToScroll: 1,
    autoplay: eventData.length >= 3,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
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
    <Slider {...settings}>
      {eventData.map((item, index) => (
        <div key={index} className="px-3">
          <WebinarCard data={item} />
        </div>
      ))}
    </Slider>
  );
}
