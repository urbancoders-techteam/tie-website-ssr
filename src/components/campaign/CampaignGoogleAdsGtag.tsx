import Script from "next/script";

const GOOGLE_ADS_CONVERSION_ID = "AW-16606653169";

/** Google Ads gtag snippet (AW-16606653169) for all site pages. */
export default function CampaignGoogleAdsGtag() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`}
        strategy="afterInteractive"
      />
      <Script id="campaign-google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_CONVERSION_ID}');
        `}
      </Script>
    </>
  );
}
