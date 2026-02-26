// app/components/international-relation/InternshipOpportunities.tsx

import { Metadata } from "next";
import { imageBaseUrl } from "@/utils/config";
import TwoColumnContent from "../TwoColumnContent";


export const metadata: Metadata = {
  title: "Internship Opportunities - Taksheela",
  description:
    "Discover Taksheela's global Dual Degree and Twinning programs in partnership with top international universities.",
};

export const dynamic = "force-static";

const img = imageBaseUrl + "International-Relation/IndiaPage/internship.jpg";

export default function InternshipOpportunities() {
  return (
    <TwoColumnContent
      heading="Internship Opportunities"
      imageUrl={img}
      reverse={false}
      description={
        <>
          Internship provide <b>hands-on experience</b> for students and
          freshers, bridging the gap between academic learning and industry
          practices. Working under <b>seasoned professionals</b>, you refine
          skills, gain industry insights, and expand your{" "}
          <b>professional network</b>.
          <br /> <br />
          Whether in <b>finance, marketing, engineering</b>, or other fields,
          internships help you stand out in the job market with practical
          exposure. At <b>Taksheela</b>, we guide you in finding the{" "}
          <b>right internship</b> that aligns with your career goals, ensuring
          growth, learning, and networking opportunities.
        </>
      }
    />
  );
}
