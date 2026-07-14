import ContainerWrapper from "@/components/ContainerWrapper";
import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="min-h-[60vh] bg-[#F7FCFD] py-20 text-[#0B162C]">
      <ContainerWrapper className="text-center">
        <h1 className="text-3xl font-black sm:text-4xl">Article not found</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          This blog post may have been removed or the link is incorrect.
        </p>
        <Link
          href="/blogs"
          className="mt-8 inline-flex rounded-xl bg-[#00999E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#007F83]"
        >
          Back to Blog
        </Link>
      </ContainerWrapper>
    </div>
  );
}
