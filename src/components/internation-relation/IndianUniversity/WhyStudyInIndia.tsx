import React from "react";
import Image from "next/image";
import { IndiaWhyStudy } from "@/constants/indian-universities";
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import { imageBaseUrl } from "@/utils/config";


const images = [
  `${imageBaseUrl}StydyUSA/image1.png`,
  `${imageBaseUrl}StydyUSA/image2.png`,
  `${imageBaseUrl}StydyUSA/image3.png`,
  `${imageBaseUrl}StydyUSA/image4.png`,
  `${imageBaseUrl}StydyUSA/image5.png`,
];

const tooltipData = [
  IndiaWhyStudy.point1,
  IndiaWhyStudy.point2,
  IndiaWhyStudy.point3,
  IndiaWhyStudy.point4,
  IndiaWhyStudy.point5,
];

const WhyStudyInIndia = () => {
  return (
    <div className="mt-10 bg-[#EFFDFF] py-10 my-10">
      <ContainerWrapper>

      <HeadingTypography content={`${IndiaWhyStudy.title}`} textAlign="center"/>
        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-center pt-32">
 
          <div className="relative w-[500px] h-[500px] border-4 border-dashed border-white rounded-full bg-[#63D7DB] flex items-center justify-center">
            <div className="w-[300px] h-[300px] border-4 border-dashed border-white rounded-full flex items-center justify-center">
              <div className="w-[150px] h-[150px] border border-white rounded-full bg-white shadow-md"></div>
            </div>

            {/* Cards */}
            {tooltipData.map((item, index) => {
              const positions = [
                "left-[30%] -top-[65px]", // top center
                "-right-[90px] top-[100px]", // right mid
                "-right-[50px] -bottom-[10px]", // right bottom
                "-left-[50px] -bottom-[10px]", // left bottom
                "-left-[90px] top-[100px]", // left mid
              ];
              return (
                <div
                  key={index}
                  className={`absolute ${positions[index]} bg-white w-[180px] h-[150px] rounded-lg p-4 flex flex-col items-center justify-center shadow-lg text-center`}
                  title={item.subtitle}
                >
                  <div className="w-[70px] h-[70px] mb-2">
                    <Image
                      src={images[index]}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium px-1">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden pt-10">
         
          <div className="flex flex-col items-center gap-6">
            {tooltipData.map((item, index) => (
              <div
                key={index}
                className="w-[250px] h-[180px] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-center"
                title={item.subtitle}
              >
                <div className="w-[80px] h-[80px] mb-2">
                  <Image
                    src={images[index]}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <p className="text-base font-medium px-2">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default WhyStudyInIndia;