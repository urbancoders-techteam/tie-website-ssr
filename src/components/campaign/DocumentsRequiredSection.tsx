import Image from "next/image";
import fDoctorImage from "@/assets/f-doctor.png";
import {
  FaPassport,
  FaFileAlt,
  FaCamera,
  FaStethoscope,
} from "react-icons/fa";

const DOC_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  FaFileAlt,
  FaStethoscope,
  FaPassport,
  FaCamera,
};

export interface DocItemBase {
  title: string;
  icon: string;
}

export interface DocumentsRequiredSectionProps {
  docItems: DocItemBase[];
  countryName?: string;
  countryAdjective?: string;
}

export default function DocumentsRequiredSection({
  docItems,
  countryName = "Russia",
  countryAdjective = "Russian",
}: DocumentsRequiredSectionProps) {
  return (
    <section
      id="documents-required"
      className=" py-14 md:py-18 bg-[#f9fafb] scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex justify-center items-center w-full min-h-[280px] sm:min-h-[360px] lg:min-h-0 lg:h-full">
            <div className="relative w-full max-w-[240px] h-[320px] sm:max-w-[300px] sm:h-[400px] lg:max-w-[350px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b1b1c] via-[#0a3d40] to-[#00999E] shadow-xl shrink-0">
              <div
                className="absolute inset-x-0 top-0 h-[70%] w-full"
                style={{
                  clipPath: "ellipse(90% 85% at 50% -15%)",
                  background: "linear-gradient(180deg, #e0f7f8 0%, #b8e8ea 50%, rgba(0,153,158,0.3) 100%)",
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center pt-[6%]"
                style={{ clipPath: "ellipse(75% 80% at 50% 6%)" }}
              >
                <div className="relative w-[85%] aspect-[3/4] max-h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#b8e8ea] to-[#00999E]/30 pl-2">
                  <Image
                    src={fDoctorImage}
                    alt="Student preparing documents for MBBS in Russia"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 350px"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pt-2">
            <h2 className="font-sans text-xl sm:text-2xl md:text-4xl font-[700] text-gray-900">
              Documents Required to{" "}
              <span className="text-[#00999E]">Study</span> MBBS in {countryName}
            </h2>
            <p className="text-gray-600 mt-5 text-sm md:text-base leading-relaxed max-w-2xl">
              To apply for <span className="text-[#00999E] font-bold">MBBS in {countryName}</span>, students must submit a set of academic,
              identification, and visa-related documents that comply with the
              requirements of the university and relevant government authorities,
              especially the <span className="text-[#00999E] font-bold">National Medical Commission (NMC)</span> and the <span className="text-[#00999E] font-bold">{countryAdjective} Ministry of Education</span>. Here is the list of required documents.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
              {docItems.map((doc) => {
                const Icon = DOC_ICONS[doc.icon];
                return (
                  <div
                    key={doc.title}
                    className="rounded-xl bg-white border border-gray-200 shadow-sm px-4 py-4 flex items-center gap-3 min-h-[88px]"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#e0f7f8] text-[#00999E] flex items-center justify-center shrink-0">
                      {Icon ? <Icon className="h-5 w-5" /> : null}
                    </div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {doc.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
