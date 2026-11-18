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

  brand: {
    default: "#dc143c",
    hover: "#e90c0c",
    active: "#f81414",
    highlight: "#de113a",
  },

  secondary: {
    first: { main: "#f53b5a", soft: "#fde8ec", light: "#ffc8da" },
    second: { main: "#5230e0", soft: "#f0ebff", light: "#a79ef7" },
    third: { main: "#3daa72", soft: "#def6ee", light: "#4fd1a8" },
    fourth: { main: "#ffb41f", soft: "#fbeacb" },
  },

  pink: "#ff97af",
  pinkSoft: "#fde8ec",

  decor: {
    square: "#4e6bff",
    rect: "#669966",
    circle: "#ff97af",
  },

  primary: {
    default: "#1a1aad",
    hover: "#1212c2",
    active: "#3131de",
    dark: "#1a1a6e",
  },

  text: {
    title: "#1a1a2e",
    highlight: "#e91e63",
    body: "#777777",
    muted: "#444444",
    subtle: "#999999",
    slate: "#525f92",
    form: "#1b2a78",
  },

  surface: {
    page: "#ffffff",
    soft: "#fbfcfe",
    tint: "#e5ecfb",
    dark: "#1a1a2e",
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
