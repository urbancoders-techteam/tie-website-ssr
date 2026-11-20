"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const hideUniversityFinderAction = UNIVERSITY_FINDER_ROUTES.has(pathname);

  useEffect(() => {
    const updateVisibility = () => setShowScrollToTop(window.scrollY > 400);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

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
      <div className="flex items-center">
        {/* Call Button */}
        <a
          href="tel:+919831241212"
          aria-label="Call TIE"
          className="mr-3 bg-[#1976d2] hover:bg-[#135aa0] text-white p-2 rounded-md shadow-md cursor-pointer"
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
        <div
          aria-hidden={!showScrollToTop}
          className={`shrink-0 transition-[width] duration-300 ease-out motion-reduce:transition-none ${showScrollToTop ? "w-[58px]" : "w-0"}`}
        >
          <button
            type="button"
            aria-label="Scroll to top"
            tabIndex={showScrollToTop ? 0 : -1}
            onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
            className={`ml-3 flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full bg-[#00999E] text-white shadow-[0_4px_10px_rgba(0,0,0,0.2)] transition-[opacity,transform,background-color] duration-300 ease-out hover:bg-[#00777E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00999E] motion-reduce:transition-none ${showScrollToTop ? "translate-x-0 scale-100 opacity-100" : "pointer-events-none translate-x-3 scale-90 opacity-0"}`}
          >
            <Icon icon="mdi:arrow-up" width="26" height="26" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingActions;
