import { createGlobalStyle } from "styled-components";
import backgroundImage from "../images/background.png";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Oxanium', 'Courier New', Courier, monospace;
    font-weight: 500;
    color: #fff;
    background: linear-gradient(
      180deg,
      rgba(35, 37, 38, 0.95) 0%,
      rgba(65, 67, 69, 0.95) 100%
    ),
    url(${backgroundImage}) no-repeat center bottom;
    background-size: cover;
    background-attachment: fixed;
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
