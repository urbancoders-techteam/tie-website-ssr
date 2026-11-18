import StudyAbroadReveal from "./studyAbroadReveal";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import StudyAbroadTable from "./studyAbroadTable";
import type { StudyAbroadTableSection } from "./studyAbroadTypes";

export default function StudyAbroadScholarship({
  containerClass,
  scholarship,
}: {
  containerClass: string;
  scholarship: StudyAbroadTableSection;
}) {
  return (
    <section id={scholarship.id} className="scroll-mt-28 py-12 lg:py-16" style={{ background: scholarship.background }}>
      <div className={containerClass}>
        <StudyAbroadReveal>
          <StudyAbroadSectionHeading
            title={scholarship.title}
            kicker={scholarship.kicker}
            align={scholarship.introAlign === "left" ? "left" : "center"}
          />
          <div
            className={`mx-auto mt-4 max-w-5xl space-y-3 text-sm leading-7 text-slate-700 sm:text-[15px] ${
              scholarship.introAlign === "center" ? "text-center" : scholarship.introAlign === "left" ? "text-left" : ""
            }`}
          >
            {scholarship.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <StudyAbroadTable
            className="mt-8 overflow-x-auto"
            headers={scholarship.headers}
            rows={scholarship.rows}
            minWidth={scholarship.minWidth}
            centerColumns={scholarship.centerColumns}
            labelWidthClass={scholarship.labelWidthClass}
          />
          {scholarship.note && (
            <p className="mx-auto mt-4 max-w-5xl text-center text-sm leading-7 text-slate-600 sm:text-[15px]">
              {scholarship.note}
            </p>
          )}
        </StudyAbroadReveal>
      </div>
    </section>
  );
}
