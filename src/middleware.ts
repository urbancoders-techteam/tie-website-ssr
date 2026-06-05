import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Public production origin — never include internal Node ports (3000/3001) in redirects. */
const CANONICAL_ORIGIN = "https://www.taksheela.com";
const APEX_HOST = "taksheela.com";
const WWW_HOST = "www.taksheela.com";

function getRequestHostname(request: NextRequest): string {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const hostHeader = forwardedHost?.split(",")[0]?.trim() || request.headers.get("host") || "";
  return hostHeader.split(":")[0].toLowerCase();
}

function buildCanonicalRedirect(request: NextRequest): NextResponse {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Build from a fixed origin string — do NOT use request.nextUrl.clone() + url.host,
  // which leaks the internal app port (e.g. :3000) into the Location header on live.
  const destination = new URL(`${pathname}${search}`, CANONICAL_ORIGIN);

  return NextResponse.redirect(destination, 301);
}

export function middleware(request: NextRequest) {
  const hostname = getRequestHostname(request);

  // Apex (non-www) → www
  if (hostname === APEX_HOST) {
    return buildCanonicalRedirect(request);
  }

  // Safety net: if a proxy forwards www with an internal dev/prod port in Host, strip it.
  const rawHost = request.headers.get("host")?.toLowerCase() ?? "";
  if (hostname === WWW_HOST && /:\d+$/.test(rawHost)) {
    return buildCanonicalRedirect(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|eot)$).*)",
  ],
};
