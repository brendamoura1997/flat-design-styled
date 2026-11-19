import styled from "styled-components";
import { theme } from "../../styles/theme";

const rays = [
  { left: 26, top: 4, angle: -105 },
  { left: 12, top: 14, angle: -150 },
  { left: 10, top: 32, angle: 165 },
];

const Wrapper = styled.span`
  position: relative;
  display: block;
  width: 44px;
  height: 44px;
  transform: ${({ $mirror }) => ($mirror ? "scaleX(-1)" : "none")};
`;
const Ray = styled.span`
  position: absolute;
  left: ${({ $left }) => $left}px;
  top: ${({ $top }) => $top}px;
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background: ${theme.colors.secondary.third.light};
  transform: rotate(${({ $angle }) => $angle}deg);
`;

const SparkleRays = ({ className, mirror = false }) => (
  <Wrapper className={className} $mirror={mirror} aria-hidden="true">
    {rays.map(({ left, top, angle }) => (
      <Ray key={angle} $left={left} $top={top} $angle={angle} />
    ))}
  </Wrapper>
);

export default SparkleRays;
