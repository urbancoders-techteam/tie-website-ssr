import ContainerWrapper from "@/components/ContainerWrapper";
import type { ApiBlog } from "@/lib/blog/types";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import BlogArticleContent from "./BlogArticleContent";
import BlogCounsellingCard from "./BlogCounsellingCard";
import BlogHero from "./BlogHero";
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
        {/* items-stretch (default) so sidebar column is full row height — sticky works while article scrolls */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
          <div className="min-w-0">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#00999E] transition hover:gap-3"
            >
              <MdArrowBack className="h-5 w-5" aria-hidden />
              Back to all articles
            </Link>

            <div className="mx-auto max-w-4xl lg:mx-0 lg:max-w-none">
              <BlogArticleContent html={blog.description} />
            </div>

            <div className="mt-10 lg:hidden">
              <BlogCounsellingCard />
            </div>

            <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-[#CBECEF] bg-white p-8 text-center shadow-sm sm:p-10 lg:mx-0 lg:max-w-none">
              <h2 className="text-xl font-extrabold text-[#0B162C] sm:text-2xl">
                Planning your study abroad journey?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Get free expert counselling from Taksheela — trusted by thousands of Indian students
                for admissions, visas, and test prep.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex rounded-xl bg-[#00999E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#007F83]"
                >
                  Book Free Counselling
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex rounded-xl border-2 border-[#00999E] px-6 py-3 text-sm font-bold text-[#00999E] transition hover:bg-[#00999E]/5"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block" aria-label="Free MBBS counselling">
            <div className="sticky top-32 z-30">
              <BlogCounsellingCard />
            </div>
          </aside>
        </div>
      </ContainerWrapper>

      <BlogYouMayAlsoLike relatedBlogs={relatedBlogs} />
    </article>
  );
}
