"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export type University = {
  id: string;
  name: string;
  initial: string;
  logoColor: string;
  founded: string;
  city: string;
  fees: string;
  description: string;
  image: string;
  readMoreHref: string;
};

const UNIVERSITIES: University[] = [
  {
    id: "omsk",
    name: "Omsk State Medical University",
    initial: "O",
    logoColor: "bg-emerald-600",
    founded: "1920",
    city: "Omsk",
    fees: "$4,500",
    description:
      "Explore MBBS admission at Omsk State Medical University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/omsk-state-medical-university",
  },
  {
    id: "bashkir",
    name: "Bashkir State Medical University",
    initial: "B",
    logoColor: "bg-red-700",
    founded: "1932",
    city: "Ufa",
    fees: "$4,800",
    description:
      "Explore MBBS admission at Bashkir State Medical University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/bashkir-state-medical-university",
  },
  {
    id: "kemerovo-state",
    name: "Kemerovo State University",
    initial: "K",
    logoColor: "bg-amber-600",
    founded: "1974",
    city: "Kemerovo",
    fees: "$4,000",
    description:
      "Explore MBBS admission at Kemerovo State University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1592286927505-d6d9d2c2c67a?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/kemerovo-state-university",
  },
  {
    id: "north-ossetian",
    name: "North Ossetian State Medical Academy",
    initial: "N",
    logoColor: "bg-slate-600",
    founded: "1939",
    city: "Vladikavkaz",
    fees: "$4,200",
    description:
      "Explore MBBS admission at North Ossetian State Medical Academy for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/north-ossetian-state-medical-academy",
  },
  {
    id: "tambov",
    name: "Tambov State University",
    initial: "T",
    logoColor: "bg-blue-700",
    founded: "1917",
    city: "Tambov",
    fees: "$4,200",
    description:
      "Explore MBBS admission at Tambov State University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/tambov-state-university",
  },
  {
    id: "tver",
    name: "Tver State Medical University",
    initial: "T",
    logoColor: "bg-violet-600",
    founded: "1936",
    city: "Tver",
    fees: "$4,400",
    description:
      "Explore MBBS admission at Tver State Medical University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/tver-state-medical-university",
  },
  {
    id: "north-western",
    name: "North Western State Medical University",
    initial: "N",
    logoColor: "bg-cyan-600",
    founded: "1907",
    city: "Saint Petersburg",
    fees: "$5,500",
    description:
      "Explore MBBS admission at North Western State Medical University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/north-western-state-medical-university",
  },
  {
    id: "kemerovo-medical",
    name: "Kemerovo State Medical University",
    initial: "K",
    logoColor: "bg-teal-600",
    founded: "1955",
    city: "Kemerovo",
    fees: "$4,300",
    description:
      "Explore MBBS admission at Kemerovo State Medical University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1592286927505-d6d9d2c2c67a?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/kemerovo-state-medical-university",
  },
  {
    id: "kazan",
    name: "Kazan Federal University",
    initial: "K",
    logoColor: "bg-indigo-600",
    founded: "1804",
    city: "Kazan",
    fees: "$5,200",
    description:
      "Explore MBBS admission at Kazan Federal University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/kazan-federal-university",
  },
  {
    id: "kabardino",
    name: "Kabardino Balkarian State University",
    initial: "K",
    logoColor: "bg-rose-600",
    founded: "1957",
    city: "Nalchik",
    fees: "$4,100",
    description:
      "Explore MBBS admission at Kabardino Balkarian State University for 2026-27. Discover updated fees, global rankings, eligibility criteria, and expert guidance from Taksheela for a successful medical career.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    readMoreHref: "/mbbs/abroad/russia/universities/kabardino-balkarian-state-university",
  },
];

export default function UniversitiesSection() {
  const [selectedId, setSelectedId] = useState<string>(UNIVERSITIES[0].id); // Tambov as default

  const selected = UNIVERSITIES.find((u) => u.id === selectedId) ?? UNIVERSITIES[0];

  return (
    <section id="universities" className="font-sans py-14 md:py-18 bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Top Medical Universities in{" "}
          <span className="text-[#00999E]">Russia</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl">
          This section highlights the top universities in Russia recognised by the WHO and
          compliant with the NMC guidelines. This list includes both high-ranking universities
          and cost-effective options to pursue an MBBS in Russia.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left: University list */}
          <div className="lg:col-span-1 ">
            {UNIVERSITIES.map((uni) => {
              const isSelected = uni.id === selectedId;
              return (
                <button
                  key={uni.id}
                  type="button"
                  onClick={() => setSelectedId(uni.id)}
                  className={`
                    w-full flex items-center gap-3 rounded-lg border px-4 py-3.5 text-left transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00999E] focus-visible:ring-offset-2
                    ${
                      isSelected
                        ? "border-[#00999E] bg-[#00999E] text-white shadow-md"
                        : "border-gray-200 bg-gray-50 text-gray-900 hover:border-gray-300 hover:bg-gray-100"
                    }
                  `}
                >
                  <div
                    className={`
                      h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-sm font-bold
                      ${isSelected ? "bg-white/20 text-white" : `${uni.logoColor} text-white`}
                    `}
                  >
                    {uni.initial}
                  </div>
                  <span className="flex-1 min-w-0 font-medium truncate">{uni.name}</span>
                  <FaChevronRight
                    className={`h-4 w-4 shrink-0 ${isSelected ? "text-white" : "text-gray-400"}`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {/* Right: University detail card */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <div className="relative aspect-[16/9] w-full bg-gray-100">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="text-gray-500">Founded</span>
                    <span className="ml-2 font-semibold text-gray-900">{selected.founded}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">City</span>
                    <span className="ml-2 font-semibold text-gray-900">{selected.city}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Fees</span>
                    <span className="ml-2 font-semibold text-[#00999E]">{selected.fees}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl md:text-2xl font-bold text-[#00999E]">
                  {selected.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{selected.description}</p>
                <Link
                  href={selected.readMoreHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#00999E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#007a7f] transition-colors"
                >
                  Read more
                  <FaChevronRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
