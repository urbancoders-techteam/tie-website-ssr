import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import StudyAbroadLeadForm from "./studyAbroadLeadForm";
import type { StudyAbroadConnect, StudyAbroadLeadFormConfig } from "./studyAbroadTypes";

export default function StudyAbroadConnectBand({
  containerClass,
  connect,
  leadForm,
  phone,
  phoneDisplay,
  email,
  night = false,
  transparent = false,
}: {
  containerClass: string;
  connect: StudyAbroadConnect;
  leadForm: StudyAbroadLeadFormConfig;
  phone: string;
  phoneDisplay: string;
  email: string;
  night?: boolean;
  /** Skip the band image so a page-level background shows through. */
  transparent?: boolean;
}) {
  const image = night ? connect.nightImage : connect.image;
  const whatsapp = `https://wa.me/${phone.replace(/\D/g, "")}`;

  return (
    <section className="relative overflow-hidden">
      {!transparent ? (
        <div
          className="study-abroad-kenburns absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      ) : null}
      <div
        className={`absolute inset-0 ${
          transparent ? "bg-[#07111C]/35" : night ? "bg-[#07111C]/70" : "bg-[#07111C]/55"
        }`}
        aria-hidden
      />
      <div className={`${containerClass} relative grid items-center gap-10 py-14 lg:grid-cols-2`}>
        <div className="text-white">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--sa-accent-soft,#E8D5A3)]">
            <span className="h-px w-8 bg-[var(--sa-accent-soft,#E8D5A3)]" aria-hidden />
            {connect.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{connect.title}</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/80">{connect.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--sa-button-border,transparent)] bg-[var(--sa-accent,#C6A35A)] px-4 py-1.5 text-xs font-semibold text-[var(--sa-on-accent,#122033)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--sa-accent-hover,#D4B56E)]"
            >
              <LuPhone className="h-3.5 w-3.5" aria-hidden />
              {connect.callLabel} {phoneDisplay}
            </a>
            <a
              href={whatsapp}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--sa-accent-soft,#E8D5A3)]"
            >
              <FaWhatsapp className="h-3.5 w-3.5 text-[var(--sa-accent-soft,#E8D5A3)]" aria-hidden />
              {connect.whatsappLabel}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--sa-accent-soft,#E8D5A3)]"
            >
              <LuMail className="h-3.5 w-3.5 text-[var(--sa-accent-soft,#E8D5A3)]" aria-hidden />
              {connect.emailLabel}
            </a>
          </div>
        </div>
        <div className="justify-self-center lg:justify-self-end">
          <StudyAbroadLeadForm config={leadForm} title={connect.formTitle} />
        </div>
      </div>
    </section>
  );
}
