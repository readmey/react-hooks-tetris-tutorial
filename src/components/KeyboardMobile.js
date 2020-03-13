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

const KeyboardMobile = ({
  setCurrentKeyCode,
  setTouchStart,
  onTouchRelease
}) => {
  const setMove = (e, keyCode) => {
    e.preventDefault();
    setTouchStart(true);
    setCurrentKeyCode({ keyCode: keyCode });
  };

  const setDrop = (e, keyCode) => {
    e.preventDefault();
    setTouchStart(false);
    onTouchRelease({ keyCode: keyCode });
  };

  return (
    <div className="keyboard__wrapper">
      <StyledKeyGroup className="keyboard__keys">
        <StyledKey
          src={KeyboardLeft}
          onTouchStart={e => setMove(e, 37)}
          onTouchEnd={e => setDrop(e, 37)}
        />
        <StyledKey
          src={KeyboardUp}
          onTouchStart={e => setMove(e, 38)}
          onTouchEnd={e => setDrop(e, 38)}
        />
        <StyledKey
          src={KeyboardDown}
          onTouchStart={e => setMove(e, 40)}
          onTouchEnd={e => setDrop(e, 40)}
        />
        <StyledKey
          src={KeyboardRight}
          onTouchStart={e => setMove(e, 39)}
          onMouseUp={e => setDrop(e, 39)}
        />
      </StyledKeyGroup>
    </div>
  );
};

export default KeyboardMobile;
