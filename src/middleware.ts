import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Canonical hosts are non-www.
 * www → apex (and www.dev → dev) with 301, preserving path + query.
 * Never leak internal Node ports (3000/3001) into Location.
 */
const WWW_TO_CANONICAL: Record<string, string> = {
  "www.taksheela.com": "https://taksheela.com",
  "www.dev.taksheela.com": "https://dev.taksheela.com",
};

const CANONICAL_HOSTS = new Set(["taksheela.com", "dev.taksheela.com"]);

function getRequestHostname(request: NextRequest): string {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const hostHeader =
    forwardedHost?.split(",")[0]?.trim() || request.headers.get("host") || "";
  return hostHeader.split(":")[0].toLowerCase();
}

function buildOriginRedirect(
  request: NextRequest,
  canonicalOrigin: string,
): NextResponse {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  const destination = new URL(`${pathname}${search}`, canonicalOrigin);
  return NextResponse.redirect(destination, 301);
}

export function middleware(request: NextRequest) {
  const hostname = getRequestHostname(request);

  const wwwCanonical = WWW_TO_CANONICAL[hostname];
  if (wwwCanonical) {
    return buildOriginRedirect(request, wwwCanonical);
  }

  // Safety net: proxy forwards canonical host with an internal port in Host.
  const rawHost = request.headers.get("host")?.toLowerCase() ?? "";
  if (CANONICAL_HOSTS.has(hostname) && /:\d+$/.test(rawHost)) {
    return buildOriginRedirect(request, `https://${hostname}`);
  }

  const response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|eot)$).*)",
  ],
};
