import LetsStart from "@/components/immersion/LetsStart";
import GlobalCombination from "@/components/study-abroad/GlobalCombination";
import Milestones from "@/components/study-abroad/Milestones";
import Roadmap from "@/components/study-abroad/WorlClassEducationAssist";
import TwoColumnContent from "@/components/TwoColumnContent";
import FAQSection, { type FAQItem } from "@/components/campaign/FAQSection";
import { studyAbroadBaseUrl } from "@/utils/config";
import { cardData, delhiNCRFAQ } from "@/constants/delhi-ncr";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import { Metadata } from "next";
import ConsultantHero from "@/components/study-abroad/ConsultantHero";
import { ConsultantFeatureCardGrid } from "@/components/study-abroad/ConsultantFeatureCard";

const delhiNcrFaqItems: FAQItem[] = delhiNCRFAQ.map((item) => ({
  question: item.title,
  answer: item.Desc,
}));

export const metadata: Metadata = {
  title: "Study Abroad Counselors in Delhi NCR & Noida | Taksheela",
  description:"Discover top Study Abroad Consultants in Delhi NCR & Greater Noida. Get expert guidance to make your overseas education journey simple and stress-free.",
  keywords:"top study abroad consultants in delhi, overseas education consultants in delhi ncr, overseas education consultants in greater noida, study abroad consultants in noida"
};

export default function page() {
  return (
    <div className="[&_p]:text-justify">
      <ConsultantHero
        title={
          <>
            <span className="text-[#00999E]">Top Study Abroad</span>{" "}
            Consultants in Delhi NCR & Greater Noida
          </>
        }
        image={{
          src: "/images/photos5.jpg",
          alt: "Top study abroad consultants in Delhi NCR",
          width: 396,
          height: 198,
        }}
      />

      <ContainerWrapper className=" py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1">
              <h2 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl text-[#00999e] text-left">
                ~Turning Overseas Education Aspirations into Reality~
              </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-base text-justify">
            Do you dream of studying in another country but don&apos;t know where to start? Don&apos;t worry—we are here to help! At Taksheela, one of the top study abroad consultants in Delhi NCR and Greater Noida, we guide students like you to get into the best universities around the world. Our experienced study abroad consultants in Greater Noida make everything easy, whether you want to study medicine, business, or any other subject.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-base text-justify">
            From choosing the right course to getting admission and a visa, we take care of everything—so you can focus on your studies. With us, your dream of studying abroad can come true!
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
            <p className="mt-4 text-gray-800 text-lg leading-relaxed text-justify">
            At Taksheela, we believe that education is the key to a successful future. If you dream of studying abroad, we are here to make it happen! As experienced overseas education consultants in Greater Noida, we have helped many students like you find the best universities and courses around the world. We focus on your goals and provide personalized guidance at every step. From choosing the right course to securing admissions and visas, we ensure you have the best support to make informed decisions about your future. With us, studying abroad is not just a dream—it&apos;s a reality waiting for you!

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
        <p className="mt-4 text-justify font-medium">
        Studying abroad is a life-changing opportunity. It opens doors to top universities, better career prospects, and global exposure. But the process can feel overwhelming. That&apos;s where we come in! As one of the top study abroad consultants in Delhi NCR, we make your journey simple, smooth, and stress-free.
        </p>
      </ContainerWrapper>

      <ContainerWrapper className="py-12">
        <ConsultantFeatureCardGrid items={cardData} />
      </ContainerWrapper>

      <TwoColumnContent
        heading="Why Students Trust Our Overseas Education Consultants in Delhi NCR"
        headingAs="h2"
        imageUrl={
          "https://i.pinimg.com/736x/4e/9b/ac/4e9baccc4cb397bb2a3ee42cfcd887a8.jpg"
        }
        bgColor={true}
        reverse={true}
        description={
          <p className="text-justify">
            Delhi NCR is a growing city with great schools, colleges, and a bright student community. It is a place full of opportunities for students who dream big! As one of the top study abroad consultants in Delhi NCR, we help students like you find the best universities, scholarships, and admission opportunities in different countries. If you want to study abroad but don&apos;t know how to start, don&apos;t worry! We are here to guide you at every step and make your journey smooth and easy.{" "}
          </p>
        }
      />
        <TwoColumnContent
         heading="Start Your Study Abroad Application with Confidence"
         headingAs="h2"
          imageUrl={studyAbroadBaseUrl + "explore-delhi.jpg"}
          bgColor={false}
          reverse={false}
        description={
          <>
            <p className="text-justify">
              We help students in Greater Noida, as trusted overseas education consultants in Greater Noida, follow their dreams of studying in other countries. Our team makes the process easy and stress-free. With our expert advice and student-first approach, we guide you at every step—from choosing the best university to getting your admission. Let Taksheela be your trusted partner on this journey! Ready to take the first step? Book a free counseling session today and start planning your future with confidence!
            </p>
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
      <FAQSection
        items={delhiNcrFaqItems}
        heading="Common Questions About Studying Abroad"
      />
      <LetsStart />
    </div>
  );
}
