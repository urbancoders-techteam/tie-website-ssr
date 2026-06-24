import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const PHONE_DISPLAY = "+91 9831241212";
const PHONE_TEL = "+919831241212";
const EMAIL = "info@taksheela.com";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/taksheelainstituteofeducation/",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/taksheela_studyabroad/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/company/taksheela-institute-of-education/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://www.youtube.com/place/g_11bwhbdj5v/shorts",
    label: "YouTube",
    Icon: FaYoutube,
  },
] as const;

export default function HomeTopBar() {
  return (
    <div
      className="border-b border-[#00999E]/35 bg-[#0B162C] text-white"
      role="banner"
      aria-label="Contact and social links"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-1.5 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[0.75rem] sm:text-[0.8125rem]">
          <Link
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-1.5 font-medium text-white/90 transition-colors hover:text-[#5eead4]"
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00999E]/20 text-[#5eead4]">
              <FiPhone className="h-3 w-3" aria-hidden />
            </span>
            <span>{PHONE_DISPLAY}</span>
          </Link>

          <span className="hidden h-3.5 w-px bg-white/20 sm:block" aria-hidden />

          <Link
            href={`mailto:${EMAIL}`}
            className="inline-flex min-w-0 items-center gap-1.5 font-medium text-white/90 transition-colors hover:text-[#5eead4]"
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00999E]/20 text-[#5eead4]">
              <FiMail className="h-3 w-3" aria-hidden />
            </span>
            <span className="truncate">{EMAIL}</span>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2.5 sm:justify-end">
          <p className="hidden text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/50 lg:block">
            Connect with us
          </p>

          <div className="flex items-center gap-1.5">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white/85 transition hover:border-[#00999E] hover:bg-[#00999E] hover:text-white"
              >
                <Icon className="h-3 w-3" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
