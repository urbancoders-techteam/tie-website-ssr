"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface CostOfStudyItem {
  image: string | StaticImport;
  title: React.ReactNode;
  cost: React.ReactNode;
}

interface CostOfStudyProps {
  data: CostOfStudyItem[];
}

const CostOfStudy: React.FC<CostOfStudyProps> = ({ data }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="w-40 h-40 rounded-full bg-[#00999E1F] flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt={typeof item.title === "string" ? item.title : String(item.title) || "Image"}
                  className="max-w-full max-h-32 object-contain"
                />
              </div>
              <p className="mt-5 text-lg text-[#00999E] font-medium">
                {item?.title}
              </p>
              <p className="text-xl text-zinc-900 font-semibold">{item.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostOfStudy;
