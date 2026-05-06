import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  staticMetaDescriptions,
  staticMetaTitles,
} from "@/constants/metaDescriptions";

export const metadata: Metadata = {
  title: staticMetaTitles.cart,
  description: staticMetaDescriptions.cart,
};

export default function CartLayout({ children }: { children: ReactNode }) {
  return children;
}
