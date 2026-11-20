import Image from "next/image";
import Link from "next/link";
import ModalTrigger from "@/components/ModalTrigger";
import CampaignTabs from "@/components/campaign/mbbs-campaign/CampaignTabs";
import FAQSection from "@/components/campaign/FAQSection";
import { universityDetailSample as content } from "@/constants/university/detailContent";
import { FiDownload, FiMessageCircle } from "react-icons/fi";

export type UniversityDetail = {
  name: string;
  country: string;
  countryHref: string;
  image: string;
  category: string;
  rating?: string;
  brochureUrl?: string;
};

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Quick Facts", href: "#quick-facts" },
  { label: "Why Choose", href: "#why-choose" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Admission", href: "#admission" },
  { label: "Documents", href: "#documents" },
  { label: "Programmes", href: "#programmes" },
  { label: "Student Life", href: "#student-life" },
  { label: "FAQ", href: "#faq" },
];
const wrap = "mx-auto max-w-7xl px-5 sm:px-6";
const section = "scroll-mt-36 py-14 md:py-20";
const heading = "text-2xl font-extrabold text-slate-900 md:text-4xl";
const button = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#103d58]";

export default function UniversityDetailPage({ university }: { university: UniversityDetail }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#092c46] text-white">
        <Image src={university.image} alt="" fill priority sizes="100vw" className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071c30]/95 via-[#092c46]/85 to-[#092c46]/55" />
        <div className={`${wrap} relative flex min-h-[470px] items-center py-16 md:min-h-[560px]`}>
          <div className="max-w-2xl space-y-5">
            <p className="text-sm font-bold uppercase tracking-widest text-[#67e8e1]">{university.category} · {university.country}</p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{university.name}</h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-100 md:text-lg">{content.description}</p>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"><span className="tracking-widest text-amber-300" aria-hidden>★★★★★</span><span className="font-bold">{university.rating ?? content.rating}</span>{!university.rating && <span className="text-slate-200">({content.ratingLabel})</span>}</div>
            <div className="flex flex-wrap gap-3 pt-2">
              <ModalTrigger variant="custom" className={button} aria-label="Talk to an expert"><FiMessageCircle aria-hidden /> Talk to Expert</ModalTrigger>
              {university.brochureUrl ? <a href={university.brochureUrl} download className={button}><FiDownload aria-hidden /> Brochure</a> : <button type="button" disabled title="Brochure coming soon" className={`${button} cursor-not-allowed opacity-65`}><FiDownload aria-hidden /> Brochure <span className="sr-only">coming soon</span></button>}
            </div>
          </div>
        </div>
      </section>

      <CampaignTabs tabs={tabs} />

      <section id="overview" className={`${section} bg-white`}><div className={`${wrap} grid gap-8 lg:grid-cols-[2fr_1fr]`}>
        <div><p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#00999E]">Discover your university</p><h2 className={heading}>Overview of <span className="text-[#00999E]">{university.name}</span></h2>{content.overview.map(text => <p key={text} className="mt-5 leading-relaxed text-slate-600">{text}</p>)}</div>
        <div className="rounded-2xl border border-[#cbe9e9] bg-[#effdff] p-7"><p className="text-sm font-bold uppercase tracking-wide text-[#007c80]">Your journey starts here</p><h3 className="mt-3 text-xl font-bold text-slate-900">Planning to study in {university.country}?</h3><p className="mt-3 leading-relaxed text-slate-600">Connect with our team to discuss courses, admissions and your next steps.</p><ModalTrigger text="Talk to an Expert" className="mt-6 text-white" /></div>
      </div></section>

      <section id="quick-facts" className={`${section} bg-gradient-to-br from-[#0b777b] via-[#104653] to-[#102b43] text-white`}><div className={`${wrap} grid gap-8 lg:grid-cols-2 lg:items-center`}><div><p className="mb-3 text-sm font-bold uppercase tracking-wider text-teal-200">At a glance</p><h2 className="text-2xl font-extrabold md:text-4xl">{university.name} — <span className="text-[#5dd4d9]">Quick Facts</span></h2><p className="mt-4 max-w-xl leading-relaxed text-white/85">A starting point for exploring the university and planning your study journey.</p></div><div className="grid gap-4 sm:grid-cols-2">{content.facts.map(item => <div key={item.label} className="rounded-xl bg-white p-5 text-slate-900 shadow-sm"><span className="text-2xl" aria-hidden>{item.icon}</span><p className="mt-3 text-sm text-slate-500">{item.label}</p><p className="mt-1 font-bold">{item.value}</p></div>)}</div></div></section>

      <section id="why-choose" className={`${section} bg-white`}><div className={wrap}><h2 className={heading}>Why Choose <span className="text-[#00999E]">{university.name}?</span></h2><div className="mt-8 grid gap-5 md:grid-cols-3">{content.reasons.map(item => <div key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm"><span className="text-3xl" aria-hidden>{item.icon}</span><h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3><p className="mt-2 leading-relaxed text-slate-600">{item.text}</p></div>)}</div></div></section>

      <section id="eligibility" className={`${section} bg-[#f6f8fb]`}><div className={wrap}><h2 className={heading}>Eligibility <span className="text-[#00999E]">Criteria</span></h2><p className="mt-4 text-slate-600">Requirements depend on your selected programme and academic background.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{content.eligibility.map(item => <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm"><h3 className="font-bold text-[#007c80]">{item.title}</h3><p className="mt-2 leading-relaxed text-slate-600">{item.text}</p></div>)}</div></div></section>

      <section id="admission" className={`${section} bg-white`}><div className={wrap}><h2 className={heading}>Admission <span className="text-[#00999E]">Process</span></h2><p className="mt-4 text-slate-600">A simple guide to getting started with your application.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.steps.map((item, index) => <div key={item.title} className="rounded-xl border border-slate-200 p-6"><span className="text-2xl font-extrabold text-[#00999E]">0{index + 1}</span><h3 className="mt-3 font-bold text-slate-900">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p></div>)}</div></div></section>

      <section id="documents" className={`${section} bg-[#effdff]`}><div className={wrap}><h2 className={heading}>Documents <span className="text-[#00999E]">Required</span></h2><p className="mt-4 text-slate-600">The final list depends on your chosen course and university requirements.</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{content.documents.map(item => <div key={item} className="rounded-xl bg-white p-5 font-semibold text-slate-700 shadow-sm"><span className="mr-3 text-[#00999E]" aria-hidden>✓</span>{item}</div>)}</div></div></section>

      <section id="programmes" className={`${section} bg-white`}><div className={wrap}><h2 className={heading}>Explore <span className="text-[#00999E]">Programmes</span></h2><div className="mt-8 grid gap-5 md:grid-cols-3">{content.programmes.map(item => <div key={item.title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-slate-900">{item.title}</h3><p className="mt-3 text-slate-600">{item.text}</p></div>)}</div></div></section>

      <section id="student-life" className={`${section} bg-[#f6f8fb]`}><div className={`${wrap} grid items-center gap-8 md:grid-cols-2`}><div><h2 className={heading}>Student Life at <span className="text-[#00999E]">{university.name}</span></h2><p className="mt-5 leading-relaxed text-slate-600">University life is about more than classes. Discover a new culture, meet fellow students and explore the community around your campus.</p><p className="mt-4 leading-relaxed text-slate-600">Our counsellors can help you prepare for accommodation, travel and settling into your new destination.</p></div><div className="relative h-64 overflow-hidden rounded-2xl md:h-80"><Image src={university.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" aria-hidden /></div></div></section>

      <div id="faq" className="scroll-mt-36"><FAQSection items={content.faqs} /></div>
      <section className="bg-[#0b777b] px-5 py-14 text-center text-white"><h2 className="text-2xl font-bold md:text-3xl">Ready to start your journey?</h2><p className="mx-auto mt-3 max-w-2xl text-white/85">Talk to our team about your study options at {university.name}.</p><div className="mt-6 flex flex-wrap justify-center gap-4"><ModalTrigger variant="custom" className={button} text="Talk to Expert" /><Link href={university.countryHref} className={button}>Explore {university.country}</Link></div></section>
    </>
  );
}
