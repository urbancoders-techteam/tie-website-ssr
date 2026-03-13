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
    <div className="min-h-screen w-full relative flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(165deg, #f0f9ff 0%, #e0f2fe 25%, #f8fafc 50%, #f1f5f9 100%)`,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-80 -z-10 opacity-40"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${BRAND.primary}20 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 -z-10 opacity-30"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${BRAND.teal}15 0%, transparent 60%)`,
        }}
      />

      <div className="relative w-full min-w-[920px] max-w-[64rem]">
        {/* Card */}
        <div
          className="relative rounded-[1.75rem] bg-white/90 backdrop-blur-sm text-center overflow-hidden"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 10px 20px -5px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 116, 204, 0.06)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-full"
            style={{
              background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.teal})`,
            }}
          />

          <div className="px-6 sm:px-10 py-10 sm:py-14">
            {/* Success icon */}
            <div
              className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full text-white animate-thank-you-scale-in"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.tealDark} 100%)`,
                boxShadow: `0 12px 28px -8px ${BRAND.teal}80, 0 0 0 4px ${BRAND.teal}18`,
              }}
            >
              <FaCheck className="h-9 w-9" aria-hidden />
            </div>

            <h1
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-3"
              style={{ color: BRAND.primary }}
            >
              {title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto font-medium">
              {messagePrimary}
            </p>
            <p className="mt-3 text-sm sm:text-base font-semibold leading-relaxed max-w-md mx-auto text-slate-700">
              {messageSecondary}
            </p>

            {/* Divider */}
            <div
              className="mx-auto mt-8 mb-8 h-px w-16 rounded-full opacity-40"
              style={{ backgroundColor: BRAND.primary }}
            />

            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: BRAND.primary }}
            >
              Stay connected
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href, brand }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
                  style={{
                    backgroundColor: brand,
                    boxShadow: `0 4px 12px -2px ${brand}60`,
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>

            {/* Back to previous page */}
            <button
              type="button"
              onClick={() => router.back()}
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 rounded-lg px-4 py-2 -mb-2"
            >
              <FaArrowLeft className="h-3.5 w-3.5" aria-hidden />
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
