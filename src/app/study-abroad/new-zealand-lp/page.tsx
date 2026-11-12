import type { Metadata } from "next";
import NewZealandCampaignPage from "@/components/campaign/study-abroad-campaign/NewZealandCampaignPage";

export const metadata: Metadata = {
  title: "Study in New Zealand | Universities, Fees & Admissions | Taksheela",
  description:
    "Study in New Zealand at public universities. Get a free shortlist, fee range, and intake plan for Indian students with Taksheela.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewZealandCampaignRoute() {
  return <NewZealandCampaignPage />;
}
