"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import {
  FaBookOpen,
  FaBrain,
  FaBriefcase,
  FaChartBar,
  FaCog,
  FaGlobeAmericas,
  FaGraduationCap,
  FaHospital,
  FaHotel,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPalette,
  FaPaperPlane,
  FaRobot,
  FaShieldAlt,
  FaStar,
  FaTruck,
  FaUserNurse,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import ModalTrigger from "@/components/ModalTrigger";
import ScrollableSlider, {
  SCROLLABLE_SLIDE_COURSES_GRID_CLASS,
  SCROLLABLE_TRACK_COURSES_CLASS,
} from "@/components/study-abroad/new-changes/ScrollableSlider";
import {
  popularCoursesContent,
  type PopularCourseItem,
} from "@/constants/study_abroad/popularCourses";

type SvgIconProps = { className?: string };

const COURSE_ICONS: Record<string, ComponentType<SvgIconProps>> = {
  business: FaBriefcase,
  mba: FaGraduationCap,
  dataScience: FaChartBar,
  ai: FaRobot,
  engineering: FaCog,
  computerScience: FaLaptopCode,
  cybersecurity: FaShieldAlt,
  hospitality: FaHotel,
  healthcare: FaHospital,
  nursing: FaUserNurse,
  publicHealth: FiGlobe,
  finance: FaMoneyBillWave,
  supplyChain: FaTruck,
  design: FaPalette,
  psychology: FaBrain,
  education: FaBookOpen,
};

const HIGHLIGHT_PHRASE = "In-Demand Courses";
const MOBILE_GRID_SIZE = 4;

function chunkCourses<T>(items: readonly T[], size: number): T[][] {
  const slides: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slides.push(items.slice(i, i + size));
  }
  return slides;
}

type BackgroundFaDeco = {
  Icon: ComponentType<SvgIconProps>;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  sizeClass: string;
  opacity: number;
  rotate?: number;
  scaleX?: -1;
  wrapperClassName?: string;
};

const BACKGROUND_FA_DECO_MOBILE: BackgroundFaDeco[] = [
  { Icon: FaPaperPlane, top: "2%", right: "2%", sizeClass: "h-7 w-7", opacity: 0.16, rotate: -28, wrapperClassName: "sm:hidden" },
  { Icon: FaPaperPlane, bottom: "4%", left: "1%", sizeClass: "h-6 w-6", opacity: 0.12, rotate: 32, scaleX: -1 as const, wrapperClassName: "sm:hidden" },
  { Icon: FaGlobeAmericas, top: "14%", left: "-2%", sizeClass: "h-9 w-9", opacity: 0.06, wrapperClassName: "sm:hidden" },
  { Icon: FaGraduationCap, bottom: "10%", right: "1%", sizeClass: "h-8 w-8", opacity: 0.08, rotate: 12, wrapperClassName: "sm:hidden" },
  { Icon: FaStar, top: "5%", left: "4%", sizeClass: "h-1.5 w-1.5", opacity: 0.28, wrapperClassName: "sm:hidden" },
  { Icon: FaStar, top: "4%", right: "14%", sizeClass: "h-2 w-2", opacity: 0.22, wrapperClassName: "sm:hidden" },
  { Icon: FaStar, top: "22%", left: "3%", sizeClass: "h-1.5 w-1.5", opacity: 0.24, wrapperClassName: "sm:hidden" },
  { Icon: FaStar, top: "28%", right: "3%", sizeClass: "h-1.5 w-1.5", opacity: 0.26, wrapperClassName: "sm:hidden" },
  { Icon: FaStar, bottom: "22%", left: "4%", sizeClass: "h-2 w-2", opacity: 0.22, wrapperClassName: "sm:hidden" },
  { Icon: FaStar, bottom: "18%", right: "5%", sizeClass: "h-1.5 w-1.5", opacity: 0.24, wrapperClassName: "sm:hidden" },
];

const BACKGROUND_FA_DECO: BackgroundFaDeco[] = [
  { Icon: FaPaperPlane, top: "3%", right: "5%", sizeClass: "h-12 w-12 sm:h-16 sm:w-16", opacity: 0.22, rotate: -28, wrapperClassName: "hidden sm:block" },
  { Icon: FaPaperPlane, top: "12%", right: "18%", sizeClass: "h-7 w-7 sm:h-9 sm:w-9", opacity: 0.12, rotate: -15, wrapperClassName: "hidden sm:block" },
  { Icon: FaPaperPlane, bottom: "8%", left: "3%", sizeClass: "h-10 w-10 sm:h-12 sm:w-12", opacity: 0.18, rotate: 32, scaleX: -1 as const, wrapperClassName: "hidden sm:block" },
  { Icon: FaGlobeAmericas, top: "18%", left: "2%", sizeClass: "h-14 w-14 sm:h-20 sm:w-20", opacity: 0.08, wrapperClassName: "hidden sm:block" },
  { Icon: FaGraduationCap, bottom: "14%", right: "8%", sizeClass: "h-11 w-11 sm:h-14 sm:w-14", opacity: 0.1, rotate: 12, wrapperClassName: "hidden sm:block" },
  { Icon: FaStar, top: "6%", left: "6%", sizeClass: "h-2.5 w-2.5", opacity: 0.35 },
  { Icon: FaStar, top: "10%", left: "20%", sizeClass: "h-3 w-3", opacity: 0.25 },
  { Icon: FaStar, top: "14%", left: "44%", sizeClass: "h-2 w-2", opacity: 0.4 },
  { Icon: FaStar, top: "8%", left: "64%", sizeClass: "h-2.5 w-2.5", opacity: 0.3 },
  { Icon: FaStar, top: "11%", left: "90%", sizeClass: "h-3.5 w-3.5", opacity: 0.28 },
  { Icon: FaStar, top: "24%", left: "7%", sizeClass: "h-2 w-2", opacity: 0.32 },
  { Icon: FaStar, top: "30%", right: "2%", sizeClass: "h-2.5 w-2.5", opacity: 0.35 },
  { Icon: FaStar, top: "40%", left: "2%", sizeClass: "h-3 w-3", opacity: 0.22 },
  { Icon: FaStar, top: "46%", right: "14%", sizeClass: "h-2 w-2", opacity: 0.3 },
  { Icon: FaStar, top: "56%", left: "12%", sizeClass: "h-2.5 w-2.5", opacity: 0.28 },
  { Icon: FaStar, top: "64%", left: "50%", sizeClass: "h-2 w-2", opacity: 0.25 },
  { Icon: FaStar, top: "72%", right: "6%", sizeClass: "h-3 w-3", opacity: 0.3 },
  { Icon: FaStar, top: "80%", left: "5%", sizeClass: "h-2.5 w-2.5", opacity: 0.32 },
  { Icon: FaStar, top: "86%", left: "36%", sizeClass: "h-2 w-2", opacity: 0.26 },
  { Icon: FaStar, top: "90%", left: "60%", sizeClass: "h-3 w-3", opacity: 0.24 },
  { Icon: FaStar, top: "88%", right: "4%", sizeClass: "h-2.5 w-2.5", opacity: 0.3, wrapperClassName: "hidden sm:block" },
].map((item) =>
  item.Icon === FaStar && !item.wrapperClassName
    ? { ...item, wrapperClassName: "hidden sm:block" }
    : item,
);

function BackgroundFaIcon(props: BackgroundFaDeco) {
  const { Icon, top, bottom, left, right, sizeClass, opacity, rotate = 0, scaleX, wrapperClassName } =
    props;

  return (
    <div
      className={`absolute text-[#0fb3a9] ${wrapperClassName ?? ""}`}
      style={{
        top,
        bottom,
        left,
        right,
        opacity,
        transform: `rotate(${rotate}deg)${scaleX === -1 ? " scaleX(-1)" : ""}`,
      }}
    >
      <Icon className={`${sizeClass} drop-shadow-[0_0_8px_rgba(15,179,169,0.25)]`} aria-hidden />
    </div>
  );
}

function CoursesBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(15,179,169,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(15,179,169,0.08) 0%, transparent 50%), radial-gradient(ellipse 50% 35% at 0% 80%, rgba(13,148,136,0.1) 0%, transparent 45%), linear-gradient(180deg, #f8fffe 0%, #f0fdfa 50%, #ecf9f6 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-25 [background-size:22px_22px] sm:opacity-[0.35] sm:[background-size:28px_28px]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(15,179,169,0.18) 1px, transparent 1px)",
        }}
      />

      {[...BACKGROUND_FA_DECO_MOBILE, ...BACKGROUND_FA_DECO].map((item, i) => (
        <BackgroundFaIcon key={`fa-deco-${i}`} {...item} />
      ))}

      <div className="absolute left-1/2 top-[8%] h-px w-[min(90%,680px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0fb3a9]/35 to-transparent" />
      <div className="absolute -left-16 top-[18%] h-48 w-48 rounded-full bg-[#0fb3a9]/10 blur-3xl sm:-left-24 sm:top-[20%] sm:h-72 sm:w-72" />
      <div className="absolute -right-12 bottom-[6%] h-40 w-40 rounded-full bg-[#14b8a6]/8 blur-3xl sm:-right-20 sm:bottom-[8%] sm:h-64 sm:w-64" />
      <div className="absolute left-1/2 top-[5%] h-12 w-[min(88%,560px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(15,179,169,0.12)_0%,transparent_70%)] blur-2xl sm:top-[6%] sm:h-20 sm:w-[min(80%,560px)]" />

      <div className="absolute right-[18%] top-[42%] hidden h-24 w-px bg-gradient-to-b from-transparent via-[#0fb3a9]/20 to-transparent sm:block" />
      <div className="absolute left-[12%] top-[48%] hidden h-px w-32 bg-gradient-to-r from-transparent via-[#0fb3a9]/25 to-transparent sm:block" />
    </div>
  );
}

function CourseCard({ course }: { course: PopularCourseItem }) {
  const Icon = COURSE_ICONS[course.id] ?? FaBookOpen;

  return (
    <article className="group relative z-0 min-h-[132px] overflow-hidden rounded-xl border border-[#1e293b]/20 text-center shadow-[0_4px_20px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out active:scale-[0.98] sm:min-h-[168px] sm:rounded-2xl sm:hover:z-10 sm:hover:-translate-y-1 sm:hover:border-[#0fb3a9]/60 sm:hover:shadow-[0_14px_40px_rgba(15,179,169,0.35)]">
      <div className="absolute inset-0 bg-[#1e3a4a]" aria-hidden />

      <Image
        src={course.imgSrc}
        alt={course.label}
        fill
        unoptimized
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-500 ease-out sm:group-hover:scale-105"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/75 transition-colors duration-300 group-hover:from-[#0fb3a9]/70 group-hover:via-[#0a9d94]/80 group-hover:to-[#0d9488]/90"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-[132px] flex-col items-center justify-center px-2 py-4 sm:min-h-[168px] sm:px-4 sm:py-7">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 ring-1 ring-inset ring-white/25 backdrop-blur-[2px] transition-transform duration-300 sm:h-14 sm:w-14 sm:rounded-xl sm:group-hover:scale-105">
          <Icon className="h-5 w-5 text-white sm:h-[26px] sm:w-[26px]" aria-hidden />
        </span>
        <h3 className="mt-2.5 line-clamp-2 text-[11px] font-semibold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-snug">
          {course.label}
        </h3>
      </div>
    </article>
  );
}

function MobileCourseCard({ course }: { course: PopularCourseItem }) {
  const Icon = COURSE_ICONS[course.id] ?? FaBookOpen;

  return (
    <article className="relative aspect-[5/4] w-full overflow-hidden rounded-xl border border-[#1e293b]/20 text-center shadow-[0_4px_20px_rgba(15,23,42,0.12)] active:scale-[0.98]">
      <div className="absolute inset-0 bg-[#1e3a4a]" aria-hidden />

      <Image
        src={course.imgSrc}
        alt={course.label}
        fill
        unoptimized
        sizes="45vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75"
        aria-hidden
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 px-2 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 ring-1 ring-inset ring-white/25 backdrop-blur-[2px]">
          <Icon className="h-4 w-4 text-white" aria-hidden />
        </span>
        <h3 className="line-clamp-2 text-[10px] font-semibold leading-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          {course.label}
        </h3>
      </div>
    </article>
  );
}

function CourseSlideGrid({ slideCourses }: { slideCourses: PopularCourseItem[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-2.5">
      {slideCourses.map((course) => (
        <MobileCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default function PopularCourses() {
  const { eyebrow, heading, description, courses, ctaText } = popularCoursesContent;
  const mobileSlides = chunkCourses(courses, MOBILE_GRID_SIZE);
  const highlightIdx = heading.indexOf(HIGHLIGHT_PHRASE);
  const headingBefore = highlightIdx >= 0 ? heading.slice(0, highlightIdx) : heading;
  const headingAfter =
    highlightIdx >= 0 ? heading.slice(highlightIdx + HIGHLIGHT_PHRASE.length) : "";

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      <CoursesBackground />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0fb3a9]/25 bg-white/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#078a86] shadow-sm backdrop-blur-sm sm:text-[11px]">
            <span className="text-[#0fb3a9]" aria-hidden>
              ✦
            </span>
            {eyebrow}
          </p>

          <h2 className="mt-5 text-xl font-extrabold leading-tight tracking-[-0.02em] text-[#071b3a] sm:mt-7 sm:text-3xl sm:leading-[1.2] lg:text-[2rem] xl:text-[2.125rem]">
            {headingBefore}
            {highlightIdx >= 0 ? (
              <span className="bg-gradient-to-r from-[#0fb3a9] to-[#0d9488] bg-clip-text text-transparent">
                {HIGHLIGHT_PHRASE}
              </span>
            ) : null}
            {headingAfter}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#506070] sm:mt-5 sm:text-base">
            {description}
          </p>
        </header>

        <ScrollableSlider
          className="mt-8 w-full sm:hidden"
          total={mobileSlides.length}
          ariaLabel="Popular courses"
          autoplayMs={4800}
          bleedOnMobile={false}
          trackClassName={SCROLLABLE_TRACK_COURSES_CLASS}
          dotsClassName="mt-6 flex justify-center gap-2"
          dotActiveClassName="w-7 bg-[#0fb3a9]"
          dotInactiveClassName="w-2 bg-[#0fb3a9]/30 hover:bg-[#0fb3a9]/50"
        >
          {(setSlideRef) =>
            mobileSlides.map((slideCourses, index) => (
              <div
                key={`courses-slide-${index}`}
                ref={setSlideRef(index)}
                className={SCROLLABLE_SLIDE_COURSES_GRID_CLASS}
              >
                <CourseSlideGrid slideCourses={slideCourses} />
              </div>
            ))
          }
        </ScrollableSlider>

        <div className="mx-auto mt-8 hidden max-w-6xl grid-cols-2 gap-2.5 sm:mt-12 sm:grid sm:gap-4 md:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-12">
          <ModalTrigger
            variant="custom"
            className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0fb3a9] to-[#0d9488] px-8 py-3.5 text-center text-sm font-bold text-white shadow-[0_12px_40px_rgba(15,179,169,0.3)] transition hover:brightness-105 sm:w-auto sm:py-4 sm:text-[15px]"
            redirectPath="/thankyou"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </ModalTrigger>
        </div>
      </div>
    </section>
  );
}
