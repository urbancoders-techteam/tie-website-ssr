import StudyAbroadCta from "./studyAbroadCta";
import StudyAbroadLeadForm from "./studyAbroadLeadForm";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import type { StudyAbroadClosing as StudyAbroadClosingData, StudyAbroadLeadFormConfig } from "./studyAbroadTypes";

export default function StudyAbroadClosing({
  containerClass,
  closing,
  leadForm,
}: {
  containerClass: string;
  closing: StudyAbroadClosingData;
  leadForm: StudyAbroadLeadFormConfig;
}) {
  return (
    <section id={closing.id} className="scroll-mt-28 py-14 lg:py-20" style={{ background: closing.background }}>
      <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-2`}>
        <div>
          <StudyAbroadSectionHeading title={closing.title} kicker={closing.kicker} align="left" tone="light" />
          <p className="mt-5 text-xl font-extrabold text-white sm:text-2xl">{closing.subtitle}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-[15px]">{closing.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {closing.ctas.map((cta) => (
              <StudyAbroadCta key={cta.label} href={cta.href}>
                {cta.label}
              </StudyAbroadCta>
            ))}
          </div>
        </div>
        <div className="justify-self-center lg:justify-self-end">
          <StudyAbroadLeadForm config={leadForm} />
        </div>
      </div>
    </section>
  );
}
