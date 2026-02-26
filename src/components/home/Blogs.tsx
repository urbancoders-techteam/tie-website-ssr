/* eslint-disable @typescript-eslint/no-explicit-any */
// app/components/Blogs.tsx
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { baseUrl } from "@/utils/config";
import Link from "next/link";
import BlogSlider from "../slider/BlogSlider";
import { Metadata } from "next";
import { formatDate } from "@/utils/methods";

export const metadata: Metadata = {
  title: "Blogs & Newsletters - Taksheela Institute",
  description:
    "Explore insightful blogs and newsletters from Taksheela Institute on study abroad trends, academic news, student journeys, and global education updates.",
};

// Optional: ISR setup
export const revalidate = 1800; // revalidate every 30 min

interface BlogData {
  image: string;
  date?: string;
  title: string;
  description: string;
  slugUrl: string;
  content?: string;
}

async function fetchBlogs(): Promise<BlogData[]> {
  try {
    const res = await fetch(`${baseUrl}blogs/web`, {
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    });

    const json = await res.json();
    return (json?.data || [])?.map((item: any) => ({
      title: item.title,
      description: item.description,
      image: item.image,
      slugUrl: item.slugUrl,
      date: formatDate(item.date),
    }));
  } catch (error) {
    console.error("Blog fetch failed", error);
    return [];
  }
}

export default async function Blogs() {
  const scrollData = await fetchBlogs();


  return (
    <section id="blog-section" className="w-full py-12 bg-[#f9f9f9]">
      <ContainerWrapper>
        <HeadingTypography textAlign="center" content="Blogs & Newsletters" />

        {scrollData.length > 0 ? (
          <div className="mt-10 overflow-hidden">
            <BlogSlider data={scrollData} />

            <div className="flex justify-start mt-6">
              <Link
                href="https://blog.taksheela.com/"
                target="_blank"
                className="flex items-center text-[#00999e] font-semibold hover:underline"
              >
                More <ArrowForwardIosRoundedIcon className="ml-1" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-600 text-lg">
              No Blogs or Newsletters available at the moment..!
            </p>
          </div>
        )}
      </ContainerWrapper>
    </section>
  );
}
