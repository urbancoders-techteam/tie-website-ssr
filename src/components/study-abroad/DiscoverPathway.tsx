import { imageBaseUrl } from "@/utils/config";
import { Metadata } from "next";
import Image from "next/image";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import ModalTrigger from "../ModalTrigger";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Internationalisation at Home - Taksheela",
  description:
    "Explore India's NEP 2020 vision for global education through internationalisation at home.",
};

const img = imageBaseUrl + "countryintro.svg";

export default function DiscoverPathway() {
  return (
    <section className="bg-[#effdff] ">
      <ContainerWrapper>
        <div className=" py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-6 ">
            <HeadingTypography content="Discover Pathways" textAlign="right" />

            <div className="flex justify-end items-end text-end">
              <ModalTrigger />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-60 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={img}
              alt="Internationalisation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
