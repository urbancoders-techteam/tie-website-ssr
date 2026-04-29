import type { Metadata } from "next";
import type { ReactNode } from "react";
import { testMetaDescriptions } from "@/constants/metaDescriptions";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const description = testMetaDescriptions[slug.toLowerCase()];

  return description ? { description } : {};
}

export default function TestSlugLayout({ children }: Props) {
  return children;
}
