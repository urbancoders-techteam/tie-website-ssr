import ThankYouCard from "@/components/ThankYouCard";

export const dynamic = "force-static";

export default function RussiaCampaignThankYouPage() {
  return (
    <ThankYouCard
      title="Thank You for Registering!"
      messagePrimary="We have received your details for the Russia MBBS campaign."
      messageSecondary="Our team will reach out shortly with the next steps."
    />
  );
}