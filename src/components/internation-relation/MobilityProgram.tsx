import Image from "next/image";
import { imageBaseUrl } from "@/utils/config";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import { Metadata } from "next";

const ImmigrationImg1 = `${imageBaseUrl}International-Relation/IndiaPage/studentMobality.jpg`;

export const metadata: Metadata = {
  title: "Student Mobility Program - Taksheela",
  description:
    "Empowering students to explore global education through exchange and mobility programs under Taksheela’s internationalisation strategy.",
};

export default function MobilityProgramme() {
  return (
    <ContainerWrapper className="py-12">
    <section id="student-mobility" className="py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-80   shadow-lg overflow-hidden rounded-lg">
            <Image
              src={ImmigrationImg1}
              alt="Student Mobility Program"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <HeadingTypography
              content="Student Mobility Program"
              textAlign="left"
              color="#00999E"
            />

            <p className="text-[#525560] text-base leading-relaxed">
              At <strong>Taksheela Institute of Education</strong>, we facilitate{" "}
              <strong>Student Exchange Programmes</strong> between{" "}
              <strong>Indian and foreign universities/institutions</strong> in the
              fields of <strong>Technical Education, Research, and Training</strong>.
              Our services help <strong>Higher Educational Institutions (HEIs)</strong>{" "}
              seamlessly integrate collaborative academic programs as per{" "}
              <strong>AICTE norms</strong> and <strong>global educational standards</strong>.
            </p>
          </div>
        </div>

    </section>
    </ContainerWrapper>
  );
}
