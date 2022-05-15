import styled from "styled-components";

const HeaderStyle = styled.ul`
  padding: 30px 0px;
  font-family: inherit;
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 600px) {
    justify-content: space-around;
    align-items: center;
  }

  h1 {
    text-transform: uppercase;
    margin: 0;
    font-weight: 700;
    background: radial-gradient(
        50% 123.47% at 50% 50%,
        #00ff94 0%,
        #ff00c7 100%
      ),
      linear-gradient(121.28deg, #213100 0%, #ff0000 100%),
      linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
      linear-gradient(114.9deg, #00c6a2 0%, #6a45a8 100%),
      radial-gradient(100% 148.07% at 0% 0%, #ffffff 0%, #1dcd00 100%);
    background-blend-mode: screen, color-dodge, overlay, difference, normal;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 600px) {
      font-size: 2em;
    }

    @media only screen and (min-width: 600px) {
      font-size: 3em;
    }
  }
`;

export default HeaderStyle;
