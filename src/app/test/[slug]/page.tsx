'use client'
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import FAQ from "@/components/FAQ";
import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import { BackRouteContainer } from "@/components/study-abroad/university-finder/ViewComponents";
import ChooseReason from "@/components/test/ChooseReason";
import ExamStructureCard from "@/components/test/ExamStructureCard";
import TestInfo from "@/components/test/TestInfo";
import TestPackages from "@/components/test/TestPackages";
import { OurTestData } from "@/constants/test";
import Link from "next/link";
import { useParams } from "next/navigation";



export default function Page() {
  const { slug } = useParams<{ slug: string }>();

  const selectedData = OurTestData.find(
    (item) => item.title.toLowerCase() === slug.toLowerCase()
  );

  if (!selectedData) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-600">
          No data found for this test.
        </h2>
      </div>
    );
  }

  return (
    <>
      <TestInfo testInfo={selectedData?.info} />
      <BreadcrumbSchema />
      {/* Card Grid */}
      <ContainerWrapper className="py-12 text-center">
        <HeadingTypography
          content={`Exam Structure, Content & Features`}
          textAlign="center"
          className="pb-8"
        />
        <span className="text-center items-center font-semibold text-lg ">
          {selectedData?.features?.heading}
        </span>

        <div className="flex justify-center gap-10 flex-wrap my-16">
          {selectedData?.features?.items?.map(
            (data, index: React.Key | null | undefined) => (
              <div key={index} className="flex justify-center">
                <ExamStructureCard data={data} />
              </div>
            )
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href={"/contact"}
            className="cursor-pointer bg-[#00999E] text-white px-10 py-3 text-sm rounded-lg w-52  font-medium hover:bg-[#007a7f] transition"
          >
            Read More
          </Link>
        </div>
      </ContainerWrapper>
      {/* Choose Reason Section */}
      <section className="bg-[#effdff] py-12">
        <ChooseReason
          chooseus={selectedData.reasons || []}
          title={selectedData.title}
        />
      </section>

      {/* Test Packages */}
      <TestPackages PackageData={selectedData.package || []} />

      {/* FAQ Section */}
      <section className="bg-[#effdff]">
        <FAQ faqData={selectedData.faq || []} />
      </section>

      <ContainerWrapper className="py-12">
        <BackRouteContainer
          path="/test"
          title="Test Main Page"
          logo={"/images/backuniversity.png"}
        />
      </ContainerWrapper>
      {/* CTA Section */}
      <LetsStart />
    </>
  );
}
