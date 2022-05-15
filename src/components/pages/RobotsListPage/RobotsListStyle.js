import styled from "styled-components";

const RobotListStyle = styled.ul`
  font-family: inherit;
  width: 90%;
  margin: 0 auto;
  padding: 3em 0;
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default RobotListStyle;
