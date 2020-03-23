import React from "react";
import styled from "styled-components";
import RobotIcon from "../images/404-robot-icon.svg";

const StyledIcon = styled.img`
  max-width: 300px;
  margin: 0 auto;
  display: block;
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-content: center;
  max-width: 550px;
  margin: 0 auto;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorWrapper>
          <h2>
            OH NO ! <br />
            Seems like the robot destroyed the Tetris game.
          </h2>
          <StyledIcon src={RobotIcon} alt="404 Robot Icon"></StyledIcon>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
