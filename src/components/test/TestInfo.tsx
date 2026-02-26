"use client";

import Image from "next/image";
import React from "react";
import ModalTrigger from "../ModalTrigger";
import { BackRouteContainer } from "../study-abroad/university-finder/ViewComponents";
import ContainerWrapper from "../ContainerWrapper";

interface TestInfoProps {
  testInfo: {
    title: string;
    content: string;
    image: string;
    cta: string;
  };
}

const TestInfo: React.FC<TestInfoProps> = ({ testInfo }) => {
  return (
    <div className="bg-[#effdff] w-full pt-10">
      <ContainerWrapper>
        <BackRouteContainer
          path="/test"
          title="Test Main Page"
          logo={"/images/backuniversity.png"}
        />
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-[60%] flex justify-center">
            <div className="text-center md:text-left">
              {/* Title & Content */}
              <div className="text-[20px] sm:text-[26px] md:text-[36px] text-gray-800 font-medium">
                <h2 className="inline text-[#00999E] font-bold">
                  {testInfo?.title}:&nbsp;
                </h2>
                <span
                  className="
                        font-semibold 
                        text-[rgba(0,0,0,0.7)] 
                        text-[20px] 
                        sm:text-[26px] 
                        md:text-[30px] 
                        lg:text-[30px] 
                        leading-snug  
  "
                >
                  {testInfo?.content}
                </span>
              </div>

              {/* CTA Button */}
              <div className="my-6">
                <ModalTrigger text={testInfo?.cta} />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] flex justify-center">
            <Image
              src={testInfo?.image}
              alt={testInfo?.title}
              width={350}
              height={200}
              className="max-w-[90%] md:max-w-full object-contain"
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default TestInfo;
