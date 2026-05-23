import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  staticMetaDescriptions,
  staticMetaTitles,
} from "@/constants/metaDescriptions";

/** Route-level metadata so /mbbs never inherits a country-specific title. */
export const metadata: Metadata = {
  title: staticMetaTitles.mbbsHub,
  description: staticMetaDescriptions.mbbsHub,
};

export default function MbbsLayout({ children }: { children: ReactNode }) {
  return children;
}
