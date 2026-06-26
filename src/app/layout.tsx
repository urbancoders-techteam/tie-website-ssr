/* eslint-disable @next/next/no-page-custom-font */
import "@/app/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "leaflet/dist/leaflet.css";
import CanonicalTag from "@/components/CanonicalTag";
import EducationalOrganizationSchema from "@/components/EducationalOrganizationSchema";
import GoogleTagManagerNoScript from "@/components/GoogleTagManagerNoScript";
import SchemaMarkup from "@/components/SchemaMarkup";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import CampaignGoogleAdsGtag from "@/components/campaign/CampaignGoogleAdsGtag";
import { isThankYouRoute } from "@/lib/thankYouRoutes";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taksheela.com"),
  title: "Study Abroad Counselor & Test Prep Institute - Taksheela",
  description:
    "Study in Dubai with Taksheela for expert admission guidance, visa support, top university options, scholarships, and complete study abroad assistance.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: false,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const isThankYouPage = isThankYouRoute(pathname);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NPRSLZJR');`}
        </Script>
        {/* End Google Tag Manager */}

        {isThankYouPage ? (
          <>
            {/* Google Tag Manager (noscript) */}
            <GoogleTagManagerNoScript />
            {/* End Google Tag Manager (noscript) */}
          </>
        ) : null}

        {/* Google tag (gtag.js) - Google Ads */}
        <CampaignGoogleAdsGtag />

        <CanonicalTag />
        <SchemaMarkup />
        <EducationalOrganizationSchema />

        {/* Fonts - Nunito */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />

        {/* This Script is the exclusive property of Website Speedy, Copyright © 2026. All rights reserved. */}
        <Script
          id="website-speedy-1"
          type="text/javascript"
          src="https://websitespeedycdn7.b-cdn.net/speedyscripts/ecmrx_13245/ecmrx_13245_1.js"
          strategy="beforeInteractive"
        />
        <Script
          id="website-speedy-2"
          type="text/javascript"
          src="https://websitespeedycdn7.b-cdn.net/speedyscripts/ecmrx_13245/ecmrx_13245_2.js"
          strategy="beforeInteractive"
        />
        <Script
          id="website-speedy-3"
          type="text/javascript"
          src="https://websitespeedycdn7.b-cdn.net/speedyscripts/ecmrx_13245/ecmrx_13245_3.js"
          strategy="beforeInteractive"
        />
        {/* This Script is the exclusive property of Website Speedy, Copyright © 2026. All rights reserved. */}

        <Script id="microsoft-clarity" type="text/javascript" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wip8kyyjaj");
          `}
        </Script>
      </head>
      <body>
        {!isThankYouPage ? (
          <>
            {/* Google Tag Manager (noscript) */}
            <GoogleTagManagerNoScript />
            {/* End Google Tag Manager (noscript) */}
          </>
        ) : null}

        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}
