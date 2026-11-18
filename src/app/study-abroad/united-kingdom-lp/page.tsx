import type { Metadata } from "next";
import UkCampaignPage from "@/components/campaign/study-abroad-campaign/UkCampaignPage";

export const metadata: Metadata = {
  title: "Study in the United Kingdom | Universities, Fees & Admissions | Taksheela",
  description:
    "Study in the United Kingdom with a one-year master’s and the Graduate Route. Get a free shortlist, fee range, and intake plan for Indian students with Taksheela.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnitedKingdomCampaignRoute() {
  return <UkCampaignPage />;
}
