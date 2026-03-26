import HeadingTypography from "@/components/Heading";
import MainContainer from "@/components/MainContainer";
// import HeroSection from "@/components/mbbs/HeroSection";
import ModalTrigger from "@/components/ModalTrigger";
import { imageBaseUrl } from "@/utils/config";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import {
  // countryData,
  faqData
} from "@/constants/mbbs";
import LetsStart from "@/components/immersion/LetsStart";
import ContainerWrapper from "@/components/ContainerWrapper";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroSection from "@/components/campaign/HeroSection";
import LikeCounter from "@/components/LikeCounter";
import CountryComparison from "@/components/mbbs/CountryComparison";
import CountryWeWorkWith from "@/components/mbbs/CountryWeWorkWith";
import EligibilityCriteria from "@/components/mbbs/EligibilityCriteria";
import NeetToWhiteCoat from "@/components/mbbs/NeetToWhiteCoat";
import WhyChooseTaksheela from "@/components/mbbs/WhyChooseTaksheela";
import TaksheelaSolution from "@/components/mbbs/TaksheelaSolution";

export default function Page() {
  // const mbbsImg1 = imageBaseUrl + "mbbsinindia.png";
  const mbbsicon1 = imageBaseUrl + "mbbsIcon1.svg";
  const mbbsicon2 = imageBaseUrl + "mbbsIcon2.svg";

  const heroImage = imageBaseUrl + "mbbsCollege/India/mbbsIndiahero.png";
  const collegeImage = imageBaseUrl + "mbbsCollege/India/mbbsIndia.webp";

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

  const mbbsHeroStats = [
    { value: <span className="text-[#5dd4d9]" >12+</span>, label: "Countries" },
    { value: <span className="text-[#5dd4d9]" >₹3L</span>, label: "Fees / Year" },
    { value: <span className="text-[#5dd4d9]" >NMC</span>, label: "Approved Only" },
    { value: <span className="text-[#5dd4d9]" >IN • NP • BD</span>, label: "Students Served" },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heroImage={heroImage}
        tagline="Admissions Open — 2026-27 Session"
        title="MBBS Abroad 2026–27: Your Medical Dream, Globally Achieved."
        description=<> Over <span className="text-[#5dd4d9]">23 lakh</span> students compete for just <span className="text-[#5dd4d9]" >1.18 lakh</span> MBBS seats in India. Taksheela guides students from India, Nepal & Bangladesh into NMC-approved medical universities across <span className="text-[#5dd4d9]" >12 countries</span> — with fees starting at just <span className="text-[#5dd4d9]" >₹3 lakh per year</span>.</>
        stats={mbbsHeroStats}
        ctaText="Book Your Free Demo Session"
      />
      <BreadcrumbSchema />

      {/* What is MBBS Section */}
      <MainContainer
        com1={
          <div className="space-y-4 p-4">
            <HeadingTypography content="What is MBBS?" />
            <p className="text-gray-600 leading-relaxed text-justify">
              MBBS — Bachelor of Medicine, Bachelor of Surgery — is an undergraduate medical degree that equips students with the clinical knowledge, surgical foundations, and ethical grounding to become qualified physicians. Recognised globally, an MBBS degree is the launchpad for a lifelong career in healthcare, whether you practice in India, the UK, Canada, or anywhere else.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              The program typically spans 5.5 to 6 years, combining classroom instruction, laboratory training, and hospital-based clinical rotations. All NMC-compliant programs include a minimum 54-month curriculum plus a 12-month internship — the baseline requirement for FMGE/NExT eligibility.
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
                <Link key={index} href={item.href} title={item.title} className="cursor-pointer">
                  <div className="flex justify-center items-center w-[100px] md:w-[80px] h-[50px]">
                    <Image src={item.image} alt={`Icon ${index + 1}`} width={40} height={40} />
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
            <Image src={collegeImage} alt="MBBS in India" fill className="object-cover" priority />
          </div>
        }
      />

      <section className="bg-[#f5f7fb] py-12 md:py-14">
        <ContainerWrapper>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-semibold text-[#00999E]">Why Study MBBS Abroad?</h2>
              <div className="w-24 h-1 bg-[#f4c542] mx-auto rounded-full mt-3" />
              <p className="text-[#5d6678] text-base md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
                Despite the advantages of studying at home, limiting factors make MBBS abroad an increasingly practical and strategic choice for aspirants from India, Nepal, and Bangladesh.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
              {[
                {
                  target: 23,
                  suffix: "L+",
                  label: "NEET Candidates 2024",
                },
                {
                  target: 1.18,
                  suffix: "L",
                  decimals: 2,
                  label: "MBBS Seats in India",
                },
                {
                  target: 30000,
                  suffix: "+",
                  useGrouping: true,
                  label: "Indians studying MBBS abroad",
                },
                {
                  target: 18,
                  prefix: "₹",
                  suffix: "L",
                  label: "Lowest total MBBS cost (abroad)",
                },
                {
                  target: 20383,
                  useGrouping: true,
                  label: "FMGE Qualifiers - 2024",
                },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#e8ecf2] rounded-2xl px-4 py-6 text-center shadow-sm">
                  <p className="text-3xl font-bold text-[#00999E]">
                    <LikeCounter
                      target={item.target}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      decimals={item.decimals}
                      useGrouping={item.useGrouping}
                    />
                  </p>
                  <p className="text-sm md:text-base text-[#6b7280] mt-2 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mt-10 text-[#1f2937]">
              {[
                "Lower total cost - ₹18-50L abroad vs ₹50L-1.5Cr at Indian private colleges",
                "No separate entrance exam - most countries admit on NEET score and 12th marks alone",
                "English-medium instruction - Russia, Philippines, Kazakhstan, Kyrgyzstan, Bangladesh and more",
                "World-class clinical exposure - diverse patient populations, modern simulation labs",
                "Globally recognised degrees - WHO-listed, NMC-compliant, practice anywhere",
                "NMC-compliant internship - 12-month internship at the same university, FMGE-eligible",
                "No capitation or donation fees - merit-based admission, fully transparent pricing",
                "Skip the drop year cycle - secure your seat this session, begin on schedule",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5">
                  <span className="text-[#00999E] text-xl leading-none mt-0.5">✓</span>
                  <p className="text-sm md:text-[17px] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </ContainerWrapper>
      </section>

      {/* Why Study MBBS Abroad Section */}
      {/*
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
      */}

      {/* Country Comparison Section */}
      <CountryComparison />

      {/* CTA Button */}
      <div className="text-white flex justify-center py-10 mx-auto">
        <ModalTrigger text="BOOK YOUR FREE DEMO SESSION" />
      </div>

      {/*
     <ContainerWrapper className="py-12">
        <HeadingTypography content="Countries We Work With" textAlign={"center"} />
        <div className="flex justify-between align-middle items-center flex-wrap">
          {countryData?.map((uni, i) => (
            <div key={i} className="p-2 my-4">
              <Link href={`/mbbs/abroad/${uni?.title?.toLowerCase()}`}>
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
      */}

      <TaksheelaSolution />

      <CountryWeWorkWith />

      <EligibilityCriteria />

      <NeetToWhiteCoat />

      <WhyChooseTaksheela />

      {/* FAQ Section */}
      <section className="bg-[#effdff]">
        <FAQ faqData={faqData} />
      </section>

      <LetsStart />
    </>
  );
}
