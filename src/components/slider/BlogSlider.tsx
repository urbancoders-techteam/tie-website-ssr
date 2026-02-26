// app/components/BlogSlider.tsx
"use client";

import Slider from "react-slick";
import BlogCard from "../BlogCard";

interface BlogData {
  image: string;
  date?: string;
  title: string;
  description: string;
  slugUrl: string;
  url?: string;
  content?: string;
}

const BlogSlider = ({ data }: { data: BlogData[] }) => {
  const settings = {
    arrow: true,
    slidesToShow: data.length >= 3 ? 3 : data.length,
    slidesToScroll: 1,
    infinite: true,
    autoplay: data.length >= 3,
    dots: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.length >= 3 ? 3 : data.length,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: data.length >= 2 ? 2 : data.length,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((blog, index) => (
        <BlogCard key={index} data={blog} />
      ))}
    </Slider>
  );
};

export default BlogSlider;
