import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import DubaiLeadForm from "./DubaiLeadForm";
import { DUBAI_CONTAINER, DUBAI_PHONE, DUBAI_PHONE_DISPLAY } from "./dubaiContent";

export default function DubaiConnectBand({
  night = false,
}: {
  night?: boolean;
}) {
  const image = night ? "/images/campaign/dubai-night.jpg" : "/images/campaign/dubai-skyline.jpg";

  return (
    <section className="relative overflow-hidden">
      <div className="dubai-kenburns absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} aria-hidden />
      <div className={`absolute inset-0 ${night ? "bg-[#07111C]/70" : "bg-[#07111C]/55"}`} aria-hidden />
      <div className={`${DUBAI_CONTAINER} relative grid items-center gap-10 py-14 lg:grid-cols-2`}>
        <div className="text-white">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8D5A3]">
            <span className="h-px w-8 bg-[#E8D5A3]" aria-hidden />
            Dubai
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Connect With Us</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
            A counsellor in Kolkata can walk you through campuses, scholarships, and the September or January intake.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={`tel:${DUBAI_PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-[#C6A35A] px-4 py-1.5 text-xs font-semibold text-[#122033] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D4B56E]">
              <LuPhone className="h-3.5 w-3.5" aria-hidden />
              Call {DUBAI_PHONE_DISPLAY}
            </a>
            <a
              href="https://wa.me/919831241212"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#E8D5A3]"
            >
              <FaWhatsapp className="h-3.5 w-3.5 text-[#E8D5A3]" aria-hidden />
              WhatsApp
            </a>
            <a href="mailto:info@taksheela.com" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#E8D5A3]">
              <LuMail className="h-3.5 w-3.5 text-[#E8D5A3]" aria-hidden />
              Email
            </a>
          </div>
        </div>
        <div className="justify-self-center lg:justify-self-end">
          <DubaiLeadForm title="Get Your Free Counselling" />
        </div>
      </div>
    </section>
  );
}
