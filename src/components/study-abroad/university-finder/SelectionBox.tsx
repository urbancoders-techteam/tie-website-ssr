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
    <section className="my-5 rounded-2xl border border-[#00999E]/25 bg-gradient-to-br from-[#f9fefe] via-white to-[#f1fafb] p-4 shadow-sm sm:p-5">
      {/* Label */}
      <div className="mb-4 w-full text-center md:text-left">
        <h2 className="text-base font-bold tracking-tight text-[#0f2744] sm:text-lg">
          {label}
        </h2>
      </div>

      {/* Options */}
      <div className="grid w-full grid-cols-2 gap-3">
        {options.map((option) => {
          const selected = isSelected(option);
          return (
            <button
              type="button"
              key={option}
              onClick={() => handleClick(option)}
              className={`w-full cursor-pointer rounded-lg border px-4 py-2.5 text-center text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00999E]/35 ${
                selected
                  ? "border-[#00999E] bg-[#00999E]/10 text-[#007f85] shadow-[0_4px_14px_-8px_rgba(0,153,158,0.65)]"
                  : "border-slate-300 bg-white text-slate-700 hover:border-[#00999E]/60 hover:bg-[#f5fbfb]"
              }`}
              style={{ width }}
              aria-pressed={selected}
            >
              {option}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SelectionBox;
