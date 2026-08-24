import type { Metadata } from 'next';
import Testimonial from '@/components/home/Testimonials';
import LetsStart from '@/components/immersion/LetsStart';
// import GlobalCombination from '@/components/study-abroad/GlobalCombination';
// import Milestones from '@/components/study-abroad/Milestones';
// import StudyAbroad from '@/components/study-abroad/StudyAbroad';
// import Roadmap from '@/components/study-abroad/WorlClassEducationAssist';
// import WorldMapClientWrapper from '@/components/study-abroad/WorldMapClientWrapper';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import CustomAbroadHero from '@/components/custom-component/CustomAbroadHero';
import OurImpact from '@/components/study-abroad/new-changes/OurImpact';
import StudyDestination from '@/components/study-abroad/new-changes/StudyDestination';
import PopularCourses from '@/components/study-abroad/new-changes/PopularCourses';
import WhoCanApply from '@/components/study-abroad/new-changes/WhoCanApply';
import RealStudentsJourneys from '@/components/study-abroad/new-changes/RealStudentsJourneys';
import BudgetSmartOption from '@/components/study-abroad/new-changes/BudgetSmartOption';
import TestPreparation from '@/components/study-abroad/new-changes/TestPreparation';
import EnglishRequirement from '@/components/study-abroad/new-changes/EnglishRequirement';
import FindingYourEducation from '@/components/study-abroad/new-changes/FindingYourEducation';
import ForParents from '@/components/study-abroad/new-changes/ForParents';
import WhyStudyAbroad from '@/components/study-abroad/new-changes/WhyStudyAbroad';
import WhyNotApplyAlone from '@/components/study-abroad/new-changes/WhyNotApplyAlone';
import CountryWiseScholarship from '@/components/study-abroad/new-changes/CountryWiseScholarship';
import GlobalFutureStartsHere from '@/components/study-abroad/new-changes/GlobalFutureStartsHere';
import GetStartedToday from '@/components/study-abroad/new-changes/GetStartedToday';
import FAQSection from '@/components/campaign/FAQSection';
import StudyAbroadFilmstrip from '@/components/study-abroad/new-changes/StudyAbroadFilmstrip';
import { studyAbroadFaqItems } from '@/constants/study_abroad/faq';
import WhyTaksheela from '@/components/study-abroad/new-changes/WhyTakhseela';

const studyAbroadHeroStats = [
  { value: '10+', label: 'Years of Expert Counselling' },
  { value: '98%', label: 'Application Success Rate' },
  { value: '500+', label: 'Students Placed Globally' },
  { value: '14+', label: 'Countries Covered' },
];

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

      <CustomAbroadHero
        backgroundImage="/images/study-abroad-bg.png"
        backgroundImageAlt="Students planning their study abroad journey with Taksheela"
        sectionClassName="relative flex min-h-[560px] items-center overflow-hidden bg-[#0B7A80] lg:min-h-[calc(100vh-96px)]"
        eyebrow="India's Most Trusted Study Abroad Consultants"
        eyebrowVariant="pill"
        title={
          <>
            Your Dream of{' '}
            <span className="text-[#5dd4d9]">Studying Abroad</span>
            <span className="block">Starts Right Here.</span>
          </>
        }
        description={
          <>
            From choosing the right country and university to landing your student visa,{' '}
            <span className="font-semibold text-white">Taksheela guides Indian students through every step</span>{' '}
            of their overseas education journey. UK, Germany, Ireland, Australia, Canada &amp; 10+ more countries.
          </>
        }
        primaryCta={{
          kind: 'modal',
          text: 'Book Free Counselling',
          redirectPath: '/thankyou',
        }}
        secondaryCta={{
          kind: 'link',
          text: 'Check Eligibility',
          href: '#world-map',
        }}
        quickStats={studyAbroadHeroStats}
        imageOverlay="light"
        // mediaCards={studyAbroadHeroMediaCards}
        // showRegisterForm
      />

      <OurImpact />

      <WhyStudyAbroad />
      
      <StudyDestination />

      <WhyTaksheela />

      <PopularCourses />
      
      <WhoCanApply />

      <RealStudentsJourneys />
      
      <BudgetSmartOption />

      <ForParents />

      <StudyAbroadFilmstrip />

      <EnglishRequirement />

      <FindingYourEducation />

      <Testimonial />

      <WhyNotApplyAlone />

      <TestPreparation />

      <CountryWiseScholarship />

      <GlobalFutureStartsHere />

      <FAQSection
        items={studyAbroadFaqItems}
        variant="abroad"
        sectionSlug="study-abroad"
        headingId="study-abroad-faq-heading"
      />

      <GetStartedToday />


      {/* <div id="world-map">
        <WorldMapClientWrapper />
      </div>
      <StudyAbroad />
      <Milestones />
      <Roadmap />
      <GlobalCombination /> */}
      <LetsStart />
    </>
  );
}
