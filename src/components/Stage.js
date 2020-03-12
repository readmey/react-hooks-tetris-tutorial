import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #4f4f4f;
  width: 100%;
  max-width: 25vw;
  background: #4f4f4f;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 70vw;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(70vw / ${props => props.width})
    );
  }
`;

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
