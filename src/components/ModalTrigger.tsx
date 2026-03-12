"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Lazy-load modal to avoid SSR issues
const RegistrationModal = dynamic(() => import("./RegistrationModal"), {
  ssr: false,
});

/** Default button styles – used only when variant is not "custom". Do not change; other pages depend on this. */
const DEFAULT_BUTTON_CLASS =
  "bg-[#00999e] cursor-pointer hover:bg-[#007a7f] font-semibold py-2 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00999e]";

interface ModalTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label when no children are passed */
  text?: string | "text-white";
  /** Custom content (e.g. icon + text). Overrides text when provided */
  children?: React.ReactNode;
  /**
   * "default" = use built-in button styles. Safe for all existing usages; custom className is merged.
   * "custom" = no default styles; only your className applies. Use when you need full control so other pages are unaffected.
   */
  variant?: "default" | "custom";
  /** Button class names. With variant="default" these are merged with defaults; with variant="custom" only these apply. */
  className?: string;
}

const ModalTrigger = ({
  text,
  children,
  variant = "default",
  className = "",
  onClick,
  ...rest
}: ModalTriggerProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleOpen();
    onClick?.(e);
  };

  const isCustom = variant === "custom";
  const buttonClass = isCustom
    ? (className || "cursor-pointer")
    : className
      ? `${DEFAULT_BUTTON_CLASS} ${className}`
      : DEFAULT_BUTTON_CLASS;

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={rest["aria-label"] ?? "Open registration modal"}
        className={buttonClass}
        {...rest}
      >
        {children ?? text ?? "Register Now"}
      </button>

      {open && <RegistrationModal open={open} onClose={handleClose} />}
    </>
  );
};

export default ModalTrigger;
