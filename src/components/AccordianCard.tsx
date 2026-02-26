"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface FeeItem {
  GMAT: string;
  FEES: string;
}

interface AccordionData {
  title: string;
  Desc: string;
  fees?: FeeItem[];
}

interface AccordionCardProps {
  data: AccordionData;
  i: number;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ data, i }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`transition-all duration-300 shadow-md mb-4 ${
        isOpen ? "bg-[#DDFEFF]" : "bg-white"
      }`}
    >
      <button
        onClick={toggleAccordion}
        className="w-full flex items-center justify-between p-4 text-left cursor-pointer "
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 ">
          <span className="font-semibold text-lg text-[#170F49]">
            {i + 1}. {data.title}
          </span>
        </div>
        <div
          className={`p-2 rounded-md ${
            isOpen ? "bg-[#00999E]" : "bg-[#F7F7FF]"
          }`}
        >
          <Icon
            icon={isOpen ? "lucide:minus" : "ic:baseline-add"}
            color={isOpen ? "#fff" : "#00999E"}
            width={24}
            height={24}
          />
        </div>
      </button>

      {isOpen && (
        <div className="p-4 border-t border-gray-200 h-fit">
          {data.fees && data.fees.length > 0 && (
            <table className="w-full text-left border-collapse mb-4">
              <thead>
                <tr>
                  <th className="py-1 text-[16px] border-b border-gray-300">
                    GMAT
                  </th>
                  <th className="py-1 text-[16px] border-b border-gray-300">
                    Fees
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.fees.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-1 text-sm">{item.GMAT}</td>
                    <td className="py-1 text-sm">{item.FEES}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <p className="text-[#6F6C90] text-[16px] sm:text-[18px] font-medium">
            {data.Desc}
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
