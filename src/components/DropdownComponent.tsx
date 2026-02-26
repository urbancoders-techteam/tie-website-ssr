"use client";

import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
  value: string;
  label?: string;
}

interface DropdownComponentProps {
  label: string;
  options?: (string | DropdownOption)[];
  value?: string[] | string;
  onChange?: (val: string[] | string) => void;
  multiSelect?: boolean;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
    multiSelect = false,
    label,
    options = [],
    value = multiSelect ? [] : "",
    onChange = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const isObjectOptions = options.length > 0 && typeof options[0] === "object";

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOption = (optionValue: string) => {
    if (multiSelect && Array.isArray(value)) {
      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
      onChange(newValue);
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const getLabel = (val: string) => {
    if (isObjectOptions) {
      return (options as DropdownOption[]).find((opt) => opt.value === val)?.label || val;
    }
    return val;
  };

  const renderValue = () => {
    if (multiSelect && Array.isArray(value)) {
      return value.length ? value.map(getLabel).join(", ") : `Select ${label}`;
    }
    return typeof value === "string" && value ? getLabel(value) : `Select ${label}`;
  };

  return (
    <div className="relative w-full my-4" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

      <div
        className="w-full border border-gray-300 rounded-md p-3 bg-white cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`${!value || (Array.isArray(value) && value.length === 0) ? "text-gray-400" : "text-gray-900"}`}>
          {renderValue()}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute mt-1 z-20 w-full max-h-60 overflow-y-auto rounded-md bg-white border border-gray-300 shadow-lg">
          {options.map((option, idx) => {
            const optionValue =
              isObjectOptions && typeof option !== "string" ? option.value : option;
            const optionLabel =
              isObjectOptions && typeof option !== "string" ? option.label : option;

            const isChecked =
              multiSelect && Array.isArray(value)
                ? multiSelect && Array.isArray(value) && typeof optionValue === 'string' && value.includes(optionValue)
                : value === optionValue;

            return (
              <div
                key={idx}
                className={`cursor-pointer px-4 py-2 flex items-center hover:bg-gray-100 ${
                  isChecked ? "bg-blue-50" : ""
                }`}
                onClick={() => handleToggleOption(String(optionValue))}
              >
                {multiSelect && (
               <input
               type="checkbox"
               className="mr-2 pointer-events-none"
               checked={isChecked}
               onChange={() => {}}
               readOnly
             />
             
                )}
                <span className="text-sm text-gray-900">{typeof optionLabel === "string" ? optionLabel : String(optionValue)
                }</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
