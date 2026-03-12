import Image from "next/image";
import ModalTrigger from "@/components/ModalTrigger";
import heroImage from "@/assets/mbbs_russia.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[520px] md:min-h-[560px]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover object-right"
          sizes="100vw"
          priority
          aria-hidden
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-900/75 from-40% via-gray-900/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs tracking-widest uppercase text-[#00999E]">
              Your ambition. Our expertise. Confirmed admits.
            </p>
            <h1 className="font-sans text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Study MBBS in <span className="text-[#5dd4d9]">Russia</span> with
              expert guidance
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-xl">
              Make your medical career aspirations a reality with{" "}
              <span className="font-bold text-[#5dd4d9]">MBBS in Russia</span>,
              guided by the experts at{" "}
              <span className="font-bold text-[#5dd4d9]">
                Taksheela Institute of Education
              </span>
              . With years of experience in international education counselling,
              our team helps you navigate the admission process and choose the
              right university for your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-3" id="apply">
              <ModalTrigger text="BOOK YOUR FREE COUNSELLING" />
            </div>

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-gray-300">
              <div>
                <div className="font-semibold text-white">10+ years</div>
                <div>of counselling experience</div>
              </div>
              <div>
                <div className="font-semibold text-white">Trusted</div>
                <div>by 1M+ aspirants</div>
              </div>
              <div>
                <div className="font-semibold text-white">Step-by-step</div>
                <div>admission support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
