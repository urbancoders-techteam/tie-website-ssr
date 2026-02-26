import React from "react";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";

interface LetsStartProps {
  top?: string;
  bottom?: string;
  marginBottom?: string;
  marginTop?: string;
}

const LetsStart: React.FC<LetsStartProps> = ({
  top,
  bottom,
  marginBottom,
  marginTop,
}) => {
  return (
    <ContainerWrapper>
      <div
        className={`  ${marginTop ?? "mt-8"} ${marginBottom ?? "mb-16"}`}
        style={{ position: "relative", top, bottom }}
      >
        <div className="w-full rounded-[10px] flex flex-col sm:flex-row justify-between items-center gap-8 sm:px-10 py-6 bg-gradient-to-r from-[#00999e55] to-[#00999e33]">
          {/* Text */}
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[35px] font-medium text-center sm:text-left pl-2">
            So, what are you waiting for?
          </h2>

          {/* CTA Button */}
          <Link href="/contact" className="cursor-pointer ">
            <button className="cursor-pointer w-[200px] sm:w-[280px] md:w-[400px] lg:w-[420px] h-[40px] sm:h-[40px] md:h-[45px] lg:h-[50px] font-bold text-white text-[13px] md:text-[15px] bg-[#00999e] hover:bg-[#007a76] transition-all rounded">
              Let&apos;s Get Started
            </button>
          </Link>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default LetsStart;
