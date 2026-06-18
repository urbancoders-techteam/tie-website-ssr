/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import FAQ from "@/components/FAQ";
import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import MainTabPage from "@/components/study-abroad/new-changes/countries/MainTabPage";
import WhyStudySection from "@/components/study-abroad/country/WhyStudySection";
import TwoColumnContent from "@/components/TwoColumnContent";
import {
  GERMANY_COUNTRY_PAGE,
  isGermanyCountrySlug,
} from "@/constants/study-abroad/countryPages/germanyCountryPage";
import { isUKCountrySlug } from "@/constants/study-abroad/countryPages/ukCountryPage";
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

  const isUK = isUKCountrySlug(slug);
  const isGermany = isGermanyCountrySlug(slug);

  useEffect(() => {
    if (slug) {
      const currentPageData = mapJsonData.find(
        (data) => data.pathname.toLowerCase() === slug.toLowerCase()
      );
      setPageData(currentPageData as unknown as PageData);
    }
  }, [slug]);

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
    if (!slug) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}study-abroad-universities/web/list?countryName=${slug}`
        );

        if (response.status === 200 || response.statusText === "OK") {
          setUniversityData(response?.data?.data);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (isUK || isGermany) {
    if (isUK && !pageData) {
      return (
        <div className="mt-5 flex min-h-[40vh] items-center justify-center px-4">
          <Box sx={{ width: "100%", maxWidth: 400, color: "#00999e" }}>
            <LinearProgress color="inherit" />
          </Box>
        </div>
      );
    }
    return (
      <MainTabPage
        pageData={pageData ?? undefined}
        slug={slug}
        countryPage={isGermany ? GERMANY_COUNTRY_PAGE : undefined}
      />
    );
  }

  return (
    <div className="mt-5">
      <TwoColumnContent
        heading={pageData?.info?.title || ""}
        headingAs="h1"
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

      {pageData?.whyStudy && (
        <WhyStudySection
          data={{
            title: pageData.whyStudy.title,
            points: points || [],
            images,
          }}
        />
      )}

      {pageData?.places && (
        <Places
          data={{
            title: pageData.places.title,
            data: pageData.places.data ?? [],
          }}
        />
      )}

      <div className="bg-[#effdff] py-12">
        <ContainerWrapper>
          <>
            <HeadingTypography
              content={pageData?.universties?.heading}
              textAlign="center"
            />
            <div className="my-10 flex flex-wrap justify-center gap-6">
              {loading ? (
                <Box sx={{ width: "100%", mt: 2, color: "#00999e" }}>
                  <LinearProgress color="inherit" />
                </Box>
              ) : universityData?.length > 0 ? (
                universityData?.map((item: any, index: number) => (
                  <Link
                    href={`/study-abroad/country/${slug}/university/${item?._id}`}
                    className="flex h-[250px] w-[220px] flex-col justify-between overflow-hidden rounded-md bg-white shadow-md"
                    key={index}
                  >
                    <div className="flex flex-col items-center px-4 py-5 text-center">
                      <div className="relative mb-2 h-[120px] w-[120px] rounded-md">
                        {typeof item?.image === "string" &&
                        item.image.trim().length > 0 ? (
                          <Image
                            src={item.image}
                            alt={item?.universitySortName || "University image"}
                            fill
                            className="rounded-md object-cover"
                          />
                        ) : (
                          <div className="h-full w-full rounded-md bg-gray-100" />
                        )}
                      </div>
                    </div>

                    <div className="h-fit items-center rounded-b-md bg-[#00999e] p-3 py-5 text-center text-sm font-semibold text-white">
                      {item?.universitySortName}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-10 text-center">
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

      <div className="bg-[#effdff] py-12">
        <ContainerWrapper>
          {pageData?.recruiter && (
            <>
              <HeadingTypography
                content={"Popular Recruiters"}
                textAlign="center"
              />
              <div className="my-10 flex flex-wrap justify-center gap-6">
                {pageData?.recruiter?.map((item: any, index: number) => (
                  <div
                    className="flex h-[250px] w-[220px] flex-col justify-between overflow-hidden rounded-md bg-white shadow-md"
                    key={index}
                  >
                    <div className="flex flex-col items-center px-4 py-5 text-center">
                      <div className="relative mb-2 h-[120px] w-full rounded-md">
                        {typeof item?.Image === "string" &&
                        item.Image.trim().length > 0 ? (
                          <Image
                            src={item.Image}
                            alt={item?.title?.[0] || "Recruiter image"}
                            fill
                            className="object-contain rounded-md"
                          />
                        ) : (
                          <div className="h-full w-full rounded-md bg-gray-100" />
                        )}
                      </div>
                    </div>

                    <div className="h-fit items-center rounded-b-md bg-[#00999e] p-3 py-5 text-center text-sm font-semibold text-white">
                      {item?.title?.[0]}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </ContainerWrapper>
      </div>

      <FAQ faqData={pageData?.faq} />

      <LetsStart />
    </div>
  );
}
