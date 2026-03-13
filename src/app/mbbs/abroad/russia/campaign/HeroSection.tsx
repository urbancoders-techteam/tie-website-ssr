import Image from "next/image";
import ModalTrigger from "@/components/ModalTrigger";
import heroImage from "@/assets/mbbs_russia.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black md:min-h-[560px]">
      {/* Mobile only: tagline + heading above the image */}
      <div className="md:hidden relative z-10 bg-gray-900 px-4 pt-6 pb-4">
        <p className="text-[11px] sm:text-sm tracking-widest uppercase text-[#5dd4d9] font-bold">
          Your ambition. Our expertise. Confirmed admits.
        </p>
        <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white leading-tight mt-1">
          Study MBBS in <span className="text-[#5dd4d9]">Russia</span> with
          expert guidance
        </h1>
      </div>
      {/* Image: on mobile = below the text block; on md+ = full background with overlay */}
      <div className="relative h-[42vh] min-h-[260px] max-h-[340px] md:absolute md:inset-0 md:h-auto md:min-h-0 md:max-h-none">
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover object-top md:object-center"
          sizes="100vw"
          priority
          aria-hidden
        />
        <div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-gray-900/75 from-40% via-gray-900/40 to-transparent"
          aria-hidden
        />
      </div>
      {/* Content: on mobile below image with solid bg; on md+ over image */}
      <div className="relative z-10 flex flex-col justify-center bg-gray-900 md:bg-transparent md:absolute md:inset-0 md:min-h-[560px]">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="space-y-4 sm:space-y-6">
            {/* Tagline + heading: hidden on mobile (shown above image); visible md+ */}
            <div className="hidden md:block">
              <p className="text-[11px] sm:text-sm tracking-widest uppercase text-[#5dd4d9] font-bold">
                Your ambition. Our expertise. Confirmed admits.
              </p>
              <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Study MBBS in <span className="text-[#5dd4d9]">Russia</span> with
                expert guidance
              </h1>
            </div>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
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

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-2 text-xs sm:text-sm text-gray-300">
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

            <div className="flex flex-col sm:flex-row gap-3 pt-1" id="apply">
              <ModalTrigger text="BOOK YOUR FREE COUNSELLING" className="text-white" redirectPath="/mbbs/abroad/russia/campaign/thankyou" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
