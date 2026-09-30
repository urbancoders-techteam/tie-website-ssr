import Image from "next/image";
import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import ModalTrigger from "../ModalTrigger";

const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
const GirlImg = `${imageBaseUrl}immersion/immersion_img1.jpg`;

export const GlobalImmersion = () => {
  return (
    <div className="w-full bg-[#1090cb1a] py-8 px-4 sm:px-10">
      <ContainerWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 lg:gap-12">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-poppins font-semibold text-[22px] sm:text-[28px] lg:text-[36px] leading-snug text-left text-black/70">
              <span className="text-[#00999E]">Global Immersion: </span>
              Where dreams take flight and cultures unite.
            </h2>
            <div>
              <ModalTrigger text="Register for the Program" />
            </div>
          </div>

          <div className="relative w-full aspect-[2/1] overflow-hidden rounded-xl">
            <Image
              src={GirlImg}
              alt="Global Immersion Banner"
              fill
              className="object-contain"
              sizes="(min-width: 640px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};
