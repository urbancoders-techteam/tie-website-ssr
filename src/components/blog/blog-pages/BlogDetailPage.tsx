import ContainerWrapper from "@/components/ContainerWrapper";
import type { ApiBlog } from "@/lib/blog/types";
import Link from "next/link";
import BlogArticleContent from "./BlogArticleContent";
import BlogCounsellingCard from "./BlogCounsellingCard";
import BlogDetailSidebar from "./BlogDetailSidebar";
import BlogHero from "./BlogHero";
import BlogRelatedArticles from "./BlogRelatedArticles";
import BlogYouMayAlsoLike from "./BlogYouMayAlsoLike";

type BlogDetailPageProps = {
  blog: ApiBlog;
  relatedBlogs?: ApiBlog[];
};

export default function BlogDetailPage({ blog, relatedBlogs = [] }: BlogDetailPageProps) {
  return (
    <article className="min-h-screen bg-white text-[#0B162C]">
      <BlogHero blog={blog} />

      <ContainerWrapper className="py-10 sm:py-12 lg:py-14">
        {/* Grid: sidebar column stretches with article so sticky works for full read */}
        <div className="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-stretch lg:gap-5 xl:grid-cols-[20rem_minmax(0,1fr)] xl:gap-6">
          <BlogDetailSidebar relatedBlogs={relatedBlogs} />

          <div className="min-w-0 lg:max-w-[53rem]">
            <div className="blog-detail-article mx-auto w-full max-w-4xl lg:mx-0 lg:max-w-none">
              <BlogArticleContent html={blog.description} />
            </div>

            <div className="mt-10 space-y-6 lg:hidden">
              <BlogCounsellingCard />
              <BlogRelatedArticles relatedBlogs={relatedBlogs} />
            </div>

            <div className="mx-auto mt-14 w-full max-w-4xl rounded-2xl border border-[#CBECEF] bg-white p-8 text-center shadow-sm sm:p-10 lg:mx-0 lg:max-w-none">
              <h2 className="text-balance text-xl font-extrabold text-[#0B162C] sm:text-2xl">
                Planning your study abroad journey?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Get free expert counselling from Taksheela — trusted by thousands of Indian students
                for admissions, visas, and test prep.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#00999E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#007F83] sm:w-auto"
                >
                  Book Free Counselling
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[#00999E] px-6 py-3 text-sm font-bold text-[#00999E] transition hover:bg-[#00999E]/5 sm:w-auto"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>

      <BlogYouMayAlsoLike relatedBlogs={relatedBlogs} />
    </article>
  );
}
