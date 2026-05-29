import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "taksheela.com";
const WWW_HOST = "www.taksheela.com";

/** 301 apex (non-www) → www so crawlers and users hit a single canonical host. */
export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host");
  if (!hostHeader) return NextResponse.next();

  const hostname = hostHeader.split(":")[0].toLowerCase();
  if (hostname !== APEX_HOST) return NextResponse.next();

  // Build from a fixed origin so dev port (:3000) is never forwarded to production www.
  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    `https://${WWW_HOST}`,
  );

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf)$).*)",
  ],
};
