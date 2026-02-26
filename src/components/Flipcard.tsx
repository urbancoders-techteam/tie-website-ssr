// components/FlipCard.tsx
"use client";

import Image from "next/image";
import React from "react";

export interface FlipCardProps {
  data: {
    title: string;
    content?: string[];
    image: string;
  };
  AbleTitle?: boolean;
  backPaddingTop?: string;
  fontSize?: string;
  isFlip?: boolean;
  cardwidth?: string;
  cardheight?: string;
  titlefontsize?: string;
  padding?: string;
  pb?: string;
  listalign?: "left" | "center" | "right";
  liststyle?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  data,
  AbleTitle = true,
  isFlip = false,
  cardwidth = "w-[260px]",
  cardheight = "h-[240px]",
  titlefontsize = "text-lg",
  padding = "p-5",
  pb = "pb-4",

}) => {

  return (
    <div className={`relative ${cardwidth} ${cardheight} perspective`}>
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out transform-style-preserve-3d ${
          isFlip ? "hover:rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white  rounded-lg shadow-lg backface-hidden">
          <div className={`flex justify-center pt-3 ${pb}`}>
            <Image
              src={data.image}
              alt={`${data.title} icon`}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          <div className={`text-center ${padding}`}>
            <h3 className={`${titlefontsize} font-semibold `}>
              {data?.title}
            </h3>
          </div>
          {data?.content && (
            <p className="text-xs text-gray-600 px-2 text-center">
              {data?.content}
            </p>
          )}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-[#00999E] text-white rounded-lg transform rotate-y-180 backface-hidden">
          {AbleTitle && (
            <div className="text-center pt-5 pb-2 px-3">
              <h3 className="text-lg font-semibold">{data.title}</h3>
            </div>
          )}
        
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
