import KazakhstanCampaignPage from "@/components/campaign/kazakhstan/KazakhstanCampaignPage";
import CampaignGoogleAdsScripts from "@/components/campaign/CampaignGoogleAdsScripts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MBBS in Kazakhstan for Indian Students | Fees, Universities & Admission 2026 | Taksheela",
  description:
    "Study MBBS in Kazakhstan with Taksheela. English-medium programs, top medical universities, eligibility, fees, and admission support for Indian students. Enquire today.",
};

export default function KazakhstanCampaignRoute() {
  return (
    <>
      <CampaignGoogleAdsScripts />
      <KazakhstanCampaignPage />
    </>
  );
}
