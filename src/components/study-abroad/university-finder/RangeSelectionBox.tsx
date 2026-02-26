"use client";

import React from "react";

interface RangeSelectionBoxProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const RangeSelectionBox: React.FC<RangeSelectionBoxProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="my-5 p-5 rounded-2xl border-2 border-[#00999E] bg-gradient-to-r from-[#a7d6d799] via-[#daf0f17f] to-white flex flex-col md:flex-row justify-between items-center gap-4">
      <h2 className="text-lg font-semibold w-full md:w-[300px] text-center md:text-left">
        {label}
      </h2>

      <div className="w-full max-w-xl flex flex-col items-center">
        <div className="w-full bg-white border-2 border-[#00999E] rounded-2xl px-12 py-4">
          <label className="text-sm font-medium block mb-2">Range Slider</label>
          <input
            type="range"
            min={0}
            max={5000000}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full accent-[#00999E] cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-700 mt-1 font-bold">
            <span>0</span>
            <span>50,00,000</span>
          </div>
        </div>

        <div className="mt-4 w-full flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 bg-[#00999E] text-white text-center py-3 rounded-t-md md:rounded-l-md md:rounded-tr-none">
            <span className="text-sm">Tuition Fees Per Year</span>
          </div>
          <div className="w-full md:w-1/2">
            <input
              type="text"
              readOnly
              value={value?.toLocaleString("en-IN")}
              className="w-full text-center py-3 border-2 border-black/50 rounded-b-md md:rounded-r-md md:rounded-bl-none outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSelectionBox;
