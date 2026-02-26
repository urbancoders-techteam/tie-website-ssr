import HeadingTypography from "@/components/Heading";
import MainContainer from "@/components/MainContainer";
import HeroSection from "@/components/mbbs/HeroSection";
import ModalTrigger from "@/components/ModalTrigger";
import { imageBaseUrl } from "@/utils/config";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { countryData, faqData } from "@/constants/mbbs";
import LetsStart from "@/components/immersion/LetsStart";
import ContainerWrapper from "@/components/ContainerWrapper";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function Page() {
  const mbbsImg1 = imageBaseUrl + "mbbsinindia.png";
  const mbbsicon1 = imageBaseUrl + "mbbsIcon1.svg";
  const mbbsicon2 = imageBaseUrl + "mbbsIcon2.svg";

  const mbbsImg2 = imageBaseUrl + "mbbsabroad.png";
  const mbbsicons1 = imageBaseUrl + "mbbsIcon1.svg";
  const mbbsicons2 = imageBaseUrl + "mbbsIcon2.svg";
  const mbbsicons3 = imageBaseUrl + "mbbsIcon3.svg";

  const images = [
    {
      image: mbbsicon1,
      title: "Eligibility Criteria",
      href: "/mbbs/india#indiaCriteria",
    },
    {
      image: mbbsicon2,
      title: "Top 10 Colleges",
      href: "/mbbs/india#colleges",
    },
  ];

  const imageList = [
    {
      image: mbbsicons1,
      title: "Eligibility Criteria",
      page: "/mbbs/abroad",
      section: "#abroadCriteria",
    },
    {
      image: mbbsicons2,
      title: "MBBS UG & PG",
      page: "/mbbs/abroad",
      section: "#ug-pg",
    },
    {
      image: mbbsicons3,
      title: "NMC Rules",
      page: "/mbbs/abroad",
      section: "#mbbsRules",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <BreadcrumbSchema />
      {/* What is MBBS Section */}
      <MainContainer
        com1={
          <div className="space-y-4 p-4">
            <HeadingTypography content="What is MBBS?" />
            <p className="text-gray-600 leading-relaxed">
              MBBS, or Bachelor of Medicine, Bachelor of Surgery, is an
              undergraduate degree program that prepares students for a career
              in medicine and surgery. It is a rigorous and rewarding journey
              that equips students with the medical knowledge, clinical skills,
              and ethical foundation necessary to become competent and
              compassionate physicians.
            </p>
          </div>
        }
        com2={
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/whatismbbs.png"
              alt="What is MBBS?"
              fill
              className="object-cover"
            />
          </div>
        }
        color="#f9fafb"
        dir="row"
      />

      {/* MBBS in India Section */}
      <MainContainer
        color="#EFFDFF"
        dir="row-reverse"
        com1={
          <div className="w-full space-y-3 px-4">
            <HeadingTypography content="MBBS in INDIA" />
            <p className="text-[#525560] text-base leading-relaxed">
              MBBS in India is a great choice given its world-class curriculum,
              seasoned faculty, diverse patient population, and global
              recognition. The overall duration of MBBS in India is about 5.5
              years where the first 4.5 years is allotted for the classroom
              training, and the rest is for the internship course. In India we
              have three types of colleges, Government College, Private College
              and Deemed University. At present, there are 1,06,333 total
              medical seats in India out of which 55,468 seats are for
              government colleges, 50,685 for private colleges and about 8850
              for deemed universities.
            </p>

            <div className="flex gap-2 pt-2 justify-center">
              {images.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  title={item.title}
                  className="cursor-pointer"
                >
                  <div className="flex justify-center items-center w-[100px] md:w-[80px] h-[50px]">
                    <Image
                      src={item.image}
                      alt={`Icon ${index + 1}`}
                      width={40}
                      height={40}
                    />
                  </div>
                </Link>
              ))}
              <Link
                href="/mbbs/india"
                className="cursor-pointer bg-[#00999E] text-white px-10 py-3 text-sm rounded-lg w-52 font-medium hover:bg-[#007a7f] transition flex items-center justify-center gap-2"
              >
                Read More <FaArrowRight className="text-white text-sm" />
              </Link>
            </div>
          </div>
        }
        com2={
          <div className="relative w-full h-64 md:h-[350px] shadow-lg overflow-hidden rounded-lg">
            <Image
              src={mbbsImg1}
              alt="MBBS in India"
              fill
              className="object-cover"
              priority
            />
          </div>
        }
      />

      {/* Why Study MBBS Abroad Section */}
      <MainContainer
        com1={
          <div className="w-full space-y-3 px-4">
            <HeadingTypography content="Why Study MBBS Abroad?" />
            <p className="text-[#525560] text-base leading-relaxed">
              Despite several advantages of studying MBBS in India, various
              limiting factors such as overall cost of education, shortage of
              seats, limited clinical exposure, studying MBBS abroad has come
              out as a very attractive option for the aspirants. It not only
              provides a culturally enriching environment, fostering
              cross-cultural understanding and communication skills crucial for
              today&apos;s interconnected world but additionally, it often
              presents cost-effective alternatives compared to some domestic
              medical education programs.
            </p>
            <div className="flex gap-4 pt-2">
              {imageList.map((item, index) => (
                <Link
                  key={index}
                  href={item.page + item.section}
                  title={item.title}
                  className="cursor-pointer"
                >
                  <div className="flex justify-center items-center w-[100px] md:w-[80px] h-[50px]">
                    <Image
                      src={item.image}
                      alt={`Icon ${index + 1}`}
                      width={40}
                      height={40}
                    />
                  </div>
                </Link>
              ))}

              <Link
                href="/mbbs/abroad"
                className="cursor-pointer bg-[#00999E] text-white px-10 py-3 text-sm rounded-lg w-52 font-medium hover:bg-[#007a7f] transition flex items-center justify-center gap-2"
              >
                Read More <FaArrowRight className="text-white text-sm" />
              </Link>
            </div>
          </div>
        }
        com2={
          <div className="relative w-full h-64 md:h-[350px] shadow-lg overflow-hidden rounded-lg">
            <Image
              src={mbbsImg2}
              alt="Why Study MBBS Abroad?"
              fill
              className="object-cover"
              priority
            />
          </div>
        }
      />

      {/* CTA Button */}
      <div className="w-52 flex justify-center pb-10 mx-auto">
        <ModalTrigger text="BOOK YOUR FREE DEMO SESSION" />
      </div>

      <ContainerWrapper className="py-12">
        <HeadingTypography content="Countries we work with" textAlign={"center"} />
        <div className="flex justify-between align-middle items-center flex-wrap"> {countryData?.map((uni, i) => (
          <div key={i} className="p-2 my-4">
            <Link href={`/mbbs/abroad/${uni?.title?.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
              <div className="w-[230px] h-[260px] bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 mx-auto flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center p-4">
                  <Image
                    src={uni?.image}
                    alt={uni?.title}
                    width={160}
                    height={100}
                    className="object-contain max-h-[100px]"
                  />
                </div>
                <div className="bg-[#0A9DA2] text-white py-3 px-2 text-sm font-semibold text-center">
                  {uni.title}
                </div>
              </div>
            </Link>
          </div>
        ))}</div>
      </ContainerWrapper>

      {/* FAQ Section */}
      <section className="bg-[#effdff]">
        <FAQ faqData={faqData} />
      </section>

      <LetsStart />
    </>
  );
}
