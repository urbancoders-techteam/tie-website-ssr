"use client";

import React from "react";

interface SelectionBoxProps {
  label: string;
  options: string[];
  selectedValue: string | string[];
  onSelect: (value: string | string[]) => void;
  width?: string;
  multiple?: boolean;
  gridsizemedium?: number;
  gridsizesmall?: number;
}

const SelectionBox: React.FC<SelectionBoxProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
  width = "200px",
  multiple = false,
}) => {
  const isSelected = (option: string) =>
    multiple
      ? (selectedValue as string[])?.includes(option)
      : selectedValue === option;

      const handleClick = (option: string) => {
        if (multiple) {
          const currentValues = Array.isArray(selectedValue) ? selectedValue : [];
      
          if (currentValues.includes(option)) {
            onSelect(currentValues.filter((item) => item !== option));
          } else {
            onSelect([...currentValues, option]);
          }
        } else {
          onSelect(selectedValue === option ? "" : option);
        }
      };
      

  return (
    <div className="my-5 p-4 text-center rounded-2xl border-2 border-[#00999E] bg-gradient-to-r from-[#a7d6d799] via-[#daf0f17f] to-white flex flex-col md:flex-row items-center justify-center md:justify-between gap-5">
      {/* Label */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-lg font-semibold">{label}</h2>
      </div>

      {/* Options */}
      <div className="w-full items-center grid sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {options.map((option) => {
          const selected = isSelected(option);
          return (
            <div
              key={option}
              onClick={() => handleClick(option)}
              className={`text-center px-4 py-2 rounded cursor-pointer shadow-md transition-all duration-200 ${
                selected
                  ? "border-2 border-[#00999E] text-[#00999E] shadow-[#00999E]"
                  : "border-2 border-black text-black"
              } hover:bg-gray-100`}
              style={{ width }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectionBox;
