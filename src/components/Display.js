import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  margin-bottom: 1rem;
  padding: 0.8rem;
  height: 10px;
  border: 2px solid #dbeaff;
  border-radius: 15px;
  color: ${props => (props.gameOver ? "red" : "#999")};
  background: #000;
  @media (max-width: 992px) {
    font-size: 0.6rem;
    margin-right: 5px;
  }
`;

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
