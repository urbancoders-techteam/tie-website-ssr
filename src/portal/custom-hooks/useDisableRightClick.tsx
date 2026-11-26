// @ts-nocheck
import { useEffect } from 'react';

export const useDisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      console.warn('Right-click is disabled on this page');
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);
};