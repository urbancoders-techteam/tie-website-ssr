'use client'
import { Icon } from "@iconify/react";

export default function DownloadBrochure() {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = '/images/Taksheela-Brochure.pdf';
        link.setAttribute("download", "Taksheela Brochure.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div className="my-8 flex justify-center">
      <button
        onClick={handleDownload}
        className="cursor-pointer w-[420px] sm:w-[520px] h-[72px] px-4 flex flex-wrap items-center justify-center gap-3 text-white text-[18px] sm:text-[20px] font-bold capitalize rounded-full bg-[#00999E] border-2 border-[#00999E] transition-all duration-300 hover:bg-[#00999E]"
      >
        <span className="text-center whitespace-normal leading-snug px-2">
          Download Free Study Abroad Brochure
        </span>
        <Icon icon="eva:download-fill" fontSize={40} className="ml-2 shrink-0" />
      </button>
    </div>
  );
}

