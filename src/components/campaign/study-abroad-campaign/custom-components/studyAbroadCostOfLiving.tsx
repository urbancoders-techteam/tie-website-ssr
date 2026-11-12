import StudyAbroadReveal from "./studyAbroadReveal";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import StudyAbroadTable from "./studyAbroadTable";
import type { StudyAbroadTableSection } from "./studyAbroadTypes";

export default function StudyAbroadCostOfLiving({
  containerClass,
  costOfLiving,
}: {
  containerClass: string;
  costOfLiving: StudyAbroadTableSection;
}) {
  return (
    <section
      id={costOfLiving.id}
      className="scroll-mt-28 py-12 lg:py-16"
      style={{ background: costOfLiving.background }}
    >
      <div className={containerClass}>
        <StudyAbroadReveal>
          <StudyAbroadSectionHeading className="max-w-4xl" title={costOfLiving.title} kicker={costOfLiving.kicker} />
          <div className="mx-auto mt-4 max-w-5xl space-y-3 text-center text-sm leading-7 text-slate-700 sm:text-[15px]">
            {costOfLiving.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <StudyAbroadTable
            className="mt-8 overflow-x-auto"
            headers={costOfLiving.headers}
            rows={costOfLiving.rows}
            minWidth={costOfLiving.minWidth}
            centerColumns={costOfLiving.centerColumns}
            labelWidthClass={costOfLiving.labelWidthClass}
          />
        </StudyAbroadReveal>
      </div>
    </section>
  );
}
