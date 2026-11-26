import { ReactNode, Suspense } from "react";
import PortalProviders from "@/portal/PortalProviders";

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <PortalProviders>{children}</PortalProviders>
    </Suspense>
  );
}
