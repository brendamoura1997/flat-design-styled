import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import CardIcon from "../../icons/CardIcon";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import ClockOutlineIcon from "../../icons/ClockOutlineIcon";
import { theme } from "../../styles/theme";
import { cardLabels } from "../../utils/priceData";
import {
  CARD_PAYMENT_DELAY,
  checkoutLabels,
  formatPlanTotal,
} from "../../utils/checkoutData";
import { getCheckoutPalette } from "../../utils/checkoutPalettes";
import DotsGrid from "../decor/DotsGrid";
import PlanIcon from "./PlanIcon";

const MINT = "#b9f0d9";

const labels = checkoutLabels.cardStep;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;
const fill = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
`;

const DecorCircle = styled.span`
  position: absolute;
  left: -86px;
  bottom: -92px;
  width: 204px;
  height: 204px;
  border-radius: 50%;
  background: var(--ck-pix-circle, #e4e1fc);
  z-index: 0;
  pointer-events: none;

  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const DecorCircleSmall = styled.span`
  position: absolute;
  left: -86px;
  bottom: -112px;
  width: 184px;
  height: 184px;
  border-radius: 50%;
  background: var(--ck-pix-circle-small, #cec9fa);
  z-index: 0;
  pointer-events: none;

  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const DecorDot = styled.span`
  position: absolute;
  left: 120px;
  bottom: 32px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${MINT};
  z-index: 0;
  pointer-events: none;

  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const DecorDots = styled(DotsGrid)`
  position: absolute;
  right: 28px;
  bottom: 28px;
  z-index: 0;

  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
`;
const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 800;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 22px;
  }
`;
const Message = styled.p`
  max-width: 400px;
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 1.4;
  color: ${theme.colors.text.form};
  hyphens: none;

  @media ${theme.mediaQueries.mobile} {
    font-size: 12.5px;
  }
`;
const Panel = styled.div`
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  border-radius: 14px;
  background: var(--ck-pix-panel, #f0ebff);
  border: 1px solid var(--ck-pix-border, #e3dcff);
`;
const PlanBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2px 10px 0;

  @media ${theme.mediaQueries.mobile} {
    padding: 2px 2px 0;
  }
`;
const PlanInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 10px;
  min-width: 0;

  @media ${theme.mediaQueries.mobile} {
    gap: 8px;
  }
`;
const PlanName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--ck-plan-name, ${theme.colors.text.title});

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`;
const PriceInfo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  align-self: stretch;
  gap: 5px;
  border-left: 1px solid rgba(26, 26, 46, 0.2);
  color: ${theme.colors.text.title};
`;
const PriceAmount = styled.span`
  align-self: center;
  font-size: 17px;
  font-weight: 700;

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }
`;
const PriceNote = styled.span`
  align-self: center;
  font-size: 12px;
  color: ${theme.colors.text.slate};
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px 14px 14px;
  border-radius: 12px;
  background: var(--ck-pix-qr, #f9f7ff);

  @media ${theme.mediaQueries.mobile} {
    padding: 14px 10px 12px;
  }
`;
const Loader = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Ring = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid var(--ck-pix-border, #e3dcff);
  border-top-color: var(--ck-accent, ${theme.colors.primary.default});
  animation: ${spin} 1s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const LoaderCore = styled.span`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--ck-plan-icon, ${theme.colors.secondary.second.main});
  box-shadow: 0 4px 14px var(--ck-card-shadow, rgba(26, 26, 173, 0.25));
  animation: ${pulse} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const CardInfo = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.text.title};
`;
const Progress = styled.div`
  width: 100%;
  max-width: 360px;
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--ck-pix-border, #e3dcff);
`;
const ProgressBar = styled.span`
  display: block;
  height: 100%;
  width: 0;
  border-radius: 999px;
  background: var(--ck-accent, ${theme.colors.primary.default});
  animation: ${({ $duration }) => css`
    ${fill} ${$duration}ms linear forwards
  `};

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1ms;
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--ck-qr-divider, ${theme.colors.border.input});
`;
const Phases = styled.ul`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;
const Phase = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: ${({ $state }) => ($state === "active" ? 700 : 500)};
  color: ${({ $state }) =>
    $state === "pending" ? "#b2bac8" : theme.colors.text.title};
  transition: color 0.3s;

  @media ${theme.mediaQueries.mobile} {
    font-size: 12.5px;
  }
`;
const PhaseMark = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid
    ${({ $state }) =>
      $state === "pending"
        ? "#d6dbe5"
        : `var(--ck-accent, ${theme.colors.primary.default})`};
  background: ${({ $state }) =>
    $state === "done"
      ? `var(--ck-accent, ${theme.colors.primary.default})`
      : theme.colors.white};
  transition:
    background 0.3s,
    border-color 0.3s;

  ${({ $state }) =>
    $state === "active" &&
    css`
      border-color: var(--ck-pix-border, #e3dcff);
      border-top-color: var(--ck-accent, ${theme.colors.primary.default});
      animation: ${spin} 0.9s linear infinite;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`;
const Waiting = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
const WaitingLine = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--ck-waiting, ${theme.colors.text.form});

  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  svg {
    flex-shrink: 0;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
    align-items: flex-start;
  }
`;
const WaitingNote = styled.p`
  font-size: 11px;
  color: ${theme.colors.text.slate};
`;

const getPhaseState = (index, current) => {
  if (index < current) return "done";
  if (index === current) return "active";
  return "pending";
};

const CardProcessingStep = ({ plan, cardNumber = "", onPaid }) => {
  const [phase, setPhase] = useState(0);
  const onPaidRef = useRef(onPaid);
  const palette = getCheckoutPalette(plan);
  const lastDigits = cardNumber.replace(/\D/g, "").slice(-4).padStart(4, "*");

  useEffect(() => {
    onPaidRef.current = onPaid;
  }, [onPaid]);

  useEffect(() => {
    const total = labels.phases.length;
    const timers = [];

    for (let index = 1; index < total; index += 1) {
      timers.push(
        setTimeout(() => setPhase(index), (CARD_PAYMENT_DELAY / total) * index),
      );
    }

    timers.push(
      setTimeout(() => {
        setPhase(total);
        onPaidRef.current();
      }, CARD_PAYMENT_DELAY),
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <DecorCircle aria-hidden="true" />
      <DecorCircleSmall aria-hidden="true" />
      <DecorDot aria-hidden="true" />
      <DecorDots
        columns={4}
        rows={4}
        color={palette.dots}
        size={4}
        gap={12}
        opacity={0.6}
      />
      <Content>
        <Title>{labels.title}</Title>
        <Message>{labels.message}</Message>
        <Panel>
          <PlanBar>
            <PlanInfo>
              <PlanIcon plan={plan} size={30} />
              <PlanName>
                {cardLabels.planPrefix} {plan.type}
              </PlanName>
            </PlanInfo>
            <PriceInfo>
              <PriceAmount>{formatPlanTotal(plan.price)}</PriceAmount>
              <PriceNote>{cardLabels.period}</PriceNote>
            </PriceInfo>
          </PlanBar>
          <Box>
            <Loader aria-hidden="true">
              <Ring />
              <LoaderCore>
                <CardIcon
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  color="none"
                  stroke={theme.colors.white}
                />
              </LoaderCore>
            </Loader>
            <CardInfo>
              {labels.cardLabel} {labels.cardMask}
              {lastDigits}
            </CardInfo>
            <Progress aria-hidden="true">
              <ProgressBar $duration={CARD_PAYMENT_DELAY} />
            </Progress>
            <Divider />
            <Phases>
              {labels.phases.map((text, index) => {
                const state = getPhaseState(index, phase);

                return (
                  <Phase key={text} $state={state}>
                    <PhaseMark $state={state} aria-hidden="true">
                      {state === "done" && (
                        <CheckBadgeIcon
                          width={16}
                          height={16}
                          viewBox="6 6 12 12"
                          color="none"
                          stroke={theme.colors.white}
                        />
                      )}
                    </PhaseMark>
                    {text}
                  </Phase>
                );
              })}
            </Phases>
          </Box>
        </Panel>
        <Waiting role="status">
          <WaitingLine>
            <ClockOutlineIcon
              width={18}
              height={18}
              viewBox="0 0 24 24"
              color="none"
              stroke={palette.accent}
            />
            <p>{labels.waiting}</p>
          </WaitingLine>
          <WaitingNote>{labels.redirect}</WaitingNote>
        </Waiting>
      </Content>
    </>
  );
};

export default CardProcessingStep;
