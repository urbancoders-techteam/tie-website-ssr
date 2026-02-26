"use client";

import React from "react";

interface CustomTextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  value,
  onChange,
  width = "100%",
}) => {
  return (
    <div className="my-5 px-6 py-5 rounded-md border-2 border-[#00999E] bg-gradient-to-r from-[#a7d6d799] via-[#daf0f17f] to-white flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Label */}
      <div className="w-full  text-center md:text-left flex-1">
        <label className="text-lg font-semibold block">
          {label} <span className="text-red-600 text-xl">*</span>
        </label>
      </div>

      {/* Input Field */}
      <div className="w-full flex-1">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter text..."
          style={{ width }}
          className="w-full px-4 py-2 border-2 border-[#00999E] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#00999E] transition"
        />
      </div>
    </div>
  );
};

export default CustomTextField;
