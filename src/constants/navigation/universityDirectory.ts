import { universityGroups } from "./university";
import { mapJsonData } from "@/constants/map";
import { getAbroadFullPageCopy } from "@/constants/abroad/abroadFullPageRegistry";

export const universitySlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function getUniversityDirectory(groupIndex: number, countrySlug: string) {
  if (groupIndex === 0) {
    return (getAbroadFullPageCopy(countrySlug.toLowerCase())?.topUniversities.universities ?? []).map(item => ({ name: item.name, slug: item.id }));
  }
  const country = mapJsonData.find(item => item.pathname.toLowerCase().replace(/[^a-z0-9]/g, "") === countrySlug.toLowerCase().replace(/[^a-z0-9]/g, ""));
  return (country?.universties?.content ?? []).map((item: { title: string }) => ({ name: item.title, slug: universitySlug(item.title) }));
}

export { universityGroups };
