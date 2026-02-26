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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {[...Array(8)].map((_, idx) => (
        <div
          key={idx}
          className="h-[135px] w-[135px] rounded-lg animate-pulse bg-gray-200 mx-auto"
        />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {countryData.map((item) => {
        const isSelected = selectedCountries.includes(item._id);
  
        return (
          <div
            key={item._id}
            onClick={() => handleCardClick(item._id)}
            className={`border-2 rounded-lg h-[135px] w-[135px] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
              isSelected
                ? "bg-[#00999E] text-white border-[#00999E]"
                : "bg-[#Effdff] text-black border-gray-300"
            } hover:shadow-md mx-auto`}
          >
            <div className="w-20 h-16 py-2">
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm mt-1">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
  
};

export default CountrySelect;
