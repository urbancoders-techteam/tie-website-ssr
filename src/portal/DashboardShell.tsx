// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DashboardLayout from "@/portal/Dashboard/DashboardLayout";
import { setNavState } from "@/portal/navigation";

export default function DashboardShell({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      const search = searchParams?.toString();
      setNavState({
        path: `${pathname}${search ? `?${search}` : ""}`,
      });
      router.replace("/login");
      return;
    }
    setAllowed(true);
  }, [pathname, router, searchParams]);

  if (!allowed) return null;

  return <DashboardLayout>{children}</DashboardLayout>;
}
