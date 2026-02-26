import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";


export const metadata: Metadata = {
  title: "International Student Recruitment & Regulatory Bodies - Taksheela",
  description:
    "Explore how Taksheela engages in international student recruitment and learn about key regulatory bodies shaping global education.",
};

export default function studentRecruitment() {
  return (
    <section id="international-student-recruitment">
      <ContainerWrapper>
        <div className="flex flex-col lg:flex-row  gap-5">
          {/* Text Section */}
          <div className="w-full lg:w-[55%]  flex flex-col gap-10 justify-start">
            {/* Text Section */}
            <div>
              <HeadingTypography
                content="International Student Recruitment"
                textAlign="left"
              />
              <p className="mt-4 text-gray-700 leading-relaxed text-base">
                India is a top study destination with <b>1,100+ universities</b>{" "}
                and <b>42,000+ colleges</b>, attracting{" "}
                <b>50,000+ international students</b> from <b>160+ countries</b>.
                Prestigious institutions like <b>IITs, IIMs, and AIIMS</b> offer
                world-class education at <b>affordable costs</b>—tuition starts at{" "}
                <b>$1,000/year</b>, and living expenses average from{" "}
                <b>$800/year to $1,500/year</b>. With a booming economy and
                industry ties, India offers excellent <b>career opportunities</b>{" "}
                and global exposure.
              </p>
            </div>

            {/* CTA Link */}
            <div>
              <Link
                href={`/international-relation/india`}
                className="inline-block bg-[#00999E] text-white font-medium px-5 py-3 rounded hover:bg-[#007a7e] transition-all duration-200"
              >
                For More Details on Indian Universities →
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%]">
            <Image
              src="/images/studentRecruitment.png"
              alt="Our Story Image"
              width={600}
              height={300}
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
