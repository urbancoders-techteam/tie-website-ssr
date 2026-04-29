import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  immersionMetaDescriptions,
  immersionMetaTitles,
} from "@/constants/metaDescriptions";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugKey = slug.toLowerCase();
  const description = immersionMetaDescriptions[slugKey];
  const title = immersionMetaTitles[slugKey];

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
  };
}

export default function ImmersionSlugLayout({ children }: Props) {
  return children;
}
