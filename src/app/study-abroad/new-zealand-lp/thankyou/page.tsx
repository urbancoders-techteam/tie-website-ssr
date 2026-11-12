import ThankYouCard from "@/components/ThankYouCard";
import CampaignLeadFormConversion from "@/components/campaign/mbbs-campaign/CampaignLeadFormConversion";

export default function NewZealandCampaignThankYouPage() {
  return (
    <>
      <CampaignLeadFormConversion />
      <ThankYouCard
        title="Thank You for Registering!"
        messagePrimary="We have received your details for the New Zealand study abroad campaign."
        messageSecondary="Our team will reach out shortly with a shortlist and the next steps."
      />
    </>
  );
}
