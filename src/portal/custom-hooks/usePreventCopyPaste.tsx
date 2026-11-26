// @ts-nocheck
import { useEffect } from 'react';

export const usePreventCopyPaste = () => {
  useEffect(() => {
    const handleCopyPaste = (e) => {
      e.preventDefault();
      console.warn('Copy/paste is disabled on this page');
    };

    document.addEventListener('copy', handleCopyPaste);
    document.addEventListener('paste', handleCopyPaste);
    document.addEventListener('cut', handleCopyPaste);

    return () => {
      document.removeEventListener('copy', handleCopyPaste);
      document.removeEventListener('paste', handleCopyPaste);
      document.removeEventListener('cut', handleCopyPaste);
    };
  }, []);
};