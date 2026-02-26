import Image from "next/image";
import { imageBaseUrl } from "@/utils/config";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import { Metadata } from "next";
import Link from "next/link";

const ImmigrationImg1 = `${imageBaseUrl}International-Relation/IndiaPage/globalImmersion.png`;

export const metadata: Metadata = {
  title: "Global Immersion Programme - Taksheela",
  description:
    "Participate in Taksheela’s Global Immersion Programme for international exposure, global learning, and cultural exchange with top partner universities.",
};

export default function ImmersionProgramme() {
  return (
    <section id="global-immersion">
      <ContainerWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <HeadingTypography
              content="Global Immersion Programme"
              textAlign="left"
              color="#00999E"
            />

            <p className="text-[#525560] text-base leading-relaxed">
              Taksheela facilitates Global Immersion, which is a unique opportunity
              for students to dive into the real world of international business markets
              by visiting your choice of one of the below-mentioned destinations.
              Available for our students and faculty members at HEIs, we design
              Global Immersion that allows them to expand their network and exposure
              with other students/faculty members across the globe—by attending
              masterclasses, company visits, and local/global executive meetings, all
              while exploring new cultures.{" "}
              <Link
                href="/immersion"
                className="text-[#00999E] font-semibold hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 md:h-80   shadow-lg overflow-hidden rounded-lg">
            <Image
              src={ImmigrationImg1}
              alt="Global Immersion"
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
