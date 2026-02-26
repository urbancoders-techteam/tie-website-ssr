"use client";

import React from "react";
import Image from "next/image";

interface ExamStructureCardProps {
  data: {
    image: string;
    title: string;
    content?: string;
    items?: string[];
  };
  onClick?: () => void;
}

const ExamStructureCard: React.FC<ExamStructureCardProps> = ({ data, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-[230px] h-[250px] bg-white rounded-[10px] shadow-md p-4 overflow-hidden cursor-pointer group transition-all duration-500"
    >
      {/* Image */}
      <div className="flex justify-center pt-4">
        <Image
          src={data?.image}
          alt={data?.title}
          width={150}
          height={150}
          className="rounded-full object-contain"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0A9DA2] text-white rounded-[10px] px-4 py-3 h-12 group-hover:h-full transition-all duration-500 overflow-y-auto">
        <h3 className="text-center font-medium text-lg">{data?.title}</h3>

        <div className="mt-2 text-sm text-center font-normal">
          {data?.content && <p className="mb-2">{data.content}</p>}

          {data?.items && (
            <ul className="list-disc text-left ml-4 space-y-1 font-poppins">
              {data.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamStructureCard;
