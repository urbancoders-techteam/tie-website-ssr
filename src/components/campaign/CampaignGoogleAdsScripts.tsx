import Script from "next/script";

/** Google Ads base tag (gtag.js). Same `id`s as root layout so Next.js only injects once when both are present. */
export default function CampaignGoogleAdsScripts() {
  return (
    <>
      <Script
        id="google-tag"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16606653169"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16606653169');
          `}
      </Script>
    </>
  );
}
