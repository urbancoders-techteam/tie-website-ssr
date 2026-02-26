/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CulturalExploration from "./country/CulturalExploration";
import CompanyVisit from "./country/CompanyVisit";
import University from "./country/University";
import ProgramHighlight from "./ProgramHighlight";
import KeyObjectives from "./KeyObjectives";
import { immersionCountryDetails } from "@/apis/immersion.api";

export default function Country({ item }: any) {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [countryData, setCountryData] = useState<any>(null);



  const fetchCountryData = async (country: any) => {
    const res = await immersionCountryDetails(
      item?.immersionZone,
      country?.name
    );
    setCountryData(res?.data || null);
  };

  useEffect(() => {
    if (item?.countries?.length > 0) {
      const first = item.countries[0];
      setSelectedCountry(first);
      fetchCountryData(first);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.countries]);

  const handleCountryClick = (country: any) => {
    setSelectedCountry(country);
    fetchCountryData(country);
  };

  const companyVisit = {
    features: countryData?.companyFeatures || [],
    image: countryData?.companyImage,
    title: countryData?.companyTitle,
  };

  const universityVisit = {
    features: countryData?.universityFeatures || [],
    image: countryData?.universityImage,
    title: countryData?.universityTitle,
    shortDes: countryData?.universityShortDes,
  };

  return (
    <ContainerWrapper>
      {item?.countries?.length > 0 && (
        <>
          {/* Country Cards */}
          <div className="flex gap-10 flex-wrap">
            {item?.countries?.map((c: any, idx: number) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-4 cursor-pointer transition-all duration-200 ${
                  selectedCountry?.name === c.name
                    ? "scale-105 border-b-4 border-[#00999E]"
                    : ""
                }`}
                onClick={() => handleCountryClick(c)}
              >
                {c.flag && (
                  <div className="relative w-40 h-28 rounded overflow-hidden shadow-md">
                    <Image
                      src={c?.flag}
                      alt={c?.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#00999E]">
                  {c?.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Selected Country Tab Content */}
          {countryData && (
            <>
              <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-[#effdff] px-10">
                <div className="space-y-6">
                  <HeadingTypography content={countryData?.name} />
                  {countryData?.description && (
                    <div
                      className="text-lg leading-relaxed text-gray-700 space-y-4"
                      dangerouslySetInnerHTML={{
                        __html: countryData.description,
                      }}
                    />
                  )}
                </div>

                {countryData?.image && (
                  <div className="relative w-full h-64 md:h-96 overflow-hidden shadow-lg">
                    <Image
                      src={countryData.image}
                      alt="image"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
              </div>

              {countryData?.keyObjectives?.length > 0 && (
                <KeyObjectives data={countryData.keyObjectives} />
              )}

              {countryData?.programOverview?.length > 0 && (
                <ProgramHighlight data={countryData.programOverview} />
              )}

              {(universityVisit?.features?.length > 0 ||
                universityVisit?.image ||
                universityVisit?.title ||
                universityVisit?.shortDes) && (
                <University data={universityVisit} />
              )}

              {(companyVisit?.features?.length > 0 ||
                companyVisit?.image ||
                companyVisit?.title) && (
                <CompanyVisit data={companyVisit} />
              )}

              {countryData?.culturalExploration?.length > 0 && (
                <CulturalExploration data={countryData.culturalExploration} />
              )}
            </>
          )}
        </>
      )}
    </ContainerWrapper>
  );
}
