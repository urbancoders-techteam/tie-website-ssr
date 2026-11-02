import { COURSE_HEADERS, COURSE_INTRO, COURSE_ROWS, DUBAI_CONTAINER } from "./dubaiContent";
import DubaiCta from "./DubaiCta";
import DubaiReveal from "./DubaiReveal";
import DubaiSectionHeading from "./DubaiSectionHeading";
import DubaiTable from "./DubaiTable";

export default function DubaiComparison() {
  return (
    <section id="fees" className="scroll-mt-28 bg-white py-12 lg:py-16">
      <div className={DUBAI_CONTAINER}>
        <DubaiReveal>
        <DubaiSectionHeading title="Top Courses to Study in Dubai" />
        <div className="mx-auto mt-4 max-w-6xl space-y-3 text-center text-sm leading-7 text-slate-700 sm:text-[15px]">
          {COURSE_INTRO.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <DubaiTable className="mt-10 overflow-x-auto" headers={COURSE_HEADERS} rows={COURSE_ROWS} minWidth={880} centerColumns={[3, 4]} />
        </DubaiReveal>
      </div>
      <div className="mt-10 text-center">
        <DubaiCta href="#counselling">Connect with our trusted study in Dubai consultants today</DubaiCta>
      </div>
    </section>
  );
}
