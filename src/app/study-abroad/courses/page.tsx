import SelectCoursesClient from "@/components/study-abroad/SelectCoursesClient";
import { staticMetaDescriptions } from "@/constants/metaDescriptions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: staticMetaDescriptions.studyAbroadCourses,
};

export default function SelectCourses() {
  return <SelectCoursesClient />;
}
