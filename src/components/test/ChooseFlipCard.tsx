/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React from "react";


interface Props {
  data: any;
}

const ChooseFlipCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flip-card w-[250px] h-[250px]">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
        {/* Front */}
        <div className="flip-card-front absolute w-full h-full bg-white rounded-xl shadow-lg backface-hidden text-center p-4">
          <div className="flex justify-center pt-4 pb-3">
            <Image
              src={data.image}
              alt="Flip Card Image"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
          <p className="text-sm text-gray-500 mt-2">{data.content}</p>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute w-full h-full bg-[#00999E] text-white rounded-xl p-4 transform rotate-y-180 backface-hidden">
          <h3 className="text-lg font-semibold mb-3">{data.title}</h3>
          <ul className="list-none text-sm space-y-1">
            {data.items.map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseFlipCard;
