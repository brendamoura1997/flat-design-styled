// theme.jsx
export const theme = {
  breakpoints: {
    smallMobile: 400,
    mobile: 9 / 16,
    tabletMinWidth: 700,
    tabletMaxWidth: 1024,
    desktop: 1,
  },
  mediaQueries: {
    smallMobile: `only screen and (max-width: 399px)`,
    mobile: `only screen and (max-aspect-ratio: 9/16), only screen and (max-width: 699px)`,
    tablet: `only screen and (min-width: 700px) and (max-width: 1024px) and (max-aspect-ratio: 1000/1000)`,
    desktop: `only screen and (min-aspect-ratio: 1001/1000)`,
  },
};
