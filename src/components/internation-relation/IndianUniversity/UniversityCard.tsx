/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { indianUniversities } from "@/apis/indianUniversity.api";
import { Box, LinearProgress } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SchoolIcon from "@mui/icons-material/School";

const UniversityCards = () => {
  const slider = useRef<Slider>(null);
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
    <section aria-label="Associated Indian universities" aria-roledescription="carousel" className="mx-auto my-8 w-full max-w-7xl px-4 sm:px-10 md:px-8">
      <div className="mb-4 flex justify-end gap-2">
        <button type="button" aria-label="Previous universities" onClick={() => slider.current?.slickPrev()} className="h-10 w-10 rounded-full border border-[#00999e] text-xl text-[#00999e] hover:bg-[#effdff]">‹</button>
        <button type="button" aria-label="Next universities" onClick={() => slider.current?.slickNext()} className="h-10 w-10 rounded-full border border-[#00999e] text-xl text-[#00999e] hover:bg-[#effdff]">›</button>
      </div>
      <Slider className="-mx-7" ref={slider} slidesToShow={Math.min(5, universities.length)} slidesToScroll={1} infinite={universities.length > 5} arrows={false} autoplay autoplaySpeed={4000} speed={500} pauseOnHover pauseOnFocus
        responsive={[
          { breakpoint: 1536, settings: { slidesToShow: Math.min(4, universities.length), infinite: universities.length > 4 } },
          { breakpoint: 1024, settings: { slidesToShow: Math.min(3, universities.length), infinite: universities.length > 3 } },
          { breakpoint: 768, settings: { slidesToShow: Math.min(2, universities.length), infinite: universities.length > 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1, infinite: universities.length > 1 } },
        ]}>
      {universities.map((item: any, index: number) => (
        <div key={item?.slug || item?._id || index} className="px-7 pb-3">
        <Link
          href={`/international-relation/india/${item?.slug || item?._id}`}
          className="w-full bg-white rounded-md shadow-md flex flex-col overflow-hidden"
          key={item?.slug || item?._id || index}
        >
          {/* Top section with image + name */}
          <div className="flex flex-col items-center px-4 py-5 text-center">
            <div className="relative w-[150px] h-[130px] mb-2 rounded-md">
              <Image
                src={item?.image}
                alt={item?.name}
                fill
                className="object-contain rounded-md"
              />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="bg-[#00999e] text-white text-center text-sm font-semibold leading-snug px-3 py-3 rounded-b-md">
            {item?.name}
          </div>
        </Link>
        </div>
      ))}
      </Slider>
    </section>
  );
};

export default UniversityCards;
