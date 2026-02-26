/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/WebinarEvent.tsx (Server Component)

import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import { baseUrl } from "@/utils/config";
import WebinarSlider from "../slider/WebinarSlider";
import { Metadata } from "next";
import { formatDate } from "@/utils/methods";



export const metadata: Metadata = {
  title: "Webinars & Events - Taksheela Institute",
  description:
    "Stay updated with upcoming webinars, workshops, and educational events hosted by Taksheela Institute. Engage with experts and explore global academic opportunities.",
};


interface EventData {
  title: string;
  description: string;
  image: string;
  date: string;
}



const fetchEvents = async (): Promise<EventData[]> => {
  try {
    const res = await fetch(`${baseUrl}event/web`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    const json = await res.json();
    return (json?.data || [])?.map((item: any) => ({
      title: item.title,
      description: item.description,
      image: item.image,
      date: formatDate(item.date),
    }));
  } catch (error) {
    console.error("SSR Event fetch failed:", error);
    return [];
  }
};

export default async function WebinarEvent() {
  const eventData = await fetchEvents();

  return (
    <section className="bg-[#effdff] py-12 w-full overflow-hidden">
      <ContainerWrapper>
        <div className="mb-10">
          <HeadingTypography content="Webinar & Events" textAlign="center" />
        </div>

        {eventData.length > 0 ? (
          <WebinarSlider eventData={eventData} />
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600 text-lg">
              No Events are available at the moment..!
            </p>
          </div>
        )}
        <div className="mt-8 flex justify-center">
          <a
            href="tel:+919831241212"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00999E] px-6 py-3 text-white text-base sm:text-lg font-semibold shadow-md transition hover:bg-[#00777E]"
          >
            📞 Need Help Registering for an Event?
          </a>
        </div>
      </ContainerWrapper>
    </section>
  );
}
