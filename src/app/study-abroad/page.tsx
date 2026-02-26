import type { Metadata } from 'next';
import Testimonial from '@/components/home/Testimonials';
import LetsStart from '@/components/immersion/LetsStart';
import GlobalCombination from '@/components/study-abroad/GlobalCombination';
import Milestones from '@/components/study-abroad/Milestones';
import StudyAbroad from '@/components/study-abroad/StudyAbroad';
import Roadmap from '@/components/study-abroad/WorlClassEducationAssist';
import WorldMapClientWrapper from '@/components/study-abroad/WorldMapClientWrapper';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';


export const metadata: Metadata = {
  title: 'Study Abroad with Taksheela Institute – Your Trusted Guide',
  description:
    'Discover top study abroad programs with Taksheela Institute. Get expert guidance, valuable insights, & personalized admission support for your global education.',
  keywords: [
    'Study Abroad',
    'Global Education',
    'Visa Support',
    'University Admission',
    'Overseas Programs',
    'Taksheela Institute',
    'Abroad Studies',
    'Personalized Admission Help',
    'Education Counseling',
  ],
  openGraph: {
    title: 'Study Abroad with Taksheela Institute – Your Trusted Guide',
    description:
      'Discover top study abroad programs with Taksheela Institute. Get expert guidance, valuable insights, & personalized admission support for your global education.',
    url: 'https://www.taksheela.com/study-abroad',
    siteName: 'Taksheela Institute',
    type: 'website',
    images: [
      {
        url: 'https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png',
        width: 1200,
        height: 630,
        alt: 'Taksheela Institute Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Abroad with Taksheela Institute – Your Trusted Guide',
    description:
      'Explore study abroad opportunities with personalized help from Taksheela Institute.',
    images: [
      'https://www.taksheela.com/static/media/TIE_LOGO.242b5d5230b25dd9bcb6.png',
    ],
    site: '@TIE_Taksheela',
    creator: '@TIE_Taksheela',
  },
};

export default function StudyAbroadPage() {
  return (
    <>
      {/* SEO Semantic Structure (screen reader-friendly) */}
         <BreadcrumbSchema />
      <h1 className="sr-only">
        Achieve Your Dreams of Studying Abroad with Taksheela Institute
      </h1>
      <h2 className="sr-only">Success Stories: Hear from Our Students</h2>
      <h2 className="sr-only">Our Comprehensive Study Abroad Services</h2>
      <h3 className="sr-only">Expert Guidance for Admission Processes</h3>
      <h3 className="sr-only">Visa Assistance and Documentation Support</h3>
      <h4 className="sr-only">
        Frequently Asked Questions About Studying Abroad
      </h4>

      <WorldMapClientWrapper />
      <StudyAbroad />
      <Milestones />
      <Roadmap />
      <GlobalCombination />
      <Testimonial />
      <LetsStart />
    </>
  );
}
