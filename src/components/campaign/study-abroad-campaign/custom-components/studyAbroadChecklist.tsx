import { LuCheck } from "react-icons/lu";
import StudyAbroadReveal from "./studyAbroadReveal";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import type { StudyAbroadChecklist as StudyAbroadChecklistData } from "./studyAbroadTypes";

export default function StudyAbroadChecklist({
  containerClass,
  checklist,
}: {
  containerClass: string;
  checklist: StudyAbroadChecklistData;
}) {
  return (
    <section id={checklist.id} className="scroll-mt-28 py-12 lg:py-16" style={{ background: checklist.background }}>
      <div className={containerClass}>
        <StudyAbroadReveal>
          <StudyAbroadSectionHeading title={checklist.title} kicker={checklist.kicker} />
          {checklist.subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-semibold text-[#122033]">{checklist.subtitle}</p>
          )}
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {checklist.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#E6D9C4] bg-white px-4 py-3 text-sm font-semibold text-[#122033]"
              >
                <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#1F8A4C]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </StudyAbroadReveal>
      </div>
    </section>
  );
}
