import type { Metadata } from "next";
import type { ReactNode } from "react";
import { immersionMetaDescriptions } from "@/constants/metaDescriptions";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const description = immersionMetaDescriptions[slug.toLowerCase()];

  return description ? { description } : {};
}

export default function ImmersionSlugLayout({ children }: Props) {
  return children;
}
