/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ContainerWrapper from "@/components/ContainerWrapper";
import FAQ from "@/components/FAQ";
import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import { BackRouteContainer } from "@/components/study-abroad/university-finder/ViewComponents";
import TwoColumnContent from "@/components/TwoColumnContent";
import { courseData } from "@/constants/course";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Key, useState } from "react";
import { Icon } from "@iconify/react";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();

  const data = courseData.find((course) => course.pathname === slug);

  const [selected, setSelected] = useState<any | null>(null);

  if (!data) {
    return (
      <ContainerWrapper>
        <h1 className="text-2xl font-bold capitalize">Course not found</h1>
        <BackRouteContainer
          path="/study-abroad/courses"
          title="Back Course Page"
        />
      </ContainerWrapper>
    );
  }

  return (
    <>
      <TwoColumnContent
        heading="Your passion,
Our expertise!!!"
        imageUrl={data?.banner?.image}
        bgColor={true}
        reverse={false}
        description={
          <>
            Explore the diverse range of programs tailored to your academic and
            professional aspirations. Explore the domains in Engineering,
            Computer Science and Information Technology (CSIT), Business and
            MBA, Social Sciences, Physical and Life Sciences, Fine and Applied
            Arts, Health Professions, Communications and Journalism, and
            Designing.
            <ModalTrigger />
          </>
        }
      />

      <TwoColumnContent
        heading={data?.intro?.title}
        imageUrl={data?.intro?.image}
        bgColor={false}
        reverse={true}
        description={data?.intro.content}
      />
      <div className="bg-[#effdff] my-12">
        <ContainerWrapper className="py-12">
          <HeadingTypography
            content={data?.choose?.heading}
            textAlign="center"
          />
          <div className="flex flex-wrap justify-evenly items-center gap-12 mt-12">
            {data?.choose?.item?.map(
              (
                work: { Image: string | StaticImport; title: string },
                index: Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="bg-white w-[280px] h-[220px] rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={work.Image}
                      alt={work.title}
                      width={150}
                      height={150}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div
                    className="text-lg text-gray-700 font-bold"
                    dangerouslySetInnerHTML={{ __html: work.title }}
                  />
                </div>
              )
            )}
          </div>
        </ContainerWrapper>
      </div>

      <ContainerWrapper>
        <HeadingTypography
          content={data?.snapshot?.heading}
          textAlign="center"
        />
        <div className="flex flex-wrap justify-evenly gap-8 my-10 text-center">
          {data?.snapshot?.item?.map((item: any) => (
            <div key={item._id} className="flex flex-col items-center w-64">
              <div className="w-36 h-36 rounded-full border-2 border-[#00999e] bg-white flex items-center justify-center shadow-md">
                <span className="text-lg font-semibold text-[#00999e] text-center px-4">
                  {item?.count}
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-800 px-2">{item?.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 w-full text-center">
          <ModalTrigger />
        </div>
        <div className="bg-[#effdff] my-12">
          <ContainerWrapper className="py-12">
            <HeadingTypography content="Specializtion" textAlign="center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-10">
              {data?.specialization?.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-[300px] md:w-[350px] h-[70px] bg-white rounded-lg shadow-[7px_7px_29px_0px_rgba(100,100,111,0.2)] flex items-center px-2">
                    <div className="w-[60px] flex justify-center items-center">
                      <Image
                        src={item.Image}
                        alt="immigration-benefit"
                        className="w-full"
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="h-[100px] px-2 flex items-center">
                      <p className="text-black font-semibold text-[15px] text-left">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContainerWrapper>
        </div>
        <section className="bg-white py-10 md:py-16" id="ug-pg">
          <div className="container mx-auto px-4">
            <HeadingTypography content="Levels" textAlign="center" />

            <div className="flex flex-wrap justify-center gap-20 mt-10">
              {data?.level?.item?.map((pkg: any, idx: number) => (
                <div key={pkg.id || idx} className="flex justify-center">
                  <div
                    className="w-[300px] h-[450px] border-t-4 rounded-lg shadow-md p-5 flex flex-col justify-between items-center text-center"
                    style={{ borderTopColor: pkg.topColor || "#00999E" }}
                  >
                    <h3 className="text-xl font-semibold text-teal-700">
                      {pkg.title}
                    </h3>

                    <div className="my-4 flex-1 flex flex-col justify-start gap-5">
                      {pkg?.listitem?.map((item: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon
                            icon="iconamoon:check-bold"
                            className="text-teal-600 text-xl mt-1"
                          />
                          <p className="text-sm text-gray-700 text-left capitalize">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LetsStart />
      </ContainerWrapper>
      <div className="bg-[#effdff] my-12">
        <ContainerWrapper className="py-12">
          <HeadingTypography
            content="Top 10 Universities Globally"
            textAlign="center"
          />
          <div className="flex flex-wrap justify-center items-center align-middle gap-10 mt-10 ">
            {data?.university?.map((college, index) => (
              <div
                key={index}
                className="w-[230px] h-[280px] relative p-4 bg-white shadow-md rounded-xl cursor-pointer overflow-hidden group"
              >
                <Image
                  src={college.Image}
                  alt={college.title}
                  width={150}
                  height={150}
                  className="rounded-[10%] mx-auto"
                />

                <div className="absolute bottom-0 left-0 w-full bg-[#0A9DA2] text-white rounded-b-xl p-2 flex flex-col justify-start items-center transition-all duration-500 ease-in-out h-16 group-hover:h-full overflow-hidden">
                  {/* Title always visible at top */}
                  <h3 className="text-sm font-medium text-center mb-2">
                    {college.title}
                  </h3>

                  {/* Scrollable content on hover */}
                  <div className="mt-1 px-2 overflow-y-auto max-h-[calc(100%-3rem)] w-full">
                    {college.items && !Array.isArray(college.items) ? (
                      <p className="text-sm text-center mb-2">
                        {college.items}
                      </p>
                    ) : (
                      <ul className="list-disc ml-4 space-y-1">
                        {college.items?.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-white text-center font-poppins"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 w-full text-center">
            <ModalTrigger />
          </div>
        </ContainerWrapper>
      </div>

      <ContainerWrapper>
        <HeadingTypography content="Country Wise Synopsis" textAlign="center" />

        <div className="text-center py-12 px-4">
          {/* Dropdown */}
          <select
            className="w-[400px] p-3 border border-[#00999e] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00999e]"
            onChange={(e) => {
              const selectedOption = data?.synopsis.find(
                (opt) => opt.course === e.target.value
              );
              setSelected(selectedOption || null);
            }}
            value={selected?.nationality || ""}
          >
            <option value="">Select Your Nationality</option>
            {data?.synopsis?.map((option, idx) => (
              <option key={idx} value={option.course}>
                {option.course}
              </option>
            ))}
          </select>

          {selected && (
            <div className="flex flex-wrap justify-evenly items-center gap-5 mt-12">
              {selected?.details?.map(
                (
                  work: {
                    image: string | StaticImport;
                    title: string;
                    value: string;
                  },
                  index: Key | null | undefined
                ) => (
                  <div
                    key={index}
                    className="bg-white w-[350px] h-[300px] rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={work.image}
                        alt={work.title}
                        width={150}
                        height={150}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-lg text-gray-700 font-bold">
                      {work.title}
                    </p>
                    <p>{work?.value}</p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </ContainerWrapper>

      <div className="bg-[#effdff] my-12">
        <ContainerWrapper>
          <FAQ faqData={data.faq} />
        </ContainerWrapper>
      </div>
      <ContainerWrapper>
        <BackRouteContainer
          path="/study-abroad/courses"
          title="Back Course Page"
        />
      </ContainerWrapper>
      <LetsStart />
    </>
  );
}
