import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import ContainerWrapper from "@/components/ContainerWrapper";
import {
  nmcApprovedCollegesContent,
  nmcFeaturedArticle,
  nmcSideArticles,
  type NmcCollegeArticle,
} from "./nmcApprovedCollegesData";

const CARD_BG = "bg-[#172a45]";
const TEAL = "text-[#5eead4]";
const MUTED = "text-[#8892b0]";

function FeaturedArticleCard({ article }: { article: NmcCollegeArticle }) {
  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-2xl ${CARD_BG}`}>
      <Link href={article.href} className="relative block aspect-[16/10] w-full overflow-hidden">
        <Image
          src={article.imageSrc}
          alt={article.imageAlt}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-[#fce7f3] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#9d174d] sm:text-[11px]">
          <span aria-hidden>🎓</span>
          {article.categoryLabel}
        </span>

        <h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl lg:text-[1.65rem] lg:leading-tight">
          <Link href={article.href} className="transition hover:text-[#5eead4]">
            {article.title}
          </Link>
        </h3>

        <p className={`mt-3 flex-1 text-sm leading-relaxed sm:text-[15px] sm:leading-7 ${MUTED}`}>
          {article.description}
        </p>

        {article.author ? (
          <p className={`mt-4 text-sm ${MUTED}`}>
            {article.author} • {article.date} • {article.readTime}
          </p>
        ) : (
          <p className={`mt-4 text-sm ${MUTED}`}>
            {article.date} • {article.readTime}
          </p>
        )}

        <Link
          href={article.href}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-[#00B2B8] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00999E]"
        >
          Read Article
          <MdArrowForward className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

function SideArticleCard({ article }: { article: NmcCollegeArticle }) {
  return (
    <article
      className={`group flex gap-3 rounded-xl p-3 transition hover:bg-[#1e3a5f] sm:gap-4 sm:p-3.5 ${CARD_BG}`}
    >
      <Link
        href={article.href}
        className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20"
      >
        <Image
          src={article.imageSrc}
          alt={article.imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="80px"
        />
      </Link>

      <div className="min-w-0 flex-1">
        <h4 className="line-clamp-2 text-sm font-bold leading-snug text-white sm:text-[15px]">
          <Link href={article.href} className="transition group-hover:text-[#5eead4]">
            {article.title}
          </Link>
        </h4>
        <p className={`mt-1 line-clamp-2 text-xs leading-relaxed sm:text-[13px] ${MUTED}`}>
          {article.description}
        </p>
        <p className={`mt-2 text-xs font-semibold sm:text-[13px] ${TEAL}`}>
          {article.date} • {article.readTime}
        </p>
      </div>
    </article>
  );
}

export default function NMCApprovedColleges() {
  const { eyebrow, heading, viewAllHref, viewAllLabel } = nmcApprovedCollegesContent;

  return (
    <section className="bg-[#0B162C] py-10 sm:py-12 lg:py-14">
      <ContainerWrapper>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className={`text-[11px] font-extrabold uppercase tracking-[0.22em] ${TEAL}`}>
              — {eyebrow} —
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2rem]">
              {heading}
            </h2>
          </div>
          <Link
            href={viewAllHref}
            className={`inline-flex shrink-0 items-center gap-1 text-sm font-bold transition hover:underline ${TEAL}`}
          >
            {viewAllLabel}
            <span aria-hidden>→</span>
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.12fr_1fr] lg:gap-7 xl:gap-8">
          <FeaturedArticleCard article={nmcFeaturedArticle} />
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {nmcSideArticles.map((article) => (
              <SideArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
