export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-white text-[#0B162C]">
      {/* Hero skeleton */}
      <div className="relative overflow-hidden bg-[#0B162C]">
        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          {/* Tags */}
          <div className="flex gap-2.5">
            <SkeletonPulse className="h-6 w-28 rounded-full" />
            <SkeletonPulse className="h-6 w-32 rounded-full" />
          </div>
          {/* Title */}
          <SkeletonPulse className="mt-7 h-8 w-full rounded-lg" />
          <SkeletonPulse className="mt-3 h-8 w-4/5 rounded-lg" />
          <SkeletonPulse className="mt-3 h-8 w-3/5 rounded-lg" />
          {/* Excerpt */}
          <SkeletonPulse className="mt-6 h-4 w-full rounded" />
          <SkeletonPulse className="mt-2 h-4 w-11/12 rounded" />
          <SkeletonPulse className="mt-2 h-4 w-4/5 rounded" />
          {/* Author row */}
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <SkeletonPulse className="h-11 w-11 rounded-full" />
              <div className="flex flex-col gap-2">
                <SkeletonPulse className="h-4 w-36 rounded" />
                <SkeletonPulse className="h-3 w-28 rounded" />
              </div>
            </div>
            <div className="flex gap-6">
              <SkeletonPulse className="h-4 w-24 rounded" />
              <SkeletonPulse className="h-4 w-20 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <SkeletonPulse className="mb-8 h-5 w-36 rounded" />

        {/* Article body */}
        <div className="mx-auto max-w-4xl space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <SkeletonPulse className="h-7 w-56 rounded" />
              <SkeletonPulse className="h-4 w-full rounded" />
              <SkeletonPulse className="h-4 w-full rounded" />
              <SkeletonPulse className="h-4 w-11/12 rounded" />
              <SkeletonPulse className="h-4 w-3/4 rounded" />
              <SkeletonPulse className="mt-4 h-4 w-full rounded" />
              <SkeletonPulse className="h-4 w-5/6 rounded" />
              <SkeletonPulse className="h-4 w-4/5 rounded" />
            </div>
          ))}
          <SkeletonPulse className="h-48 w-full rounded-xl" />
          {[...Array(2)].map((_, i) => (
            <div key={i} className="space-y-2">
              <SkeletonPulse className="h-4 w-full rounded" />
              <SkeletonPulse className="h-4 w-full rounded" />
              <SkeletonPulse className="h-4 w-3/4 rounded" />
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-[#CBECEF] p-8 sm:p-10">
          <div className="flex flex-col items-center gap-4">
            <SkeletonPulse className="h-7 w-72 rounded" />
            <SkeletonPulse className="h-4 w-96 rounded" />
            <SkeletonPulse className="h-4 w-80 rounded" />
            <div className="mt-2 flex gap-4">
              <SkeletonPulse className="h-11 w-44 rounded-xl" />
              <SkeletonPulse className="h-11 w-36 rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="border-t border-[#CBECEF] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center gap-3">
            <SkeletonPulse className="h-3 w-36 rounded-full" />
            <SkeletonPulse className="h-8 w-80 rounded" />
          </div>
          <div className="flex items-center gap-4">
            <SkeletonPulse className="h-12 w-12 shrink-0 rounded-full" />
            <div className="grid flex-1 gap-5 md:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-[#E8F4F5]"
                >
                  <SkeletonPulse className="h-44 w-full rounded-none" />
                  <div className="space-y-3 p-5">
                    <SkeletonPulse className="h-4 w-20 rounded-full" />
                    <SkeletonPulse className="h-5 w-full rounded" />
                    <SkeletonPulse className="h-5 w-4/5 rounded" />
                    <SkeletonPulse className="h-5 w-3/5 rounded" />
                    <SkeletonPulse className="mt-2 h-3 w-28 rounded" />
                  </div>
                </div>
              ))}
            </div>
            <SkeletonPulse className="h-12 w-12 shrink-0 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkeletonPulse({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-slate-200 ${className}`}
      aria-hidden="true"
    />
  );
}
