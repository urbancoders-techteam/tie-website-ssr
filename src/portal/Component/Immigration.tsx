// @ts-nocheck
import LetsGetStarted from "./LetsGetStarted";
import StepsForImmigration from "@/portal/immigration/StepsForImmigration";
import WhatIsImmigration from "@/portal/immigration/WhatIsImmigration";
import Banner from "@/portal/immigration/Banner";
import React, { useEffect } from "react";

import ImmigrationQuestions from "@/portal/immigration/ImmigrationFaq";
import CountriesWeServe from "@/portal/immigration/CountriesWeServe";
import EligibilityCriteria from "@/portal/immigration/EligibilityCriteria";
import ServiceWeOffer from "@/portal/immigration/ServiceWeOffer";
import WhyChooseUs from "@/portal/immigration/WhyChooseUs";
import { Helmet } from "@/portal/helmet";
const Immigration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Expert Immigration consultant You Can Trust | Taksheela Institute
        </title>
        <meta
          name="description"
          content="Trusted immigration consultants at Taksheela Institute offer expert guidance for seamless immigration processes. Your reliable partner for global opportunities."
        />
        <meta
          name="keywords"
          content="australia immigration consultants, best immigration consultant in india, global immigration consultant, immigration agent Canada, top immigration consultants in india"
        />
      </Helmet>
      
      <Banner />
      <WhatIsImmigration />
      <EligibilityCriteria />
      <CountriesWeServe />
      <ServiceWeOffer />
      <StepsForImmigration />
      <WhyChooseUs />
      <ImmigrationQuestions />
      <LetsGetStarted marginTop={6} />
      
    </div>
  );
};

export default Immigration;
