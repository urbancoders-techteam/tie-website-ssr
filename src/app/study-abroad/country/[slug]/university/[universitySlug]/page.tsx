/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import StudyAbroadFeeStructure from "@/components/study-abroad/StudyAbroadUniversity";
import { BackRouteContainer } from "@/components/study-abroad/university-finder/ViewComponents";
import TestPackages from "@/components/test/TestPackages";
import { baseUrl, imageBaseUrl, navURL } from "@/utils/config";
import { Box, LinearProgress } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UniversityDetailPage() {
  const { slug, universitySlug } = useParams<{
    slug: string;
    universitySlug: string;
  }>();

  const [university, setUniversity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  console.log("university", university);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}study-abroad-universities/web/${universitySlug}`
        );
        setUniversity(response.data?.data);
      } catch (err) {
        console.error("Error fetching university:", err);
      } finally {
        setLoading(false);
      }
    };

    if (universitySlug) fetchUniversity();
  }, [universitySlug]);

  if (loading) {
    return (
      <Box sx={{ width: "100%", mt: 2, color: "#00999e" }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  if (!university) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">
          University not found
        </h2>
      </div>
    );
  }

  const universityDetails = [
    {
      id: 1,
      title: "Name",
      subtitle: university?.name || "N/A",
      image: imageBaseUrl + "universityinfo/1.png",
    },
    {
      id: 2,
      title: "Location",
      subtitle: university?.location || "N/A",
      image: imageBaseUrl + "universityinfo/2.png",
    },

    {
      id: 4,
      title: "Type",
      subtitle: university?.type || "N/A",
      image: imageBaseUrl + "universityinfo/4.png",
    },
    {
      id: 5,
      title: "Total Enrollment",
      subtitle: university?.totalEnrollment || "N/A",
      image: imageBaseUrl + "universityinfo/5.png",
    },
    {
      id: 6,
      title: "Indian Students",
      subtitle: university?.indianStudents || "N/A",
      image: imageBaseUrl + "universityinfo/6.png",
    },
    {
      id: 3,
      title: "Total Students",
      subtitle: university?.totalStudents || "N/A",
      image: imageBaseUrl + "universityinfo/3.png",
    },
    {
      id: 7,
      title: "Website",
      subtitle: university?.website || "N/A",
      image: imageBaseUrl + "universityinfo/7.png",
      url: university?.websiteUrl,
    },
  ];
  return (
    <>
      {/* Banner */}
      <div
        className="relative bg-cover h-[80vh] bg-center w-full mb-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${university.bgBanner})`,
        }}
      >
        <ContainerWrapper>
          <div className="flex  items-center justify-center w-full h-[80vh]  px-4">
            {/* Left Side (Text + CTA) */}
            <div className="w-full text-white text-center md:text-left">
              <span className="text-4xl font-bold">{university?.name}</span>

              {/* CTA button */}
              <ModalTrigger />
            </div>
          </div>
        </ContainerWrapper>
      </div>
      <BackRouteContainer
        title="Select University Page"
        path={`${navURL}study-abroad/country/${slug}`}
      />

      {/* University Details */}
      <ContainerWrapper className="py-12">
        <HeadingTypography content="University Details" textAlign="center" />
        <div className="flex justify-center items-center w-full flex-wrap px-4 gap-5 py-10">
          {universityDetails?.map((item, index) => {
            const CardContent = (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center p-4 w-[250px] h-[220px] ${
                  item.url ? "hover:bg-gray-100" : ""
                } border md:border-gray-300 rounded-md transition`}
              >
                <div className="relative w-[50px] h-[50px] mb-2">
                  <Image
                    src={item?.image}
                    alt={item?.title || "University image"}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-lg font-semibold max-w-[250px] break-words">
                    {item?.title || "No Title"}
                  </h3>
                  <p className="text-sm text-gray-700 max-w-[250px] break-words">
                    {item?.subtitle || "No Subtitle"}
                  </p>
                </div>
              </div>
            );

            return item.url ? (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </ContainerWrapper>

      {/* why */}
      <section className="bg-[#effdff] py-12 text-center">
        <ContainerWrapper>
          <HeadingTypography
            content={`Why Choose ${university.name}?`}
            textAlign="center"
          />

          <div className="flex flex-wrap justify-evenly gap-8 my-10 text-center">
            {university?.why?.map((item: any) => (
              <div key={item._id} className="flex flex-col items-center w-64">
                <div className="w-36 h-36 rounded-full border-2 border-[#00999e] bg-white flex items-center justify-center shadow-md">
                  <span className="text-lg font-semibold text-[#00999e] text-center px-4">
                    {item?.insideTitle}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-800 px-2">
                  {item?.outsideTitle}
                </p>
              </div>
            ))}

            {/* ModalTrigger centered */}
            <div className="w-full  flex justify-center">
              <ModalTrigger />
            </div>
          </div>
        </ContainerWrapper>
      </section>

      {/* Eligibility and Fee Structure of some popular courses */}
      <ContainerWrapper className="py-12">
        <HeadingTypography
          content="Eligibility and Fee Structure of some popular courses"
          textAlign="center"
        />
         <StudyAbroadFeeStructure data={university?.feeStructure} />
        
      </ContainerWrapper>

      {/* Scholarship */}
      <ContainerWrapper className="py-12">
   

      <TestPackages PackageData={university.scholarShip || []} Scholarship={'Scholarship'}/>

      </ContainerWrapper>

      {/* Popular Recruiters */}
      <section className="bg-[#effdff] py-12 text-center">
        <ContainerWrapper className="py-12">
          <HeadingTypography content="Popular Recruiters" textAlign="center" />
          <div className="flex justify-center items-center w-full flex-wrap px-4 gap-5 py-10">
            {university?.popularRecruiters?.map((item: any, index: number) => {
              const CardContent = (
                <div
                  key={index}
                  className="w-[230px] h-[280px] bg-white rounded-md shadow-xl hover:bg-[#effdff] transition cursor-pointer flex flex-col justify-center items-center text-center no-underline"
                >
                  <div className="relative w-[100px] h-[100px] mb-2">
                    <Image
                      src={item?.logo}
                      alt={item?.name || "University image"}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-semibold max-w-[250px] break-words text-[#00999e]">
                      {item?.name || "No Title"}
                    </h3>
                  </div>
                </div>
              );

              return item.url ? (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CardContent}
                </Link>
              ) : (
                <div key={index}>{CardContent}</div>
              );
            })}
          </div>
        </ContainerWrapper>
      </section>

      {/* know more */}
      <ContainerWrapper className="py-12">
        <HeadingTypography content="Know More" textAlign="center" />
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {university?.knowMore?.map((item: any) => {
            return (
              <Link
                key={item?._id}
                href={item?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[250px] h-[250px] bg-white rounded-md shadow-xl hover:bg-[#effdff] transition cursor-pointer flex flex-col justify-center items-center text-center no-underline"
              >
                <div className="w-full px-2 mb-4">
                  <h3 className="text-xl font-semibold text-teal-600">
                    {item?.label}
                  </h3>
                </div>

                {item?.image && (
                  <div className="relative  mb-2">
                    <Image
                      src={item?.image}
                      alt={item?.title || "University image"}
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </ContainerWrapper>
      <ContainerWrapper className="pb-12 text-center">
        <ModalTrigger />
      </ContainerWrapper>
      <BackRouteContainer
        title="Select University Page"
        path={`${navURL}study-abroad/country/${slug}`}
      />
      <LetsStart />
    </>
  );
}
