import ContainerWrapper from "@/components/ContainerWrapper";
import FAQSection, { type FAQItem } from "@/components/campaign/FAQSection";
import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import ModalTrigger from "@/components/ModalTrigger";
import GlobalCombination from "@/components/study-abroad/GlobalCombination";
import Milestones from "@/components/study-abroad/Milestones";
import Roadmap from "@/components/study-abroad/WorlClassEducationAssist";
import TwoColumnContent from "@/components/TwoColumnContent";
import { bhubaneswarCardData, bhubaneswarFAQ, bhubaneswarServices } from "@/constants/bhubaneswar";
import { Metadata } from "next";
import Image from "next/image";

const bhubaneswarFaqItems: FAQItem[] = bhubaneswarFAQ.map((item) => ({
  question: item.title,
  answer: item.Desc,
  highlightTerms: item.highlightTerms,
}));

export const metadata: Metadata = {
    title: "Study Abroad Consultants Bhubaneswar | Top Universities",
    description: " Looking to study abroad? Our Bhubaneswar overseas education consultants help you choose the right university with complete application and visa assistance."
};

export default function page() {
    return (
        <>
            <div className="w-full bg-[#1090cb1a] py-12 px-4 sm:px-10">
                <ContainerWrapper>
                    <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
                        <div className="relative z-10 flex items-center">
                            <div className="w-full max-w-xl">
                                <h1 className="font-poppins text-left text-[20px] font-semibold leading-snug text-black/70 sm:text-[30px] md:text-[35px] lg:text-[40px]">
                                    <span className="text-[#00999E]">
                                        Study Abroad Consultants
                                    </span>{" "}
                                    in Bhubaneswar for Your Global Dreams
                                </h1>

                                <p className="mt-6 text-base leading-relaxed text-gray-700 sm:mt-8">
                                    Plan your international education with experienced{" "}
                                    <span className="font-bold">
                                        study abroad consultants in Bhubaneswar
                                    </span>
                                    . From university shortlisting to applications and visas,
                                    we guide you at every step.
                                </p>

                                <div className="mt-6 flex justify-start sm:mt-8">
                                    <ModalTrigger text="Book A Counselling Session" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center p-2 sm:p-3 lg:p-4">
                            <div className="relative z-0 aspect-[12/9] w-full overflow-hidden">
                                <Image
                                    src="/images/photos6.jpg"
                                    alt="Study abroad counselling support for students in Bhubaneswar"
                                    fill
                                    className="pointer-events-none scale-135 object-contain"
                                    priority
                                    sizes="(max-width: 640px) 100vw, 50vw"
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
                            content="Trusted Study Abroad Consultants in Bhubaneswar for Your Global Dreams!"
                            textAlign="left"
                            as="h2"
                        />
                        <p className="mt-4 text-gray-700 leading-relaxed text-base text-justify">
                            Want to study abroad but unsure where to start? Our dedicated team is here to guide you at every step. We help you select the ideal country, university, and course based on your career goals and interests. From application processing and documentation to scholarship guidance and visa support, we simplify the entire journey.   </p>
                        <p className="mt-4 text-gray-700 leading-relaxed text-base text-justify">
                            Whether your goal is higher studies in the UK, Canada, Australia, the USA, or Europe, our expert counselors provide personalized advice to make your international education aspirations a reality.
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
                        <HeadingTypography content="Reasons to Choose Our Expert Consultancy Services" as="h2" />
                        <p className="text-gray-800 text-lg leading-relaxed text-justify">
                            Choosing the right path for studying abroad is an important decision. Our team provides expert guidance, personalized counseling, and complete support to make your international education journey smooth and successful. Our <span className="font-bold">overseas education consultants in Bhubaneswar</span> help students understand their options and plan each stage carefully. Our services include:{" "}
                        </p>
                        <div className="mt-6 flex justify-start">
                            <a
                                href="https://www.taksheela.com/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                            >
                                Connect With Us
                            </a>
                        </div>
                    </div>
                </ContainerWrapper>
            </div>

            <ContainerWrapper className="py-12">
                <HeadingTypography content="Why We Are Your Top Choice for Overseas Education?" textAlign="center" as="h2" />
                <p className="mt-4 text-center font-medium">
                    Trusted <span className="font-bold">study abroad consultants in Bhubaneswar</span> guiding students to top international universities with seamless applications, documentation, scholarships, and visa assistance.

                </p>
            </ContainerWrapper>

            <ContainerWrapper className="py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {bhubaneswarCardData.map((item, index) => (
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
                            <p
                                className="mt-4 text-base font-medium transition-all duration-300 group-hover:text-white"
                                dangerouslySetInnerHTML={{ __html: item.about }}
                            />
                        </div>
                    ))}
                </div>
            </ContainerWrapper>

            <div className="bg-[#eef9fb] py-12">
                <ContainerWrapper>
                    <HeadingTypography content="Consultancy Services We Offer in Bhubaneswar" textAlign="center" />
                    <p className="mt-4 text-center font-medium text-gray-700">
                        End-to-end study abroad support tailored for students in Bhubaneswar.
                    </p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bhubaneswarServices.map((service) => (
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
                            Call or WhatsApp
                        </a>
                    </div>
                </ContainerWrapper>
            </div>

            <TwoColumnContent
                heading="Reasons to Choose Our Consultancy in Bhubaneswar for Studying Abroad"
                headingAs="h2"
                imageUrl={"/images/photos3.jpg"}
                bgColor={true}
                reverse={true}
                description={
                    <>
                        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
                            Choosing the right support can make your study abroad journey smooth and stress-free. As trusted <span className="font-bold">overseas education consultants in Bhubaneswar.</span>, we understand your academic ambitions and guide you to the best countries, universities, and courses for your future. Our experienced team assists with applications, documentation, scholarships, and visa procedures, ensuring every step is simple and manageable. With in-depth knowledge of global education pathways, we provide personalized guidance to help you make informed decisions for long-term success. 
                        </p>
                       
                        <p className="text-gray-700 leading-relaxed text-justify">Partner with us and turn your dream of international education into a rewarding reality with a consultancy in Bhubaneswar for studying abroad that understands your goals.</p>
                    </> 
                }

            />
            <TwoColumnContent
                heading=" Study Abroad, Live Your Dreams with Experts ?"
                headingAs="h2"
                imageUrl={"/images/photos9.jpg"}
                bgColor={false}
                reverse={false}
                description={
                    <>
                       <p>Your international education journey begins with us! At Taksheela, we are reliable study abroad consultants in Bhubaneswar, guiding students to top universities around the world. From selecting the ideal course to completing applications and securing admissions, our experienced team ensures a seamless and stress-free process. With personalized support and a student-focused approach, we help turn your study abroad dreams into reality.</p>

                      <p> Take the first step toward your global future—schedule your free counseling session today and move confidently toward achieving your academic goals abroad.</p>
                        <div className="pt-6">
                            <a
                                href="https://www.taksheela.com/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#00999E] px-8 py-3 text-white text-sm sm:text-base font-semibold shadow-md transition hover:bg-[#00777E]"
                            >
                                Apply to Top Global Universities
                            </a>
                        </div>
                    </>
                }
            />
            <Milestones />
            <Roadmap />
            <GlobalCombination />
            <FAQSection items={bhubaneswarFaqItems} />
            <LetsStart />
        </>
    );
}
