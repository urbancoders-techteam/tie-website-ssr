// app/components/international-relation/CollaborativeResearch.tsx

import { Metadata } from "next";
import Image from "next/image";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";

export const metadata: Metadata = {
  title: "Collaborative Research & Seminars - Taksheela",
  description:
    "Explore how Taksheela fosters global collaboration through research partnerships, seminars, and faculty exchanges.",
};

export const dynamic = "force-static"; 



export default function CollaborativeResearch() {
  return (
    <section id="collaborative-research-seminars" className="bg-[#effdff] py-12">
      <ContainerWrapper>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-[350px] shadow-lg overflow-hidden rounded-lg">
              <Image
                src={'/images/collabrativeReasearch.jpg'}
                alt="Collaborative Research"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-3">
            <HeadingTypography content="Collaborative Research & Seminars" />
            <p className="text-[#525560] text-base leading-relaxed">
              At <strong>Taksheela Institute of Education</strong>, we promote{" "}
              <strong>academic excellence and global collaboration</strong> through research
              partnerships, seminars, and expert-led discussions. Our initiatives bridge the
              gap between academia and industry, equipping students with{" "}
              <strong>cutting-edge knowledge and global perspectives.</strong>
            </p>
            <p className="text-[#525560] text-base leading-relaxed">
              We collaborate with <strong>leading universities and industry experts</strong> to
              foster <strong>innovative research and interdisciplinary learning</strong>. Our{" "}
              <strong>seminars, workshops, and guest lectures</strong> provide valuable
              insights from top scholars and professionals, keeping students informed about{" "}
              <strong>emerging trends and career opportunities</strong>.
            </p>
            <p className="text-[#525560] text-base leading-relaxed">
              Through <strong>student and faculty exchange programs</strong>, we offer{" "}
              <strong>international academic exposure</strong>, enhancing research capabilities
              and professional growth. At <strong>Taksheela</strong>, we empower students with
              the skills, knowledge, and networks to excel in a{" "}
              <strong>global academic and professional landscape</strong>.
            </p>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
