'use client';
import { usePathname } from 'next/navigation';

const CanonicalTag = () => {
  const pathname = usePathname();
  const baseUrl = 'https://www.taksheela.com';
  const canonicalUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`;

  if (!pathname) return null;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
};

export default CanonicalTag;