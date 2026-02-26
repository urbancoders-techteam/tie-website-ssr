// app/partner-universities/page.tsx (SSG or SSR component)

import Image from "next/image";
import { Metadata } from "next";
import HeadingTypography from "@/components/Heading";
import PartnerSlider from "../slider/PartnerSlider";
import { PartnerUniversitiesData } from "@/constants/internation-relation";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";

export const metadata: Metadata = {
  title: "Our Partner Universities | Taksheela Institute",
  description:
    "Explore our global partner universities collaborating with Taksheela Institute to provide world-class academic and cultural exchange opportunities.",
};

const sliderSettings = {
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const PartnerUniversitiesPage = () => {
  return (
    <section className=" py-12 text-center">
      <ContainerWrapper>
        <HeadingTypography
          content="Our Partner Universities"
          textAlign="center"
        />
        <div className="mt-10">
          <PartnerSlider settings={sliderSettings}>
            {PartnerUniversitiesData.map((uni, i) => (
              <div key={i} className="p-2 my-4">
                <Link href={uni.path} target="_blank" rel="noopener noreferrer">
                  <div className="w-[230px] h-[260px] bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 mx-auto flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center p-4">
                      <Image
                        src={uni.Image}
                        alt={uni.title}
                        width={160}
                        height={100}
                        className="object-contain max-h-[100px]"
                      />
                    </div>
                    <div className="bg-[#0A9DA2] text-white py-3 px-2 text-sm font-semibold text-center">
                      {uni.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </PartnerSlider>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default PartnerUniversitiesPage;
