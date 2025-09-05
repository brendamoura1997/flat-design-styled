import { useState, useEffect } from "react";

const DEFAULT_BREAKPOINTS = {
  mobile: 768, // <= 768px: mobile
  tablet: 1024, // 769px - 1024px: tablet
  desktop: 1025, // >= 1025px: desktop
};

export function useScreenSize(customBreakpoints = {}) {
  const breakpoints = { ...DEFAULT_BREAKPOINTS, ...customBreakpoints };

  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth <= breakpoints.mobile,
    isTablet:
      window.innerWidth > breakpoints.mobile &&
      window.innerWidth <= breakpoints.tablet,
    isDesktop: window.innerWidth >= breakpoints.desktop,
    screenWidth: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width <= breakpoints.mobile,
        isTablet: width > breakpoints.mobile && width <= breakpoints.tablet,
        isDesktop: width >= breakpoints.desktop,
        screenWidth: width,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints.mobile, breakpoints.tablet, breakpoints.desktop]);

  return screenSize;
}
