import React, { useState } from "react";

// Import Components
import Stage from "../components/Stage";
import Display from "../components/Display";
import CustomButton from "../components/CustomButton";
import ErrorBoundary from "../components/ErrorBoundary";
import KeyboardMobile from "../components/KeyboardMobile";

// Import Styles
import {
  StyledTetrisWrapper,
  StyledTetris,
  StyledTetrisMobile
} from "./StyledTetris";

// Import Hooks
import { createStage, checkCollision } from "../helpers/gameHelpers";
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

// Import Audio
import TetrisAudio from "../audio/Tetris.mp3";
import TetrisDrop from "../audio/TetrisDrop.wav";
import TetrisGameover from "../audio/TetrisGameover.wav";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);
  const [isTouchStart, setTouchStart] = useState(false);
  const [currentKeyCode, setCurrentKeyCode] = useState(0);

  const [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer();
  const [stage, setStage, rowsCleared, merged, setMerged] = useStage(
    player,
    resetPlayer
  );
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const audioTetrisDropRef = React.createRef();

  const calcDropTime = 1000 / (level + 1) + 200;

  const startGame = () => {
    // Reset all
    resetGame();
    setStage(createStage());
    setDropTime(calcDropTime);
    setGameStart(true);
  };

  const resetGame = () => {
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(0);
    setGameOver(false);
  };

  const pauseGame = () => {
    if (dropTime) {
      setDropTime(null);
      setGamePaused(true);
    } else {
      setDropTime(calcDropTime);
      setGamePaused(false);
    }
  };

  const drop = () => {
    // increase level and speed if 10 rows cleared
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(calcDropTime);
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
    if (merged && audioTetrisDropRef.current) {
      audioTetrisDropRef.current.play();
      setMerged(false);
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
        setDropTime(calcDropTime);
      }
    }
  };

  const move = ({ keyCode }) => {
    // if (!gameOver && !gamePaused) {
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

  const setButtonText = () => {
    let buttonTxt = !gameStart
      ? "Start Game"
      : gameStart && !gamePaused
      ? "Pause Game"
      : "Continue";
    return buttonTxt;
  };

  window.oncontextmenu = event => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  useInterval(() => move(currentKeyCode), isTouchStart ? 100 : null);

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <ErrorBoundary>
      <StyledTetrisWrapper
        tabIndex="0"
        onKeyDown={e => move(e)}
        onKeyUp={keyUp}
      >
        <StyledTetris>
          <aside>
            {gameOver ? (
              <React.Fragment>
                <Display gameOver={gameOver} text="Game Over" />
                <audio autoPlay>
                  <source src={TetrisGameover} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Display text={`Score: ${score}`} />
                <Display text={`Rows: ${rows}`} />
                <Display text={`Level: ${level}`} />
                <CustomButton callback={gameStart ? pauseGame : startGame}>
                  {setButtonText()}
                </CustomButton>
              </React.Fragment>
            )}
            {gameStart ? (
              <React.Fragment>
                <audio loop autoPlay muted={gamePaused}>
                  <source src={TetrisAudio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <audio ref={audioTetrisDropRef}>
                  <source src={TetrisDrop} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </React.Fragment>
            ) : null}
          </aside>
          <Stage stage={stage} />
        </StyledTetris>
        <StyledTetrisMobile>
          <KeyboardMobile
            setTouchStart={setTouchStart}
            setCurrentKeyCode={setCurrentKeyCode}
            onTouchRelease={keyUp}
          />
        </StyledTetrisMobile>
      </StyledTetrisWrapper>
    </ErrorBoundary>
  );
};

export default Tetris;
