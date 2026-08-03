import { baseUrl } from "@/utils/config";

export const indianUniversities = async () => {
  try {
    const response = await fetch(`${baseUrl}indian-universities/web/list`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch immersion country data:", error);
    return null;
  }
};

export const indianUniversitiesDetails = async (id: string) => {
  try {
    const slugOrId = String(id ?? "").trim();
    if (!slugOrId) {
      console.error("indianUniversitiesDetails: missing slug/id");
      return null;
    }

    const response = await fetch(
      `${baseUrl}indian-universities/web/${encodeURIComponent(slugOrId)}`,
    );

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error(
        "indianUniversitiesDetails failed",
        response.status,
        response.statusText,
        body,
      );
      throw new Error(
        `Error fetching data: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch indian university details:", error);
    return null;
  }
};
