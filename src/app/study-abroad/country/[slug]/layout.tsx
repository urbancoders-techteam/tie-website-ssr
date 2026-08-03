import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  studyAbroadCountryMetaDescriptions,
  studyAbroadCountryMetaTitles,
} from "@/constants/metaDescriptions";

const SITE_ORIGIN = "https://taksheela.com";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugKey = slug.toLowerCase();
  const title = studyAbroadCountryMetaTitles[slugKey];
  const description = studyAbroadCountryMetaDescriptions[slugKey];

  if (!title && !description) {
    return {};
  }

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical: `${SITE_ORIGIN}/study-abroad/country/${slugKey}`,
    },
  };
}

export default function StudyAbroadCountrySlugLayout({ children }: Props) {
  return children;
}
