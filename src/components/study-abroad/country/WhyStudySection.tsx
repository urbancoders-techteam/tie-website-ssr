// components/WhyStudySection.tsx
import React from "react";
import Image from "next/image";
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";

type WhyStudyItem = {
  title: string;
  subtitle?: string;
};

type WhyStudyData = {
  title: string;
  points: WhyStudyItem[];
  images: string[];
};

const WhyStudySection = ({ data }: { data: WhyStudyData }) => {
  return (
    <div className="mt-10 bg-[#EFFDFF] py-10 my-10">
      <ContainerWrapper>
        <HeadingTypography content={data.title} textAlign="center" />

        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-center pt-20">
          <div className="relative w-[450px] h-[450px] border-4 border-dashed border-white rounded-full bg-[#63D7DB] flex items-center justify-center">
            <div className="w-[250px] h-[250px] border-4 border-dashed border-white rounded-full flex items-center justify-center">
              <div className="w-[120px] h-[120px] border border-white rounded-full bg-white shadow-md"></div>
            </div>

            {data.points.map((item, index) => {
              const positions = [
                "left-[35%] -top-[60px]", // top
                "right-[-80px] top-[50px]", // top-right
                "right-[-80px] bottom-[50px]", // bottom-right
                "left-[35%] bottom-[-60px]", // bottom
                "left-[-80px] bottom-[50px]", // bottom-left
                "left-[-80px] top-[50px]", // top-left
              ];

              return (
                <div
                  key={index}
                  className={`absolute ${positions[index]} bg-white w-[160px] h-[110px] rounded-lg p-2 flex flex-col items-center justify-center shadow-lg text-center`}
                  title={item.subtitle}
                >
                  <div className="w-[45px] h-[45px] mb-1">
                    <Image
                      src={data.images[index]}
                      alt={item.title}
                      width={45}
                      height={45}
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
            {data.points.map((item, index) => (
              <div
                key={index}
                className="w-[250px] h-[180px] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-center"
                title={item.subtitle}
              >
                <div className="w-[80px] h-[80px] mb-2">
                  <Image
                    src={data.images[index]}
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

export default WhyStudySection;
