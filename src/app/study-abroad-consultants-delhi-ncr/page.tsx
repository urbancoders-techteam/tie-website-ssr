import FAQ from "@/components/FAQ";
import LetsStart from "@/components/immersion/LetsStart";
import GlobalCombination from "@/components/study-abroad/GlobalCombination";
import Milestones from "@/components/study-abroad/Milestones";
import Roadmap from "@/components/study-abroad/WorlClassEducationAssist";
import TwoColumnContent from "@/components/TwoColumnContent";
import { imageBaseUrl } from "@/utils/config";
import { cardData, delhiNCRFAQ } from "@/constants/delhi-ncr";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import { Metadata } from "next";
import ModalTrigger from "@/components/ModalTrigger";


export const metadata: Metadata = {
  title: "Study Abroad Counselors in Delhi NCR & Noida | Taksheela",
  description:"Discover top Study Abroad Consultants in Delhi NCR & Greater Noida. Get expert guidance to make your overseas education journey simple and stress-free." 
};

export default function page() {
  return (
    <>
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
                    Leading Study Abroad&nbsp;
                  </span>
                  Consultants in Delhi NCR & Greater Noida
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
              <h2 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl text-[#00999e] text-left">
                ~Turning Overseas Education Aspirations into Reality~
              </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Do you dream of studying in another country but don’t know where
              to start? Don’t worry—we are here to help! At Taksheela, we guide
              students like you in Greater Noida to get into the best
              universities around the world. Our experienced study abroad
              consultants in Greater Noida make everything easy, whether you
              want to study medicine, business, or any other subject.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              From choosing the right course to getting admission and a visa, we
              take care of everything—so you can focus on your studies. With us,
              your dream of studying abroad can come true!
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
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl text-[#00999e] text-left">
              About Taksheela Institute of Education
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              At Taksheela, we believe that education is the key to a successful
              future. If you dream of studying abroad, we are here to make it
              happen! As experienced overseas education consultants in Greater
              Noida, we have helped many students like you find the best
              universities and courses around the world. We focus on your goals
              and provide personalized guidance at every step. From choosing the
              right course to securing admissions and visas, we ensure you have
              the best support to make informed decisions about your future.
              With us, studying abroad is not just a dream—it’s a reality
              waiting for you!{" "}
            </p>
            <div className="mt-6 flex justify-start">
              <a
                href="https://www.taksheela.com/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </ContainerWrapper>
      </div>

      <ContainerWrapper className="py-12">
        <h2 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl text-[#00999e] text-center">
          ~What Sets Taksheela Apart?~
        </h2>
        <p className="mt-4 text-center font-medium">
          Studying abroad is a life-changing opportunity. It opens doors to top
          universities, better career prospects, and global exposure. But the
          process can feel overwhelming. That’s where we come in! We make your
          journey simple, smooth, and stress-free.
        </p>
      </ContainerWrapper>

      <ContainerWrapper className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cardData.map((item, index) => (
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
        heading="Why Students from Delhi NCR Trust Us"
        headingAs="h2"
        imageUrl={
          "https://i.pinimg.com/736x/4e/9b/ac/4e9baccc4cb397bb2a3ee42cfcd887a8.jpg"
        }
        bgColor={true}
        reverse={true}
        description={
          <>
            Delhi NCR is a growing city with great schools, colleges, and a
            bright student community. It is a place full of opportunities for
            students who dream big! As expert study abroad consultants in Delhi
            NCR, we help students like you find the best universities,
            scholarships, and admission opportunities in different countries.If
            you want to study abroad but don’t know how to start, don’t worry!
            We are here to guide you at every step and make your journey smooth
            and easy.{" "}
          </>
        }
      />
        <TwoColumnContent
         heading="Start Your Study Abroad Application with Confidence"
         headingAs="h2"
          imageUrl={imageBaseUrl + "mbbsabroad.png"}
          bgColor={false}
          reverse={false}
        description={
          <>
            We help students in Greater Noida follow their dreams of studying in
            other countries. Our team makes the process easy and stress-free.
            With our expert advice and student-first approach, we guide you at
            every step—from choosing the best university to getting your
            admission. Let Taksheela be your trusted partner on this journey!
            Ready to take the first step? Book a free counseling session today
            and start planning your future with confidence!
            <div className="pt-6">
              <a
                href="https://wa.me/+919831241212"
                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
              >
                Talk to an Expert Now
              </a>
            </div>
          </>
        }
      />
      <Milestones />
      <Roadmap />
      <GlobalCombination />
      <FAQ
        faqData={delhiNCRFAQ}
        heading="Common Questions About Studying Abroad"
      />
      <LetsStart />
    </>
  );
}
