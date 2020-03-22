import React, { useState } from "react";
import firebase from "../firebase/config.js";
import { useGameStatus } from "../hooks/useGameStatus";

import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  max-width: 200px;
  height: 27px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid darkgreen;
  border-top: 2px solid darkgreen;
  margin-bottom: 2rem;
  outline: none;

  &.disabled {
    border-color: grey;
  }
`;

const StyledButton = styled.button`
  font-family: Pixel;
  background-color: darkgreen;
  font-weight: bold;
  padding: 0.85rem 0.5rem 0.5rem;
  margin-top: 5px;
  position: relative;
  top: 1px;
  color: white;
  border: none;
  outline: none;
  transition: all 0.1s ease-in-out;

  &:disabled {
    background-color: grey;
  }
`;

const db = firebase.firestore();

const Form = () => {
  const [playerName, setPlayerName] = useState("");
  const [score] = useGameStatus();

  const handleChange = e => {
    e.preventDefault();
    setPlayerName(e.target.value);
  };

  const addHighScore = (e, playerName) => {
    console.log(playerName);
    e.preventDefault();
    db.collection("Highscore").add({
      name: playerName,
      score: score
    });
  };

  return (
    <form onSubmit={e => addHighScore(e, playerName)}>
      <StyledInput
        value={playerName}
        onChange={e => handleChange(e)}
        placeholder="Your name"
        className={!playerName ? "disabled" : null}
      />
      <StyledButton
        type="submit"
        onClick={e => addHighScore(e, playerName)}
        disabled={!playerName ? true : false}
      >
        Submit
      </StyledButton>
    </form>
  );
};

export default Form;
