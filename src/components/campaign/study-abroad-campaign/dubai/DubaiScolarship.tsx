import {
  DUBAI_CONTAINER,
  SCHOLARSHIP_HEADERS,
  SCHOLARSHIP_INTRO,
  SCHOLARSHIP_NOTE,
  SCHOLARSHIP_ROWS,
  SCHOLARSHIP_STEPS,
  SCHOLARSHIP_TIPS,
} from "./dubaiContent";
import { LuAward, LuHandshake, LuPenLine, LuSearch, LuMails } from "react-icons/lu";
import DubaiNoteCard from "./DubaiNoteCard";
import DubaiReveal from "./DubaiReveal";
import DubaiSectionHeading from "./DubaiSectionHeading";
import DubaiTable from "./DubaiTable";

const STEP_ICONS = [LuSearch, LuAward, LuPenLine, LuMails, LuHandshake];

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

        <DubaiNoteCard
          title="Application Tips"
          items={[
            ...SCHOLARSHIP_TIPS,
            <>
              Work with <em>Study in Dubai</em> consultants for application guidance and presentation.
            </>,
          ]}
        />

        <DubaiSectionHeading
          className="mt-10 max-w-4xl"
          size="md"
          title="How to Access These Scholarships and Make Your US Study Dreams a Reality"
        />
        <div className="mt-6 grid grid-cols-1 gap-px border border-[#E6D9C4] bg-[#E6D9C4] sm:grid-cols-2 xl:grid-cols-5">
          {SCHOLARSHIP_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? LuSearch;
            const night = step.tone === "teal";
            return (
            <article
              key={step.title}
              className={`flex flex-col px-4 py-6 text-center text-sm leading-6 transition duration-300 hover:brightness-110 ${
                night ? "bg-[#122033] text-white/85" : "bg-[#FBF8F3] text-[#3E4A5A]"
              }`}
            >
              <Icon className={`mx-auto h-5 w-5 ${night ? "text-[#E8D5A3]" : "text-[#C6A35A]"}`} aria-hidden />
              <h3 className={`mt-3 text-base font-bold ${night ? "text-white" : "text-[#122033]"}`}>
                {step.title}
              </h3>
              <p className="mt-4">{step.body}</p>
            </article>
            );
          })}
        </div>

        <DubaiNoteCard title="Important Note">{SCHOLARSHIP_NOTE}</DubaiNoteCard>
        </DubaiReveal>
      </div>
    </section>
  );
}
