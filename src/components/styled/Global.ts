import { createGlobalStyle } from "styled-components";

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
    align-items: center;
    display: flex;
    font-family: "Poppins", sans-serif;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }

`;
