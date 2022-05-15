import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Oxanium', 'Courier New', Courier, monospace;
    font-weight: 500;
    color: #fff;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }
`;

export default GlobalStyle;
