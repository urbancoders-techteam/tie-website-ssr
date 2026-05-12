import ContainerWrapper from "@/components/ContainerWrapper";
import { MdSearch } from "react-icons/md";

export default function BlogHeroSearch({
  query,
  onChangeQuery,
}: {
  query: string;
  onChangeQuery: (next: string) => void;
}) {
  return (
    <section
      className="relative overflow-hidden py-16 text-white sm:py-20 lg:py-24"
      style={{
        background:
          "radial-gradient(circle at 72% 35%, rgba(0,178,184,0.34), transparent 34%), linear-gradient(135deg, #0B162C 0%, #123044 58%, #007F83 100%)",
      }}
    >
      <ContainerWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#00B2B8]/40 bg-[#00B2B8]/15 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#6CE0D7]">
            MBBS Abroad Guide 2026
          </span>
          <h1 className="mt-6 text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            MBBS Abroad 2026 for <span className="text-[#6CE0D7]">Indian Students</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Compare Russia, Georgia, Kazakhstan, Uzbekistan, and Kyrgyzstan with
            practical guidance on fees, NMC/NExT rules, eligibility, admissions,
            and university shortlisting.
          </p>
          <label className="mx-auto mt-8 flex max-w-xl items-center overflow-hidden rounded-2xl bg-white p-2 shadow-2xl shadow-black/25">
            <MdSearch className="ml-3 h-5 w-5 shrink-0 text-slate-400" aria-hidden />
            <span className="sr-only">Search blog articles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => onChangeQuery(event.target.value)}
              placeholder="Search countries, fees, NMC, NExT..."
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-semibold text-[#0B162C] outline-none placeholder:text-slate-400"
            />
            <button
              type="button"
              className="rounded-xl bg-[#00999E] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#007F83]"
            >
              Search
            </button>
          </label>
        </div>
      </ContainerWrapper>
    </section>
  );
}

