import styled from "styled-components";

const RobotStyle = styled.div`
  font-family: inherit;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  clip-path: polygon(
    0% 20px,
    /* top left */ 20px 0%,
    /* top left */ calc(100% - 0px) 0%,
    /* top right */ 100% 20px,
    /* top right */ 100% calc(100% - 20px),
    /* bottom right */ calc(100% - 20px) 100%,
    /* bottom right */ 20px 100%,
    /* bottom left */ 0 calc(100% - 0px)
  );
  padding: 30px;

  .robot__image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      125deg,
      #ff008450 15%,
      #fca40040 30%,
      #ffff0030 40%,
      #00ff8a20 60%,
      #00cfff40 70%,
      #cc4cfa50 85%
    );
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    clip-path: polygon(
      0% 20px,
      /* top left */ 20px 0%,
      /* top left */ calc(100% - 0px) 0%,
      /* top right */ 100% 20px,
      /* top right */ 100% calc(100% - 20px),
      /* bottom right */ calc(100% - 20px) 100%,
      /* bottom right */ 20px 100%,
      /* bottom left */ 0 calc(100% - 0px)
    );
    padding: 30px 0;
  }

  .robot__name {
    font-size: 2em;
    margin-top: 0.4em;
    margin-bottom: 0.2em;
  }

  .robot__creation-date {
    margin: 0.2em 0;
    font-weight: 400;
  }

  .atribute__name,
  .atribute__stat {
    font-weight: 400;
  }

  .atribute {
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
  }
`;

export default RobotStyle;
