import { imageBaseUrl } from "@/utils/config";
import { Metadata } from "next";
import Image from "next/image";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import ModalTrigger from "../ModalTrigger";

const img = imageBaseUrl + "studyAbroadInfo.svg";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Internationalisation at Home - Taksheela",
  description:
    "Explore India's NEP 2020 vision for global education through internationalisation at home.",
};

export default function StudyAbroad() {
  return (
    <ContainerWrapper>
      <div className=" py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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

        {/* Content Section */}
        <div className="space-y-6">
          <HeadingTypography content="Study Abroad" />

          <p className="text-[#525560] text-base leading-relaxed">
            From the Ivy League institutions of the U.S. and historic
            universities of the U.K. to Australia&apos;s and Canada&apos;s
            innovative research facilities and multicultural environments, our
            platform guides you through diverse study destinations. Discover the
            rich educational experiences, cultures, and vibrant communities
            awaiting you in international education.
          </p>
          <div className="my-4 sm:my-10  ">
            <ModalTrigger />
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
