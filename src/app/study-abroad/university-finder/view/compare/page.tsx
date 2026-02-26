import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import UniversityComparison from "@/components/study-abroad/university-finder/CompareUniversities";
import React from "react";

export default function ComparePage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
       <BreadcrumbSchema />
      <UniversityComparison />
    </React.Suspense>
  );
}