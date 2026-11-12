import StudyAbroadCta from "./studyAbroadCta";
import StudyAbroadReveal from "./studyAbroadReveal";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import StudyAbroadTable from "./studyAbroadTable";
import type { StudyAbroadTableSection } from "./studyAbroadTypes";

export default function StudyAbroadCourses({
  containerClass,
  courses,
}: {
  containerClass: string;
  courses: StudyAbroadTableSection;
}) {
  return (
    <section id={courses.id} className="scroll-mt-28 py-12 lg:py-16" style={{ background: courses.background }}>
      <div className={containerClass}>
        <StudyAbroadReveal>
          <StudyAbroadSectionHeading title={courses.title} kicker={courses.kicker} />
          {courses.intro.length > 0 && (
            <div
              className={`mx-auto mt-4 max-w-6xl space-y-3 text-sm leading-7 text-slate-700 sm:text-[15px] ${
                courses.introAlign === "left" ? "text-left" : "text-center"
              }`}
            >
              {courses.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          <StudyAbroadTable
            className="mt-10 overflow-x-auto"
            headers={courses.headers}
            rows={courses.rows}
            minWidth={courses.minWidth}
            centerColumns={courses.centerColumns}
            labelWidthClass={courses.labelWidthClass}
          />
          {courses.note && <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600">{courses.note}</p>}
        </StudyAbroadReveal>
      </div>
      {courses.cta && (
        <div className="mt-10 text-center">
          <StudyAbroadCta href={courses.cta.href}>{courses.cta.label}</StudyAbroadCta>
        </div>
      )}
    </section>
  );
}
