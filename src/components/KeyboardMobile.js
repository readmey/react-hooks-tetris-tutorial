import React from "react";
import styled from "styled-components";

import KeyboardLeft from "../images/keyCode37.svg";
import KeyboardRight from "../images/keyCode39.svg";
import KeyboardUp from "../images/keyCode38.svg";
import KeyboardDown from "../images/keyCode40.svg";

const StyledKeyboardWrapper = styled.div`
  max-width: 150px;
  margin-bottom: 1rem;
  border: 1px solid white;
  padding: 0.5rem;
  background: black;
  border-radius: 10px;
`;

const StyledKeyGroup = styled.div`
  display: flex;
  justify-content: space-between;

  &:first-child {
    text-align: center;
    display: block;
  }
`;

const StyledKey = styled.img``;

const KeyboardMobile = ({ setCurrentKeyCode, setMouseDown }) => (
  <StyledKeyboardWrapper>
    <StyledKeyGroup className="group__keys">
      <StyledKey
        src={KeyboardUp}
        onTouchStart={() => {
          setCurrentKeyCode({ keyCode: 38 });
          setMouseDown(true);
        }}
        onTouchEnd={() => setMouseDown(false)}
        width="45px"
      />
    </StyledKeyGroup>
    <StyledKeyGroup className="group__keys">
      <StyledKey
        src={KeyboardLeft}
        onTouchStart={() => {
          setCurrentKeyCode({ keyCode: 37 });
          setMouseDown(true);
        }}
        onTouchEnd={() => setMouseDown(false)}
        width="45px"
      />
      <StyledKey
        src={KeyboardDown}
        onTouchStart={() => {
          setCurrentKeyCode({ keyCode: 40 });
          setMouseDown(true);
        }}
        onTouchEnd={() => setMouseDown(false)}
        width="45px"
      />
      <StyledKey
        src={KeyboardRight}
        onTouchStart={() => {
          setCurrentKeyCode({ keyCode: 39 });
          setMouseDown(true);
        }}
        onMouseUp={() => setMouseDown(false)}
        width="45px"
      />
    </StyledKeyGroup>
  </StyledKeyboardWrapper>
);

export default KeyboardMobile;
