import ThankYouCard from "@/components/ThankYouCard";
import CampaignLeadFormConversion from "@/components/campaign/CampaignLeadFormConversion";

export default function RussiaCampaignThankYouPage() {
  return (
    <>
      <CampaignLeadFormConversion />
      <ThankYouCard
      title="Thank You for Registering!"
      messagePrimary="We have received your details for the Russia MBBS campaign."
      messageSecondary="Our team will reach out shortly with the next steps."
    />
    </>
  );
}