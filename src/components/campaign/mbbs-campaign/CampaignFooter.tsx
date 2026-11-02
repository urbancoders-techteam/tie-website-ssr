import Image from "next/image";
import Link from "next/link";

export default function CampaignFooter() {
  return (
    <footer className="bg-gradient-to-r from-[#00999E] via-[#008c91] to-[#5dd4d9] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-white/95 px-3 shadow-sm">
            <Image
              src="/images/TIE_LOGO.png"
              alt="Taksheela Institute of Education"
              width={160}
              height={64}
              className="h-auto w-[140px] sm:w-[160px]"
            />
          </div>
          <p className="text-sm text-white/90">
            Get end-to-end guidance for MBBS abroad—from counselling to confirmed admits.
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/90">
          <div className="font-semibold text-white">Contact</div>
          <a className="block hover:text-white" href="tel:+919831241212">
            +91 9831241212
          </a>
          <a className="block hover:text-white" href="mailto:info@taksheela.com">
            info@taksheela.com
          </a>
        </div>

        <div className="space-y-2 text-sm text-white/90">
          <div className="font-semibold text-white">Links</div>
          <Link className="block hover:text-white" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="block hover:text-white" href="/terms-and-conditions">
            Terms & Conditions
          </Link>
          <Link className="block hover:text-white" href="/refund-policy">
            Refund Policy
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs text-white/80">
        Copyright <span className="text-white text-[15px]">©</span> {new Date().getFullYear()} Taksheela Institute of Education. All rights
        reserved.
      </div>
    </footer>
  );
}
