"use client";

import { ReactNode, Suspense } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
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
