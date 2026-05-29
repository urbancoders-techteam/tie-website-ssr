import ContainerWrapper from "@/components/ContainerWrapper";
import type { ApiBlog } from "@/lib/blog/types";
import Link from "next/link";
// import { MdArrowBack } from "react-icons/md";
import BlogArticleContent from "./BlogArticleContent";
import BlogCounsellingCard from "./BlogCounsellingCard";
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
        <div className="lg:flex lg:items-stretch lg:gap-8 xl:gap-10">
          {/* Left sidebar — stays pinned on screen while article scrolls */}
          <aside
            className="hidden lg:block lg:w-[18rem] lg:shrink-0 xl:w-[20rem]"
            aria-label="Blog sidebar"
          >
            <div className="sticky top-32 z-30 space-y-6 lg:top-36">
              <BlogCounsellingCard />
              <BlogRelatedArticles relatedBlogs={relatedBlogs} />
            </div>
          </aside>

          <div className="min-w-0 flex-1 lg:mx-auto lg:max-w-[53rem]">

            <div className="mx-auto w-full max-w-4xl lg:mx-0 lg:max-w-none">
              <BlogArticleContent html={blog.description} />
            </div>

            <div className="mt-10 space-y-6 lg:hidden">
              <BlogCounsellingCard />
              <BlogRelatedArticles relatedBlogs={relatedBlogs} />
            </div>

            <div className="mx-auto mt-14 w-full max-w-4xl rounded-2xl border border-[#CBECEF] bg-white p-8 text-center shadow-sm sm:p-10 lg:mx-0 lg:max-w-none">
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
        </div>
      </ContainerWrapper>

      <BlogYouMayAlsoLike relatedBlogs={relatedBlogs} />
    </article>
  );
}
