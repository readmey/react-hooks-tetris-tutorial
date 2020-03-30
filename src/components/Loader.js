import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  position: relative;
  border: 1rem solid rgba(255, 255, 255, 0.2);
  border-left: 1rem solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: spinn 1.1s infinite linear;
  animation: spinn 1.1s infinite linear;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;

  &:after {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
  @-webkit-keyframes spinn {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinn {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return <StyledLoader />;
};

export default Loader;
