import styled from "styled-components";

const BigSquare = styled.div`
  width: 170px;
  height: 170px;
  background-color: #9bffb5;
  // opacity: 0.7;
  position: absolute;
  z-index: 10;
  top: 25%;
  // left: 40%;
  right: 50px;
  border-radius: 20px;
`;
const SmallSquare = styled.div`
  width: 100px;
  height: 110px;
  background-color: #b1e1eb;
  // opacity: 0.7;
  position: absolute;
  z-index: 9;
  top: 14%;
  left: 77px;
  border-radius: 0px;
`;

const MiniSquare = styled.div`
  width: 28px;
  height: 30px;
  background-color: #b3e1e8;
  // opacity: 0.7;
  position: absolute;
  z-index: 10;
  top: 8%;
  left: 167px;
  border-radius: 8px;
`;

const MediumSquare = styled.div`
  width: 100px;
  height: 100px;
  background-color: #9fe3b4;
  // opacity: 0.7;
  position: absolute;
  z-index: 8;
  top: 18%;
  left: 157px;
  border-radius: 0px;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff0b80;
  position: absolute;
  top: 9%;
  left: 100px;
  z-index: 9;
`;

const FixedShapes = () => {
  return (
    <>
      <MiniSquare />
      <BigSquare />
      <SmallSquare />
      <MediumSquare />
      <Circle />
    </>
  );
};

export default FixedShapes;
