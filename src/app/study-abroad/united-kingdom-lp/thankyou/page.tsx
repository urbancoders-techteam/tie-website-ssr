import ThankYouCard from "@/components/ThankYouCard";
import CampaignLeadFormConversion from "@/components/campaign/mbbs-campaign/CampaignLeadFormConversion";

export default function UnitedKingdomCampaignThankYouPage() {
  return (
    <>
      <CampaignLeadFormConversion />
      <ThankYouCard
        title="Thank You for Registering!"
        messagePrimary="We have received your details for the United Kingdom study abroad campaign."
        messageSecondary="Our team will reach out shortly with a shortlist and the next steps."
      />
    </>
  );
}
