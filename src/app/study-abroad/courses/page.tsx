import SelectCoursesClient from "@/components/study-abroad/SelectCoursesClient";
import { staticMetaDescriptions, staticMetaTitles } from "@/constants/metaDescriptions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: staticMetaTitles.studyAbroadCourses,
  description: staticMetaDescriptions.studyAbroadCourses,
};

export default function SelectCourses() {
  return <SelectCoursesClient />;
}
