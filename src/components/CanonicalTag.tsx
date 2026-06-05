'use client';
import { usePathname } from 'next/navigation';

/** Routes that set alternates.canonical via Next.js metadata — avoid duplicate <link rel="canonical">. */
function hasMetadataCanonical(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/blog') return true;
  if (normalized === '/mbbs') return true;
  if (/^\/mbbs\/abroad\/[^/]+$/.test(normalized)) return true;
  return false;
}

const CanonicalTag = () => {
  const pathname = usePathname();
  const baseUrl = 'https://www.taksheela.com';

  if (!pathname || hasMetadataCanonical(pathname)) return null;
  const normalizedPath =
    pathname === '/' ? '' : pathname.replace(/\/+$/, '');
  const canonicalUrl = `${baseUrl}${normalizedPath}`;

  return (
    <link key="canonical" rel="canonical" href={canonicalUrl} />
  );
};

export default CanonicalTag;