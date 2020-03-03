import React, { useState } from "react";

// Import Components
import Stage from "../components/Stage";
import Display from "../components/Display";
import CustomButton from "../components/CustomButton";

// Import Styles
import { StyledTetrisWrapper, StyledTetris } from "./StyledTetris";

// Import Hooks
import { createStage, checkCollision } from "../helpers/gameHelpers";
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// Import Audio
import TetrisAudio from "../audio/Tetris.mp3";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false);

  const [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const startGame = () => {
    // Reset all
    setStage(createStage());
    setDropTime(1000 / (level + 1) + 200);
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(0);
    setGameOver(false);
    setGameStart(true);
  };

  const drop = () => {
    // increase level and speed if 10 rows cleared
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setGameStart(false);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const movePlayer = direction => {
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPos({ x: direction, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        rotatePlayer(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <CustomButton callback={startGame}>
            {!gameStart ? "Start the Game" : "Restart Game"}
          </CustomButton>
        </aside>
        {gameStart ? (
          <audio loop autoPlay>
            <source src={TetrisAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : null}
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
