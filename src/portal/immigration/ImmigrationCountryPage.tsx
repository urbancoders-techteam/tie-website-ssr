// @ts-nocheck
import React, { useEffect, useState } from "react";
import ImmigrationBanner from "./ImmigrationCountryPage/ImmigrationBanner";
import { useParams } from "@/portal/navigation";
import ImmigrationCountryBenefit from "./ImmigrationCountryPage/ImmigrationCountryBenefit";
import TestFaq from "@/portal/TestPages/TestFaq";
import {
  AustraliaFaq,
  CanadaFaq,
  UkFaq,
} from "./ImmigrationCountryJson/ImmigrationFaqData";
import LetsGetStarted from "@/portal/Component/LetsGetStarted";
import {
  AustraliaImmigrationBenefit,
  CanadaImmigrationBenefit,
  UkImmigrationBenefit,
} from "./ImmigrationCountryJson/ImmigrationBenefitData";
import ImmigrationCountryCriteria from "./ImmigrationCountryPage/ImmigrationCriteria";
import {
  AustraliaImmigrationCriteria,
  CanadaImmigrationCriteria,
  UkImmigrationCriteria,
} from "./ImmigrationCountryJson/ImmigrationCriteriaData";
import ImmigrationVisaCard from "./ImmigrationCountryPage/ImmigrationVisaCard";
import {
  AustraliaImmigrationVisa,
  CanadaImmigrationVisa,
  UkImmigrationVisa,
} from "./ImmigrationCountryJson/ImmigrationVisaData";
import ImmigrationOverview from "./ImmigrationCountryPage/ImmigrationOverview";
import {
  AustraliaImmigrationOverview,
  CanadaImmigrationOverview,
  UkImmigrationOverview,
} from "./ImmigrationCountryJson/ImmigrationOverviewData";
import BackRouteContainer from "@/portal/Component/grid-component/BackButtonComponent";
import {
  AustraliaImmigrationBanner,
  CanadaImmigrationBanner,
  UkImmigrationBanner,
} from "./ImmigrationCountryJson/ImmigrationBannerData";
import logo from "../asset/backimmigration.png";

const jsonData = [
  {
    pathname: "canada",
    banner: CanadaImmigrationBanner,
    faq: CanadaFaq,
    benefit: CanadaImmigrationBenefit,
    criteria: CanadaImmigrationCriteria,
    visa: CanadaImmigrationVisa,
    overview: CanadaImmigrationOverview,
  },
  {
    pathname: "uk",
    banner: UkImmigrationBanner,
    faq: UkFaq,
    benefit: UkImmigrationBenefit,
    criteria: UkImmigrationCriteria,
    visa: UkImmigrationVisa,
    overview: UkImmigrationOverview,
  },
  {
    pathname: "australia",
    banner: AustraliaImmigrationBanner,
    faq: AustraliaFaq,
    benefit: AustraliaImmigrationBenefit,
    criteria: AustraliaImmigrationCriteria,
    visa: AustraliaImmigrationVisa,
    overview: AustraliaImmigrationOverview,
  },
];

const ImmigrationCountryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { pageName } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const currentPageData = jsonData.find(
      (data) => data?.pathname === pageName
    );
    setPageData(currentPageData);
  }, [pageName]);

  return (
    <>
      
      <BackRouteContainer
        path={"/immigration"}
        logo={logo}
        title={"Immigration Main Page"}
      />
      <ImmigrationBanner data={pageData?.banner} />
      <ImmigrationCountryBenefit data={pageData?.benefit} />
      <ImmigrationOverview data={pageData?.overview} />
      <ImmigrationVisaCard data={pageData?.visa} />
      <ImmigrationCountryCriteria data={pageData?.criteria} />
      <TestFaq faqData={pageData?.faq} backgroundColor={"#ffffff"} />
      <BackRouteContainer
        path={"/immigration"}
        logo={logo}
        title={"Immigration Main Page"}
      />
      <LetsGetStarted />
      
    </>
  );
};

export default ImmigrationCountryPage;
