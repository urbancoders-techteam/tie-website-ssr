"use client";

import { useEffect } from "react";

const SEND_TO = "AW-16606653169/JC6hCMyxwJEcEPHV1e49";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires Google Ads “Submit lead form” conversion once when the thank-you page loads. */
export default function CampaignLeadFormConversion() {
  useEffect(() => {
    const fire = () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", { send_to: SEND_TO });
      }
    };
    fire();
    const t = window.setTimeout(fire, 400);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
