import Image from "next/image";
import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import ModalTrigger from "../ModalTrigger";

const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
const GirlImg = `${imageBaseUrl}immersion/immersionbanner.png`;

export const GlobalImmersion = () => {
  return (
    <div className="w-full bg-[#1090cb1a] py-8 px-4 sm:px-10">
      <ContainerWrapper>
        <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="flex justify-center items-center">
            <div>
              <h2
                className="font-poppins font-semibold text-[20px] sm:text-[30px] md:text-[35px] lg:text-[40px]  leading-snug"
                style={{ color: "rgba(0, 0, 0, 0.7)", textAlign: "left" }}
              >
                <span className="text-[#00999E] ">Global Immersion:&nbsp;</span>
                Where dreams take flight and cultures unite.
              </h2>

             <ModalTrigger text="Register for the Program"/>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <div className="w-full h-[250px] sm:h-[300px] lg:h-[450px] relative">
              <Image
                src={GirlImg}
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
  );
};
