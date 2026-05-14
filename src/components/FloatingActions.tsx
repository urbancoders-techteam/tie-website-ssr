"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";

const UNIVERSITY_FINDER_ROUTES = new Set([
  "/study-abroad/university-finder",
  "/study-abroad/university-finder/view",
  "/study-abroad/university-finder/view/compare",
]);

const FloatingActions = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showCTA, setShowCTA] = useState(true);
  const hideUniversityFinderAction = UNIVERSITY_FINDER_ROUTES.has(pathname);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {!hideUniversityFinderAction && (
        <div className="flex gap-3">
          {/* CTA Button */}
          {showCTA && (
            <div className=" bg-gradient-to-r from-[#00999E] to-[#00777E] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-pulse">
              <Icon
                icon="mdi:close"
                className="cursor-pointer"
                onClick={() => setShowCTA(false)}
              />
              <button
                onClick={() => router.push("/study-abroad/university-finder")}
                className="flex items-center gap-2 font-medium cursor-pointer"
              >
                Find Your University
                <Icon icon="mdi:arrow-right" />
              </button>
            </div>
          )}
          <button
            onClick={() => router.push("/study-abroad/university-finder")}
            className="bg-[#00999E] hover:bg-[#00777E] text-white p-2 rounded-md shadow-md cursor-pointer"
          >
            <Icon icon="fa-solid:university" width="28" height="28" />
          </button>
        </div>
      )}
      <div className="flex gap-3">
        {/* Call Button */}
        <a
          href="tel:+919831241212"
          aria-label="Call TIE"
          className="bg-[#1976d2] hover:bg-[#135aa0] text-white p-2 rounded-md shadow-md cursor-pointer"
        >
          <Icon icon="mdi:phone" width="28" height="28" />
        </a>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919831241212"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with TIE on WhatsApp"
          className="bg-[#25D366] hover:bg-[#1ebc5b] text-white p-2 rounded-md shadow-md cursor-pointer"
        >
          <Icon icon="mdi:whatsapp" width="30" height="30" />
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;
