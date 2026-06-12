// useDevice.jsx
import { useState, useEffect, useCallback } from "react";
import { theme } from "../styles/theme";

const DEFAULT_BREAKPOINTS = {
  mobile: theme.breakpoints.mobile,
  tabletMinWidth: theme.breakpoints.tabletMinWidth,
  tabletMaxWidth: theme.breakpoints.tabletMaxWidth,
  desktop: theme.breakpoints.desktop,
  desktopWide: theme.breakpoints.desktopWide,
};

export function useScreenSize(customBreakpoints = {}) {
  const breakpoints = { ...DEFAULT_BREAKPOINTS, ...customBreakpoints };

  const getScreenSize = useCallback(() => {
    const ratio = window.innerWidth / window.innerHeight;
    const width = window.innerWidth;

    const isMobile =
      ratio <= breakpoints.mobile || width < breakpoints.tabletMinWidth;
    const isTablet =
      !isMobile &&
      width >= breakpoints.tabletMinWidth &&
      width <= breakpoints.tabletMaxWidth &&
      ratio <= breakpoints.desktop;
    const isDesktop =
      !isMobile &&
      width >= breakpoints.tabletMaxWidth &&
      !isTablet &&
      ratio > breakpoints.desktop;

    return {
      isMobile,
      isTablet,
      isDesktop,
      aspectRatio: ratio,
    };
  }, [
    breakpoints.mobile,
    breakpoints.tabletMinWidth,
    breakpoints.tabletMaxWidth,
    breakpoints.desktop,
  ]);

  const [screenSize, setScreenSize] = useState(getScreenSize);

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getScreenSize]);

  return screenSize;
}
