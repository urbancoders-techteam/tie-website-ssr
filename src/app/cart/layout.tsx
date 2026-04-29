import type { Metadata } from "next";
import type { ReactNode } from "react";
import { staticMetaTitles } from "@/constants/metaDescriptions";

export const metadata: Metadata = {
  title: staticMetaTitles.cart,
};

export default function CartLayout({ children }: { children: ReactNode }) {
  return children;
}
