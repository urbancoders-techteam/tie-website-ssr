"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import HeadingTypography from "@/components/Heading";
import { PartnerUniversitiesData } from "@/constants/internation-relation";
import Link from "next/link";
import ContainerWrapper from "../ContainerWrapper";

const CARD_STEP = 246;

const PartnerUniversitiesPage = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      event.preventDefault();
      el.scrollLeft += event.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      if (pausedRef.current || dragRef.current.active) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 8) return;
      const next = el.scrollLeft + CARD_STEP;
      el.scrollTo({
        left: next >= max - 4 ? 0 : next,
        behavior: "smooth",
      });
    }, 2800);

    return () => window.clearInterval(id);
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || event.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const el = scrollerRef.current;
    if (!drag.active || !el) return;
    const dx = event.clientX - drag.startX;
    if (Math.abs(dx) < 8) return;
    drag.moved = true;
    if (!el.hasPointerCapture(event.pointerId)) {
      el.setPointerCapture(event.pointerId);
    }
    el.scrollLeft = drag.scrollLeft - dx;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    dragRef.current.active = false;
    if (el?.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  const onClickCapture = (event: React.MouseEvent) => {
    if (!dragRef.current.moved) return;
    event.preventDefault();
    event.stopPropagation();
    dragRef.current.moved = false;
  };


  return (
    <section className=" py-12 text-center">
      <ContainerWrapper>
        <HeadingTypography
          content="Our Partner Universities"
          textAlign="center"
        />
        <div
          className="mt-10"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            window.setTimeout(() => {
              pausedRef.current = false;
            }, 2500);
          }}
        >
         
          <div
            ref={scrollerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={onClickCapture}
            className="flex gap-4 overflow-x-auto overscroll-x-contain pb-4 cursor-grab active:cursor-grabbing [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0A9DA2]/40"
          >
            {PartnerUniversitiesData.map((uni, i) => (
              <div key={i} className="my-4 shrink-0">
                <Link href={uni.path} target="_blank" rel="noopener noreferrer">
                  <div className="w-[230px] h-[260px] bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div className="flex-1 flex items-center justify-center p-4">
                      <Image
                        src={uni.Image}
                        alt={uni.title}
                        width={200}
                        height={200}
                        className="object-contain max-h-[100px] pointer-events-none"
                      />
                    </div>
                    <div className="bg-[#0A9DA2] text-white py-3 px-2 text-sm font-semibold text-center">
                      {uni.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default PartnerUniversitiesPage;
