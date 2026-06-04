"use client";

import {
  MdAccountBalance,
  MdArchitecture,
  MdBarChart,
  MdBusinessCenter,
  MdComputer,
  MdEngineering,
  MdGavel,
  MdLightbulb,
  MdLocalHospital,
  MdPsychology,
} from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import {
  CountryMarkupTable,
  CountryFeaturedFigure,
  CountryProTipNote,
  CountrySectionHeading,
  CountrySectionIntro,
  CountrySubsectionTitle,
  CountryTableBlock,
  CountryTableBodyStriped,
  CountryTableCell,
  CountryTableHead,
  CountryTableHeaderCell,
  CountryTableWrap,
  countrySectionShell,
} from "./countrySectionUi";

export type TopCourseIcon =
  | "dataScience"
  | "ai"
  | "mba"
  | "cs"
  | "engineering"
  | "finance"
  | "law"
  | "health"
  | "design";

export type TopCourseCard = {
  icon: TopCourseIcon;
  title: string;
  description: string;
};

export type TopCoursesFeaturedImage = {
  src: string;
  alt: string;
  caption: string;
};

export type UniversityByCourseRow = {
  course: string;
  universities: string;
  approxFees: string;
};

export type TopCoursesProTip = {
  label: string;
  text: string;
};

export type TopCoursesUniversitiesByCourse = {
  title: string;
  rows: UniversityByCourseRow[];
};

export type TopCoursesProps = {
  id?: string;
  title: string;
  intro: string[];
  featuredImage: TopCoursesFeaturedImage;
  gridTitle: string;
  courses: TopCourseCard[];
  universitiesByCourse?: TopCoursesUniversitiesByCourse;
  proTip?: TopCoursesProTip;
  className?: string;
};

function CourseIcon({ type }: { type: TopCourseIcon }) {
  const className = "h-6 w-6";
  switch (type) {
    case "dataScience":
      return <MdBarChart className={`${className} text-sky-600`} aria-hidden />;
    case "ai":
      return <SiTensorflow className={`${className} text-violet-600`} aria-hidden />;
    case "mba":
      return <MdBusinessCenter className={`${className} text-amber-700`} aria-hidden />;
    case "cs":
      return <MdComputer className={`${className} text-blue-600`} aria-hidden />;
    case "engineering":
      return <MdEngineering className={`${className} text-slate-600`} aria-hidden />;
    case "finance":
      return <MdAccountBalance className={`${className} text-emerald-700`} aria-hidden />;
    case "law":
      return <MdGavel className={`${className} text-stone-700`} aria-hidden />;
    case "health":
      return <MdLocalHospital className={`${className} text-rose-600`} aria-hidden />;
    case "design":
      return <MdArchitecture className={`${className} text-orange-600`} aria-hidden />;
    default:
      return <MdPsychology className={`${className} text-teal-600`} aria-hidden />;
  }
}

function UniversitiesByCourseTable({
  title,
  rows,
}: {
  title: string;
  rows: UniversityByCourseRow[];
}) {
  if (!rows.length) return null;

  return (
    <CountryTableBlock title={title} className="mt-7 lg:mt-4">
      <CountryTableWrap>
        <CountryMarkupTable>
          <CountryTableHead>
            <tr>
              <CountryTableHeaderCell className="w-[26%] lg:w-[24%]">
                Course / Subject
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[44%] lg:w-[46%]">
                Top UK Universities
              </CountryTableHeaderCell>
              <CountryTableHeaderCell className="w-[30%] text-right">
                Approx Annual Fees
              </CountryTableHeaderCell>
            </tr>
          </CountryTableHead>
          <CountryTableBodyStriped>
            {rows.map((row) => (
              <tr key={row.course}>
                <CountryTableCell className="font-medium text-slate-600">
                  {row.course}
                </CountryTableCell>
                <CountryTableCell>{row.universities}</CountryTableCell>
                <CountryTableCell className="text-right whitespace-nowrap text-slate-700 max-lg:whitespace-normal">
                  {row.approxFees}
                </CountryTableCell>
              </tr>
            ))}
          </CountryTableBodyStriped>
        </CountryMarkupTable>
      </CountryTableWrap>
    </CountryTableBlock>
  );
}

export default function TopCourses({
  id = "country-top-courses",
  title,
  intro,
  featuredImage,
  gridTitle,
  courses,
  universitiesByCourse,
  proTip,
  className = "",
}: TopCoursesProps) {
  if (!courses.length) return null;

  return (
    <section id={id} className={countrySectionShell(className)}>
      <CountrySectionHeading title={title} className="mb-4 lg:mb-2.5" />

      <CountrySectionIntro paragraphs={intro} />

      <CountryFeaturedFigure
        src={featuredImage.src}
        alt={featuredImage.alt}
        caption={featuredImage.caption}
        captionCentered
      />

      <CountrySubsectionTitle>{gridTitle}</CountrySubsectionTitle>

      <ul
        className="grid min-w-0 grid-cols-1 gap-3.5 min-[480px]:grid-cols-2 min-[480px]:gap-3 lg:grid-cols-3 lg:gap-3.5"
        role="list"
      >
        {courses.map((course) => (
          <li
            key={course.title}
            className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-4 lg:px-3 lg:py-3"
            role="listitem"
          >
            <div className="mb-2.5 flex h-9 w-9 items-center justify-center lg:mb-2 lg:h-8 lg:w-8">
              <CourseIcon type={course.icon} />
            </div>
            <h4 className="text-[0.95rem] font-bold leading-snug text-[#002147] lg:text-[0.875rem]">
              {course.title}
            </h4>
            <p className="mt-1.5 text-[0.8125rem] leading-snug text-slate-500 lg:mt-1 lg:text-xs lg:leading-normal">
              {course.description}
            </p>
          </li>
        ))}
      </ul>

      {universitiesByCourse && (
        <UniversitiesByCourseTable
          title={universitiesByCourse.title}
          rows={universitiesByCourse.rows}
        />
      )}

      {proTip && (
        <CountryProTipNote
          label={proTip.label}
          text={proTip.text}
          icon={MdLightbulb}
        />
      )}
    </section>
  );
}
