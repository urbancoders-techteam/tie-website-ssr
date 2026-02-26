/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { indianUniversitiesDetails } from "@/apis/indianUniversity.api";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import NationalityBrochureDownload from "@/components/internation-relation/IndianUniversity/NationalifyBrochureDownload";
import ModalTrigger from "@/components/ModalTrigger";
import { imageBaseUrl } from "@/utils/config";
import { Box, LinearProgress } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";


export default function UniversityDetailsPage() {
  const { slug } = useParams<{ slug: string;}>();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      indianUniversitiesDetails(slug)
        .then((res) => {
          setData(res?.data ?? res); 
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        })
        .finally(() => setLoading(false));
    }
  }, [slug]);

  if (loading) {
    return (
     <Box sx={{ width: '100%', mt: 2, color: '#00999e' }}>
        <LinearProgress color="inherit" />
      </Box>
    );
  }

  if (!data) {
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
      subtitle: data?.name || "N/A",
      image: imageBaseUrl + "universityinfo/1.png",
    },
    {
      id: 2,
      title: "Location",
      subtitle: data?.location || "N/A",
      image: imageBaseUrl + "universityinfo/2.png",
    },
    {
      id: 3,
      title: "Founded",
      subtitle: data?.founded || "N/A",
      image: imageBaseUrl + "universityinfo/3.png",
    },
    {
      id: 4,
      title: "Type",
      subtitle: data?.type || "N/A",
      image: imageBaseUrl + "universityinfo/4.png",
    },
    {
      id: 5,
      title: "Total Enrollment",
      subtitle: data?.totalEnrollment || "N/A",
      image: imageBaseUrl + "universityinfo/5.png",
    },
    {
      id: 6,
      title: "International Students",
      subtitle: data?.internationalStudents || "N/A",
      image: imageBaseUrl + "universityinfo/6.png",
    },
    {
      id: 7,
      title: "Website",
      subtitle: data?.website || "N/A",
      image: imageBaseUrl + "universityinfo/7.png",
      url: data?.websiteUrl,
    },
  ];

  return (
    <>
     <BreadcrumbSchema />
      {/* Banner */}
      <div
        className="relative bg-cover bg-center w-full "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.bgBanner})`,
        }}
      >
        <ContainerWrapper>
          <div className="flex flex-col md:flex-row items-center justify-between w-full  px-4 py-12 md:py-20">
            {/* Left Side (Text + CTA) */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <h1 className="text-3xl md:text-6xl font-bold">{data?.name}</h1>

              {/* CTA button */}
              <ModalTrigger />
            </div>

            {/* Right Side (Paper-like card) */}
            <div className="w-full md:w-[40%] mt-10 md:mt-0 bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg text-justify text-gray-800">
              <p className="text-sm sm:text-base">{data.description}</p>
            </div>
          </div>
        </ContainerWrapper>
      </div>

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
      <ContainerWrapper className="bg-[#effdff] py-12 text-center">
        <HeadingTypography
          content="Why Choose This University?"
          textAlign="center"
        />

        <div className="flex flex-wrap justify-evenly gap-8 my-10 text-center">
          {data?.why?.map((item: any) => (
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

      {/* Eligibility and Fee Structure of some popular courses */}
      <ContainerWrapper className="py-12">
        <HeadingTypography
          content="Eligibility and Fee Structure of some popular courses"
          textAlign="center"
        />
        <NationalityBrochureDownload data={data?.feeStructure} />
      </ContainerWrapper>

      <ContainerWrapper className="bg-[#effdff] text-center">
        <div className="flex flex-col md:flex-row  justify-between gap-10 w-full p-12">
          {/* Image */}
          {data?.locationDetails?.image && (
            <div className="w-full md:w-1/2">
              <Image
                src={data?.locationDetails?.image}
                alt={data?.locationDetails?.name}
                width={600}
                height={400}
                className="rounded-md object-cover w-full h-auto"
              />
            </div>
          )}

          {/* Text */}
          <div className="w-full md:w-1/2 text-left">
            <HeadingTypography
              content={` ${data?.locationDetails?.name}`}
              textAlign="center"
            />
            <p className="text-gray-700 my-4 leading-relaxed">
              {data?.locationDetails?.shortDescription}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              {data?.locationDetails?.locationFeatures?.map(
                (
                  feature:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactPortal
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined,
                  index: Key | null | undefined
                ) => (
                  <li key={index} className="font-semibold text-gray-800">
                    {feature}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </ContainerWrapper>

      {/* know more */}
      <ContainerWrapper className="py-12">
        <HeadingTypography content="Know More" textAlign="center" />
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {data?.knowMore?.map((item: any) =>{

            return     (
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
                    src={ item?.image}
                    alt={item?.title || "University image"}
                    width={100}
                    height={100}
                
                  />
                </div>
              )}
            </Link>
          )
          }
       )}
        </div>
      </ContainerWrapper>
      <ContainerWrapper className="pb-12 text-center">
        <ModalTrigger />
      </ContainerWrapper>
    </>
  );
};


