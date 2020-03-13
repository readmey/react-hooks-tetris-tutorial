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
  const setMove = (e, keyCode) => {
    e.preventDefault();
    e.stopPropagation();
    setTouchStart(true);
    setCurrentKeyCode({ keyCode: keyCode });
  };

  return (
    <div className="keyboard__wrapper">
      <StyledKeyGroup className="keyboard__keys">
        <StyledKey
          src={KeyboardLeft}
          onTouchStart={e => setMove(e, 37)}
          onTouchEnd={() => setTouchStart(false)}
        />
        <StyledKey
          src={KeyboardUp}
          onTouchStart={e => setMove(e, 38)}
          onTouchEnd={() => setTouchStart(false)}
        />
        <StyledKey
          src={KeyboardDown}
          onTouchStart={e => setMove(e, 40)}
          onTouchEnd={() => setTouchStart(false)}
        />
        <StyledKey
          src={KeyboardRight}
          onTouchStart={e => setMove(e, 39)}
          onMouseUp={() => setTouchStart(false)}
        />
      </StyledKeyGroup>
    </div>
  );
};

export default KeyboardMobile;
