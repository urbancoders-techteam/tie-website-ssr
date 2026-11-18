import { STUDY_ABROAD_ICONS } from "./studyAbroadIcons";
import StudyAbroadCta from "./studyAbroadCta";
import StudyAbroadLeadForm from "./studyAbroadLeadForm";
import type { StudyAbroadCampaignData } from "./studyAbroadTypes";

export default function StudyAbroadHero({
  containerClass,
  hero,
  leadForm,
}: {
  containerClass: string;
  hero: StudyAbroadCampaignData["hero"];
  leadForm: StudyAbroadCampaignData["leadForm"];
}) {
  return (
    <section className="relative flex min-h-[32rem] items-center overflow-hidden bg-[#07111C] sm:min-h-[30rem] lg:min-h-[35rem] xl:min-h-[35rem]">
      <div
        className="study-abroad-kenburns absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111C]/90 via-[#07111C]/55 to-[#122033]/25" aria-hidden />
      <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--sa-accent,#C6A35A)_25%,transparent)] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--sa-accent,#C6A35A)_10%,transparent)] blur-3xl" aria-hidden />
      <div
        className={`${containerClass} relative grid w-full items-center gap-10 py-16 lg:py-24 xl:py-28 ${
          hero.hideForm ? "" : "lg:grid-cols-2"
        }`}
      >
        <div className="text-white">
          <p className="study-abroad-rise flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--sa-accent-soft,#E8D5A3)]">
            <span className="study-abroad-line h-px w-8 bg-[var(--sa-accent-soft,#E8D5A3)]" aria-hidden />
            {hero.kicker}
          </p>
          <h1 className="study-abroad-rise mt-3 text-4xl font-extrabold leading-tight sm:text-5xl" style={{ animationDelay: "120ms" }}>
            {hero.title}
          </h1>
          {hero.subtitle ? (
            <p className="study-abroad-rise mt-3 text-lg font-semibold text-white/95 sm:text-2xl" style={{ animationDelay: "220ms" }}>
              {hero.subtitle}
            </p>
          ) : null}
          <p
            className="study-abroad-rise mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
            style={{ animationDelay: "320ms" }}
          >
            {hero.description}
          </p>
          <ul className="study-abroad-rise mt-6 flex flex-wrap gap-2" style={{ animationDelay: "440ms" }}>
            {hero.chips.map(({ icon, label }) => {
              const Icon = STUDY_ABROAD_ICONS[icon];
              return (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-[var(--sa-accent-soft,#E8D5A3)]" aria-hidden />
                  {label}
                </li>
              );
            })}
          </ul>
          {hero.ctas && hero.ctas.length > 0 && (
            <div className="study-abroad-rise mt-6 flex flex-wrap gap-3" style={{ animationDelay: "520ms" }}>
              {hero.ctas.map((cta) => (
                <StudyAbroadCta key={cta.label} href={cta.href}>
                  {cta.label}
                </StudyAbroadCta>
              ))}
            </div>
          )}
        </div>
        {!hero.hideForm && (
          <div
            id={hero.formAnchorId}
            className="study-abroad-rise scroll-mt-28 justify-self-center lg:justify-self-end"
            style={{ animationDelay: "280ms" }}
          >
            <StudyAbroadLeadForm config={leadForm} />
          </div>
        )}
      </div>
    </section>
  );
}
