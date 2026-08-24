import { Metadata } from 'next';
import CountryClient from './CountryClient';

export const metadata: Metadata = {
  title: 'Top Countries to Study Abroad – Compare & Choose Wisely',
  description:
    'Confused about where to study? Taksheela helps you choose the perfect country based on your goals, budget, academic interests, future plans, and opportunities.',
  keywords: [
    'study abroad',
    'top countries',
    'education',
    'student visa',
    'Taksheela',
    'international studies',
    'academic guidance',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Top Countries to Study Abroad – Compare & Choose Wisely',
    description:
      'Confused about where to study? Taksheela helps you choose the perfect country based on your goals, budget, academic interests, future plans, and opportunities.',
    url: 'https://www.taksheela.com/study-abroad/countries',
    type: 'website',
    images: [
      {
        url: 'https://www.taksheela.com/images/study-abroad-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Top Countries to Study Abroad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Countries to Study Abroad – Compare & Choose Wisely',
    description:
      'Confused about where to study? Taksheela helps you choose the perfect country based on your goals, budget, academic interests, future plans, and opportunities.',
    images: ['https://www.taksheela.com/images/study-abroad-og.jpg'],
  },
};

export default function CountryPage() {
  return <CountryClient />;
}
