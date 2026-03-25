import ThankYouCard from "@/components/ThankYouCard";

export const dynamic = "force-static";

export default function KyrgyzstanCampaignThankYouPage() {
  return (
    <ThankYouCard
      title="Thank You for Registering!"
      messagePrimary="We have received your details for the Kyrgyzstan MBBS campaign."
      messageSecondary="Our team will reach out shortly with the next steps."
    />
  );
}
