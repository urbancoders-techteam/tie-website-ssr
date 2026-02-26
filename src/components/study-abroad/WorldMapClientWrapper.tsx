// src/components/study-abroad/WorldMapClientWrapper.tsx
'use client';

import dynamic from 'next/dynamic';

// ✅ Dynamically import WorldMap without SSR inside a Client Component
const WorldMap = dynamic(() => import('./WorldMap'), {
  ssr: false,
});

const WorldMapClientWrapper = () => {
  return <WorldMap />;
};

export default WorldMapClientWrapper;