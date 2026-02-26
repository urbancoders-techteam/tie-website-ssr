"use client";

import React, { useRef } from "react";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import { taksheelaInsights } from "@/constants/home";
import { imageBaseUrl } from "@/utils/config";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Taksheela Insights - Global Education Trends & Updates",
  description:
    "Stay updated with the latest trends, research, and expert views in international education through Taksheela Insights. Empower your global academic journey with informed perspectives.",
};


const TaksheelaInsights = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoURL = `${imageBaseUrl}BrochureVideo.mp4`;

  return (
    <section id="taksheela-insights-section" className="bg-white py-10 w-full">
      <ContainerWrapper>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Left Text Section */}
          <div className="flex flex-col items-center w-full lg:w-1/2 text-center lg:text-left px-4">
            <HeadingTypography content="Taksheela Insights" textAlign="center" />
            <div className="mt-6 grid grid-cols-1 gap-4 w-full max-w-md">
              {taksheelaInsights.map((item, index) => (
                <div
                  key={index}
                  className="w-60 bg-[#5cd2d6] mx-auto hover:bg-white hover:text-black text-white p-4 rounded-md shadow-md transition-all duration-300 cursor-pointer"
                >
                  <p className="text-sm">{item.subheading}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div className="w-full lg:w-1/2">
            <video
              ref={videoRef}
              controls
              poster="/images/cover_image.png"
              className="w-full h-full rounded-xl shadow-lg"
            >
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default TaksheelaInsights;
