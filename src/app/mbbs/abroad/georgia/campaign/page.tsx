import GeorgiaCampaignPage from "@/components/campaign/georgia/GeorgiaCampaignPage";
import CampaignGoogleAdsScripts from "@/components/campaign/CampaignGoogleAdsScripts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "MBBS in Georgia for Indian Students | Fees, Universities & Admission 2026 | Taksheela",
  description:
    "Study MBBS in Georgia with Taksheela. Get guidance on top medical universities, affordable fees, eligibility, and admission process for Indian students. Apply now.",
};

export default function GeorgiaCampaignRoute() {
  return (
    <>
      <CampaignGoogleAdsScripts />
      <GeorgiaCampaignPage />
    </>
  );
}
