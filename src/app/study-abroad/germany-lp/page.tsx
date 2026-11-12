import type { Metadata } from "next";
import GermanyCampaignPage from "@/components/campaign/study-abroad-campaign/GermanyCampaignPage";

export const metadata: Metadata = {
  title: "Study in Germany | Universities, Fees & Admissions | Taksheela",
  description:
    "Study in Germany at globally ranked universities. Get a free shortlist, fee range, and intake plan for Indian students with Taksheela.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GermanyCampaignRoute() {
  return <GermanyCampaignPage />;
}
