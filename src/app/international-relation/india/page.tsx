import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeadingTypography from "@/components/Heading";
import CoursesOffered from "@/components/internation-relation/CourseOffered";
import UniversityCards from "@/components/internation-relation/IndianUniversity/UniversityCard";
import WhyStudyInIndia from "@/components/internation-relation/IndianUniversity/WhyStudyInIndia";
import TwoColumnContent from "@/components/TwoColumnContent";
import { imageBaseUrl } from "@/utils/config";
import React from "react";

export default function page() {
  return (
    <>
      <BreadcrumbSchema />
      <TwoColumnContent
        heading="Study In India"
        imageUrl={imageBaseUrl + "International-Relation/University/indian_culture.jpg"}
        reverse={true}
        description={
          <>
            India is a top study destination with,{" "}
            <strong>1,100+ universities </strong>and{" "}
            <strong>42,000+ colleges</strong>, attracting{" "}
            <strong>50,000+ international students</strong> from{" "}
            <strong>160+ countries.</strong> Prestigious institutions like
            <strong> IITs, IIMs, and AIIMS</strong> offer world-class education
            at <strong> affordable costs</strong> —tuition starts at
            <strong> $1,000/year,</strong> and living expenses average from{" "}
            <strong> $800/year to $1,500/year.</strong> With a booming economy
            and strong industry ties, India offers excellent{" "}
            <strong>career opportunities</strong> and global exposure.
          </>
        }
      />
      <WhyStudyInIndia />
      <HeadingTypography content="Courses Offered" textAlign="center" />
      <CoursesOffered />
      <HeadingTypography content=" Indian Universities we are associated with" textAlign="center" />
      <UniversityCards />
    </>
  );
}
