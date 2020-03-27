import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem;
  height: 10px;
  width: 100%;
  border-radius: 15px;
  background: #000;
  border: 2px solid #dbeaff;
  outline: none;
  color: white;
  cursor: pointer;
  margin-bottom: 1.5rem;
  height: 40px;
  font-family: Pixel, Arial, sans-serif;

  @media (max-width: 992px) {
    font-size: 0.5rem;
    max-width: 85px;
    padding: 0;
  }
`;

const CustomButton = ({ children, callback }) => (
  <StyledButton onClick={callback}>{children}</StyledButton>
);

CustomButton.propTypes = {
  callback: PropTypes.func,
  children: PropTypes.string
};

export default CustomButton;
