/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/immersion/[slug]/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { immersionCountry } from '@/apis/immersion.api';
import About from '@/components/immersion/immersion-slug/about';
import Country from '@/components/immersion/immersion-slug/country';
import { immersionSlugData } from '@/constants/immersion';
import { Box, LinearProgress } from '@mui/material';
import ContainerWrapper from '@/components/ContainerWrapper';
import { BackRouteContainer } from '@/components/study-abroad/university-finder/ViewComponents';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export default function ImmersionSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [item, setItem] = useState<any>(null);
  const [staticData, setStaticData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const staticItem = immersionSlugData.find((z) => z.slug === slug);
      setStaticData(staticItem);

      const immersionZone = slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      try {
        const countryRes = await immersionCountry(immersionZone);
        setItem(countryRes?.data || null);
      } catch (err) {
        console.error('Failed to fetch immersion country data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);


  return (
    <>
     <BreadcrumbSchema />
     <ContainerWrapper className="pt-12">
        <BackRouteContainer
          path="/immersion"
          title="Immersion Main Page"
          logo={"/images/backuniversity.png"}
        />
      </ContainerWrapper>
      {staticData && <About item={staticData} />}
      {loading ? (
      <Box sx={{ width: '100%', mt: 2, color: '#00999e' }}>
        <LinearProgress color="inherit" />
      </Box>
    ) : (
      item && <Country item={item} />
    )}
    </>
  );
}
