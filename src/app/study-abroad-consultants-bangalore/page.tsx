import FAQ from "@/components/FAQ";
import LetsStart from "@/components/immersion/LetsStart";
import GlobalCombination from "@/components/study-abroad/GlobalCombination";
import Milestones from "@/components/study-abroad/Milestones";
import Roadmap from "@/components/study-abroad/WorlClassEducationAssist";
import TwoColumnContent  from "@/components/TwoColumnContent";
import { cardData, bangaloreFAQ , bangaloreServices } from "@/constants/delhi-ncr";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import HeadingTypography from "@/components/Heading";
import { Metadata } from "next";
import ModalTrigger from "@/components/ModalTrigger";


export const metadata: Metadata = {
    title: "Study Abroad Made Easy | Leading Consultancy in Bangalore",
    description: "Get personalized expert study abroad support in Bangalore for admissions, documentation, scholarships, and visas for UK, USA, Canada, Australia, and Europe.."
};

export default function page() {
    return (
        <>
            <div className="w-full bg-[#1090cb1a] py-12 px-4 sm:px-10">
                <ContainerWrapper>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                        {/* Left Content */}
                        <div className="flex justify-center items-center relative z-10">
                            <div>
                                <h1
                                    className="font-poppins font-semibold text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]  leading-snug"
                                    style={{ color: "rgba(0, 0, 0, 0.7)", textAlign: "left" }}
                                >
                                    <span className="text-[#00999E] ">
                                        Top Consultancy for Abroad&nbsp;
                                    </span>
                                       Studies in Bangalore | Study Visa Experts
                                </h1>

                                <p className="mt-10 text-gray-700 leading-relaxed text-base">
                                    Get expert guidance from trusted study abroad consultants in <br/> Bangalore —start
                                     your global education journey today. Apply now.
                                </p>

                                <div className="  items-end justify-center flex">
                                    {/* You can add CTA button here if needed */}
                                    <ModalTrigger text="Book A Counselling Session" />
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center items-center">
                            <div className="w-full relative aspect-[12/9] overflow-hidden z-0">
                                <Image
                                    src="/images/photos5.jpg"
                                    alt="Global Immersion Banner"
                                    fill
                                    className="object-contain scale-125 pointer-events-none"
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
                             content="Trusted study abroad consultants in Bangalore"
                              textAlign="left"
                              as="h2"
                          />
                        <p className="mt-4 text-gray-700 leading-relaxed text-base">
                            Are you planning to study in another country but feeling confused about the right steps? Our expert is here to guide you. As a trusted overseas consultancy in Bangalore, we help students choose the perfect course, university, and country based on their goals. From application support to documentation, scholarships, and visa assistance, we make your study abroad journey simple and stress-free. Whether you&apos;re aiming for higher studies in the UK, Canada, Australia, the USA, or Europe, our counselors ensure you receive clear, personalized guidance at every stage. With us, your dream of international education becomes easier and achievable. </p>
                        <p className="mt-4 text-gray-700 leading-relaxed text-base">
                                  
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
                            src="/images/photos2.jpg"
                            alt="Vision"
                            width={400}
                            height={400}
                            className="rounded-xl relative z-10"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-3">
                        <HeadingTypography content="Why Choose Us?" as="h2" />
                        <p className="text-gray-800 text-lg leading-relaxed">
                            Expert study abroad consultants in Bangalore helping students explore top global universities with smooth application, documentation, and visa support.{" "}
                        </p>
                        <div className="mt-6 flex justify-start">
                            <a
                                href="https://wa.me/+919831241212"
                                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                            >
                                Get Instant Guidance on WhatsApp
                            </a>
                        </div>
                    </div>
                </ContainerWrapper>
            </div>

            <ContainerWrapper className="py-12">
                <HeadingTypography content="What Makes Us the Best Overseas Consultancy" textAlign="center" as="h2" />
                <p className="mt-4 text-center font-medium">
                   Choosing the right guidance can transform your study abroad plans into a smooth and confident journey. As a trusted consultancy for abroad studies in Bangalore, we take the time to understand your goals and recommend the best countries, universities, and programs for your future. Our team supports you through applications, documentation, timelines, and visa procedures, ensuring every step is clear and manageable. With strong expertise in global education pathways, we help you make smart academic decisions that shape long-term success. With our support, your international education goals move from aspiration to achievement.

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
                            <h2 className="text-[#00999e] font-bold text-xl transition-all duration-300 group-hover:text-white">
                                {item?.title}
                            </h2>
                            <p className="mt-4 text-base font-medium transition-all duration-300 group-hover:text-white">
                                {item.about}
                            </p>
                        </div>
                    ))}
                </div>
            </ContainerWrapper>

            <div className="bg-[#eef9fb] py-12">
                <ContainerWrapper>
                    <HeadingTypography content="Consultancy Services We Offer Bangalore" textAlign="center" />
                    <p className="mt-4 text-center font-medium text-gray-700">
                        End-to-end study abroad support tailored for students in Bangalore.
                    </p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bangaloreServices.map((service) => (
                            <div
                                key={service.id}
                                className="rounded-2xl bg-white p-6 shadow hover:shadow-lg border border-[#d6eef3] transition"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#00999e]/10 flex items-center justify-center mb-4">
                                    <Image src={service.icon} alt={service.title} width={36} height={36} />
                                </div>
                                <h3 className="text-lg font-semibold text-[#00999e]">{service.title}</h3>
                                <p className="mt-2 text-gray-700 leading-relaxed">{service.about}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://www.taksheela.com/contact"
                            className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                        >
                            Contact Us for Admission & Visa Support
                        </a>
                    </div>
                </ContainerWrapper>
            </div>

              <TwoColumnContent
                 heading="What Makes Us the Best Overseas Consultancy "
                 headingAs="h2"
                imageUrl={"/images/photos4.jpg"}
                bgColor={true}
                reverse={true}
                description={
                    <>
                        Choosing the right university abroad is crucial. Taksheela Institute Of Education, a trusted overseas consultancy in Bangalore, provides expert guidance, personalized counseling, and complete support for your study abroad journey. Our services are designed to help you with:
.{" "}
                    </>
                }
            />
              <TwoColumnContent
                 heading=" Your Global Education Awaits?"
                 headingAs="h2"
                  imageUrl={"/images/photos8.jpg"}
                  bgColor={false}
                  reverse={false}
                description={
                    <>
                        Your global education journey starts here! At Taksheela, we are dedicated study abroad consultants in Bangalore, helping students explore top universities worldwide. From choosing the right course to securing admission, our expert team ensures a smooth, stress-free process. With personalized guidance and a student-first approach, we turn your dreams into reality. DonGÇÖt waitGÇöbook your free counseling session today and step confidently toward a bright future abroad!
                    
                        <div className="pt-6">
                            <a
                                href="https://wa.me/+919831241212"
                                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
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
            <FAQ faqData={bangaloreFAQ} />
            <LetsStart />
        </>
    );
}
