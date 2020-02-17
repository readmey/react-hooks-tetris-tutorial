import React from "react";
import styled from "styled-components";
import tetrisBackground from "./assets/images/tetris-bg.jpg";

function App() {
  const TetrisWrapper = styled.div`
    background-image: url(${tetrisBackground});
    width: 100vw;
    height: 100vh;
    background-size: contain;
    background-position: center center;
  `;

  const Button = styled.button`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 1rem 2rem;
    background-color: #4dc4f2;
    border: none;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  `;

  return (
    <div className="App">
      <TetrisWrapper>
        <Button>Start the Game</Button>
      </TetrisWrapper>
    </div>
  );
}

export default App;
