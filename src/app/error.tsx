"use client";

import { useEffect } from "react";
import Link from "next/link";
import ContainerWrapper from "@/components/ContainerWrapper";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] bg-[#F7FCFD] py-20 text-[#0B162C]">
      <ContainerWrapper className="text-center">
        <h1 className="text-3xl font-black sm:text-4xl">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          This page could not be loaded. Please try again, or go back to the
          homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex rounded-xl bg-[#00999E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#007F83]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex rounded-xl border border-[#00999E] px-6 py-3 text-sm font-bold text-[#00999E] transition hover:bg-[#00999E]/10"
          >
            Go to homepage
          </Link>
        </div>
      </ContainerWrapper>
    </div>
  );
}
