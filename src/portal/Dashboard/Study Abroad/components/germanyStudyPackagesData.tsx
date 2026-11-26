// @ts-nocheck
/** Study in Germany — package comparison (matches brochure table). */

export const GERMANY_PACKAGES = [
  {
    id: "basic",
    name: "BASIC",
    amount: 100000,
    priceLabel: "₹1,00,000",
    priceSuffix: "+ GST",
    planIcon: "mdi:school",
    iconRing: "#93c5fd",
    iconBg: "#3b82f6",
    titleColor: "#1d4ed8",
    priceBadgeBg: "#dbeafe",
    priceBadgeBorder: "#93c5fd",
    highlight: false,
  },
  {
    id: "silver",
    name: "SILVER",
    amount: 200000,
    priceLabel: "₹2,00,000",
    priceSuffix: "+ GST",
    planIcon: "mdi:crown",
    iconRing: "#fcd34d",
    iconBg: "#d97706",
    titleColor: "#b45309",
    priceBadgeBg: "#fef3c7",
    priceBadgeBorder: "#fcd34d",
    highlight: true,
    badge: "BEST VALUE",
  },
  {
    id: "gold",
    name: "GOLD",
    amount: 350000,
    priceLabel: "₹3,50,000",
    priceSuffix: "+ GST",
    planIcon: "mdi:diamond-stone",
    iconRing: "#fdba74",
    iconBg: "#ea580c",
    titleColor: "#c2410c",
    priceBadgeBg: "#ffedd5",
    priceBadgeBorder: "#fdba74",
    highlight: false,
  },
];

const y = "yes";
const n = "no";

export const GERMANY_SERVICE_ROWS = [
  {
    label: "University Shortlisting",
    icon: "mdi:office-building",
    values: { basic: "6 Universities", silver: "9 Universities", gold: "12 Universities" },
  },
  {
    label: "University Application Fee Payment",
    icon: "mdi:cash-multiple",
    values: { basic: n, silver: "2 Universities", gold: "4 Universities" },
  },
  {
    label: "IELTS Preparation Classes",
    icon: "mdi:book-open-page-variant",
    values: { basic: y, silver: y, gold: y },
  },
  {
    label: "IELTS Exam Registration",
    icon: "mdi:clipboard-text-outline",
    values: { basic: n, silver: n, gold: y },
  },
  {
    label: "German A1 Classes",
    icon: "mdi:translate",
    values: { basic: n, silver: y, gold: y },
  },
  {
    label: "German A1 Exam Registration",
    icon: "mdi:file-document-outline",
    values: { basic: n, silver: n, gold: y },
  },
  {
    label: "DMAT Preparation Classes",
    icon: "mdi:school-outline",
    values: { basic: n, silver: y, gold: y },
  },
  {
    label: "DMAT Exam Registration",
    icon: "mdi:file-document-edit-outline",
    values: { basic: n, silver: n, gold: y },
  },
  {
    label: "GRE Preparation Classes",
    icon: "mdi:chart-line",
    values: { basic: n, silver: n, gold: y },
  },
  {
    label: "GRE Exam Registration",
    icon: "mdi:notebook-edit-outline",
    values: { basic: n, silver: n, gold: y },
  },
  {
    label: "Profile Building",
    icon: "mdi:account-box-outline",
    values: { basic: y, silver: y, gold: y },
  },
  {
    label: "Profile Building Activity Fees",
    icon: "mdi:wallet-outline",
    values: { basic: n, silver: n, gold: "2 Activities" },
  },
  {
    label: "APS Guidance",
    icon: "mdi:file-check-outline",
    values: { basic: y, silver: y, gold: y },
  },
  {
    label: "APS Fee Payment",
    icon: "mdi:cash-check",
    values: { basic: n, silver: n, gold: y },
  },
  {
    label: "Mentor Sessions",
    icon: "mdi:account-supervisor-outline",
    values: { basic: "1 Session", silver: "3 Sessions", gold: "As Required" },
  },
  {
    label: "Buddy Assistance",
    icon: "mdi:handshake-outline",
    values: { basic: n, silver: y, gold: y },
  },
  {
    label: "Visa Guidance / Support",
    icon: "mdi:passport",
    values: { basic: "Guidance", silver: "Guidance", gold: "Full Support" },
  },
  {
    label: "Visa Fee Payment",
    icon: "mdi:credit-card-outline",
    values: { basic: n, silver: n, gold: y },
  },
  {
    label: "Pre-Departure Support",
    icon: "mdi:airplane-takeoff",
    values: { basic: y, silver: y, gold: y },
  },
];
