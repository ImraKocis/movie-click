'use client';

import { useEffect, useState } from 'react';

export function useWindowWidth(defaultWidth: number): number {
  const [windowWidth, setWindowWidth] = useState(defaultWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowWidth;
}

export function useWindowWidthBreakpoint(maxWidth = 768): boolean {
  const windowWidth = useWindowWidth(maxWidth);
  return windowWidth <= maxWidth;
}

