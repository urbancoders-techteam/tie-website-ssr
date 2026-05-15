export type BudgetHighlightCard = {
  id: string;
  kind: "code" | "icon";
  code?: string;
  title: string;
  description: string;
};

export type BudgetCostRow = {
  code: string;
  country: string;
  tuition: string;
  living: string;
};

export const budgetSmartOptionContent = {
  eyebrow: "Budget-smart options",
  heading: "Affordable Countries to Study Abroad for Indian Students",
  intro:
    "A global degree does not always mean an impossible price tag. With the right country mix, public universities, scholarships and part-time work rules, many Indian families find options that fit their budget — we help you compare them clearly.",
  highlights: [
    {
      id: "de",
      kind: "code",
      code: "DE",
      title: "Germany — Near-Zero Tuition",
      description:
        "Many public universities charge little to no tuition for international students. Strong STEM & management programmes with clear post-study work routes.",
    },
    {
      id: "hu",
      kind: "code",
      code: "HU",
      title: "Hungary — Affordable Health & STEM",
      description:
        "Competitive fees for medicine, dentistry and engineering versus Western Europe. English-taught intakes with a lower cost of living in student cities.",
    },
    {
      id: "fr",
      kind: "code",
      code: "FR",
      title: "France — Moderate Fees, Strong ROI",
      description:
        "Public institutions with regulated fees plus global recognition in business, luxury and hospitality. EU mobility after graduation is a bonus.",
    },
    {
      id: "value",
      kind: "icon",
      title: "Scholarships & Part-Time Work",
      description:
        "Across Ireland, the UK, Canada and Australia we map bursaries, GA/TA options and legal work-hour limits so your cash-flow plan is realistic from day one.",
    },
  ] satisfies BudgetHighlightCard[],
  tableTitle: "Estimated Annual Cost Comparison",
  tableRows: [
    { code: "DE", country: "Germany", tuition: "€0 – €3,000", living: "€800 – €1,200" },
    { code: "HU", country: "Hungary", tuition: "€4,000 – €16,000", living: "€450 – €750" },
    { code: "FR", country: "France", tuition: "€2,770 – €3,770", living: "€700 – €1,100" },
    { code: "BE", country: "Belgium", tuition: "€900 – €4,500", living: "€750 – €1,050" },
    { code: "IE", country: "Ireland", tuition: "€10,000 – €25,000", living: "€900 – €1,400" },
    { code: "GB", country: "United Kingdom", tuition: "£12,000 – £26,000", living: "£900 – £1,400" },
    { code: "AU", country: "Australia", tuition: "A$22,000 – A$45,000", living: "A$1,400 – A$2,200" },
    { code: "CA", country: "Canada", tuition: "C$18,000 – C$38,000", living: "C$1,000 – C$1,800" },
  ] satisfies BudgetCostRow[],
  tableFootnote:
    "*Indicative estimates. Actual costs vary by city, institution & programme.",
  ctaText: "Plan Your Budget with a Counsellor",
};
