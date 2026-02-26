"use client";

import React from "react";
import { useRouter } from "next/navigation"; // for Next.js. Use `useNavigate` for React Router.
import Image from "next/image";
import ContainerWrapper from "@/components/ContainerWrapper";

// ---------------------------------------
// ButtonComponent
// ---------------------------------------
interface ButtonProps {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  href,
  icon,
  width = "200px",
  height = "40px",
  fontSize = "14px",
  padding = "10px 20px",
  borderRadius = "8px",
  backgroundColor = "#00999E",
  color = "#ffffff",
  fontWeight = "500",
  hoverColor = "#ffffff",
  hoverBackgroundColor = "#00777A",
  borderColor,
  disabled = false,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) return onClick();
    if (href) {
      window.scrollTo(0, 0);
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`flex items-center justify-center text-center transition-all duration-300 cursor-pointer ${
        disabled ? "cursor-not-allowed bg-gray-400" : ""
      }`}
      style={{
        backgroundColor: backgroundColor,
        color,
        padding,
        fontSize,
        fontWeight,
        width,
        height,
        borderRadius,
        border: borderColor ? `1px solid ${borderColor}` : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.style.backgroundColor = hoverBackgroundColor || "");
        (e.currentTarget.style.color = hoverColor || "");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.style.backgroundColor = backgroundColor);
        (e.currentTarget.style.color = color);
      }}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

// ---------------------------------------
// BackRouteContainer
// ---------------------------------------
interface BackRouteContainerProps {
  path: string;
  logo?: string;
  title: string;
}

export const BackRouteContainer: React.FC<BackRouteContainerProps> = ({
  path,
  logo,
  title,
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    router.push(path);
  };

  return (
    <ContainerWrapper>
      
    
    <div
      className="w-fit cursor-pointer flex justify-start  "
      onClick={handleNavigation}
    >
      <div className="flex items-center gap-4">
        <Image src={logo || '/images/backuniversity.png'} alt="Back" width={45} height={45} />
        <p className="text-lg font-medium hover:text-[#00999E]">{title}</p>
      </div>
    </div>
    </ContainerWrapper>
  );
};

// ---------------------------------------
// UniversityFinderBanner
// ---------------------------------------
export const UniversityFinderBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[650px] bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("/images/universityViewBanner.png")',
    }}>
      <div className="absolute bottom-0 w-full bg-[#a6d5d5] py-6 flex justify-center">
        <div className="max-w-6xl text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#454545] mb-2">
            Explore University
          </h1>
          <p className="text-sm md:text-base font-medium text-[#656565]">
            Unlock your future with global opportunities. Explore top universities and diverse cultures worldwide.
            Embark on a life-changing journey – study abroad with us!
          </p>
        </div>
      </div>
    </div>
  );
};
