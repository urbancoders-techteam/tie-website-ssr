/** Canonical marketing site origin (matches layout metadataBase). */
export const SITE_ORIGIN = "https://taksheela.com";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
