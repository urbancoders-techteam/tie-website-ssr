import {
  DUBAI_CONTAINER,
  SCHOLARSHIP_HEADERS,
  SCHOLARSHIP_INTRO,
  SCHOLARSHIP_ROWS,
} from "./dubaiContent";
import DubaiReveal from "./DubaiReveal";
import DubaiSectionHeading from "./DubaiSectionHeading";
import DubaiTable from "./DubaiTable";

export default function DubaiScolarship() {
  return (
    <section id="scholarships" className="scroll-mt-28 bg-white py-12 lg:py-16">
      <div className={DUBAI_CONTAINER}>
        <DubaiReveal>
        <DubaiSectionHeading title="Scholarships & Education Loans" />
        <p className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-slate-700 sm:text-[15px]">{SCHOLARSHIP_INTRO}</p>

        <DubaiTable
          className="mt-8 overflow-x-auto"
          headers={SCHOLARSHIP_HEADERS}
          rows={SCHOLARSHIP_ROWS}
          labelWidthClass="w-[42%] sm:w-[30%]"
        />
        </DubaiReveal>
      </div>
    </section>
  );
}
