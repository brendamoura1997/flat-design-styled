import styled, { css } from "styled-components";

const Circle = styled.div`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 50%;
    height: 50%;
    filter: brightness(0) invert(1);
  }
  svg path {
    fill: currentColor;
  }

  ${({ $filled }) =>
    $filled &&
    css`
      svg path {
        fill: currentColor;
      }
    `}
`;

const PlanIcon = ({ plan, size = 64, filled = false }) => (
  <Circle $size={size} $bg={plan.decor} $filled={filled}>
    {plan.icon}
  </Circle>
);

export default PlanIcon;
