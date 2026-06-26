import { ReactNode } from "react";

/** Renders per request so thank-you routes can inject GTM noscript in document head. */
export const dynamic = "force-dynamic";

export default function ThankYouRouteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
