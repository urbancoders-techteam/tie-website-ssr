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

    const response = await fetch(
      `${baseUrl}indian-universities/web/${id}`,

    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch immersion country data:", error);
    return null;
  }
};
