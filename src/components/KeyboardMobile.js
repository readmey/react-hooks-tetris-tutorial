import React from "react";
import styled from "styled-components";

import Keyboard37 from "../images/keyLeft.svg";
import Keyboard39 from "../images/keyRight.svg";
import Keyboard38 from "../images/keyUp.svg";
import Keyboard40 from "../images/keyDown.svg";

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

  const renderKeyBoard = () => {
    const keys = [
      { code: 37, image: Keyboard37 },
      { code: 38, image: Keyboard38 },
      { code: 40, image: Keyboard40 },
      { code: 39, image: Keyboard39 }
    ];

    return keys.map(key => (
      <StyledKey
        key={key.code}
        src={key.image}
        onTouchStart={e => setMove(e, key.code)}
        onTouchEnd={e => setDrop(e, key.code)}
      />
    ));
  };

  return (
    <div className="keyboard__wrapper">
      <StyledKeyGroup className="keyboard__keys">
        {renderKeyBoard()}
      </StyledKeyGroup>
    </div>
  );
};

export default KeyboardMobile;
