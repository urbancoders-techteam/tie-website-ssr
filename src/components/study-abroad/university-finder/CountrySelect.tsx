/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { baseUrl } from "@/utils/config";

interface Country {
  _id: string;
  name: string;
  icon: string;
}

interface CountrySelectProps {
  setFilters: (prev: any) => void;
  selectedCountries: string[];
  setSelectedCountries: (countries: string[]) => void;
  handleCardClick: (id: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  setFilters,
  selectedCountries,
  setSelectedCountries,
  handleCardClick,
}) => {
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}university/countryList`);
  
        if (response.data.success && response.data.status === 200) {
          setCountryData(response.data.data.formattedData);
  
          const stored = sessionStorage.getItem("selectedCountries");
          if (stored) {
            const parsed = JSON.parse(stored);
            setSelectedCountries(parsed);
            setFilters((prev: any) => ({
              ...prev,
              country: parsed,
            }));
          }
        } else {
          console.error("Failed to fetch data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCountryData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return loading ? (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
      {[...Array(8)].map((_, idx) => (
        <div
          key={idx}
          className="aspect-[1/1] w-full animate-pulse rounded-xl bg-gray-200"
        />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
      {countryData.map((item) => {
        const isSelected = selectedCountries.includes(item._id);

        return (
          <button
            key={item._id}
            type="button"
            onClick={() => handleCardClick(item._id)}
            className={`group flex aspect-[1/1] w-full flex-col items-center justify-center gap-1.5 rounded-xl border p-2.5 text-center transition-all duration-200 sm:gap-2 sm:p-3 ${
              isSelected
                ? "border-[#00999E] bg-[#00999E] text-white shadow-[0_10px_24px_-14px_rgba(0,153,158,0.9)]"
                : "border-gray-300 bg-[#effdff] text-black hover:border-[#00999E]/50 hover:shadow-sm"
            }`}
          >
            <div className="h-10 w-12 sm:h-11 sm:w-14">
              <Image
                src={item.icon}
                alt={item.name}
                width={56}
                height={44}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="line-clamp-2 text-xs font-medium leading-tight sm:text-sm">
              {item.name}
            </p>
          </button>
        );
      })}
    </div>
  );
  
};

export default CountrySelect;
