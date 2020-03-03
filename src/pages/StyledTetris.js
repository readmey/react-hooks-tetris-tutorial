import styled from "styled-components";

// import bgImage from "../images/bg-game.png";
import bgImage from "../images/game-bg.svg";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #191919;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-item: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 700px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
