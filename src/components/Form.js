import React, { useState } from "react";
import axiosInstance from "../api/config";
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

const StyledErrorMessage = styled.h5`
  color: red;
`;

const Form = ({ updateHighscore, highscore, score }) => {
  const [playerName, setPlayerName] = useState("");
  const [isError, setError] = useState(false);

  const handleChange = e => {
    e.preventDefault();
    setPlayerName(e.target.value);
  };

  const addHighScore = (e, playerName) => {
    e.preventDefault();
    const playerExists = highscore.filter(e => e.name === playerName);
    try {
      if (playerExists.length === 0) {
        axiosInstance.post("/highscore", {
          "name": playerName,
          "score": score
        });
      } else {
        const id = playerExists[0]._id;
        axiosInstance.put(`/highscore/${id}`, {
          "name": playerName,
          "score": score
        });
      }
      updateHighscore();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      {isError && (
        <StyledErrorMessage>
          Adding to highscore is not working
        </StyledErrorMessage>
      )}
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
    </React.Fragment>
  );
};

export default Form;
