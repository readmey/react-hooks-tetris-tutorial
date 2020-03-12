import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 25px 15px 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: white;
  background: #000;
  font-size: 1rem;
  border: 4px solid #dbeaff;
  font-family: Pixel, Arial, sans-serif;
  outline: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  @media (max-width: 992px) {
    padding: 1rem 0.25rem;
    font-size: 0.5rem;
  }
`;

const CustomButton = ({ children, callback }) => (
  <StyledButton onClick={callback}>{children}</StyledButton>
);

export default CustomButton;
