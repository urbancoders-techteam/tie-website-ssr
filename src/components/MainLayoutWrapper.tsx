"use client";

import { ReactNode, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
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
    pathname === "/thankyou";

  if (excludeLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <main>{children}</main>

      <Footer />
      <FloatingActions />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
