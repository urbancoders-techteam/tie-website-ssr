import type { Metadata } from "next";
import DubaiCampaignPage from "@/components/campaign/study-abroad-campaign/dubai/DubaiCampaignPage";

export const metadata: Metadata = {
  title: "Study in Dubai | Universities, Fees & Admissions | Taksheela",
  description:
    "Study in Dubai at globally ranked university campuses. Get a free shortlist, fee range, and intake plan for Indian students with Taksheela.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DubaiCampaignRoute() {
  return <DubaiCampaignPage />;
}
