import LetsStart from "@/components/immersion/LetsStart";
import GlobalCombination from "@/components/study-abroad/GlobalCombination";
import Milestones from "@/components/study-abroad/Milestones";
import Roadmap from "@/components/study-abroad/WorlClassEducationAssist";
import TwoColumnContent from "@/components/TwoColumnContent";
import FAQSection, { type FAQItem } from "@/components/campaign/FAQSection";
import {
  bangaloreCardData,
  bangaloreFAQ,
  bangaloreServices,
} from "@/constants/bangalore";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import HeadingTypography from "@/components/Heading";
import { Metadata } from "next";
import ConsultantHero from "@/components/study-abroad/ConsultantHero";

const bangaloreFaqItems: FAQItem[] = bangaloreFAQ.map((item) => ({
  question: item.title,
  answer: item.Desc,
}));

export const metadata: Metadata = {
  title: "Best Study Abroad Consultants in Bangalore | Taksheela",
  description:
    "Looking for the best study abroad consultants in Bangalore? Get expert consultancy for abroad studies, overseas consultancy support, admissions, scholarships, and visas.",
  keywords: [
    "best study abroad consultants in bangalore",
    "consultancy for abroad studies in bangalore",
    "overseas consultancy in bangalore",
    "best consultancy for abroad studies in bangalore",
  ],
};

export default function page() {
  return (
    <div className="[&_p]:text-justify">
      <ConsultantHero
        title={
          <>
            <span className="text-[#00999E]">Best Study Abroad Consultants</span>{" "}
            in Bangalore | Study Visa Experts
          </>
        }
        description={[
          "Get expert guidance from the best consultancy for abroad studies in Bangalore and start your global education journey today. Apply now.",
        ]}
        image={{
          src: "/images/photos5.jpg",
          alt: "Best study abroad consultants in Bangalore",
          width: 396,
          height: 198,
        }}
      />

      <ContainerWrapper className="py-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex-1">
            <HeadingTypography
              content="Trusted Best Study Abroad Consultants in Bangalore"
              textAlign="left"
              as="h2"
            />
            <p className="mt-4 text-base leading-relaxed text-gray-700 text-justify">
            Are you planning to study in another country but feeling confused about the right steps? Our experts are here to guide you. As a trusted overseas consultancy in Bangalore, we help students choose the perfect course, university, and country based on their goals. From application support to documentation, scholarships, and visa assistance, we make your study abroad journey simple and stress-free. Whether you&apos;re aiming for higher studies in the UK, Canada, Australia, the USA, or Europe, our counselors ensure you receive clear, personalized guidance at every stage. With us, your dream of international education becomes easier and achievable.
            </p>
          </div>

          <div className="w-full flex-1">
            <Image
              src="/images/ourstory.png"
              alt="Overseas consultancy support in Bangalore"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </ContainerWrapper>

      <div className="bg-[#effdff]">
        <ContainerWrapper className="mb-16 flex flex-col gap-12 py-12 lg:flex-row">
          <div className="relative flex-1">
            <div className="border-30 absolute -left-16 top-10 z-0 h-36 w-36 rounded-full border-[#00999e] opacity-50" />
            <Image
              src="/images/photos2.jpg"
              alt="Why choose study abroad consultancy in Bangalore"
              width={400}
              height={400}
              className="relative z-10 rounded-xl"
            />
          </div>

          <div className="flex-3">
            <HeadingTypography content="Why Choose Us?" as="h2" />
            <p className="mt-4 text-lg leading-relaxed text-gray-800 text-justify">
              Our best study abroad consultants in Bangalore professionally assist students in exploring top global universities, ensuring a seamless experience with application processes, documentation, and visa support.
            </p>
       
            <div className="mt-6 flex justify-start">
              <a
                href="https://wa.me/+919831241212"
                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#00777E] sm:text-base"
              >
                Get Instant Guidance on WhatsApp
              </a>
            </div>
          </div>
        </ContainerWrapper>
      </div>

      <ContainerWrapper className="py-12">
        <HeadingTypography
          content="What Makes Us the Best Overseas Consultancy in Bangalore"
          textAlign="center"
          as="h2"
        />
        <p className="mt-4 text-justify font-medium">
          Choosing the right guidance can transform your study abroad plans into a smooth and confident journey. As a reliable consultancy for abroad studies in Bangalore, we take the time to understand your goals and recommend the best countries, universities, and programs for your future. Our team supports you through applications, documentation, timelines, and visa procedures, ensuring every step is clear and manageable. With strong expertise in global education pathways, we help you make smart academic decisions that shape long-term success. With our support, your international education goals move from aspiration to achievement.
        </p>
   
      </ContainerWrapper>

      <ContainerWrapper className="py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bangaloreCardData.map((item, index) => (
            <div
              key={item.id || index}
              className="group flex h-[420px] flex-col items-center rounded-lg bg-gray-100 p-6 text-center transition-all duration-300 hover:bg-[#00999E] sm:h-[440px]"
            >
              <div className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white p-4 shadow-2xl transition-all duration-300 group-hover:bg-[#007f82]">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain transition-all duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                />
              </div>
              <h2 className="shrink-0 text-lg font-bold text-[#00999e] transition-all duration-300 group-hover:text-white sm:text-xl">
                {item?.title}
              </h2>
              <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
                <p
                  className="text-justify text-sm font-medium leading-relaxed text-gray-700 transition-all duration-300 group-hover:text-white sm:text-[15px]"
                  dangerouslySetInnerHTML={{ __html: item.about }}
                />
              </div>
            </div>
          ))}
        </div>
      </ContainerWrapper>

      <div className="bg-[#eef9fb] py-12">
        <ContainerWrapper>
          <HeadingTypography
            content="Consultancy Services We Offer in Bangalore"
            textAlign="center"
          />
          <p className="mt-4 text-justify font-medium text-gray-700">
            End-to-end study abroad support from the best study abroad consultants in Bangalore.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bangaloreServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-[#d6eef3] bg-white p-6 shadow transition hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00999e]/10">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={36}
                    height={36}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#00999e]">
                  {service.title}
                </h3>
                <p
                  className="mt-2 text-justify leading-relaxed text-gray-700"
                  dangerouslySetInnerHTML={{ __html: service.about }}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.taksheela.com/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#00777E] sm:text-base"
            >
              Contact Us for Admission & Visa Support
            </a>
          </div>
        </ContainerWrapper>
      </div>

      <TwoColumnContent
        heading="What Makes Us the Best Overseas Consultancy in Bangalore"
        headingAs="h2"
        imageUrl={"/images/photos4.jpg"}
        bgColor={true}
        reverse={true}
        description={
          <p className="text-justify">
            Choosing the right university abroad is crucial. Taksheela Institute of Education, as the best consultancy for abroad studies in Bangalore, provides expert guidance, personalized counseling, and complete support for your study abroad journey. Our services are designed to help you with:
          </p>
        }
      />
      <TwoColumnContent
        heading="Your Global Education Awaits?"
        headingAs="h2"
        imageUrl={"/images/photos8.jpg"}
        bgColor={false}
        reverse={false}
        description={
          <>
            <p className="text-justify">
              Your global education journey starts here! At Taksheela, we are dedicated study abroad consultants in Bangalore, helping students explore top universities worldwide. From choosing the right course to securing admission, our expert team ensures a smooth, stress-free process. With personalized guidance and a student-first approach, we turn your dreams into reality. Don’t wait, book your free counseling session today and step confidently toward a bright future abroad!
            </p>
            <div className="pt-6">
              <a
                href="https://wa.me/+919831241212"
                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#00777E] sm:text-base"
              >
                Call Now
              </a>
            </div>
          </>
        }
      />
      <Milestones />
      <Roadmap />
      <GlobalCombination />
      <FAQSection items={bangaloreFaqItems} />
      <LetsStart />
    </div>
  );
}
