import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  mbbsAbroadMetaDescriptions,
  mbbsAbroadMetaTitles,
} from "@/constants/metaDescriptions";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugKey = slug.toLowerCase();
  const description = mbbsAbroadMetaDescriptions[slugKey];
  const title = mbbsAbroadMetaTitles[slugKey];

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
  };
}

export default function MbbsAbroadSlugLayout({ children }: Props) {
  return children;
}
