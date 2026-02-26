"use client";

import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

type VisaEnlightenmentProps = {
  data: {
    image: string;
    data: string[];
  };
};

const VisaEnlightenment: React.FC<VisaEnlightenmentProps> = ({ data }) => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Image */}
        <div className="md:col-span-5 lg:col-span-6 flex justify-center">
          <div className="max-w-[500px] w-full">
            <Image
              src={data?.image}
              alt="Visa"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-7 lg:col-span-6 flex justify-center">
          <div className="flex flex-col justify-center h-full">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00999E] mb-6 text-center md:text-left">
              ~Visa Enlightenment~
            </h2>

            {/* Content Items */}
            <ul className="space-y-4">
              {data?.data?.map((step, index) => (
                <li
                  key={index}
                  className="flex items-center text-base sm:text-lg lg:text-xl text-gray-800"
                >
                  <AiFillCheckCircle className="text-[#00999E] w-6 h-6 mr-3 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaEnlightenment;
