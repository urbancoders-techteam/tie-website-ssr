/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import ContainerWrapper from "../ContainerWrapper";
import { baseUrl } from "@/utils/config";

interface BannerItem {
  id: string;
  title: string;
  image: string;
}

export default function Banner() {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBannerData() {
      try {
        const res = await fetch(`${baseUrl}web-banner`);
        const data = await res.json();

        const mapped = data.data.formattedData.map((item: any) => ({
          id: item._id,
          title: item.content,
          image: item.bannerImg,
        }));

        setBanners(mapped);
      } catch (err) {
        console.error("Failed to fetch banner data", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBannerData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    arrows: false,
  };

  // Skeleton shimmer UI
  if (loading) {
    return (
      <div className="relative w-full h-[75vh] animate-pulse">
        <div className="absolute inset-0 bg-gray-300"></div>
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <ContainerWrapper>
            <div className="flex justify-between items-center w-full gap-4">
              {/* Left shimmer text */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="h-10 w-3/4 bg-gray-400 rounded"></div>
                <div className="h-10 w-1/2 bg-gray-400 rounded"></div>
              </div>

              {/* Right shimmer form */}
              <div className="hidden md:block w-1/2 space-y-4">
                <div className="h-12 w-full bg-gray-400 rounded"></div>
                <div className="h-12 w-full bg-gray-400 rounded"></div>
                <div className="h-12 w-full bg-gray-400 rounded"></div>
              </div>
            </div>
          </ContainerWrapper>
        </div>
      </div>
    );
  }

  return banners.length === 0 ? null : (
    <>
      <div className="relative w-full h-[75vh]">
        <Slider {...settings}>
          {banners.map((item) => (
            <div key={item.id} className="relative h-[75vh]">
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />

              {/* Overlay and Content */}
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <ContainerWrapper>
                  <div className="flex justify-between items-center w-full gap-4">
                    {/* Left Text */}
                    <div className="w-full md:w-1/2">
                      <h2 className="text-white text-3xl md:text-5xl font-bold">
                        {item.title}
                      </h2>
                    </div>

                    {/* Right Form */}
                    <div className="hidden md:block">
                      <RegisterForm />
                    </div>
                  </div>
                </ContainerWrapper>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Mobile Form */}
      <div className="block md:hidden mt-4 px-4">
        <RegisterForm />
      </div>
    </>
  );
}
