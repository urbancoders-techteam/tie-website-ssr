import ContainerWrapper from "../ContainerWrapper";

type JourneyStep = {
  id: number;
  title: string;
  description: string;
};

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Free Counselling Session",
    description:
      "A no-obligation 1:1 session where our MBBS expert maps the ideal country and university based on your NEET score, budget, and career goals.",
  },
  {
    id: 2,
    title: "University Shortlisting",
    description:
      "A personalised list of NMC-approved, WHO-listed universities - with transparent, complete fee breakdowns for every option we recommend.",
  },
  {
    id: 3,
    title: "Document Preparation",
    description:
      "We help compile and verify every required document - marksheets, NEET scorecard, passport, medical certificates - including certified translations where needed.",
  },
  {
    id: 4,
    title: "University Application and Offer Letter",
    description:
      "We submit your application directly to the university and follow up until your official Admission Offer Letter is received and verified.",
  },
  {
    id: 5,
    title: "Fee Payment and Seat Confirmation",
    description:
      "Guidance through secure fee remittance only - no hidden costs, no intermediary fraud. Your seat is confirmed solely through verified university portals.",
  },
  {
    id: 6,
    title: "Student Visa Application",
    description:
      "Complete visa package preparation - invitation letter, financial documentation, medical insurance, and embassy interview coaching for maximum visa approval rate.",
  },
  {
    id: 7,
    title: "Pre-Departure Orientation",
    description:
      "Briefing on local customs, safety, banking, accommodation, Indian food availability, and connecting with the existing Indian student community at your destination.",
  },
  {
    id: 8,
    title: "Post-Arrival and FMGE Support",
    description:
      "Continued academic guidance, FMGE/NExT preparation resources, alumni mentorship, and a dedicated support team throughout your entire MBBS journey abroad.",
  },
];

export default function NeetToWhiteCoat() {
  return (
    <section className="py-12 md:py-16">
      <ContainerWrapper>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-[30px] leading-tight md:text-5xl font-semibold text-[#00999E]">
              From NEET to White Coat - 8 Simple Steps
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#f0b42f]" />
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-[18px] leading-relaxed text-[#6c7d97]">
              Taksheela guides you through every stage of the MBBS abroad journey.
              Nothing is left to chance, and nothing is left to you alone.
            </p>
          </div>

          <div className="relative mt-10 md:mt-12 max-w-3xl mx-auto">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-[#b9c7da] md:left-[18px]" />

            <div className="space-y-6 md:space-y-5">
              {journeySteps.map((step) => (
                <div key={step.id} className="relative flex items-start gap-4 md:gap-5">
                  <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0c7276] text-sm font-semibold text-white md:h-9 md:w-9">
                    {step.id}
                  </div>

                  <div className="pt-0.5">
                    <h3 className="text-base md:text-[22px] font-semibold text-[#00999E]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm md:text-[17px] leading-relaxed text-[#5f718e]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
