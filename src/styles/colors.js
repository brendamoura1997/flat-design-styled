export const withAlpha = (hex, opacity) => {
  const value = hex.replace("#", "");
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const colors = {
  white: "#ffffff",
  black: "#000000",

  primary: "#dc143c",
  primaryHover: "#e90c0c",
  primaryActive: "#f81414",
  accent: "#f53b5a",

  secondary: "#5230e0",
  secondaryLight: "#a79ef7",
  secondarySoft: "#f0ebff",

  success: "#3daa72",
  successLight: "#4fd1a8",
  successSoft: "#def6ee",

  warning: "#ffb41f",
  warningSoft: "#fbeacb",

  pink: "#ff97af",
  pinkLight: "#ffc0cb",
  pinkSoft: "#fde8ec",

  blue: "#4e6bff",
  moss: "#669966",

  action: {
    default: "#1a1aad",
    hover: "#1212c2",
    active: "#3131de",
  },

  text: {
    title: "#1a1a2e",
    body: "#444444",
    muted: "#777777",
    subtle: "#999999",
    slate: "#7d89a5",
    navy: "#1b2a78",
    inverse: "#ffffff",
    onDark: "#d3d3d3",
  },

  surface: {
    page: "#ffffff",
    soft: "#fbfcfe",
    tint: "#e5ecfb",
    dark: "#111111",
  },

  border: {
    default: "#ebebeb",
    input: "#d3dcec",
  },

  shadow: "#15009f",

  overlay: {
    modal: withAlpha("#080814", 0.78),
    menu: withAlpha("#141414", 0.55),
  },
};
