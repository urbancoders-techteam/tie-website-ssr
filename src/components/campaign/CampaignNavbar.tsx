import Image from "next/image";
import Link from "next/link";
import ModalTrigger from "@/components/ModalTrigger";
import { FaPhoneAlt } from "react-icons/fa";

export type CampaignNavLink = { href: string; label: string };

const DEFAULT_LOGO_SRC = "/images/TIE_LOGO.png";
const DEFAULT_LOGO_ALT = "Taksheela Institute of Education";
const DEFAULT_PHONE = "+919831241212";
const DEFAULT_CTA_TEXT = "Get Guidance";

export interface CampaignNavbarProps {
  /** Redirect path after form submit. */
  redirectPath?: string;
  /** Nav links (anchor href + label). Pass your section anchors per landing page. */
  navLinks: CampaignNavLink[];
  /** CTA button text. */
  ctaText?: string;
  /** Logo image src. */
  logoSrc?: string;
  /** Logo alt text. */
  logoAlt?: string;
  /** Link when logo is clicked (e.g. "/" or campaign home). */
  logoHref?: string;
  /** Phone number for the header (e.g. "+919831241212"). Omit or set to false to hide. */
  phoneNumber?: string | false;
  /** Optional extra class for the header. */
  className?: string;
}

export default function CampaignNavbar({
  redirectPath = "/thankyou",
  navLinks,
  ctaText = DEFAULT_CTA_TEXT,
  logoSrc = DEFAULT_LOGO_SRC,
  logoAlt = DEFAULT_LOGO_ALT,
  logoHref = "/",
  phoneNumber = DEFAULT_PHONE,
  className,
}: CampaignNavbarProps) {
  return (
    <header
      className={
        className ??
        "sticky top-0 z-50 bg-gradient-to-r from-[#00999E] via-[#008c91] to-[#5dd4d9] backdrop-blur border-b border-white/20 shadow-md"
      }
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between gap-3">
        <Link
          href={logoHref}
          className="flex items-center bg-white/95 px-2"
          aria-label={logoAlt}
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={140}
            height={56}
            className="h-auto w-[110px] sm:w-[130px] md:w-[140px]"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-base lg:text-lg font-medium text-white/95">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-white font-bold whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {phoneNumber !== false && phoneNumber && (
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-white/40 px-3 py-2 text-sm text-white hover:bg-white/10"
            >
              <FaPhoneAlt className="shrink-0" aria-hidden />
              {phoneNumber}
            </a>
          )}

          <ModalTrigger
            variant="custom"
            text={ctaText}
            redirectPath={redirectPath}
            className="rounded-lg bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          />
        </div>
      </div>
    </header>
  );
}
