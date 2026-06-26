import { Metadata } from "next";
import ThankYouRouteLayout from "@/components/ThankYouRouteLayout";

export const metadata: Metadata = {
  title: "Thank You | Taksheela Institute",
  description: "Thank you for your interest. Our representatives will get back to you soon.",
  robots: "noindex, follow",
};

export const dynamic = "force-dynamic";

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThankYouRouteLayout>{children}</ThankYouRouteLayout>;
}
