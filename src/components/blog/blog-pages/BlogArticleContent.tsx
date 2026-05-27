type BlogArticleContentProps = {
  html: string;
};

export default function BlogArticleContent({ html }: BlogArticleContentProps) {
  if (!html?.trim()) {
    return (
      <p className="text-base leading-relaxed text-slate-600">
        No content available for this article.
      </p>
    );
  }

  return (
    <div
      className="blog-article-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
