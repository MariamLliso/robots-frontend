import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Oxanium', 'Courier New', Courier, monospace;
    font-weight: 500;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
