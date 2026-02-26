"use client";
import { RulesData } from "@/constants/mbbs";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";

const Rules = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="mbbsRules" className="py-16 w-full flex justify-center ">
      <ContainerWrapper className=" w-full">
        <HeadingTypography
          content="NMC Rules for Practising in India post MBBS Abroad"
          textAlign="center"
        />
        <p className="text-center text-[#00999e] text-sm mb-10">
          Here are the general rules by the National Medical Commission (NMC)
        </p>

      <div className="flex flex-wrap justify-center gap-8 relative">
  {RulesData.map((item, index) => {
    const isActive = hoveredIndex === index;

    return (
      <div
        key={index}
        className="relative flex flex-col items-center"
        onMouseEnter={() => {
          setHoveredIndex(index);
        
        }}
        onMouseLeave={() => {
          setHoveredIndex(null);
   
        }}
      >
        {/* Outer Dashed Circle */}
        <div
          className={`w-[180px] h-[180px] rounded-full flex items-center justify-center border-2 border-dashed transition-all duration-300 cursor-pointer ${
            isActive ? "border-[#00999E]" : "border-black"
          }`}
        >
          {/* Inner Circle */}
          <div
            className={`w-[150px] h-[150px] rounded-full flex items-center justify-center text-center font-semibold px-4 py-4 transition-all duration-300 ${
              isActive ? "bg-[#00999E] text-white" : "bg-white text-black"
            }`}
          >
            <span className="font-poppins text-[16px]">{item.title}</span>
          </div>
        </div>

        {/* Line and Icon */}
        <div className="flex flex-col items-center pt-5">
          {isActive ? (
            <>
              <div className="w-[2px] h-10 border-l-2 border-dotted border-[#00999E]" />
              <Icon icon="mdi:arrow-down" className="text-[#00999E] text-xl" />
            </>
          ) : (
            <Icon
              icon="lets-icons:check-ring-light"
              className="text-2xl text-[#00999E]"
            />
          )}
        </div>

        {/* Tooltip Content */}
        {isActive && (
          <div className="absolute top-[230px] left-1/2 -translate-x-1/2 w-[320px] bg-white shadow-lg p-4 rounded-md text-[13px] text-[#00999E] z-50 border border-[#00999E] leading-relaxed">
            {item.content}
          </div>
        )}
      </div>
    );
  })}
</div>

      </ContainerWrapper>
    </section>
  );
};

export default Rules;
