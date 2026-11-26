// @ts-nocheck
import { useEffect } from "react";

export const useClearClipboard = (interval = 1000) => {
  useEffect(() => {
    const clearClipboard = async () => {
      try {
        await navigator.clipboard.writeText("");
      } catch (err) {
        console.error("Clipboard clearing not supported");
      }
    };

    const timer = setInterval(clearClipboard, interval);
    return () => clearInterval(timer);
  }, [interval]);
};
