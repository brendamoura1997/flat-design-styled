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
    line-height: 1.2;
    font-family: "Glacial", sans-serif;
    font-weight: 500;
    font-size: 12px;
  }

  body h1{
   font-weight: 900;
  }

  body h2 {
    font-weight: 700;
  }

  body h3 {
    font-weight: 700;
  }

  body button {
    font-weight: 700;
  }

  body input::placeholder {
    font-weight: 500;
    font-size: 12px;
  }
  body textarea::placeholder {
    font-weight: 500;
    font-size: 12px;
  }

  body input {
      &:focus-visible {
     outline: none;
  }

    body textarea {
      &:focus-visible {
     outline: none;
  }

    
  }


  


`;

export default GlobalStyle;
