// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ContainerWrapper from "./ContainerWrapper";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/taksheelainstituteofeducation/",
    label: "Facebook",
    Icon: FaFacebookF,
    brand: "#1877F2",
  },
  {
    href: "https://www.instagram.com/taksheela_studyabroad/",
    label: "Instagram",
    Icon: FaInstagram,
    brand: "#E4405F",
  },
  {
    href: "https://www.linkedin.com/company/taksheela-institute-of-education/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    brand: "#0A66C2",
  },
  {
    href: "https://www.youtube.com/place/g_11bwhbdj5v/shorts",
    label: "YouTube",
    Icon: FaYoutube,
    brand: "#FF0033",
  },
] as const;

export type FooterTheme = {
  background: string;
  accent: string;
  onAccent: string;
};

export const defaultFooterTheme: FooterTheme = {
  background: "#0B162C",
  accent: "#00a88f",
  onAccent: "#ffffff",
};

const withAlpha = (hex: string, alpha: string) => {
  const normalized = hex.trim().replace("#", "");
  return normalized.length === 6 ? `#${normalized}${alpha}` : hex;
};

const Footer = ({ theme }: { theme?: Partial<FooterTheme> }) => {
  const { background, accent, onAccent } = { ...defaultFooterTheme, ...theme };
  return (
    <footer className="w-full text-white" style={{ backgroundColor: background }}>
      <ContainerWrapper className="py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div
            className="lg:col-span-4 border-1 rounded-2xl p-6"
            style={{
              borderColor: accent,
              boxShadow: `0 0 32px 8px ${withAlpha(accent, "bb")}, 0 0 12px 4px #fff9, 0 0 0 2px ${withAlpha(accent, "ff")}`,
              background: `linear-gradient(90deg, ${withAlpha(accent, "1f")} 0%, ${withAlpha(accent, "2e")} 100%)`,
              transition: "box-shadow 0.3s, border-color 0.3s, background 0.3s",
              outline: `1px solid ${withAlpha(accent, "dd")}`,
              outlineOffset: "2px",
            }}
       
          >
            <Link href="/" className="inline-flex items-center bg-white rounded-xl border-2 p-2 transition-shadow shadow-none hover:shadow-lg" style={{ borderColor: accent }}>
              <Image src="/images/TIE_LOGO.png" alt="TIE Logo" width={150} height={150} />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              India&apos;s trusted study abroad consultancy — helping students and institutions navigate international
              education since 2010. From counselling to visa, we&apos;re with you every step of the way.
            </p>

            <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em]" style={{ color: accent }}>
              TRANSCEND BOUNDARIES
            </p>

            <p className="leading-relaxed">
              <Link href="mailto:info@taksheela.com" className="font-semibold transition hover:text-white">
                info@taksheela.com
              </Link>
            </p>

            <div className="mt-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em]" style={{ color: accent }}>
                Follow us
              </p>
              <div className="mt-3 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ href, label, Icon, brand }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white transition duration-200 hover:-translate-y-1 hover:scale-105"
                    style={{
                      color: brand,
                      boxShadow: `0 10px 22px rgba(0,0,0,0.28), 0 0 0 2px ${accent}, 0 0 18px ${withAlpha(accent, "88")}`,
                    }}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          </div>
     

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">SERVICES</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <Link className="transition hover:text-white" href="/study-abroad">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/mbbs">
                  MBBS Abroad
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/immersion">
                  Global Immersion
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/test">
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/international-relation">
                  For Institutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">MENU</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <Link className="transition hover:text-white" href="/aboutus">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/consultants-study-abroad-kolkata">
                  Kolkata
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/study-abroad-consultants-delhi-ncr">
                  Delhi NCR
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/study-abroad-consultants-bangalore">
                  Bangalore
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/study-abroad-consultants-bhubaneswar">
                  Bhubaneswar
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/study-abroad-consultants-mumbai">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/images/Taksheela-Brochure.pdf" download>
                  Download Brochure
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">GET IN TOUCH</h3>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p className="leading-relaxed">
                <span className="font-semibold text-white/85">Dubai office:</span> Sharjah Media City, Sharjah — United
                Arab Emirates
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-white/85">Delhi office:</span> Hub Hive 11, 1st Floor, 262, Plot 1,
                ITDC Western Marg, Near Saket Metro, New Delhi 110017
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-white/85">Mumbai office:</span> 613, OPAL Square, Wagle Estate, Thane
                40060
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-white/85">Banglore office:</span> C8, Kudremukh Colony, Koramangala
                2nd Block, Sarjapura road. Near water tank, Bangalore: 560034
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold text-white/85">Kolkata Office:</span> 79/16 Palm Avenue, Ballygunje Phari,
                Kolkata – 700019.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition hover:brightness-110"
              style={{ backgroundColor: accent, color: onAccent }}
            >
              Free Consultation
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2025 Taksheela Institute of Education. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link className="transition hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-white" href="/refund-policy">
              Refund Policy
            </Link>
            <Link className="transition hover:text-white" href="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
