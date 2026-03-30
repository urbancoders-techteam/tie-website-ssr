/* eslint-disable @next/next/no-page-custom-font */
import "@/app/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import CanonicalTag from "@/components/CanonicalTag";
import CampaignGoogleAdsScripts from "@/components/campaign/CampaignGoogleAdsScripts";
import SchemaMarkup from "@/components/SchemaMarkup";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taksheela.com"),
  title: "Study Abroad Counselor & Test Prep Institute - Taksheela",
  description:
    "Taksheela Institute of Education offers expert guidance for studying abroad.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: false,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <CanonicalTag />
        <SchemaMarkup />

        {/* Fonts - Nunito */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />

        <CampaignGoogleAdsScripts />
      </head>
      <body>
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
      
    </html>
  );
}
