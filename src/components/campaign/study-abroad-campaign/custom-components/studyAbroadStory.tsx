import StudyAbroadReveal from "./studyAbroadReveal";
import StudyAbroadSectionHeading from "./studyAbroadSectionHeading";
import type { StudyAbroadStory as StudyAbroadStoryData } from "./studyAbroadTypes";

export default function StudyAbroadStory({
  containerClass,
  story,
}: {
  containerClass: string;
  story: StudyAbroadStoryData;
}) {
  return (
    <section id={story.id} className="scroll-mt-28 py-12 lg:py-16" style={{ background: story.background }}>
      <div className={containerClass}>
        <StudyAbroadReveal>
          <StudyAbroadSectionHeading title={story.title} kicker={story.kicker} />
          {story.subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-semibold text-[#122033]">{story.subtitle}</p>
          )}
          {story.pills && story.pills.length > 0 && (
            <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
              {story.pills.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#C6A35A]/40 bg-[#F7F1E6] px-3 py-1.5 text-xs font-semibold text-[#8C6A32]"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          {story.paragraphs && story.paragraphs.length > 0 && (
            <div className="mx-auto mt-4 max-w-4xl space-y-3 text-center text-sm leading-7 text-slate-700 sm:text-[15px]">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {story.bullets && story.bullets.length > 0 && (
            <ul className="mx-auto mt-6 max-w-3xl space-y-2 text-sm leading-7 text-[#122033] sm:text-[15px]">
              {story.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A35A]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {story.note && <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-slate-600">{story.note}</p>}
        </StudyAbroadReveal>
      </div>
    </section>
  );
}
