import type { Metadata } from "next";
import IrelandCampaignPage from "@/components/campaign/study-abroad-campaign/IrelandCampaignPage";

export const metadata: Metadata = {
  title: "Study in Ireland | Universities, Fees & Admissions | Taksheela",
  description:
    "Study in Ireland at English-taught universities. Get a free shortlist, fee range, and intake plan for Indian students with Taksheela.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IrelandCampaignRoute() {
  return <IrelandCampaignPage />;
}
