import ThankYouCard from "@/components/ThankYouCard";
import CampaignLeadFormConversion from "@/components/campaign/CampaignLeadFormConversion";

export const dynamic = "force-static";

export default function KazakhstanCampaignThankYouPage() {
  return (
    <>
      <CampaignLeadFormConversion />
      <ThankYouCard
      title="Thank You for Registering!"
      messagePrimary="We have received your details for the Kazakhstan MBBS campaign."
      messageSecondary="Our team will reach out shortly with the next steps."
    />
    </>
  );
}
