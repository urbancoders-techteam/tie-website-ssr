export function isThankYouRoute(pathname: string): boolean {
  return pathname === "/thankyou" || pathname.endsWith("/thankyou");
}
