// âœ… Server Component (no 'use client')
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import FAQ from "@/components/FAQ";
import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import GlobalCombination from "@/components/study-abroad/GlobalCombination";
import Milestones from "@/components/study-abroad/Milestones";
import Roadmap from "@/components/study-abroad/WorlClassEducationAssist";
import TwoColumnContent from "@/components/TwoColumnContent";
import {
  kolkataData,
  kolkataServices,
  kolkateFAQ,
} from "@/constants/delhi-ncr";
import { imageBaseUrl, navURL } from "@/utils/config";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Study Abroad & Overseas Education Consultants in Kolkata",
  description:
    "Get expert help from Study Abroad Consultants in Kolkata. Taksheela Institute ensures smooth admissions, visa success, and career-focused overseas education.",
  keywords: [
    "study abroad consultants in Kolkata",
    "Taksheela Institute",
    "study abroad guidance",
    "international education",
    "overseas education consultants",
    "admissions abroad",
    "global education",
  ],
  openGraph: {
    title: "Study Abroad Consultants in Kolkata | Taksheela Institute",
    description:
      "Looking for study abroad consultants in Kolkata? Taksheela Institute offers expert guidance for admissions, test prep, & achieving your global education dreams.",
    url: `${navURL}consultants-study-abroad-kolkata`,
    siteName: "Taksheela Institute",
    images: [
      {
        url: "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
        width: 1200,
        height: 630,
        alt: "Taksheela Institute Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Consultants in Kolkata | Taksheela Institute",
    description:
      "Looking for study abroad consultants in Kolkata? Taksheela Institute offers expert guidance for admissions, test prep, & achieving your global education dreams.",
    images: [
      "https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png",
    ],
    site: "@TIE_Taksheela",
    creator: "@TIE_Taksheela",
  },
};

export default function StudyAbroadPage() {
  return (
    <>
     <BreadcrumbSchema />
      {/* âœ… Semantic Headings for SEO */}
      <h1 className="sr-only">Top Study Abroad Consultants in Kolkata</h1>
      <h2 className="sr-only">Why Choose Us for Studying Abroad?</h2>
      <h3 className="sr-only">Our Study Abroad Services</h3>
      <h4 className="sr-only">Success Stories</h4>
      <h5 className="sr-only">Post-Admission Support</h5>
      <h6 className="sr-only">Get a Free Consultation</h6>

      <div className="w-full bg-[#1090cb1a] py-12 px-4 sm:px-10">
        <ContainerWrapper>
          <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
            {/* Left Content */}
            <div className="flex justify-center items-center">
              <div>
                <h1
                  className="font-poppins font-semibold text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]  leading-snug"
                  style={{ color: "rgba(0, 0, 0, 0.7)", textAlign: "left" }}
                >
                  <span className="text-[#00999E] ">
                    Kolkatas Most Trusted:&nbsp;
                  </span>
                </h1>
                <h1
                  className="font-poppins font-semibold text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]  leading-snug"
                  style={{ color: "rgba(0, 0, 0, 0.7)", textAlign: "left" }}
                >
                  <span> Overseas Education Consultants</span>
                </h1>
                <div className="my-4 sm:my-10  items-end justify-center flex">
                  {/* You can add CTA button here if needed */}
                  <ModalTrigger text="Book A Counselling Session" />
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <div className="w-full h-[250px] sm:h-[300px] lg:h-[450px] relative">
                <Image
                  src={imageBaseUrl + "GirlImageImmigration.svg"}
                  alt="Global Immersion Banner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </div>
      <ContainerWrapper className=" py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1">
            <HeadingTypography
              content="Helping You Secure Admissions at Top Global Universities"
              textAlign="left"
              as="h2"
            />
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              At Taksheela, we believe that every student should have the chance
              to study abroad. As trusted study abroad consultants in Kolkata,
              we guide you at every step, making it easier to study in other
              countries while supporting your learning and growth.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Whether you want to study for a degree, a special course, or
              further education, we focus on youâ€”giving the right guidance to
              match your dreams.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full">
            <Image
              src="/images/ourstory.png"
              alt="Our Story Image"
              width={600}
              height={400}
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </ContainerWrapper>
      <div className="bg-[#effdff]">
        <ContainerWrapper className="flex flex-col lg:flex-row  gap-12 mb-16 py-12">
          {/* Left: Image */}
          <div className="relative flex-1">
            <div className="absolute -left-16 top-10 w-36 h-36 rounded-full border-30 border-[#00999e] opacity-50 z-0" />
            <Image
              src="/images/vision.png"
              alt="Vision"
              width={400}
              height={400}
              className="rounded-xl relative z-10"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-3">
            <HeadingTypography
              content="End-to-End Study Abroad Support — From Counseling to Visa"
              as="h2"
            />
            <p className="text-gray-800 text-lg leading-relaxed mt-5">
              Choosing the right path for your international education is an
              important decision. Our experienced team of study abroad
              consultants in Kolkata understands that every student has unique
              aspirations. We provide personalized guidance to help you choose
              the best country, university, and course that align with your
              career goals.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mt-5">
              With our deep knowledge of education around the world, we help you
              make smart choices that lead to lifelong success.
            </p>
            <div className="mt-6 flex">
              <a
                href="https://wa.me/+919831241212"
                className="inline-flex items-center gap-2 rounded-full bg-[#00999E] px-7 py-3 text-white text-base sm:text-lg font-semibold shadow-md transition hover:bg-[#00777E]"
              >
                Contact Us Today
                <span className="text-base"></span>
              </a>
            </div>
          </div>
        </ContainerWrapper>
      </div>

        <ContainerWrapper className="py-12">
          <HeadingTypography
            content="Expert Support for Admissions, Scholarships & Student Visas"
            textAlign="center"
            as="h2"
          />
        <p className="mt-4 text-center font-medium">
          Picking the right country and institution is a big decision. Taksheela
          is here to help you with honest and trusted advice. As expert overseas
          education consultants in Kolkata, we guide you based on your interests
          and career dreams. Our team gives full details about top universities,
          admission steps, and the latest rules for studying abroad.
        </p>
        <p> Our complete services include: </p>
      </ContainerWrapper>

      <ContainerWrapper className="pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {kolkataServices.map((item, index) => (
            <div
              key={item.id || index}
              className="group relative flex flex-col items-center justify-center 
                   text-center p-5 h-[250px] rounded-2xl shadow-md 
                   bg-white border border-gray-200 
                   hover:shadow-xl hover:border-[#00999E] 
                   transition-all duration-500"
            >
              {/* Title */}
              <h3
                className=" text-lg font-bold  text-[#00999E]
                       group-hover:text-[#00999E] transition-all duration-500"
              >
                {item?.title}
              </h3>

              {/* Description */}
              <p
                className="mt-3 text-sm text-gray-600 leading-relaxed 
                      group-hover:text-gray-700 transition-all duration-500"
              >
                {item.about}
              </p>
            </div>
          ))}
        </div>
      </ContainerWrapper>

        <ContainerWrapper className="py-12">
          <HeadingTypography
            content="Study Abroad Made Simple with Trusted Kolkata Consultants"
            textAlign="center"
            as="h2"
          />
        <p className="mt-4 text-center font-medium">
          Kolkata is a city full of history, culture, and great education.
          It&apos;s a place where students dream big, and we are here to help
          make those dreams come true. We are proud to serve this dynamic
          community by:
        </p>
      </ContainerWrapper>

      <ContainerWrapper className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {kolkataData.map((item, index) => (
            <div
              key={item.id || index}
              className="group flex flex-col items-center justify-center text-center p-6 bg-gray-100 hover:bg-[#00999E] transition-all duration-300 h-[380px] rounded-lg"
            >
              <div className="mb-4 shadow-2xl rounded-full p-5 bg-white group-hover:bg-[#007f82] transition-all duration-300">
                <Image
                  src={item.icon}
                  alt="Card icon"
                  width={50}
                  height={50}
                  className="transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                />
              </div>
              <h3 className="text-[#00999e] font-bold text-xl transition-all duration-300 group-hover:text-white">
                {item?.title}
              </h3>
              <p className="mt-4 text-base font-medium transition-all duration-300 group-hover:text-white">
                {item.about}
              </p>
            </div>
          ))}
        </div>
      </ContainerWrapper>

      <TwoColumnContent
        heading="Start Your Global Education Journey Today"
        headingAs="h2"
        imageUrl={imageBaseUrl + "mbbsabroad.png"}
        bgColor={true}
        reverse={false}
        description={
          <>
            <p>
              We are more than just education consultantsâ€”we are your partners
              in building a bright future! As top study abroad consultants in
              Kolkata, we help students like you find the best opportunities to
              study in different countries.{" "}
            </p>
            <p className="py-6">
              Whether you want to study arts, medicine, or any other subject,
              our team is here to guide you every step of the way. At Taksheela,
              the leading overseas education consultants in Kolkata, we focus on
              excellence, trust, and personalized support to help you succeed.{" "}
            </p>
              <p>
                Don&apos;t wait! Your dream university is within reach. Book your
                free consultation today and take the first step toward an exciting
                future abroad!{" "}
              </p>
              <div className="pt-6">
                <a
                  href="https://wa.me/+919831241212"
                  className="inline-flex items-center justify-center rounded-full bg-[#00999E] text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                >
                  WhatsApp Us to Start Your Journey
                </a>
              </div>
            </>
          }
      />
      <Milestones />
      <Roadmap />
      <GlobalCombination />
      <FAQ faqData={kolkateFAQ} />
      <LetsStart />
    </>
  );
}



