"use client";

import RegistrationModal from "@/components/RegistrationModal";
import { useCallback, useEffect, useState } from "react";

const INTERVAL_MS = 30000;
const STORAGE_KEY = "tie-mbbs-page-registration-submitted";

function hasStoredSubmission(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function persistSubmission() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private mode / quota */
  }
}

/**
 * Opens the registration modal every 45s while on /mbbs (closes still get another prompt).
 * After a successful form submit, popups stop for this browser (localStorage).
 */
export default function MbbsRegistrationIntervalModal() {
  const [open, setOpen] = useState(false);
  /** `null` until client reads localStorage — avoids starting the interval before we know prior submission */
  const [submitted, setSubmitted] = useState<boolean | null>(null);

  useEffect(() => {
    setSubmitted(hasStoredSubmission());
  }, []);

  const handleSubmitSuccess = useCallback(() => {
    persistSubmission();
    setSubmitted(true);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (submitted !== false) return;

    const tick = () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
      setOpen(true);
    };

    const id = window.setInterval(tick, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [submitted]);

  if (submitted !== false) return null;

  return (
    <RegistrationModal
      open={open}
      onClose={() => setOpen(false)}
      onSubmitSuccess={handleSubmitSuccess}
    />
  );
}
