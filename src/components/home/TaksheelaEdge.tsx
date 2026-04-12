

// import Image from "next/image";
// import HeadingTypography from "../Heading";
// import { taksheelaEdge } from "@/constants/home";
// import ContainerWrapper from "../ContainerWrapper";
// import { imageBaseUrl } from "@/utils/config";
// import { Metadata } from "next";

// const pic = imageBaseUrl + 'homeedge.jpg'; 

// export const metadata: Metadata = {
//   title: "Taksheela Edge - Why Choose Us",
//   description:
//     "Explore the unique advantages of Taksheela Institute. Learn how our global network, expert mentorship, and personalized approach give students the edge to succeed internationally.",
// };



// const TaksheelaEdge = () => {
//   return (
//     <section id="taksheela-edge-section" className="bg-[#effdff] w-full py-10 my-16">
//       <ContainerWrapper>
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
//           {/* Left Image */}
//           <div className="w-full lg:w-1/2 flex justify-center">
//             <Image
//               src={pic}
//               alt="Taksheela Edge"
//               width={600}
//               height={400}
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* Right Content */}
//           <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
//             <HeadingTypography
//               content="Taksheela Edge"
//               textAlign="center"

//             />
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full px-4 sm:px-0">
//               {taksheelaEdge.map((item, index) => (
//                 <div
//                   key={index}
//                   className="cursor-pointer rounded-md m-1 bg-[#5cd2d6] text-white transition-all duration-300 hover:bg-white hover:text-black shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-4"
//                 >
//                   <div className="text-base sm:text-lg md:text-lg lg:text-lg font-bold">
//                     {item.heading}
//                   </div>
//                   <p className="text-xs sm:text-sm md:text-base lg:text-base font-normal text-left mt-2">
//                     {item.subheading}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="mt-10 w-full flex justify-center">
//           <a
//             href="https://www.taksheela.com/contact"
//             className="bg-[#00999E] hover:bg-[#00777E] text-white px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow-md transition"
//           >
//             Talk to an Expert Now
//           </a>
//         </div>
//       </ContainerWrapper>
//     </section>
//   );
// };

// export default TaksheelaEdge;

import Link from "next/link";
import {
  FaCalculator,
  FaClipboardCheck,
  FaGlobe,
  FaHandshake,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import ContainerWrapper from "../ContainerWrapper";
import { taksheelaEdge } from "@/constants/home";

const TEAL = "#00a88f";
const ICON_BOX =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00a88f]/25 bg-[#00a88f]/12 sm:h-14 sm:w-14";

function FeatureIcon({
  name,
  accent,
}: {
  name: string;
  accent: "gold" | "teal";
}) {
  const color = accent === "gold" ? "text-amber-500" : "text-[#00a88f]";
  const cls = `h-6 w-6 sm:h-7 sm:w-7 ${color}`;
  switch (name) {
    case "trophy":
      return <FaTrophy className={cls} aria-hidden />;
    case "calculator":
      return <FaCalculator className={cls} aria-hidden />;
    case "users":
      return <FaUsers className={cls} aria-hidden />;
    case "handshake":
      return <FaHandshake className={cls} aria-hidden />;
    case "clipboardCheck":
      return <FaClipboardCheck className={cls} aria-hidden />;
    case "globe":
      return <FaGlobe className={cls} aria-hidden />;
    default:
      return null;
  }
}

export default function TaksheelaEdge() {
  const { eyebrow, title, subtitle, cta, features } = taksheelaEdge;

  return (
    <section
      id="taksheela-edge-section"
      className="w-full py-12 md:py-14 lg:py-16 xl:py-[4.5rem]"
    >
      <ContainerWrapper>
        <header className="mx-auto max-w-4xl text-center">
          <p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#00a88f] sm:text-xs"
          >
            <span className="text-[#00a88f]/70" aria-hidden>
              —
            </span>{" "}
            {eyebrow}{" "}
            <span className="text-[#00a88f]/70" aria-hidden>
              —
            </span>
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight text-[#0f2744] sm:text-3xl md:text-[1.85rem] lg:text-[2rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] md:text-base">
            {subtitle}
          </p>
        </header>

        <ul className="mt-10 grid list-none grid-cols-1 gap-5 sm:gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const gold = item.icon === "trophy" || item.icon === "handshake";
            return (
              <li
                key={item.id}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_24px_-12px_rgba(15,39,68,0.12)] sm:p-6"
              >
                <div className={ICON_BOX}>
                  <FeatureIcon name={item.icon} accent={gold ? "gold" : "teal"} />
                </div>
                <h3 className="mt-4 text-left text-base font-bold leading-snug text-[#0f2744] sm:text-lg">
                  {item.heading}
                </h3>
                <p className="mt-2 text-left text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                  {item.subheading}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center gap-1 rounded-lg px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-105 sm:px-10 sm:py-4 sm:text-base"
            style={{ backgroundColor: TEAL }}
          >
            {cta.label}
            <span aria-hidden className="text-lg font-light">
              ›
            </span>
          </Link>
        </div>
      </ContainerWrapper>
    </section>
  );
}
