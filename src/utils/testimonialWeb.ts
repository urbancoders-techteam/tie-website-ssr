/** Normalizes `/testimonial/web` payloads so UI can add fields without breaking when API shape varies. */

export type TestimonialWebRaw = {
  _id: string;
  studentName?: string;
  studentImage?: string;
  course?: string;
  university?: string;
  paragraph?: string;
  rating?: number;
  /** Optional — if backend adds country / placement info */
  country?: string;
  destinationCountry?: string;
  placedCountry?: string;
  location?: string;
  /** Emoji flag string, e.g. "🇳🇱" */
  flag?: string;
  countryCode?: string;
  [key: string]: unknown;
};

export type TestimonialViewModel = {
  id: string;
  studentName: string;
  studentImage: string;
  course: string;
  university: string;
  paragraph: string;
  rating: number;
  /** Shown in top-right badge; omitted if nothing usable */
  countryBadge: { flag: string; label: string } | null;
};

/** ISO 3166-1 alpha-2 → flag emoji (best-effort when API sends code only). */
export function flagEmojiFromCountryCode(code: string | undefined): string {
  if (!code || code.length !== 2) return "";
  const upper = code.toUpperCase();
  if (!/^[A-Z]{2}$/.test(upper)) return "";
  const A = 0x1f1e6;
  try {
    const pts = [...upper].map((c) => A + (c.charCodeAt(0) - 0x41));
    return String.fromCodePoint(...pts);
  } catch {
    return "";
  }
}

function pickCountryLabel(t: TestimonialWebRaw): string {
  const candidates = [
    t.country,
    t.destinationCountry,
    t.placedCountry,
    t.location,
  ];
  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) return c.trim();
  }
  return "";
}

export function normalizeWebTestimonial(t: TestimonialWebRaw): TestimonialViewModel {
  const label = pickCountryLabel(t);
  let flag = typeof t.flag === "string" && t.flag.trim() ? t.flag.trim() : "";
  if (!flag && typeof t.countryCode === "string") {
    flag = flagEmojiFromCountryCode(t.countryCode);
  }
  let countryBadge: TestimonialViewModel["countryBadge"] = null;
  if (label) {
    countryBadge = { flag: flag || "🌐", label };
  } else if (flag) {
    countryBadge = {
      flag,
      label:
        typeof t.countryCode === "string" && t.countryCode.trim()
          ? t.countryCode.trim().toUpperCase()
          : "Placed abroad",
    };
  }

  return {
    id: String(t._id),
    studentName: typeof t.studentName === "string" ? t.studentName : "Student",
    studentImage: typeof t.studentImage === "string" ? t.studentImage : "",
    course: typeof t.course === "string" ? t.course : "",
    university: typeof t.university === "string" ? t.university : "",
    paragraph: typeof t.paragraph === "string" ? t.paragraph : "",
    rating:
      typeof t.rating === "number" && !Number.isNaN(t.rating)
        ? Math.min(5, Math.max(0, Math.round(t.rating)))
        : 5,
    countryBadge,
  };
}

export function initialFromName(name: string): string {
  const t = name.trim();
  if (!t) return "?";
  return t.charAt(0).toUpperCase();
}
