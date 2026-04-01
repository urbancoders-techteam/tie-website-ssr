"use client";

import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";

const BRAND = {
  primary: "#0074cc",
  teal: "#00999E",
  tealDark: "#007a7e",
};

interface ThankYouCardProps {
  title?: string;
  messagePrimary?: string;
  messageSecondary?: string;
}

const SOCIAL_LINKS = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com", brand: "#1877F2" },
  { label: "Twitter", icon: FaTwitter, href: "https://twitter.com", brand: "#1DA1F2" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com", brand: "#E4405F" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com", brand: "#0A66C2" },
  { label: "YouTube", icon: FaYoutube, href: "https://www.youtube.com", brand: "#FF0000" },
] as const;

export default function ThankYouCard({
  title = "Thank You",
  messagePrimary = "We have received your application. Thank you for your interest in us.",
  messageSecondary = "Our representatives will get back to you soon.",
}: ThankYouCardProps) {
  const router = useRouter();

  return (
    <div className="relative flex min-h-[100dvh] w-full min-w-0 items-center justify-center overflow-x-hidden px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(165deg, #f0f9ff 0%, #e0f2fe 25%, #f8fafc 50%, #f1f5f9 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-48 w-[min(140%,100vw)] max-w-4xl -translate-x-1/2 opacity-40 sm:h-64 md:h-80"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${BRAND.primary}20 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-48 w-48 opacity-25 sm:h-64 sm:w-64 sm:opacity-30 md:h-80 md:w-80 lg:h-96 lg:w-96"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${BRAND.teal}15 0%, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto w-full min-w-0 max-w-[min(100%,28rem)] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {/* Card */}
        <div
          className="relative overflow-hidden rounded-2xl bg-white/90 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_10px_20px_-5px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,116,204,0.06)] backdrop-blur-sm sm:rounded-[1.75rem]"
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{
              background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.teal})`,
            }}
          />

          <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
            {/* Success icon */}
            <div
              className="mx-auto mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white animate-thank-you-scale-in sm:mb-7 sm:h-20 sm:w-20"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.tealDark} 100%)`,
                boxShadow: `0 12px 28px -8px ${BRAND.teal}80, 0 0 0 4px ${BRAND.teal}18`,
              }}
            >
              <FaCheck className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden />
            </div>

            <h1
              className="mb-2 break-words text-xl font-bold tracking-tight sm:mb-3 sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-tight"
              style={{ color: BRAND.primary }}
            >
              {title}
            </h1>

            <p className="mx-auto max-w-md text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
              {messagePrimary}
            </p>
            <p className="mx-auto mt-2 max-w-md break-words text-sm font-semibold leading-relaxed text-slate-700 sm:mt-3 sm:text-base">
              {messageSecondary}
            </p>

            {/* Divider */}
            <div
              className="mx-auto my-6 h-px w-12 rounded-full opacity-40 sm:my-8 sm:w-16"
              style={{ backgroundColor: BRAND.primary }}
            />

            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] sm:mb-5 sm:tracking-[0.2em]"
              style={{ color: BRAND.primary }}
            >
              Stay connected
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-3.5">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href, brand }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 min-h-[44px] min-w-[44px] w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 sm:h-11 sm:w-11"
                  style={{
                    backgroundColor: brand,
                    boxShadow: `0 4px 12px -2px ${brand}60`,
                  }}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                </a>
              ))}
            </div>

            {/* Back to previous page */}
            <button
              type="button"
              onClick={() => router.back()}
              className="mt-8 inline-flex min-h-[44px] w-full max-w-xs items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 sm:mt-10 sm:w-auto sm:max-w-none"
            >
              <FaArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
