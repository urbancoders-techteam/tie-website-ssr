"use client";

import ContainerWrapper from "@/components/ContainerWrapper";
import type { BlogCategoryTab } from "@/lib/blog/types";
import { useStickyChromeOffset } from "@/hooks/useStickyChromeOffset";

const ACTIVE_TEAL = "#00B2B8";

export default function BlogCategoryTabs({
  tabs,
  activeTabId,
  onSelectTab,
}: {
  tabs: BlogCategoryTab[];
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
}) {
  const stickyTop = useStickyChromeOffset();

  return (
    <section
      className="sticky z-[1090] border-b border-slate-200 bg-white shadow-[0_4px_16px_-6px_rgba(15,23,42,0.08)]"
      style={{ top: stickyTop }}
    >
      <ContainerWrapper>
        <div className="-mb-px overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center justify-center gap-6 px-2 py-2 sm:gap-8 sm:px-4 sm:py-2.5 lg:gap-10">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectTab(tab.id)}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative flex shrink-0 items-center gap-2 pb-2 pt-0.5 transition-colors"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full transition-colors"
                    style={{ backgroundColor: isActive ? ACTIVE_TEAL : tab.dotColor }}
                    aria-hidden
                  />
                  <span
                    className={`whitespace-nowrap text-sm font-semibold transition-colors sm:text-[15px] ${
                      isActive
                        ? "text-[#00B2B8]"
                        : "text-[#4a5568] group-hover:text-[#00B2B8]"
                    }`}
                  >
                    {tab.label}
                  </span>
                  {isActive ? (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-[#00B2B8]"
                      aria-hidden
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
