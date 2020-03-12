import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #dbeaff;
  border-radius: 20px;
  color: ${props => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-size: 1rem;
  @media (max-width: 992px) {
    font-size: 0.6rem;
    padding: 0.8rem 0.5rem;
    min-width: 78px;
    height: 38px;
    margin-right: 5px;
  }
`;

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
