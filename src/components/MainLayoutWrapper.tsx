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
  
  // Exclude Header/Footer for study-in-dubai pages (they have their own)
  const excludeLayout = pathname?.startsWith("/study-in-dubai");

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
