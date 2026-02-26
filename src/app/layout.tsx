/* eslint-disable @next/next/no-page-custom-font */
import "@/app/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import Script from "next/script";
import CanonicalTag from "@/components/CanonicalTag";
import SchemaMarkup from "@/components/SchemaMarkup";

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

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16606653169"
        />
      </head>
      {/* <Headers/> */}
      <body>{children}</body>
      
    </html>
  );
}
