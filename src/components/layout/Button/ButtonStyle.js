import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 1.3em;
  font-weight: 700;
  width: 100%;
  font-family: inherit;
  align-items: center;
  border: none;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #da22ff 0%,
    #9733ee 51%,
    #da22ff 100%
  );
  padding: 15px 45px;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
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

  :hover {
    background-position: right center;
    text-decoration: none;
  }

  :active {
    transform: translateY(2px);
  }
`;

export default ButtonStyle;
