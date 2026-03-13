import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Taksheela Institute",
  description: "Thank you for your interest. Our representatives will get back to you soon.",
  robots: "noindex, follow",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
