import styled from "styled-components";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import { theme } from "../../styles/theme";
import { checkoutLabels } from "../../utils/checkoutData";

const Steps = styled.ol`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 16px 0 18px;
  padding: 0;
`;
const Step = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;

  &:not(:last-child) {
    flex: 1 1 auto;
  }

  &:not(:last-child)::after {
    content: "";
    flex: 1;
    height: 1px;
    margin: 0 12px 0 2px;
    background: ${theme.colors.secondary.second.light};
    opacity: 0.6;
  }

  @media ${theme.mediaQueries.mobile} {
    gap: 8px;

    &:not(:last-child)::after {
      margin: 0 6px 0 0;
    }
  }
`;
const Circle = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ $pending }) =>
    $pending
      ? theme.colors.secondary.second.light
      : theme.colors.primary.default};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 700;

  @media ${theme.mediaQueries.mobile} {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;
const Label = styled.span`
  white-space: pre-line;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ $pending }) =>
    $pending ? theme.colors.secondary.second.light : theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    display: ${({ $active }) => ($active ? "block" : "none")};
    font-size: 13px;
  }
`;

const CheckoutStepper = ({ steps, current }) => {
  return (
    <Steps aria-label={checkoutLabels.stepsAriaLabel}>
      {steps.map(({ id, label }, index) => {
        const isDone = id < current;
        const isActive = id === current && !isDone;
        const isPending = !isDone && !isActive;

        return (
          <Step key={id} aria-current={isActive ? "step" : undefined}>
            <Circle $pending={isPending}>
              {isDone ? (
                <CheckBadgeIcon
                  width={18}
                  height={18}
                  viewBox="6 6 12 12"
                  color="none"
                  stroke={theme.colors.white}
                />
              ) : (
                index + 1
              )}
            </Circle>
            <Label $pending={isPending} $active={isActive}>
              {label}
            </Label>
          </Step>
        );
      })}
    </Steps>
  );
};

export default CheckoutStepper;
