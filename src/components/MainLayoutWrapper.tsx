"use client";

import { ReactNode, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SiteBreadcrumbs from "@/components/SiteBreadcrumbs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  
  // Exclude Header/Footer for standalone pages (they have their own or are full-page)
  const excludeLayout =
    pathname === "/study-in-dubai" ||
    pathname?.startsWith("/study-in-dubai/") ||
    pathname === "/mbbs/abroad/russia/campaign" ||
    pathname?.startsWith("/mbbs/abroad/russia/campaign/") ||
    pathname === "/mbbs/abroad/georgia/campaign" ||
    pathname?.startsWith("/mbbs/abroad/georgia/campaign/") ||
    pathname === "/mbbs/abroad/kazakhstan/campaign" ||
    pathname?.startsWith("/mbbs/abroad/kazakhstan/campaign/") ||
    pathname === "/mbbs/abroad/kyrgyzstan/campaign" ||
    pathname?.startsWith("/mbbs/abroad/kyrgyzstan/campaign/") ||
    pathname === "/mbbs/abroad/uzbekistan/campaign" ||
    pathname?.startsWith("/mbbs/abroad/uzbekistan/campaign/") ||
    pathname === "/thankyou";

  if (excludeLayout) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Sticky top bar: nav + breadcrumbs (breadcrumbs only render on inner routes). */}
      <div className="sticky top-0 z-[1100] bg-white shadow-[0_4px_24px_-4px_rgba(15,23,42,0.12)]">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <Suspense fallback={null}>
          <SiteBreadcrumbs />
        </Suspense>
      </div>

      <main>{children}</main>

      <Footer />
      <FloatingActions />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
