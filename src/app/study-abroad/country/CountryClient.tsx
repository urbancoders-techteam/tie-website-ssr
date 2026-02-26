
'use client';

import dynamic from 'next/dynamic';
import DiscoverPathway from '@/components/study-abroad/DiscoverPathway';
import GlobalNavigation from '@/components/study-abroad/GlobalNavigation';
import { useEffect } from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';


const WorldMap = dynamic(() => import('@/components/study-abroad/WorldMap'), {
  ssr: false,
});

export default function CountryClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <BreadcrumbSchema />
      {/* SEO Headings - Hidden from view */}
      <h1 className="sr-only">Explore Top Countries to Study Abroad</h1>
      <h2 className="sr-only">How Taksheela Helps You Choose the Right Country</h2>
      <h2 className="sr-only">Navigate Global Options</h2>
      <h2 className="sr-only">Pick Your Destination</h2>

      <DiscoverPathway />
      <GlobalNavigation />
      <WorldMap />
    </>
  );
}
