/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { indianUniversities } from "@/apis/indianUniversity.api";
import { Box, LinearProgress } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SchoolIcon from "@mui/icons-material/School";

const UniversityCards = () => {
  const [universities, setUniversities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await indianUniversities();
        setUniversities(res?.data || []);
      } catch {
        setError("Something went wrong while fetching universities.");
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

  // Loading state
  if (loading) {
    return (
      <Box sx={{ width: "100%", mt: 2, color: "#00999e" }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <ErrorOutlineIcon className="text-red-500 mb-3" fontSize="large" />
        <p className="text-lg font-semibold text-red-500">Failed to Load</p>
        <p className="text-gray-600 text-sm mt-1">{error}</p>
      </div>
    );
  }

  // No data state
  if (!universities || universities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <SchoolIcon className="text-gray-400 mb-3" fontSize="large" />
        <p className="text-lg font-semibold text-gray-700">
          No Universities Found
        </p>
        <p className="text-gray-500 text-sm mt-1">
          We couldn’t find any university data right now. Please check back later.
        </p>
      </div>
    );
  }

  // Data list
  return (
    <div className="flex justify-center flex-wrap gap-6 my-8">
      {universities.map((item: any, index: number) => (
        <Link
          href={`/international-relation/india/${item?._id}`}
          className="w-[200px] h-[250px] bg-white rounded-md shadow-md flex flex-col justify-between overflow-hidden"
          key={index}
        >
          {/* Top section with image + name */}
          <div className="flex flex-col items-center px-4 py-5 text-center">
            <div className="relative w-[150px] h-[130px] mb-2 rounded-md">
              <Image
                src={item?.image}
                alt={item?.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="bg-[#00999e] text-white text-center items-center h-20 text-sm font-semibold p-3 rounded-b-md">
            {item?.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UniversityCards;
