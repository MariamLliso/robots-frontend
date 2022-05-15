import styled from "styled-components";
import backgroundImage from "./images/background.png";

const AppContainerStyle = styled.div`
  background: linear-gradient(
      180deg,
      rgba(35, 37, 38, 0.95) 0%,
      rgba(65, 67, 69, 0.95) 100%
    ),
    url(${backgroundImage}) no-repeat center bottom;
  background-size: cover;
  min-height: 100vh;
`;

export default AppContainerStyle;
