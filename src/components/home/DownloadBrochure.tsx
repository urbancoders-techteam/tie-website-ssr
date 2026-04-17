"use client";
import { Icon } from "@iconify/react";

export default function DownloadBrochure() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/Taksheela-Brochure.pdf";
    link.setAttribute("download", "Taksheela Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="my-8 flex justify-center px-4 sm:px-6">
      <button
        onClick={handleDownload}
        className="flex min-h-[58px] w-full max-w-[520px] cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#00999E] bg-[#00999E] px-4 py-3 text-[14px] font-bold capitalize text-white transition-all duration-300 hover:bg-[#00999E] xs:text-[15px] sm:min-h-[64px] sm:gap-2.5 sm:px-5 sm:text-[17px] md:min-h-[72px] md:text-[20px]"
      >
        <span className="text-center leading-snug">
          Download Free Study Abroad Brochure
        </span>
        <Icon
          icon="eva:download-fill"
          className="ml-1 h-6 w-6 shrink-0 sm:h-7 sm:w-7 md:ml-2 md:h-9 md:w-9"
        />
      </button>
    </div>
  );
}
