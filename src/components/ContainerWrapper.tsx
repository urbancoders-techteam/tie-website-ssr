import React from "react";

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContainerWrapper({
  children,
  className = "",
}: ContainerWrapperProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-10 md:px-8  ${className}`}>
      {children}
    </div>
  );
}
