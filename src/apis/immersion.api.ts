import { baseUrl } from "@/utils/config";

export const immersionCountry = async (slug: string) => {
  try {

    
    const response = await fetch(
      `${baseUrl}immersion-countries/web/list-by-zone?immersionZone=${slug}`,
      
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch immersion country data:", error);
    return null;
  }
};

export const immersionCountryDetails = async (immersionZone: string, name: string) => {
  try {
    
    const response = await fetch(
      `${baseUrl}immersion-countries/web/details-by-country?immersionZone=${immersionZone}&name=${name}`,
      
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

