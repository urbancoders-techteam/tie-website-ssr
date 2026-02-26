import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContainerWrapper from "@/components/ContainerWrapper";
import { FlipCardBox } from "@/components/FlipcardBox";
import HeadingTypography from "@/components/Heading";
import LetsStart from "@/components/immersion/LetsStart";
import MbbsTabs from "@/components/mbbs/MbbsTabs";
import Rules from "@/components/mbbs/Rules";
import { BackRouteContainer } from "@/components/study-abroad/university-finder/ViewComponents";
import { abroadEligibilityAbroadData } from "@/constants/mbbs";

export default function Abroad() {
  return (
    <>
     <BreadcrumbSchema />
      <ContainerWrapper className="pt-12">
        <BackRouteContainer path="/mbbs" title="MBBS Main Page" />
      </ContainerWrapper>
      <section id="abroadCriteria" className="py-12">
        <ContainerWrapper>
          <HeadingTypography
            content="Eligibility Criteria for MBBS Abroad"
            textAlign="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center text-center">
            {abroadEligibilityAbroadData?.map((eligibility, index) => (
              <FlipCardBox data={eligibility} key={index} />
            ))}
          </div>
        </ContainerWrapper>
      </section>
      <MbbsTabs />
      <Rules/>
      <ContainerWrapper className="py-12 mt-20">
        <BackRouteContainer path="/mbbs" title="MBBS Main Page" />
      </ContainerWrapper>
      <LetsStart />
    </>
  );
}
