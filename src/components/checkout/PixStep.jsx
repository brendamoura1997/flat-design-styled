import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import ClockOutlineIcon from "../../icons/ClockOutlineIcon";
import CopyIcon from "../../icons/CopyIcon";
import { theme } from "../../styles/theme";
import { cardLabels } from "../../utils/priceData";
import {
  PIX_CODE,
  PIX_PAYMENT_DELAY,
  checkoutLabels,
  formatPlanTotal,
} from "../../utils/checkoutData";
import DotsGrid from "../decor/DotsGrid";
import PixQrCode from "./PixQrCode";
import PlanIcon from "./PlanIcon";

const MINT = "#b9f0d9";

const labels = checkoutLabels.pixStep;

const DecorCircle = styled.span`
  position: absolute;
  left: -56px;
  bottom: -72px;
  width: 184px;
  height: 184px;
  border-radius: 50%;
  background: ${theme.colors.secondary.second.light};
  opacity: 0.35;
  z-index: 0;
  pointer-events: none;
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
const Hero = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 8px;
`;
const HeroCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${MINT};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Sparkle = ({ className, color, filled }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? color : "none"}
    stroke={color}
    strokeWidth="1.6"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2C12.8 7.5 16.5 11.2 22 12C16.5 12.8 12.8 16.5 12 22C11.2 16.5 7.5 12.8 2 12C7.5 11.2 11.2 7.5 12 2Z" />
  </svg>
);
const HeroSparkle = styled(Sparkle)`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
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
  background: ${theme.colors.secondary.second.soft};
`;
const PlanBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2px 6px 0;

  @media ${theme.mediaQueries.mobile} {
    padding: 2px 2px 0;
  }
`;
const PlanInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  text-align: left;

  @media ${theme.mediaQueries.mobile} {
    gap: 8px;
  }
`;
const PlanName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.text.title};

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
const QrBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 12px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);

  @media ${theme.mediaQueries.mobile} {
    padding: 10px 8px;
  }
`;
const QrFrame = styled.div`
  padding: 6px;
  border-radius: 12px;
  background: ${theme.colors.white};
  box-shadow: 0 4px 14px rgba(26, 26, 173, 0.12);
  line-height: 0;
`;
const QrHint = styled.p`
  font-size: 12px;
  color: ${theme.colors.text.form};
`;
const QrDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${theme.colors.border.input};
`;
const CopyTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.text.title};
`;
const CopyRow = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CodeBox = styled.span`
  flex: 1;
  min-width: 0;
  padding: 8px 12px;
  border: 1.5px solid ${theme.colors.border.input};
  border-radius: 10px;
  background: ${theme.colors.white};
  font-size: 12px;
  text-align: left;
  color: ${theme.colors.text.slate};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CopyButton = styled.button`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${theme.colors.primary.default};
  border-radius: 50%;
  background: ${theme.colors.white};
  transition: background 0.2s;

  &:hover {
    background: ${theme.colors.secondary.second.soft};
  }
`;
const Waiting = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
const WaitingLine = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.text.form};

  svg {
    flex-shrink: 0;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
  }
`;
const WaitingNote = styled.p`
  font-size: 11px;
  color: ${theme.colors.text.slate};
`;

const PixStep = ({ plan, onPaid }) => {
  const [copied, setCopied] = useState(false);
  const onPaidRef = useRef(onPaid);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    onPaidRef.current = onPaid;
  }, [onPaid]);

  useEffect(() => {
    const timer = setTimeout(() => onPaidRef.current(), PIX_PAYMENT_DELAY);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => () => clearTimeout(copyTimerRef.current), []);

  const handleCopy = () => {
    navigator.clipboard?.writeText(PIX_CODE).catch(() => {});
    setCopied(true);
    clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <DecorCircle aria-hidden="true" />
      <DecorDot aria-hidden="true" />
      <DecorDots
        columns={4}
        rows={4}
        color={theme.colors.secondary.second.light}
        size={4}
        gap={12}
        opacity={0.6}
      />
      <Content>
        <Hero aria-hidden="true">
          <HeroSparkle
            $top={0}
            $left={-42}
            $size={20}
            color={theme.colors.secondary.third.light}
          />
          <HeroSparkle
            $top={48}
            $left={-24}
            $size={10}
            color={theme.colors.secondary.third.light}
            filled
          />
          <HeroSparkle
            $top={2}
            $left={84}
            $size={18}
            color={theme.colors.secondary.fourth.main}
          />
          <HeroSparkle
            $top={52}
            $left={76}
            $size={10}
            color={theme.colors.secondary.third.light}
            filled
          />
          <HeroCircle>
            <CheckBadgeIcon
              width={36}
              height={36}
              viewBox="7 7 10 10"
              color="none"
              stroke={theme.colors.secondary.third.main}
            />
          </HeroCircle>
        </Hero>
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
          <QrBox>
            <QrFrame>
              <PixQrCode size={108} label={labels.qrAlt} />
            </QrFrame>
            <QrHint>{labels.scanHint}</QrHint>
            <QrDivider />
            <CopyTitle>{labels.copyTitle}</CopyTitle>
            <CopyRow>
              <CodeBox>{PIX_CODE}</CodeBox>
              <CopyButton
                type="button"
                aria-label={copied ? labels.copied : labels.copy}
                onClick={handleCopy}
              >
                {copied ? (
                  <CheckBadgeIcon
                    width={20}
                    height={20}
                    viewBox="6 6 12 12"
                    color="none"
                    stroke={theme.colors.secondary.third.main}
                  />
                ) : (
                  <CopyIcon
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke={theme.colors.primary.default}
                  />
                )}
              </CopyButton>
            </CopyRow>
          </QrBox>
        </Panel>
        <Waiting role="status">
          <WaitingLine>
            <ClockOutlineIcon
              width={18}
              height={18}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.primary.default}
            />
            {labels.waiting}
          </WaitingLine>
          <WaitingNote>{labels.redirect}</WaitingNote>
        </Waiting>
      </Content>
    </>
  );
};

export default PixStep;
