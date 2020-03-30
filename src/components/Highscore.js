import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axiosInstance from "../api/config";

import styled from "styled-components";
import iconFirstPlace from "../images/icons/crown.svg";
import iconLastPlace from "../images/icons/poop.svg";
import Loader from "../components/Loader";
import Form from "./Form";

const StyledHighscores = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
`;

const StyledListWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px dashed black;

  @media (min-width: 992px) {
    width: 50%;
    border: 1px dashed black;
  }
`;

const StyledList = styled.ol``;

const StyledListItem = styled.li`
  font-size: 14px;
`;

const StyledTitle = styled.p`
  vertical-align: middle;
  margin-left: 1rem;
  min-width: 80px;
  display: inline-block;
`;

const Highscore = ({ score }) => {
  const [highScore, setHighScore] = useState(0);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  async function fetchHighscore() {
    try {
      setLoading(true);
      await axiosInstance.get("/highscore").then(result => {
        const sortedData = result.data.sort((a, b) => b.score - a.score);
        setHighScore(sortedData);
        setLoading(false);
      });
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchHighscore();
  }, []);

  const renderScores = filterHighscore => {
    const filteredItems =
      highScore.length > 0 &&
      highScore.filter(e => (filterHighscore ? e.isHighscore : !e.isHighscore));

    return isLoading ? (
      <Loader />
    ) : (
      filteredItems.length > 0 &&
        filteredItems.map((item, index) => (
          <StyledListItem key={item._id}>
            {index === 0 && (
              <img width="20px" src={iconFirstPlace} alt="crown icon" />
            )}
            {index === filteredItems.length - 1 && (
              <img width="25px" src={iconLastPlace} alt="poop icon" />
            )}
            <StyledTitle>
              {item.name}: {item.score}
            </StyledTitle>
          </StyledListItem>
        ))
    );
  };

  return (
    <React.Fragment>
      {isError && <h2>No highscore score list available </h2>}
      <Form
        updateHighscore={fetchHighscore}
        highscore={highScore}
        score={score}
      />
      <StyledHighscores>
        <StyledListWrapper>
          <h3>Hall Of FAME: </h3>
          <StyledList>{renderScores(true)}</StyledList>
        </StyledListWrapper>
        <StyledListWrapper>
          <h3>Hall Of SHAME: </h3>
          <StyledList>{renderScores(false)}</StyledList>
        </StyledListWrapper>
      </StyledHighscores>
    </React.Fragment>
  );
};

Highscore.propTypes = {
  score: PropTypes.number
};

export default Highscore;
