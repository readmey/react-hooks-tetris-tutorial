import React, { useState, useEffect } from "react";
import firebase from "../firebase/config.js";

import styled from "styled-components";
import iconFirstPlace from "../images/icons/crown.svg";
import iconLastPlace from "../images/icons/poop.svg";

import Form from "../components/Form";

const StyledList = styled.ol`
  display: grid;
  grid-template-columns: auto;
  grid-template-columns: calc(100% / 2 - 5px) calc(100% / 2 - 5px);
  grid-column-gap: 10px;
`;

const StyledListItem = styled.li`
  font-size: 14px;
`;

const StyledTitle = styled.p`
  vertical-align: middle;
  margin-left: 1rem;
  min-width: 80px;
  display: inline-block;
`;

const db = firebase.firestore();

const Highscore = ({ isGameOver }) => {
  const [highScore, setHighScore] = useState(0);
  const [isError, setError] = useState(false);

  // useEffect(() => {
  //   async function fetchHighscore() {
  //     try {
  //       const data = await db.collection("Highscore").get();
  //       setHighScore(
  //         data.docs
  //           .map(doc => ({ ...doc.data(), id: doc.id }))
  //           .sort((a, b) => b.score - a.score)
  //       );
  //     } catch (error) {
  //       console.log(error);
  //       setError(true);
  //     }
  //   }
  //   fetchHighscore();
  // }, []);

  return (
    <React.Fragment>
      <h3>Highscore List: </h3>

      {isGameOver && <Form />}
      {isError && <h2>No highscore score list available </h2>}
      <StyledList>
        {highScore.length > 0 &&
          highScore.map((item, index) => (
            <StyledListItem key={item.id}>
              {index === 0 && (
                <img width="20px" src={iconFirstPlace} alt="crown icon" />
              )}
              {index === highScore.length - 1 && (
                <img width="25px" src={iconLastPlace} alt="poop icon" />
              )}
              <StyledTitle>
                {item.name}: {item.score}
              </StyledTitle>
            </StyledListItem>
          ))}
      </StyledList>
    </React.Fragment>
  );
};

export default Highscore;
