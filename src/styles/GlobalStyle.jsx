import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Glacial";
    src: url("./fonts/GlacialIndifference-Regular.otf");
  }

  @font-face {
    font-family: "Glacial";
    font-weight: bold;
    src: url("./fonts/GlacialIndifference-Bold.otf");
  }

  body {
    line-height: 1.5;
    font-family: "Glacial", sans-serif;
  }


`;

export default GlobalStyle;
