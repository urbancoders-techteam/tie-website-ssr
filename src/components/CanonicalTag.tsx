'use client';
import { usePathname } from 'next/navigation';

const CanonicalTag = () => {
  const pathname = usePathname();
  const baseUrl = 'https://www.taksheela.com';
  const normalizedPath =
    pathname === '/' ? '' : pathname.replace(/\/+$/, '');
  const canonicalUrl = `${baseUrl}${normalizedPath}`;

  if (!pathname) return null;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
};

export default CanonicalTag;