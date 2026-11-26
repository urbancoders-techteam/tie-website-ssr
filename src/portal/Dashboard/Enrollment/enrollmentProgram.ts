export const ALL_INTAKES_VALUE = "All";

export const QUALIFICATION_OPTIONS = [
  { value: "Class 12", label: "Class 12" },
  { value: "Diploma", label: "Diploma" },
  { value: "Bachelor's", label: "Bachelor's" },
  { value: "Master's", label: "Master's" },
  { value: "Other", label: "Other" },
];

export const PREFERRED_DEGREE_OPTIONS = [
  { value: "Undergraduate", label: "Bachelor's" },
  { value: "Postgraduate", label: "Master's" },
  { value: "Second Master's", label: "Second Master's" },
  { value: "Second Postgraduation", label: "Second Postgraduation" },
  { value: "PHD", label: "PHD" },
  { value: "Certificate Program", label: "Certificate Program" },
];

export const INTAKE_MONTH_OPTIONS = [
  { value: ALL_INTAKES_VALUE, label: "All intakes" },
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

export const APPLICATION_FEE_OPTIONS = [
  { value: "waiver", label: "Looking for an application fee waiver" },
  { value: "pay", label: "Willing to pay the application fee" },
];

export const SCHOLARSHIP_OPTIONS = [
  { value: "seeking", label: "Looking for a scholarship" },
  { value: "optional", label: "Willing to proceed without a scholarship" },
];

export const EXAM_OPTIONS = [
  { value: "IELTS", label: "IELTS Academic" },
  { value: "PTE", label: "PTE Academic" },
  { value: "TOEFL", label: "TOEFL iBT" },
  { value: "Duolingo", label: "Duolingo" },
  { value: "GRE", label: "GRE" },
  { value: "GMAT", label: "GMAT" },
  { value: "SAT", label: "SAT" },
  { value: "Need Waiver", label: "Need Waiver" },
];

export const NEED_WAIVER_EXAM = "Need Waiver";

export const STUDY_GAP_VALUES = ["0-2", "0-3", "0-4", "0-5", "0-6", "0-7", "0-8", "10"];

export const STUDY_GAP_OPTIONS = [
  { value: "", label: "No study gap" },
  ...STUDY_GAP_VALUES.map((value) => ({ value, label: value })),
];

export const EMPTY_ACADEMIC_PROFILE = {
  qualification: "",
  institutionName: "",
  courseStream: "",
  passingYear: "",
  percentageCgpa: "",
};

export const EMPTY_TEST_SCORE = { exam: "", score: "", noBandLessThan: "" };

const EXAM_RULES = {
  IELTS: { label: "IELTS Academic", maxScore: 9, maxBand: 9 },
  PTE: { label: "PTE Academic", maxScore: 90, maxBand: 90 },
  TOEFL: { label: "TOEFL iBT", maxScore: 120, maxBand: 30 },
  Duolingo: { label: "Duolingo", maxScore: 160, maxBand: null },
  GRE: { label: "GRE", maxScore: null, maxBand: null },
  GMAT: { label: "GMAT", maxScore: null, maxBand: null },
  SAT: { label: "SAT", maxScore: null, maxBand: null },
};

export const sanitizeDigits = (value, max = 10) => String(value || "").replace(/\D/g, "").slice(0, max);

export const sanitizeNumericInput = (value) => {
  const cleaned = String(value || "").replace(/[^\d.]/g, "");
  const decimalIndex = cleaned.indexOf(".");
  if (decimalIndex === -1) return cleaned;
  return `${cleaned.slice(0, decimalIndex + 1)}${cleaned.slice(decimalIndex + 1).replace(/\./g, "")}`;
};

export const sanitizeYearInput = (value) => String(value || "").replace(/\D/g, "").slice(0, 4);

export const isTenDigitMobile = (value) => /^\d{10}$/.test(value);

export const isNationalMobile = (dialCode, value) => {
  const digits = String(value || "");
  if (String(dialCode || "") === "+91") return isTenDigitMobile(digits);
  return /^\d{6,15}$/.test(digits);
};

export const isLikelyEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

export const isStudyGapSelected = (value) => STUDY_GAP_VALUES.includes(String(value || "").trim());

export function applyIntakeSelection(current, next) {
  const added = next.find((item) => !current.includes(item));
  if (added === ALL_INTAKES_VALUE) return [ALL_INTAKES_VALUE];
  return next.filter((item) => item !== ALL_INTAKES_VALUE);
}

export function intakeYearOptions(count = 8) {
  const year = new Date().getFullYear();
  return Array.from({ length: count }, (_, index) => String(year + index));
}

export function examUsesBand(exam) {
  if (exam === "GMAT" || exam === "SAT") return true;
  return EXAM_RULES[exam]?.maxBand != null;
}

export function examDisplayName(exam) {
  return EXAM_RULES[exam]?.label || exam;
}

export function scorePlaceholder(exam) {
  const rule = EXAM_RULES[exam];
  if (!rule || rule.maxScore == null) return "Score";
  return `Max ${exam === "IELTS" ? rule.maxScore.toFixed(1) : rule.maxScore}`;
}

export function bandPlaceholder(exam) {
  if (exam === "TOEFL") return "Max 30";
  const rule = EXAM_RULES[exam];
  if (!rule || rule.maxBand == null) return "e.g. 6.0";
  return `Max ${exam === "IELTS" ? rule.maxBand.toFixed(1) : rule.maxBand}`;
}

function isCompleteNumber(raw) {
  const text = String(raw || "").trim();
  if (!text || text.endsWith(".")) return false;
  return Number.isFinite(Number(text));
}

export function isAcademicDraftStarted(row) {
  return [
    row?.qualification,
    row?.institutionName,
    row?.courseStream,
    row?.passingYear,
    row?.percentageCgpa,
  ].some((value) => String(value || "").trim());
}

export function normalizeAcademicRow(row) {
  return {
    qualification: String(row?.qualification || "").trim(),
    institutionName: String(row?.institutionName || "").trim(),
    courseStream: String(row?.courseStream || "").trim(),
    passingYear: String(row?.passingYear || "").trim(),
    percentageCgpa: String(row?.percentageCgpa || "").trim(),
  };
}

export function academicRowError(row) {
  const item = normalizeAcademicRow(row);
  if (!item.qualification) return "Please select a qualification.";
  if (item.passingYear) {
    if (!/^\d{4}$/.test(item.passingYear)) {
      return "Passing year must be a 4-digit year, for example 2024.";
    }
    const year = Number(item.passingYear);
    const maxYear = new Date().getFullYear();
    if (year < 1950 || year > maxYear) {
      return `Passing year must be between 1950 and ${maxYear}.`;
    }
  }
  if (!isCompleteNumber(item.percentageCgpa)) return "Please enter percentage or CGPA.";
  const score = Number(item.percentageCgpa);
  if (score <= 0 || score > 100) {
    return "Percentage or CGPA must be greater than 0 and at most 100.";
  }
  return "";
}

export function isValidDateOfBirth(value) {
  const text = String(value || "").trim();
  if (!text) return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return false;
  const [year, month, day] = text.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date > today || year < 1940) return false;
  return true;
}

export function scoreLimitError(exam, kind, raw) {
  const text = String(raw || "").trim();
  const rule = EXAM_RULES[exam];
  if (!isCompleteNumber(text) || !rule) return "";
  const max = kind === "score" ? rule.maxScore : rule.maxBand;
  if (max == null) return "";
  const value = Number(text);
  const label = kind === "score" ? "score" : "minimum band";
  const maxLabel = exam === "IELTS" ? max.toFixed(1) : String(max);
  if (value > max) return `${rule.label} ${label} cannot be higher than ${maxLabel}.`;
  if (exam === "IELTS" && Math.abs(value * 2 - Math.round(value * 2)) > 1e-6) {
    return "IELTS Academic uses 0.5 steps, up to 9.0.";
  }
  return "";
}

export function validateTestScoreEntry(entry) {
  const exam = entry.exam.trim();
  if (!exam || /need\s*waiver/i.test(exam)) return "";
  const rule = EXAM_RULES[exam];
  const scoreText = entry.score.trim();
  if (!isCompleteNumber(scoreText)) return `Enter the ${rule?.label || exam} overall score.`;
  const score = Number(scoreText);
  if (score < 0) return `Enter a valid ${rule?.label || exam} score.`;
  const overMax = scoreLimitError(exam, "score", scoreText);
  if (overMax) return overMax;
  if (!rule || rule.maxBand == null) return "";
  const bandText = entry.noBandLessThan.trim();
  if (!isCompleteNumber(bandText)) {
    return `Enter the minimum band for ${rule.label}. Both the overall score and the minimum band are required.`;
  }
  const band = Number(bandText);
  if (band < 0) return `Enter a valid ${rule.label} minimum band.`;
  const bandOverMax = scoreLimitError(exam, "band", bandText);
  if (bandOverMax) return bandOverMax;
  if (band > score) return "Minimum band cannot be higher than the overall score.";
  return "";
}

export function validateTestScores(entries) {
  for (const entry of entries) {
    const message = validateTestScoreEntry(entry);
    if (message) return message;
  }
  return "";
}

function qualificationKind(value) {
  const text = String(value || "").toLowerCase();
  if (/class\s*12|grade\s*12|\b12th\b/.test(text)) return "class12";
  if (text.includes("bachelor")) return "bachelors";
  if (text.includes("master")) return "masters";
  return "";
}

function degreeKind(value) {
  const text = String(value || "").toLowerCase().trim();
  if (!text) return "";
  if (text.includes("second") && text.includes("postgrad")) return "second-postgrad";
  if (text.includes("second") && text.includes("master")) return "second-masters";
  if (text.includes("bachelor") || text.includes("undergrad")) return "bachelors";
  if (text.includes("master") || text.includes("postgrad") || text === "graduate" || text === "pg") {
    return "masters";
  }
  return "";
}

export function academicRequirementMessage(degrees, profiles) {
  const kinds = new Set(degrees.map(degreeKind).filter(Boolean));
  const have = new Set(profiles.map((item) => qualificationKind(item.qualification || "")).filter(Boolean));
  const missing = [];
  if (kinds.has("bachelors") && !have.has("class12")) {
    missing.push("Class 12 academic details are required when applying for a Bachelor's program.");
  }
  if (kinds.has("masters") && !have.has("bachelors")) {
    missing.push("Bachelor's academic details are required when applying for a Master's program.");
  }
  if (kinds.has("second-masters") && !have.has("masters")) {
    missing.push("Master's academic details are required when applying for a second Master's program.");
  }
  if (kinds.has("second-postgrad") && !have.has("masters")) {
    missing.push("Master's academic details are required when applying for a second postgraduation.");
  }
  return missing.join(" ");
}

export function academicRequirementHint(degrees) {
  const kinds = new Set(degrees.map(degreeKind).filter(Boolean));
  const parts = [];
  if (kinds.has("bachelors")) parts.push("Add Class 12 details for a Bachelor's application");
  if (kinds.has("masters")) parts.push("Add Bachelor's details for a Master's application");
  if (kinds.has("second-masters")) parts.push("Add the first Master's details for a second Master's application");
  if (kinds.has("second-postgrad")) parts.push("Add the first Master's details for a second postgraduation");
  return parts.join(". ");
}

export function splitStudentName(fullName) {
  const parts = String(fullName || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: parts[0] };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

const ALLOWED_FILE = /\.(pdf|doc|docx|jpg|jpeg|png|webp|gif)$/i;

export function isAllowedDocument(file) {
  return file.type.startsWith("image/") || file.type === "application/pdf" || ALLOWED_FILE.test(file.name);
}

export function fileMeta(files) {
  return files.map((file) => ({ name: file.name, size: file.size, type: file.type }));
}

export function formatMoney(amount) {
  return Number(amount).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function convertBetweenCurrencies(amount, fromCode, toCode, inrRates) {
  const from = String(fromCode || "").trim().toUpperCase();
  const to = String(toCode || "").trim().toUpperCase();
  if (!Number.isFinite(amount) || amount < 0 || !from || !to) return null;
  if (from === to) return Number(amount.toFixed(2));
  const fromRate = from === "INR" ? 1 : inrRates?.[from] ?? null;
  const toRate = to === "INR" ? 1 : inrRates?.[to] ?? null;
  if (fromRate == null || toRate == null || fromRate <= 0 || toRate <= 0) return null;
  return Number(((amount * fromRate) / toRate).toFixed(2));
}

const OPEN_COUNTRY_URL = "https://countriesnow.space/api/v0.1/countries/currency";
const OPEN_DIAL_CODE_URL = "https://countriesnow.space/api/v0.1/countries/codes";
const COUNTRY_CACHE_KEY = "tie_enrollment_open_countries_v2";

function currencySymbol(code) {
  if (!code) return "";
  try {
    const part = new Intl.NumberFormat("en", {
      style: "currency",
      currency: code,
      currencyDisplay: "narrowSymbol",
    })
      .formatToParts(1)
      .find((item) => item.type === "currency");
    return part?.value || code;
  } catch {
    return code;
  }
}

export async function fetchOpenCountries() {
  try {
    const cached = sessionStorage.getItem(COUNTRY_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed?.countries) && parsed.countries.length && Date.now() - parsed.ts < 24 * 60 * 60 * 1000) {
        return parsed.countries;
      }
    }
  } catch {
    // A broken cache should not block the country list.
  }

  const [response, dialResponse] = await Promise.all([fetch(OPEN_COUNTRY_URL), fetch(OPEN_DIAL_CODE_URL)]);
  const data = await response.json();
  const dialData = await dialResponse.json();
  if (!response.ok || data?.error || !Array.isArray(data?.data)) {
    throw new Error("Unable to load countries");
  }

  const dialByIso = new Map();
  if (dialResponse.ok && !dialData?.error && Array.isArray(dialData?.data)) {
    dialData.data.forEach((item) => {
      const iso = String(item?.code || "").trim().toUpperCase();
      const dialCode = String(item?.dial_code || "").trim();
      if (iso && dialCode) dialByIso.set(iso, dialCode);
    });
  }

  const countries = data.data
    .map((item) => {
      const code = String(item?.currency || "").trim().toUpperCase();
      const iso = String(item?.iso2 || "").trim().toUpperCase();
      return {
        _id: iso || String(item?.name || "").trim(),
        name: String(item?.name || "").trim(),
        currencyCode: code,
        currencySymbol: currencySymbol(code),
        dialCode: dialByIso.get(iso) || "",
      };
    })
    .filter((item) => item._id && item.name)
    .sort((left, right) => left.name.localeCompare(right.name));

  try {
    sessionStorage.setItem(COUNTRY_CACHE_KEY, JSON.stringify({ ts: Date.now(), countries }));
  } catch {
    // Ignore storage quota errors.
  }
  return countries;
}

const RATE_CACHE_KEY = "tie_enrollment_inr_rates_v1";

export async function getInrRatesMap() {
  try {
    const cached = sessionStorage.getItem(RATE_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed?.rates && parsed?.ts && Date.now() - parsed.ts < 12 * 60 * 60 * 1000) {
        return parsed.rates;
      }
    }
  } catch {
    // A broken cache should not block the budget field.
  }

  const response = await fetch("https://open.er-api.com/v6/latest/INR");
  const data = await response.json();
  if (data?.result !== "success" || !data?.rates) {
    throw new Error("Unable to load currency rates");
  }

  const inverted = {};
  Object.entries(data.rates).forEach(([code, perInr]) => {
    inverted[code] = code === "INR" ? 1 : Number((1 / Number(perInr)).toFixed(4));
  });

  try {
    sessionStorage.setItem(RATE_CACHE_KEY, JSON.stringify({ ts: Date.now(), rates: inverted }));
  } catch {
    // Ignore storage quota errors.
  }
  return inverted;
}

export function buildEnrollmentPayload(profile) {
  const { firstName, lastName } = splitStudentName(profile.studentName);
  const mobile = Number(String(profile.mobileNumber || "").replace(/\D/g, ""));
  const working = profile.currentlyWorking === true;
  const dob = profile.dateOfBirth && isValidDateOfBirth(profile.dateOfBirth) ? profile.dateOfBirth : "";
  const academicProfiles = (profile.academicProfiles || []).map(normalizeAcademicRow).filter((item) => item.qualification);
  const safeProfile = {
    ...profile,
    studentName: String(profile.studentName || "").trim(),
    mobileNumber: String(profile.mobileNumber || "").replace(/\D/g, ""),
    dialCode: String(profile.dialCode || "").trim(),
    emailId: String(profile.emailId || "").trim(),
    cityState: String(profile.cityState || "").trim(),
    dateOfBirth: dob,
    academicProfiles,
    companyName: working ? String(profile.companyName || "").trim() : "",
    totalExperience: working ? String(profile.totalExperience || "").trim() : "",
  };

  return {
    information: {
      firstName,
      lastName,
      ...(dob ? { dob } : {}),
    },
    academicBackground: academicProfiles.map((item) => ({
      academic: item.qualification,
      marks: item.percentageCgpa,
      yearOfPassing: item.passingYear,
      degree: item.courseStream,
      college: item.institutionName,
      university: item.institutionName,
    })),
    workExperience: working
      ? [
          {
            companyName: safeProfile.companyName,
            designation: "",
            duration: safeProfile.totalExperience,
          },
        ]
      : [],
    studentDetail: {
      studentEmail: safeProfile.emailId,
      ...(Number.isSafeInteger(mobile) && mobile > 0 ? { mobileNumber: mobile } : {}),
    },
    permanentAddress: {
      address: safeProfile.cityState,
      city: safeProfile.cityState,
    },
    mailingAddress: {
      address: safeProfile.cityState,
      city: safeProfile.cityState,
    },
    admissionProfile: JSON.parse(JSON.stringify(safeProfile)),
  };
}
