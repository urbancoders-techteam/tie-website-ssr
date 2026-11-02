import { LuBookOpen, LuCalendarRange, LuPlane } from "react-icons/lu";
import DubaiLeadForm from "./DubaiLeadForm";
import { DUBAI_CONTAINER } from "./dubaiContent";

const CHIPS = [
  { icon: LuPlane, label: "3 hours from India" },
  { icon: LuBookOpen, label: "English-medium campuses" },
  { icon: LuCalendarRange, label: "September & January" },
];

export default function DubaiHero() {
  return (
    <section className="relative overflow-hidden bg-[#07111C]">
      <div
        className="dubai-kenburns absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/campaign/dubai-skyline.jpg)" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111C]/90 via-[#07111C]/55 to-[#122033]/25" aria-hidden />
      <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[#C6A35A]/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#C6A35A]/10 blur-3xl" aria-hidden />
      <svg
        className="absolute inset-x-0 bottom-0 h-14 w-full text-[#FBF8F3] sm:h-16"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 72h1440V46h-28V22h-10v24h-36V30h-12v16h-22V8h-4l-8 38h-16V26h-18v20h-48V34h-14v12h-70V18h-6v28h-24V38h-16v8h-90V28h-12v18h-40V40h-18v6H0V72z"
        />
      </svg>
      <div className={`${DUBAI_CONTAINER} relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20`}>
        <div className="text-white">
          <p className="dubai-rise flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8D5A3]">
            <span className="dubai-line h-px w-8 bg-[#E8D5A3]" aria-hidden />
            Dubai, UAE
          </p>
          <h1 className="dubai-rise mt-3 text-4xl font-extrabold leading-tight sm:text-5xl" style={{ animationDelay: "120ms" }}>
            Study in Dubai
          </h1>
          <p className="dubai-rise mt-3 text-lg font-semibold text-white/95 sm:text-2xl" style={{ animationDelay: "220ms" }}>
            Through Globally Ranked Universities
          </p>
          <p
            className="dubai-rise mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
            style={{ animationDelay: "320ms" }}
          >
            UK, Australian, and Indian campuses. English-medium degrees. September and January intakes, a short flight from India.
          </p>
          <ul className="dubai-rise mt-6 flex flex-wrap gap-2" style={{ animationDelay: "440ms" }}>
            {CHIPS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-[#E8D5A3]" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div id="counselling" className="dubai-rise scroll-mt-28 justify-self-center lg:justify-self-end" style={{ animationDelay: "280ms" }}>
          <DubaiLeadForm />
        </div>
      </div>
    </section>
  );
}
