import { imageBaseUrl } from "@/utils/config";
import { Metadata } from "next";
import Image from "next/image";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";

const img = `${imageBaseUrl}International-Relation/IndiaPage/international.jpg`;

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Internationalisation at Home - Taksheela",
  description:
    "Explore India's NEP 2020 vision for global education through internationalisation at home.",
};

export default function InternationalisationHome() {
  return (
    
      <ContainerWrapper >
          <div className=" py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden shadow-lg">
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
            <HeadingTypography content="INTERNATIONALISATION AT HOME"/>

              <p className="text-[#525560] text-base leading-relaxed">
                Internationalisation in higher education fosters global collaboration,
                enhances research, and develops global citizens through student and
                scholar mobility. It boosts rankings, diversity, employability, and
                institutional growth while strengthening a country&apos;s global image.
              </p>

              <p className="text-[#525560] text-base leading-relaxed">
                India&apos;s <strong>National Education Policy (NEP) 2020</strong> aims to
                transform higher education with a focus on{" "}
                <strong>access, equity, quality, affordability, and accountability</strong>.
                The policy emphasizes <strong>internationalisation at home</strong>,
                attracting global students, and positioning India as a leading study
                destination offering world-class education at affordable costs—reviving
                its role as <strong>Vishwa Guru</strong>.
              </p>
            </div>
          </div>
      </ContainerWrapper>

  );
}
