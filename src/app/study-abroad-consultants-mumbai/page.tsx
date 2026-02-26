import FAQ from "@/components/FAQ";
import LetsStart from "@/components/immersion/LetsStart";
import GlobalCombination from "@/components/study-abroad/GlobalCombination";
import Milestones from "@/components/study-abroad/Milestones";
import Roadmap from "@/components/study-abroad/WorlClassEducationAssist";
import TwoColumnContent from "@/components/TwoColumnContent";
import { cardData, mumbaiServices, mumbaiFAQ } from "@/constants/delhi-ncr";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import Image from "next/image";
import HeadingTypography from "@/components/Heading";
import { Metadata } from "next";
import ModalTrigger from "@/components/ModalTrigger";


export const metadata: Metadata = {
    title: "Study Abroad Consultants in Mumbai for USA, UK, Canada",
    description: "Get personalized guidance from top study abroad consultants in Mumbai. Taksheela Institute helps with course selection, admissions, and visas. Enquire now.."
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
                                    Top Study Abroad Consultants&nbsp;
                                    </span>
                                       in Mumbai Helping Study Worldwide
                                </h1>

                                <p className="mt-10 text-gray-700 leading-relaxed text-base">
                                   Start your study abroad journey with experienced overseas education<br/>
                                   consultants in Mumbai—get personalized guidance today.
                                </p>

                                <div className=" items-end justify-center flex">
                                    {/* You can add CTA button here if needed */}
                                    <ModalTrigger text="Book A Counselling Session" />
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center items-center p-2 sm:p-3 lg:p-4">
                            <div className="w-full relative aspect-[12/9] overflow-hidden z-0">
                                <Image
                                    src="/images/photos7.jpg"
                                    alt="Global Immersion Banner"
                                    fill
                                    className="object-contain scale-135 pointer-events-none"
                                    priority
                                    sizes="100vw" 
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
                             content="Top-Rated Foreign Education Consultants in Mumbai for Overseas Studies
  !"
                              textAlign="left"
                              as="h2"
                          />
                        <p className="mt-4 text-gray-700 leading-relaxed text-base">
                                Dreaming of an international education but unsure how to move forward? Our dedicated team is here to simplify the journey. As experienced overseas education consultants in Mumbai, we assist students in identifying suitable courses, universities, and countries that match their future plans </p>
                        <p className="mt-4 text-gray-700 leading-relaxed text-base">
                                   From admissions and paperwork to scholarship options and visa processing, we manage each step with care. Whether you plan to study in the UK, USA, Canada, Australia, or Europe, our personalized guidance ensures a smooth and well-planned study abroad experience.

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
                            src="/images/photos5.jpg"
                            alt="Vision"
                            width={400}
                            height={400}
                            className="rounded-xl relative z-10"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-3">
                        <HeadingTypography content="Reasons to Study Abroad with Us?" as="h2" />
                        <p className="text-gray-800 text-lg leading-relaxed">
                            Choosing the right guidance is essential for a successful study abroad journey. As trusted overseas education consultants in Mumbai, we focus on understanding your academic background and career goals to recommend the most suitable countries, universities, and courses. Our expert team supports you with applications, documentation, timelines, and visa procedures, ensuring a smooth and transparent process. With deep knowledge of international education pathways, we help students make informed decisions that lead to long-term academic and professional success. {" "}
                        </p>
                        <div className="mt-6 flex justify-start">
                            <a
                                href="https://www.taksheela.com/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                            >
                                Find the Right Course & Country
                            </a>
                        </div>
                    </div>
                </ContainerWrapper>
            </div>

            <ContainerWrapper className="py-12">
                <HeadingTypography content="What Sets Us Apart as Overseas Education Experts" textAlign="center" as="h2" />
                <p className="mt-4 text-center font-medium">
                    
                     Trusted foreign education consultants in Mumbai offering expert guidance for global university admissions, paperwork, and visa processing.:
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
                    <HeadingTypography content="Consultancy Services We Offer Mumbai" textAlign="center" />
                    <p className="mt-4 text-center font-medium text-gray-700">
                        End-to-end study abroad support tailored for students in Mumbai.
                    </p>
                      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {mumbaiServices.map((service) => (
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
                              href="https://wa.me/+919831241212"
                              className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                          >
                              Call Us for Study Abroad Counseling
                          </a>
                      </div>
                  </ContainerWrapper>
              </div>

              <TwoColumnContent
                 heading="What Sets Us Apart as Overseas Education Experts"
                 headingAs="h2"
                 imageUrl={"/images/photos8.jpg"}
                bgColor={true}
                reverse={true}
                description={
                    <>
                Selecting the right international university plays a vital role in your academic success. Taksheela Institute Of Education, recognized among reliable abroad education consultants in Mumbai, offers expert advice, personalized counseling, and end-to-end assistance for students planning to study overseas. Our dedicated support system is focused on guiding you smoothly through every stage of your study abroad process, including:
.{" "}
                    </>
                }
            />
              <TwoColumnContent
                 heading=" Your Path to Global Learning Starts Here ?"
                 headingAs="h2"
                 imageUrl={"/images/photos9.jpg"}
                bgColor={false}
                reverse={false}
                description={
                    <>
                       Kickstart your international education journey with expert guidance from Taksheela, one of the leading abroad education consultants in Mumbai. Our dedicated team helps students identify the best universities and programs worldwide, manage applications, and navigate admissions smoothly. With personalized counseling and a student-focused approach, we make studying abroad achievable and stress-free. Take the first step toward your global future—book your free consultation today and move confidently toward success.
                    
                      <div className="pt-6">
                        <a
                          href="https://wa.me/+919831241212"
                          className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                        >
                          Overseas Study Help on WhatsApp
                        </a>
                      </div>
                    </>
                }
            />
            <Milestones />
            <Roadmap />
            <GlobalCombination />
            <FAQ faqData={mumbaiFAQ} />
            <LetsStart />
        </>
    );
}
