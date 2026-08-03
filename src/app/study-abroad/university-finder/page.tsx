// app/study-abroad/university-finder/page.tsx
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LetsStart from '@/components/immersion/LetsStart';
import UniversityFinder from '@/components/study-abroad/university-finder/UniversityFinder';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'University Finder: Tailored for Study Abroad Goals',
  description:
    "Taksheela’s Institute Finder to get personalized recommendations for overseas universities in USA, UK, Canada & more. Explore options, start your journey today!",
  keywords: [
    'university finder',
    'study abroad',
    'top universities',
    'Taksheela',
    'USA universities',
    'UK universities',
    'Canada education',
    'overseas study',
    'academic guidance'
  ],
  openGraph: {
    title: 'Find Top Universities Abroad—Personalized Results | Taksheela UniversityFinder',
    description:
      "Use Taksheela’s UniversityFinder to get personalized recommendations for overseas universities in USA, UK, Canada & more. Explore options and start your journey today!",
    url: 'https://taksheela.com/study-abroad/university-finder',
    type: 'website',
    images: [
      {
        url: 'https://taksheela.com/images/university-finder-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Find Top Universities Abroad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Top Universities Abroad—Personalized Results | Taksheela UniversityFinder',
    description:
      "Use Taksheela’s UniversityFinder to get personalized recommendations for overseas universities in USA, UK, Canada & more. Explore options and start your journey today!",
    images: ['https://taksheela.com/images/university-finder-og.jpg'],
  },
};

export default function Page() {
  return (
    <>
     <BreadcrumbSchema />
      <UniversityFinder />
      <LetsStart />
    </>
  );
}
