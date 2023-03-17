import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.primaryWhite};
    height: 100vh;
    text-rendering: optimizeLegibility;
  }

`;
