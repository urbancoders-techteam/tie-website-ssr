import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  studyAbroadCountryMetaDescriptions,
  studyAbroadCountryMetaTitles,
} from "@/constants/metaDescriptions";
import { getPreferredCountrySlug } from "@/lib/study-abroad/preferredCountrySlug";
import { SITE_ORIGIN } from "@/lib/sitemap/siteOrigin";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugKey = slug.toLowerCase();
  const preferredSlug = getPreferredCountrySlug(slug) ?? slug;
  const title = studyAbroadCountryMetaTitles[slugKey];
  const description = studyAbroadCountryMetaDescriptions[slugKey];

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical: `${SITE_ORIGIN}/study-abroad/country/${preferredSlug}`,
    },
  };
}

export default function StudyAbroadCountrySlugLayout({ children }: Props) {
  return children;
}
