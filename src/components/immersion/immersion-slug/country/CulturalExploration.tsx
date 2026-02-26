/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function CulturalExploration({ data }: any) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridHeight, setGridHeight] = useState<number | null>(null);

  useEffect(() => {
    if (gridRef.current) {
      setGridHeight(gridRef.current.clientHeight);
    }
  }, [data]);

  return (
    <div className="flex flex-col my-12 md:flex-row items-stretch w-full">
      {/* Left Side Label */}
      <div
        className="bg-[#00999e] text-white flex items-center justify-center w-full md:w-[35%] px-4 py-8 text-3xl font-semibold text-center"
        style={{ height: gridHeight ? `${gridHeight}px` : "auto" }}
      >
        <div>
          <div className="inline-block px-2 py-1 mb-2">
            CULTURAL
          </div>
          <div className="inline-block px-2 py-1">
            EXPLORATION
          </div>
        </div>
      </div>

      {/* Right Side Images */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 bg-white w-full"
      >
        {data?.map((item: any, index: number) => (
          <div key={index} className="overflow-hidden rounded shadow-md">
            <Image
              src={item}
              alt={item.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
