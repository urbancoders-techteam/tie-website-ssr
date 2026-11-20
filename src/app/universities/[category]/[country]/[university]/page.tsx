import { notFound } from "next/navigation";
import { getUniversityDirectory, universityGroups } from "@/constants/navigation/universityDirectory";
import UniversityDetailPage from "@/components/university/UniversityDetailPage";

export default async function UniversityPlaceholder({ params }: { params: Promise<{ category: string; country: string; university: string }> }) {
  const { category, country, university } = await params;
  const groupIndex = category === "mbbs" ? 0 : category === "study-abroad" ? 1 : -1;
  if (groupIndex < 0) notFound();
  const countryData = universityGroups[groupIndex].countries.find(item => item.slug.toLowerCase() === country.toLowerCase());
  const item = getUniversityDirectory(groupIndex, country).find(entry => entry.slug === university);
  if (!countryData || !item) notFound();
  return <UniversityDetailPage university={{ name: item.name, country: countryData.name, countryHref: countryData.href, category: universityGroups[groupIndex].label, image: item.image || "/images/universityViewBanner.png" }} />;
}
