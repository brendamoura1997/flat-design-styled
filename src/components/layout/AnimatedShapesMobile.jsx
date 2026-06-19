import styled from "styled-components";

const Square = styled.div`
  width: 40px;
  height: 40px;
  background-color: #4e6bff;
  border-radius: 6px;
  opacity: 0.7;
  position: absolute;
  top: -10px;
  left: -30px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(120vw, 20vh);
    }
  }
`;

const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 170px;
  left: -90px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(120vw, -20vh);
    }
  }
`;

const Rect = styled.div`
  width: 28px;
  height: 50px;
  background-color: #669966;
  border-radius: 6px;
  opacity: 0.5;
  position: absolute;
  top: 370px;
  left: -20px;
  z-index: -1;
  animation: rect 25s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(120vw, -50vh);
    }
  }
`;

const AnimatedShapesMobile = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
};

export default AnimatedShapesMobile;
