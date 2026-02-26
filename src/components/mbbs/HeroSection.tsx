import Image from "next/image";
import React from "react";
import ModalTrigger from "../ModalTrigger";
import ContainerWrapper from "../ContainerWrapper";

const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
const doc1 = `${imageBaseUrl}mbbs3.png`;

const HeroSection = () => {
  return (
    <section className="w-full bg-[#1090cb1a] pt-8">
      <ContainerWrapper className=" flex flex-col items-center justify-center text-center ">
        {/* Inlined MainHeader */}
        <div className=" px-14 text-xl text-[20px] sm:text-[26px] md:text-[36px] font-semibold text-center text-[#00999E]">
          <h2 className="inline text-[#00999E] font-semibold">MBBS: </h2>
          <span className="text-black/70 font-semibold">
            A challenging path, but with passion and perseverance, your future
            of healing awaits
          </span>
        </div>

        <div className=" w-52 flex justify-center">
          <ModalTrigger text="BOOK YOUR FREE DEMO SESSION" />
        </div>

        <div className="relative w-full h-[100vh] mt-5">
          <Image
            src={doc1}
            alt="Doctor Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default HeroSection;
