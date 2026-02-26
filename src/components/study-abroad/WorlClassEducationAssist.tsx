"use client";

import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContainerWrapper from "../ContainerWrapper";
import { CategoryKey } from "@/utils/interface";
import { viewmoredata } from "@/constants/study-abroad";
import { imageBaseUrl } from "@/utils/config";
import HeadingTypography from "../Heading";

const Roadmap = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null
  );

  const serviceImages = [
    ["service1.svg", "service11.svg"],
    ["service2.svg", "service22.svg"],
    ["service3.svg", "service33.svg"],
    ["service4.svg", "service44.svg"],
  ];

  const labels = [
    "PERSONALIZED MENTORING",
    "CAREER MAPPING",
    "ADMISSION SERVICES",
    "POST ENROLMENT SUPPORT",
  ];

  const categories: CategoryKey[] = [
    "personalized",
    "career",
    "admission",
    "post",
  ];

  const handleButtonClick = (category: CategoryKey) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <ContainerWrapper className="py-12">
      <HeadingTypography
        content="World Class Education Assist"
        textAlign="center"
      />
      <div className="bg-white text-center py-16 text-sm">
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-6">
          {categories?.map((category, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Card */}
              <div
                className="relative w-[230px] h-[200px] bg-white shadow transition hover:bg-[#00999e] hover:text-white group flex flex-col items-center justify-center text-center"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Top-left corner */}
                <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-2 border-l-2 border-[#00999e] group-hover:border-white" />

                {/* Bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-2 border-r-2 border-[#00999e] group-hover:border-white" />

                {/* Content: image and label */}
                <div className="flex flex-col items-center">
                  <Image
                    src={`${imageBaseUrl}${
                      hoveredStep === index
                        ? serviceImages[index][1]
                        : serviceImages[index][0]
                    }`}
                    alt="Hexagon_Image"
                    width={100}
                    height={100}
                  />
                  <p className="font-bold pt-4">{labels[index]}</p>
                </div>
              </div>

              {/* View More Button */}
              <button
                className="bg-[#00999e] mt-4 px-4 py-2 text-white rounded hover:bg-[#00999e]"
                onClick={() => handleButtonClick(category)}
              >
                View More
                {selectedCategory === category ? (
                  <KeyboardArrowUpIcon className="inline ml-2" />
                ) : (
                  <KeyboardArrowDownIcon className="inline ml-2" />
                )}
              </button>

              {/* Mobile Content */}
              {selectedCategory === category && (
                <div className="mt-6 w-full">
                  <div className="flex flex-col items-center mt-4 ">
                    <Image
                      src="/images/dottedline.svg"
                      alt="dotted-line"
                      width={2} 
                      height={40} 
                    />
                    <KeyboardArrowDownIcon
                      className="text-[#00999e] text-sm"
                      fontSize="small"
                    />
                  </div>

                  <div className="mb-10 bg-white p-6 shadow rounded block sm:hidden">
                    <div className="grid grid-cols-1 gap-6">
                      {viewmoredata[category]?.map((item) => (
                        <div key={item.id} className="text-center space-y-4">
                          <p className="font-bold">{item?.title}</p>
                          <Image
                            src="/images/line.svg"
                            alt="line"
                            width={0}
                            height={0}
                            className="w-full h-auto mx-auto"
                          />
                          <p className="h-[100px] px-4">{item?.about}</p>
                        </div>
                        
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block mt-10">
          {selectedCategory && (
            <div className="mt-6 mb-10 bg-white p-6 shadow rounded">
              <div className="flex justify-between items-center gap-6">
                {viewmoredata[selectedCategory]?.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-4 w-full">
                    <div className="text-center space-y-4 w-full">
                      <p className="font-bold">{item?.title}</p>
                      <Image
                        src="/images/line.svg"
                        alt="line"
                        width={0}
                        height={0}
                        className="w-full h-2.5 mx-auto"
                      />
                      <p className="h-[100px] px-4">{item?.about}</p>
                    </div>
                    {index < viewmoredata[selectedCategory]?.length - 1 && (
                      <ArrowForwardIosIcon className="text-[#00999e]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default Roadmap;
