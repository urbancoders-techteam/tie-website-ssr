import { DUBAI_CONTAINER, LIVING_COST_HEADERS, LIVING_COST_INTRO, LIVING_COST_ROWS } from "./dubaiContent";
import DubaiReveal from "./DubaiReveal";
import DubaiSectionHeading from "./DubaiSectionHeading";
import DubaiTable from "./DubaiTable";

export default function DubaiCostOfLiving() {
  return (
    <section id="cost-of-living" className="scroll-mt-28 bg-[#FBF8F3] py-12 lg:py-16">
      <div className={DUBAI_CONTAINER}>
        <DubaiReveal>
        <DubaiSectionHeading
          className="max-w-4xl"
          title="Cost of Living in Dubai: A Detailed Guide for Indian Students Planning to Study Abroad"
        />
        <p className="mx-auto mt-4 max-w-5xl text-center text-sm leading-7 text-slate-700 sm:text-[15px]">
          {LIVING_COST_INTRO}
        </p>

        <DubaiTable
          className="mt-8 overflow-x-auto"
          headers={LIVING_COST_HEADERS}
          rows={LIVING_COST_ROWS}
          minWidth={760}
          centerColumns={[1, 2]}
        />
        </DubaiReveal>
      </div>
    </section>
  );
}
