import type { Metadata } from "next";
import type { ReactNode } from "react";
import { testMetaDescriptions, testMetaTitles } from "@/constants/metaDescriptions";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugLower = slug.toLowerCase();
  const slugKey = slugLower as keyof typeof testMetaDescriptions;
  const description = testMetaDescriptions[slugKey];
  const title = testMetaTitles[slugKey];

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
  };
}

export default function TestSlugLayout({ children }: Props) {
  return children;
}
