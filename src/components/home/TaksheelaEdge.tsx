

import Image from "next/image";
import HeadingTypography from "../Heading";
import { taksheelaEdge } from "@/constants/home";
import ContainerWrapper from "../ContainerWrapper";
import { imageBaseUrl } from "@/utils/config";
import { Metadata } from "next";

const pic = imageBaseUrl + 'homeedge.jpg'; 

export const metadata: Metadata = {
  title: "Taksheela Edge - Why Choose Us",
  description:
    "Explore the unique advantages of Taksheela Institute. Learn how our global network, expert mentorship, and personalized approach give students the edge to succeed internationally.",
};



const TaksheelaEdge = () => {
  return (
    <section id="taksheela-edge-section" className="bg-[#effdff] w-full py-10 my-16">
      <ContainerWrapper>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={pic}
              alt="Taksheela Edge"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <HeadingTypography
              content="Taksheela Edge"
              textAlign="center"

            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full px-4 sm:px-0">
              {taksheelaEdge.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-md m-1 bg-[#5cd2d6] text-white transition-all duration-300 hover:bg-white hover:text-black shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-4"
                >
                  <div className="text-base sm:text-lg md:text-lg lg:text-lg font-bold">
                    {item.heading}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-base font-normal text-left mt-2">
                    {item.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 w-full flex justify-center">
          <a
            href="https://www.taksheela.com/contact"
            className="bg-[#00999E] hover:bg-[#00777E] text-white px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow-md transition"
          >
            Talk to an Expert Now
          </a>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default TaksheelaEdge;


