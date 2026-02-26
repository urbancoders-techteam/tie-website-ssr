/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import FAQ from "@/components/FAQ";
import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import { BackRouteContainer } from "@/components/study-abroad/university-finder/ViewComponents";
import WhyStudySection from "@/components/study-abroad/country/WhyStudySection";
import TwoColumnContent from "@/components/TwoColumnContent";
import { mapJsonData } from "@/constants/map";
import { baseUrl, imageBaseUrl } from "@/utils/config";
import { useEffect, useState } from "react";
import Places from "@/components/study-abroad/country/Places";
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "@/components/ContainerWrapper";
import HeadingTypography from "@/components/Heading";
import CustomTabs from "@/components/study-abroad/country/CustomTabs";
import { useParams } from "next/navigation";
import axios from "axios";
import { Box, LinearProgress } from "@mui/material";

type PageData = {
  universties: any;
  pathname: string;
  info?: {
    title: string;
    image: string;
    content: string;
  };
  whyStudy?: {
    title: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5?: string;
    point6?: string;
  };
  places?: {
    title: string;
    data?: Array<{
      city: string;
      img: string;
    }>;
  };
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  recruiter?: Array<{
    title: string[];
    Image?: string;
  }>;

  popular?: any;
  intake?: any;
  cost?: any;
  post?: any;
  visa?: any;
};

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [universityData, setUniversityData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      const currentPageData = mapJsonData.find(
        (data) => data.pathname.toLowerCase() === slug.toLowerCase()
      );
      setPageData(currentPageData as unknown as PageData);
    }
  }, [slug]);

  // ✅ Transform points into array
  const points =
    pageData?.whyStudy &&
    Object.keys(pageData.whyStudy)
      .filter((key) => key.startsWith("point"))
      .map((key) => ({
        title: (pageData.whyStudy as Record<string, string>)[key],
      }));

  const images = [
    `${imageBaseUrl}StydyUSA/image1.png`,
    `${imageBaseUrl}StydyUSA/image2.png`,
    `${imageBaseUrl}StydyUSA/image3.png`,
    `${imageBaseUrl}StydyUSA/image4.png`,
    `${imageBaseUrl}StydyUSA/image5.png`,
    `${imageBaseUrl}StydyUSA/image6.png`,
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}study-abroad-universities/web/list?countryName=${slug}`
        );
       
        if (response.status === 200 || response.statusText === "OK") {
          setUniversityData(response?.data?.data);
          setLoading(false);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className="mt-5">
      <BackRouteContainer title="Country Page" path="/study-abroad/country" />

      {/* banner section */}
      <TwoColumnContent
        heading={pageData?.info?.title || ""}
        imageUrl={pageData?.info?.image || ""}
        bgColor={false}
        reverse={true}
        description={
          <>
            {pageData?.info?.content || ""}
            <ModalTrigger />
          </>
        }
      />

      {/* why study section */}
      {pageData?.whyStudy && (
        <WhyStudySection
          data={{
            title: pageData.whyStudy.title,
            points: points || [],
            images,
          }}
        />
      )}

      {/* places section */}
      {pageData?.places && (
        <Places
          data={{
            title: pageData.places.title,
            data: pageData.places.data ?? [],
          }}
        />
      )}

      {/* Universities section */}
      <div className="bg-[#effdff] py-12">
        <ContainerWrapper>
          <>
            <HeadingTypography
              content={pageData?.universties?.heading}
              textAlign="center"
            />
            <div className="flex justify-center flex-wrap gap-6 my-10 ">
              {loading ? (
                <Box sx={{ width: "100%", mt: 2, color: "#00999e" }}>
                  <LinearProgress color="inherit" />
                </Box>
              ) : universityData?.length > 0 ? (
                universityData?.map((item: any, index: number) => (
                  <Link
                    href={`/study-abroad/country/${slug}/university/${item?._id}`}
                    className="w-[220px] h-[250px] bg-white rounded-md shadow-md flex flex-col justify-between overflow-hidden"
                    key={index}
                  >
                    {/* Top section with image + name */}
                    <div className="flex flex-col items-center px-4 py-5 text-center">
                      <div className="relative w-[120px] h-[120px] mb-2 rounded-md">
                        <Image
                          src={item?.image}
                          alt={item?.universitySortName}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="bg-[#00999e] text-white text-center items-center h-fit  text-sm font-semibold p-3 py-5 rounded-b-md">
                      {item?.universitySortName}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center py-10">
                  <h2 className="text-xl text-red-500">University not found</h2>
                </div>
              )}
            </div>
          </>
        </ContainerWrapper>
      </div>

      <CustomTabs
        data1={pageData?.popular}
        data2={pageData?.intake}
        data3={pageData?.cost}
        data4={pageData?.post}
        data5={pageData?.visa}
      />
      {/* popular recruiters section */}
      <div className="bg-[#effdff] py-12">
        <ContainerWrapper>
          {pageData?.recruiter && (
            <>
              <HeadingTypography
                content={"Popular Recruiters"}
                textAlign="center"
              />
              <div className="flex justify-center flex-wrap gap-6 my-10 ">
                {pageData?.recruiter?.map((item: any, index: number) => (
                  <div
                    className="w-[220px] h-[250px] bg-white rounded-md shadow-md flex flex-col justify-between overflow-hidden"
                    key={index}
                  >
                    {/* Top section with image + name */}
                    <div className="flex flex-col items-center px-4 py-5 text-center">
                      <div className="relative w-full h-[120px] mb-2 rounded-md">
                        <Image
                          src={item?.Image}
                          alt={item?.title?.[0]}
                          fill
                          className="object-contain rounded-md"
                        />
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="bg-[#00999e] text-white text-center items-center h-fit  text-sm font-semibold p-3 py-5 rounded-b-md">
                      {item?.title?.[0]}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </ContainerWrapper>
      </div>

      {/* FAQ section */}
      <FAQ faqData={pageData?.faq} />

      {/* let's start section */}
      <LetsStart />
    </div>
  );
}
