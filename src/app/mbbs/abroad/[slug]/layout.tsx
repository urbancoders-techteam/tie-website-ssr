import type { Metadata } from "next";
import type { ReactNode } from "react";
import { mbbsAbroadMetaDescriptions } from "@/constants/metaDescriptions";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const description = mbbsAbroadMetaDescriptions[slug.toLowerCase()];

  return description ? { description } : {};
}

export default function MbbsAbroadSlugLayout({ children }: Props) {
  return children;
}
