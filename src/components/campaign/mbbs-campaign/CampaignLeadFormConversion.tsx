"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/** Pushes the lead conversion event for GTM to handle when the thank-you page loads. */
export default function CampaignLeadFormConversion() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_form_conversion",
    });
  }, []);

  return null;
}
