import React from "react";
import styled from "styled-components";

import KeyboardLeft from "../images/keyLeft.svg";
import KeyboardRight from "../images/keyRight.svg";
import KeyboardUp from "../images/keyUp.svg";
import KeyboardDown from "../images/keyDown.svg";

const StyledKeyGroup = styled.div`
  text-align: center;
`;

const StyledKey = styled.img`
  margin-left: 10px;
  width: 45px;

  &:first-child {
    margin-left: 0;
  }
`;

const KeyboardMobile = ({ setCurrentKeyCode, setTouchStart }) => {
  const setMove = keyCode => {
    setTouchStart(true);
    setCurrentKeyCode({ keyCode: keyCode });
  };

  return (
    <div className="keyboard__wrapper">
      <StyledKeyGroup className="keyboard__keys">
        <StyledKey
          src={KeyboardLeft}
          onTouchStart={() => setMove(37)}
          onTouchEnd={() => setTouchStart(false)}
        />
        <StyledKey
          src={KeyboardUp}
          onTouchStart={() => setMove(38)}
          onTouchEnd={() => setTouchStart(false)}
        />
        <StyledKey
          src={KeyboardDown}
          onTouchStart={() => setMove(40)}
          onTouchEnd={() => setTouchStart(false)}
        />
        <StyledKey
          src={KeyboardRight}
          onTouchStart={() => setMove(39)}
          onMouseUp={() => setTouchStart(false)}
        />
      </StyledKeyGroup>
    </div>
  );
};

export default KeyboardMobile;
