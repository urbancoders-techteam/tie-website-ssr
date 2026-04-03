import RussiaCampaignContent from "@/components/campaign/russia/RussiaCampaignPage";
import CampaignGoogleAdsScripts from "@/components/campaign/CampaignGoogleAdsScripts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MBBS in Russia for Indian Students | Low Fees, Top Universities & Admission 2026 | Taksheela",
  description:
    "Pursue MBBS in Russia with expert support from Taksheela. Explore recognised universities, low-cost medical education, eligibility, and admission process. Enquire today.",
};

export default function RussiaCampaignPage() {
  return (
    <>
      <CampaignGoogleAdsScripts />
      <RussiaCampaignContent />
    </>
  );
}
