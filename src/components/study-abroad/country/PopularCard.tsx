"use client";

import { FlipCardBox } from "@/components/FlipcardBox";
import Slider from "react-slick";


type PopularCardProps = {
  data: {
    Image: string;
    title: string;
    items: string[];
  }[];
};

export default function PopularCard({ data }: PopularCardProps) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div >
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div key={index} >
            {/* FlipCard component */}
            <FlipCardBox
              data={{
                ...item,
                image: item.Image,
                title: item.title,
                items: item.items,
              }}

            
            />

           
          </div>
        ))}
      </Slider>
    </div>
  );
}
