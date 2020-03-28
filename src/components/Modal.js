import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledModal = styled.div`
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: scroll;
  width: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 10px;
  top: 50%;
  left: 50%;

  @media (min-width: 992px) {
    max-width: 80vw;
    padding: 2rem;
  }
`;

const StyledButton = styled.button`
  float: right;
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  max-height: 80vh;
  overflow-y: scroll;
`;

const Modal = ({ children, isGameOver }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (isGameOver) {
      setOpen(true);
    }
  }, [isGameOver]);

  return open ? (
    <StyledModal>
      <StyledButton className="button__close" onClick={() => setOpen(false)}>
        X
      </StyledButton>
      {children}
    </StyledModal>
  ) : null;
};

Modal.propTypes = {
  isGameover: PropTypes.bool,
  children: PropTypes.element.isRequired
};

export default Modal;
