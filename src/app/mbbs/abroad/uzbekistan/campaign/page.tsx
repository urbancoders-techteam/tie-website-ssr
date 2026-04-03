import UzbekistanCampaignContent from "@/components/campaign/uzbekistan/UzbekistanCampaignPage";
import CampaignGoogleAdsScripts from "@/components/campaign/CampaignGoogleAdsScripts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MBBS in Uzbekistan for Indian Students | Low Fees, Top Universities & Admission 2026 | Taksheela",
  description:
    "Pursue MBBS in Uzbekistan with expert support from Taksheela. Explore recognised universities, affordable medical education, eligibility, and admission process. Enquire today.",
};

export default function UzbekistanCampaignPage() {
  return (
    <>
      <CampaignGoogleAdsScripts />
      <UzbekistanCampaignContent />
    </>
  );
}
