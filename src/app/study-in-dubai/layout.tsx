import { ReactNode } from "react";
import './dubailayout.css'
interface StudyLayoutProps {
  children: ReactNode;
}

export default function StudyLayout({ children }: StudyLayoutProps) {
  return (
    <div className={`bg-white text-black min-h-screen `}>
      {children}
    </div>
  );
}
