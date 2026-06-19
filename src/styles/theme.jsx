// theme.jsx
export const theme = {
  breakpoints: {
    mobile: 9 / 16, // 0.5625
    tabletMinWidth: 700,
    tabletMaxWidth: 1023,
    desktop: 1,
    desktopWide: 1.7,
  },
  mediaQueries: {
    smallMobile: `only screen and (max-width: 399px)`,
    mobile: `only screen and (max-aspect-ratio: 9/16), only screen and (max-width: 699px)`,
    // Mobile (ou largura < 700px) com proporção MAIOR que 0.56 (ex: 0.59, 0.60, 0.62, 0.66)
    mobileWide: `only screen and (max-width: 699px) and (min-aspect-ratio: 0.5)`,
    tablet: `only screen and (min-width: 700px) and (max-width: 1024px) and (max-aspect-ratio: 1)`,
    tabletWide: `only screen and (min-width: 700px) and (max-width: 1023px) and (min-aspect-ratio: 0.8)`,
    desktop: `only screen and (min-aspect-ratio: 1) and (max-aspect-ratio: 1.69) and (min-width: 1024px)`,
    // Desktop com proporção IGUAL ou MAIOR que 1.70 (ex: 1024x600)
    desktopWide: `only screen and (min-aspect-ratio: 1.70) and (max-width: 1300px)`,
  },
};
