import Link from "next/link";
import { notFound } from "next/navigation";
import { getUniversityDirectory, universityGroups } from "@/constants/navigation/universityDirectory";

export default async function UniversityPlaceholder({ params }: { params: Promise<{ category: string; country: string; university: string }> }) {
  const { category, country, university } = await params;
  const groupIndex = category === "mbbs" ? 0 : category === "study-abroad" ? 1 : -1;
  if (groupIndex < 0) notFound();
  const countryData = universityGroups[groupIndex].countries.find(item => item.slug.toLowerCase() === country.toLowerCase());
  const item = getUniversityDirectory(groupIndex, country).find(entry => entry.slug === university);
  if (!countryData || !item) notFound();
  return <main className="mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center gap-4 px-6 py-16 text-center"><p className="font-semibold text-[#00999E]">{countryData.name} · {universityGroups[groupIndex].label}</p><h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{item.name}</h1><p className="text-slate-600">University details are coming soon.</p><Link href={countryData.href} className="mt-4 rounded-lg bg-[#00999E] px-5 py-3 font-semibold text-white">Explore {countryData.name}</Link></main>;
}
