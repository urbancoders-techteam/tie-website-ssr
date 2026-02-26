"use client";

import { imageBaseUrl } from "@/utils/config";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import ContainerWrapper from "../ContainerWrapper";

const FreeCounsellingBanner = () => {
  const router = useRouter();
  const img = imageBaseUrl + "homecounselling.png";

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    router.push("/");
  };

  const handleWhatsAppClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    window.open("https://wa.me/+919831241212", "_blank");
  };

  return (
    <ContainerWrapper>
      <div
        className="flex justify-center items-center mt-12 cursor-pointer flex-wrap md:flex-nowrap gap-6"
        onClick={handleNavigation}
      >
        <div className="flex justify-center">
          <Image src={img} alt="Counselling Icon" width={80} height={80} />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
            Don’t Know What to do ?
          </h3>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00999E] underline underline-offset-4"
          >
            WhatsApp Our Counselling
          </button>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default FreeCounsellingBanner;




