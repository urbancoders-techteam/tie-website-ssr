// @ts-nocheck
import React from "react";
import Header from "@/portal/Component/content-component/Header";
import ParaData from "@/portal/Component/content-component/ParaData";
import ContentContainer from "@/portal/Component/grid-component/ContentContainer";
import ImageContainer from "@/portal/Component/grid-component/ImageContainer";
import MainContainer from "@/portal/Component/grid-component/MainContainer";
import ImmigrationImg1 from '../asset/immigration1.png'

const WhatIsImmigration = () => {
  return (
    <>
      <MainContainer
        com1={
          <ContentContainer
            Header={<Header content={"What is Immigration"} color="#00999E" />}
            Content={
              <ParaData
                color={"#525560"}
                fontSize={"16px"}
                content={
                  "Immigration refers to individuals moving from one country to another with the intention of establishing permanent residence or seeking temporary residency for various purposes, such as work, study, business opportunities, family reunification, or asylum. Immigration involves legal procedures, regulations, and requirements set by the destination country's government to control the entry and settlement of foreign nationals."
                }
              />
            }
          />
        }
        com2={<ImageContainer img={ImmigrationImg1} />}
      />
    </>
  );
};

export default WhatIsImmigration;
