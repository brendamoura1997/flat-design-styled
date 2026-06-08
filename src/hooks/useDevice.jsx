import { useState, useEffect, useCallback } from "react";
import { theme } from "../styles/theme";

const DEFAULT_BREAKPOINTS = {
  mobile: parseInt(theme.breakpoints.mobile, 10), // 480
  tablet: parseInt(theme.breakpoints.tablet, 10), // 1024
  desktop: parseInt(theme.breakpoints.desktop, 10), // 1025
};

export function useScreenSize(customBreakpoints = {}) {
  const breakpoints = { ...DEFAULT_BREAKPOINTS, ...customBreakpoints };

  const getScreenSize = useCallback(() => {
    const width = window.innerWidth;
    return {
      isMobile: width <= breakpoints.mobile,
      isTablet: width > breakpoints.mobile && width <= breakpoints.tablet,
      isDesktop: width > breakpoints.tablet,
      screenWidth: width,
    };
  }, [breakpoints.mobile, breakpoints.tablet]);

  const [screenSize, setScreenSize] = useState(getScreenSize);

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getScreenSize]);

  return screenSize;
}
