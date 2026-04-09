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

  const renderTitle = (title: string) => {
    const trimmed = (title || "").trim();
    // Allow API to send rich text (e.g. spans for colored words)
    if (trimmed.includes("<") && trimmed.includes(">")) {
      return (
        <h2
          className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight [&_span]:text-[#00B2B8]"
          dangerouslySetInnerHTML={{ __html: trimmed }}
        />
      );
    }

    return (
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
        {trimmed}
      </h2>
    );
  };

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
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    arrows: false,
    appendDots: (dots: any) => (
      <div className="absolute bottom-3 left-0 right-0">
        <ul className="flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-[3px] w-8 rounded-full bg-white/40 transition-all" />
    ),
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
              <div className="absolute inset-0 flex items-center">
                {/* multi-layer overlay to match screenshot */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
                <ContainerWrapper>
                  <div className="relative flex justify-between items-center w-full gap-6">
                    {/* Left Text */}
                    <div className="w-full md:w-[55%] lg:w-1/2">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1 text-white text-xs font-semibold tracking-wide">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#00B2B8]" />
                        TEST PREPARATION
                      </div>

                      <div className="mt-4">
                        {renderTitle(item.title)}
                      </div>

                      <p className="mt-4 max-w-xl text-white/80 text-sm md:text-[13px] leading-relaxed">
                        Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, SAT &amp;
                        DUOLINGO. Personalised study plans with certified trainers
                        online and at centres across India.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button className="rounded-md bg-white text-[#0B1B22] px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                          Start Coaching &rsaquo;
                        </button>
                        <button className="rounded-md border border-white/40 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
                          Book Free Demo
                        </button>
                      </div>
                    </div>

                    {/* Right Form */}
                    <div className="hidden md:flex w-[340px] lg:w-[360px] shrink-0 justify-center items-center">
                      <RegisterForm floating={false} />
                    </div>
                  </div>
                </ContainerWrapper>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Mobile Form */}
      <div className="block md:hidden -mt-10 px-4 pb-6">
        <RegisterForm floating={false} />
      </div>
    </>
  );
}
