import type { CSSProperties } from "react";
import type { StudyAbroadCampaignData } from "./studyAbroadTypes";

export const STUDY_ABROAD_ACCENT_DEFAULTS = {
  accent: "#C6A35A",
  accentHover: "#D4B56E",
  accentSoft: "#E8D5A3",
  accentMuted: "#A7843E",
  onAccent: "#122033",
  ink: "#122033",
} as const;

export function campaignAccentStyle(theme: StudyAbroadCampaignData["theme"]): CSSProperties {
  return {
    color: theme.text,
    "--sa-accent": theme.accent ?? STUDY_ABROAD_ACCENT_DEFAULTS.accent,
    "--sa-accent-hover": theme.accentHover ?? STUDY_ABROAD_ACCENT_DEFAULTS.accentHover,
    "--sa-accent-soft": theme.accentSoft ?? STUDY_ABROAD_ACCENT_DEFAULTS.accentSoft,
    "--sa-accent-muted": theme.accentMuted ?? STUDY_ABROAD_ACCENT_DEFAULTS.accentMuted,
    "--sa-on-accent": theme.onAccent ?? theme.footer.onAccent ?? STUDY_ABROAD_ACCENT_DEFAULTS.onAccent,
    "--sa-button-border": theme.buttonBorder ?? "transparent",
    "--sa-ink": theme.ink ?? STUDY_ABROAD_ACCENT_DEFAULTS.ink,
  } as CSSProperties;
}
