import ThankYouCard from "@/components/ThankYouCard";
import CampaignLeadFormConversion from "@/components/campaign/CampaignLeadFormConversion";

export default function KyrgyzstanCampaignThankYouPage() {
  return (
    <>
      <CampaignLeadFormConversion />
      <ThankYouCard
      title="Thank You for Registering!"
      messagePrimary="We have received your details for the Kyrgyzstan MBBS campaign."
      messageSecondary="Our team will reach out shortly with the next steps."
    />
    </>
  );
}
