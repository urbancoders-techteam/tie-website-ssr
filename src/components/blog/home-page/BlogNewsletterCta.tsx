import { MdMailOutline } from "react-icons/md";

import { DARK } from "@/lib/blog/map";

export default function BlogNewsletterCta() {
  return (
    <section
      className="mt-16 overflow-hidden rounded-3xl px-6 py-10 text-center text-white shadow-xl sm:px-10 lg:px-12"
      style={{ background: `linear-gradient(135deg, ${DARK} 0%, #007F83 100%)` }}
    >
      <div className="relative z-10 mx-auto max-w-2xl">
        <MdMailOutline className="mx-auto h-10 w-10 text-[#6CE0D7]" aria-hidden />
        <h2 className="mt-4 text-3xl font-black">Never Miss an Update</h2>
        <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
          Get MBBS abroad admission updates, NMC/NExT guidance, fee comparisons,
          and country shortlisting support from Taksheela.
        </p>
        <form className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="blog-newsletter-email">
            Email address
          </label>
          <input
            id="blog-newsletter-email"
            type="email"
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0B162C] outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#00999E] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#00B2B8]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

