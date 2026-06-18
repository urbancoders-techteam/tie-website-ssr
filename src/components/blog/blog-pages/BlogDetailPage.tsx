import ContainerWrapper from "@/components/ContainerWrapper";
import type { ApiBlog } from "@/lib/blog/types";
import { splitBlogArticleWithFaqs } from "@/lib/blog/parseBlogArticleFaqs";
import { splitBlogArticleWithMeta } from "@/lib/blog/parseBlogArticleMeta";
import Link from "next/link";
import BlogArticleContent from "./BlogArticleContent";
import BlogArticleFaqSection from "./BlogArticleFaqSection";
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
  const { articleHtml: htmlWithoutMeta } = splitBlogArticleWithMeta(blog.description);
  const { articleHtml, faqItems } = splitBlogArticleWithFaqs(htmlWithoutMeta);

  return (
    <article className="min-h-screen overflow-x-clip bg-white text-[#0B162C]">
      <BlogHero blog={blog} />

      <ContainerWrapper className="overflow-x-clip py-10 sm:py-12 lg:py-14">
        <div className="mx-auto w-full max-w-[76rem]">
          <div className="min-w-0 lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-stretch lg:gap-5 xl:grid-cols-[20rem_minmax(0,1fr)] xl:gap-6">
            <BlogDetailSidebar relatedBlogs={relatedBlogs} />

            <div className="min-w-0 w-full">
              <div className="blog-detail-article mx-auto w-full min-w-0 max-w-4xl">
                <BlogArticleContent html={articleHtml} />
                <BlogArticleFaqSection items={faqItems} />
              </div>

              <div className="mx-auto mt-10 max-w-4xl space-y-6 lg:hidden">
                <BlogCounsellingCard />
                <BlogRelatedArticles relatedBlogs={relatedBlogs} />
              </div>

              <div className="mx-auto mt-14 w-full min-w-0 max-w-4xl rounded-2xl border border-[#CBECEF] bg-white p-8 text-center shadow-sm sm:p-10">
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
        </div>
      </ContainerWrapper>

      <BlogYouMayAlsoLike relatedBlogs={relatedBlogs} />
    </article>
  );
}
