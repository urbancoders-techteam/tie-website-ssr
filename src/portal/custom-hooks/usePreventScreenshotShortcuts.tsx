// @ts-nocheck
import { useEffect } from "react";

export const usePreventScreenshotShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Create a more comprehensive detection
      const isPrintScreen = e.key === "PrintScreen" || e.code === "PrintScreen";

      const isWindowsSnipping =
        (e.key === "s" || e.code === "KeyS") &&
        e.shiftKey &&
        (e.ctrlKey || e.metaKey);

      const isMacScreenshot =
        e.metaKey &&
        e.shiftKey &&
        (e.key === "3" ||
          e.key === "4" ||
          e.code === "Digit3" ||
          e.code === "Digit4");

      if (isPrintScreen || isWindowsSnipping || isMacScreenshot) {
        e.preventDefault();
        e.stopPropagation();

        // More user-friendly than alert
        const warning = document.createElement("div");
        warning.textContent = "Screenshots are not allowed on this page";
        warning.style.position = "fixed";
        warning.style.bottom = "20px";
        warning.style.right = "20px";
        warning.style.padding = "10px";
        warning.style.background = "#ff4444";
        warning.style.color = "white";
        warning.style.borderRadius = "5px";
        warning.style.zIndex = "9999";
        document.body.appendChild(warning);

        setTimeout(() => {
          document.body.removeChild(warning);
        }, 3000);

        return false;
      }
    };

    // Use capture phase to catch events earlier
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);
};
