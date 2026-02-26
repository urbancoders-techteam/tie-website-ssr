"use client";

import React from "react";

interface TextFieldProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value = "",
  onChange,
  placeholder = "",
}) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium text-gray-700 block mt-2 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || `Enter ${label}`}
        className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00999E] focus:border-[#00999E]"
      />
    </div>
  );
};

export default TextField;
