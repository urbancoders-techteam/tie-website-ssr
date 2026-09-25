import type { Metadata } from "next";
import Link from "next/link";
import ContainerWrapper from "@/components/ContainerWrapper";

export const metadata: Metadata = {
  title: "Page not found | Taksheela Institute",
  description:
    "This page is not available. Return to the Taksheela Institute homepage, or browse study abroad, test prep, and contact options.",
};

const helpfulLinks = [
  { href: "/study-abroad", label: "Study Abroad" },
  { href: "/test", label: "Test Preparation" },
  { href: "/mbbs", label: "MBBS Abroad" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-[#F7FCFD] py-20 text-[#0B162C]">
      <ContainerWrapper className="text-center">
        <p className="text-7xl font-black leading-none tracking-tight text-[#00999E] sm:text-8xl">
          404
        </p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
          This page isn&apos;t available
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-slate-600">
          The link may be incorrect, or this page may have been moved. You can
          go back to the homepage, or open one of the pages below.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-[#00999E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#007F83]"
          >
            Go to homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-xl border border-[#00999E] px-6 py-3 text-sm font-bold text-[#00999E] transition hover:bg-[#00999E]/10"
          >
            Contact us
          </Link>
        </div>
        <ul className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold">
          {helpfulLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-[#00999E] hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </ContainerWrapper>
    </div>
  );
}
