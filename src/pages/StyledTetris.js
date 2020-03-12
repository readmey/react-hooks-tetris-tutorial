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
  margin: 2rem auto 1rem;
  max-width: 580px;

  @media (min-width: 992px) {
    display: flex;
    align-item: flex-start;
    flex-direction: row-reverse;
  }

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
    margin: 0 auto;

    @media (max-width: 992px) {
      max-width: 90vw;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const StyledTetrisMobile = styled.div`
  margin: 0 auto;
  max-width: 545px;

  @media (max-width: 992px) {
    max-width: 70vw;
  }
`;
