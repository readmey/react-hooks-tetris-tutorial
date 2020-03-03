import React from "react";
import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #dbeaff;
  border-radius: 20px;
  color: ${props => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-size: 1rem;
`;

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
