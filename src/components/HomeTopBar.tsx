import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";

const PHONE_DISPLAY = "+91 9831241212";
const PHONE_TEL = "+919831241212";
const EMAIL = "info@taksheela.com";

export default function HomeTopBar() {
  return (
    <div
      className="border-b border-[#00999E]/35 bg-[#0B162C] text-white"
      role="banner"
      aria-label="Contact links"
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
      </div>
    </div>
  );
}
