import { ReactNode, Suspense } from "react";
import DashboardShell from "@/portal/DashboardShell";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <DashboardShell>{children}</DashboardShell>
    </Suspense>
  );
}
