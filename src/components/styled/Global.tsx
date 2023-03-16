import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap');
    html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.primaryWhite};
    font-family: "Poppins", sans-serif;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }

`;
