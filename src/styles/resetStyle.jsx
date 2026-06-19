import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    height: 100%;
    font-size: 16px;
    text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    min-height: 100%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
    overflow-wrap: break-word;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  ul, ol {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  button:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
    background: none;
    border-radius: 0;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  textarea {
    resize: vertical;
    overflow: auto;
  }

  select::-ms-expand {
    display: none;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  legend {
    padding: 0;
    display: table;
  }

  label {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  td, th {
    padding: 0;
    text-align: left;
    vertical-align: top;
  }

img, picture, video, canvas {
  display: block;
  max-width: 100%;
  height: auto;
  border-style: none;
}

  iframe {
    border: none;
    display: block;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border: none;
    border-top: 1px solid currentColor;
    margin: 0;
  }

  pre, code, kbd, samp {
    font-family: monospace, monospace;
    font-size: inherit;
  }

  pre {
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
    cursor: help;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  small {
    font-size: 80%;
  }

  b, strong {
    font-weight: bolder;
  }

  em, i {
    font-style: italic;
  }

  details > summary {
    cursor: pointer;
    list-style: none;
  }

  details > summary::-webkit-details-marker {
    display: none;
  }

  dialog {
    padding: 0;
    border: none;
    background: none;
  }

  [hidden] {
    display: none !important;
  }

  [disabled] {
    cursor: not-allowed;
    pointer-events: none;
  }

  [aria-busy="true"] {
    cursor: progress;
  }

  [aria-controls] {
    cursor: pointer;
  }

  [aria-disabled="true"] {
    cursor: not-allowed;
    pointer-events: none;
  }

  :focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  ::selection {
    background-color: rgba(0, 0, 0, 0.15);
    color: inherit;
  }


  #root {
    isolation: isolate;
    min-height: 100%;
  }
`;

export default ResetStyle;
