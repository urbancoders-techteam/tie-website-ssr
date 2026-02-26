import Image from "next/image";
import { imageBaseUrl } from "@/utils/config";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import { Metadata } from "next";

const ImmigrationImg1 =  imageBaseUrl + "immersion/immersionwhat.png";

export const metadata: Metadata = {
  title: "Student Mobility Program - Taksheela",
  description:
    "Empowering students to explore global education through exchange and mobility programs under Taksheela’s internationalisation strategy.",
};

export default function Immersion() {
  return (
    <ContainerWrapper>
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
              content="What is Immersion"
              textAlign="left"
              color="#00999E"
            />

            <p className="text-[#525560] text-base leading-relaxed">
              A Global Immersion Program (GIP) is a transformative international
              learning experience that connects students with diverse cultures,
              global industries, and top educational institutions worldwide.
              Immersion drives total engagement, where learning, experience, and
              transformation break boundaries, fostering deeper personal growth
              and real-world application. These career-enhancing programs
              include short-term study tours, student exchange programs,
              industry visits, international internships, and collaborative
              research projects, offering hands-on exposure to global business,
              innovation, and cross-cultural engagement.
            </p>
          </div>
        </div>
      </section>
    </ContainerWrapper>
  );
}
