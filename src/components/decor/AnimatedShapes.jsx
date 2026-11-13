import styled from "styled-components";
import { theme } from "../../styles/theme";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  border-radius: 6px;
  opacity: 0.7;
  position: absolute;
  top: 10px;
  left: -60px;
  z-index: -1;
  animation: square 30s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(80vw, 60vh);
    }
  }

  @media ${theme.mediaQueries.desktopWide} {
    width: 50px;
    height: 50px;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 150px;
  left: -150px;
  z-index: -1;
  animation: circle 30s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(90vw, -60vh);
    }
  }

  @media ${theme.mediaQueries.desktopWide} {
    width: 90px;
    height: 90px;
  }
`;

const Rect = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  border-radius: 6px;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rect 30s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(80vw, -40vh);
    }
  }
  @media ${theme.mediaQueries.desktopWide} {
    width: 40px;
    height: 90px;
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
};

export default AnimatedShapes;
