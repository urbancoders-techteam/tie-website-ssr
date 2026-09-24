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
      className="group relative h-[250px] w-[230px] cursor-pointer overflow-hidden rounded-[10px] bg-white p-4 shadow-md transition-all duration-500"
    >
      <div className="flex justify-center pt-4">
        <Image
          src={data?.image}
          alt={data?.title}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 h-12 w-full overflow-y-auto rounded-[10px] bg-[#0A9DA2] px-4 py-3 text-white transition-all duration-500 group-hover:h-full">
        <h3 className="text-center text-lg font-medium">{data?.title}</h3>

        <div className="mt-2 text-center text-sm font-normal">
          {data?.content && <p className="mb-2">{data.content}</p>}

          {data?.items && (
            <ul className="ml-4 list-disc space-y-1 text-left font-poppins">
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
