import React from "react";
import styled from "styled-components";
import { TETROMINOS } from "../helpers/tetrominos";

const StyledCell = styled.div`
  background: ${props =>
    props.bgImage
      ? `url(${props.bgImage}) #000000`
      : `rgba(${props.color}, 0.8)`};
  background-size: cover;
`;

const Cell = ({ type }) => (
  <StyledCell
    type={type}
    color={TETROMINOS[type].color}
    bgImage={TETROMINOS[type].bgImage}
  />
);

export default React.memo(Cell);
// React.memo only re-render the changed cells
