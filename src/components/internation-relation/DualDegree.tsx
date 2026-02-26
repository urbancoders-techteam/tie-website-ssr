// app/components/international-relation/DualDegree.tsx

import Image from "next/image";
import { Metadata } from "next";
import { imageBaseUrl } from "@/utils/config";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";

const img = `${imageBaseUrl}International-Relation/IndiaPage/dualdegree.png`;

export const metadata: Metadata = {
  title: "Dual Degree & Twinning Programmes - Taksheela",
  description:
    "Discover Taksheela's global Dual Degree and Twinning programs in partnership with top international universities.",
};

export const dynamic = "force-static"; 

export default function DualDegree() {
  return (
    <section id="twinning-programmes" className="bg-white py-16">
      <ContainerWrapper>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <HeadingTypography content="Dual Degree/Joint Degree & Twinning Programmes" />
            <p className="text-[#525560] text-base leading-relaxed">
              At <strong>Taksheela Institute of Education</strong>, we offer students the
              opportunity to pursue <strong>Dual Degree, Joint Degree, and Twinning Programs</strong> in collaboration with
              top universities. These programs provide a global learning experience,
              enabling students to earn <strong>internationally recognized qualifications</strong> while studying
              in both India and abroad.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-80  rounded-lg overflow-hidden shadow-lg">
              <Image
                src={img}
                alt="Dual Degree Programs"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
