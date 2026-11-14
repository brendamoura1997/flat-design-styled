import styled, { keyframes, css } from "styled-components";
import WaveIcon from "../icons/WaveIcon";
import WaveTabletIcon from "../icons/WaveTabletIcon";
import CheckBadgeIcon from "../icons/CheckBadgeIcon";
import { theme } from "../styles/theme";
import { cardLabels } from "../utils/priceData";
import PrimaryButton from "./PrimaryButton";

const tabletQuery = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.35); }
  50%       { box-shadow: 0 0 0 12px rgba(233, 30, 99, 0); }
`;

const CardDecor = styled.div`
  display: none;
  @media ${tabletQuery} {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 250px;
    height: 250px;
    pointer-events: none;
    z-index: 0;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    display: none;
  }
`;
const DecorWave = styled(WaveTabletIcon)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;
const DecorDots = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: grid;
  grid-template-columns: repeat(6, 4px);
  gap: 6px;
  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ color }) => color};
    opacity: 0.3;
    display: block;
  }
`;
const CardWave = styled.div`
  position: absolute;
  top: -1.5px;
  left: -1.5px;
  width: 50%;
  height: 60px;
  border-top-left-radius: 18px;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media ${tabletQuery} {
    width: 160px;
    border-top-left-radius: 16px;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    width: 50%;
    border-top-left-radius: 18px;
  }
`;
const Card = styled.div`
  background: #fff;
  border: 1.5px solid ${({ featured }) => (featured ? "#c7b8f7" : "#ebebeb")};
  border-radius: 18px;
  padding: 16px 26px 22px;
  width: 30%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  box-shadow: ${({ featured }) =>
    featured
      ? "0 2px 12px rgba(31, 0, 123, 0.15)"
      : "0 4px 14px rgba(21, 0, 159, 0.15)"};
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ delay }) => delay || "0s"};

  @media ${tabletQuery} {
    width: 100%;
    max-width: 800px;
    flex: none;
    display: grid;
    grid-template-columns: minmax(max-content, 1fr) minmax(0, 1.06fr);
    grid-template-rows: auto auto;
    column-gap: 24px;
    row-gap: 20px;
    border-radius: 16px;
    padding: 32px 40px;
    align-items: start;
    overflow: visible;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    max-width: 60%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 1;
    box-shadow: ${({ featured }) =>
      featured
        ? "0 8px 12px rgba(31, 0, 123, 0.2)"
        : "0 4px 16px rgba(21, 0, 159, 0.2)"};
    animation: ${fadeUp} 0.5s ease both;
    animation-delay: ${({ delay }) => delay || "0s"};
  }

  @media ${theme.mediaQueries.mobile}, ${theme.mediaQueries.smallMobile} {
    width: 100%;
    flex: none;
    border-radius: 18px;
    padding: 16px 26px 22px;
  }
`;
const FeaturedBadge = styled.div`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: #5230e0;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 7px 18px;
  border-radius: 6px;
  white-space: nowrap;
  @media ${tabletQuery} {
    left: 40px;
    transform: none;
    z-index: 10;
  }
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 0 22px;
  padding: 10px 0 0;

  @media ${tabletQuery} {
    flex-direction: row;
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    margin: 0;
    border: none;
    padding: 12px 16px 8px 6px;
    gap: 30px;
    z-index: 1;
    align-self: start;
  }

  @media ${theme.mediaQueries.mobile} {
    border: none;
    flex-direction: column;
    gap: 10px;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    border: none;
    flex-direction: column;
    gap: 10px;
  }
`;
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media ${tabletQuery} {
    align-items: flex-start;
  }
  @media only screen and (width > 550px) and (width < 780px) {
    align-items: center;
  }
`;
const IconCluster = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media ${tabletQuery} {
    width: 80px;
    height: 80px;
  }
  @media only screen and (width > 550px) and (width < 780px) {
    position: relative;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;
const IconBubble = styled.span`
  position: absolute;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  z-index: 0;
  width: 40px;
  height: 40px;
  top: 0px;
  right: -17px;
  @media ${tabletQuery} {
    width: 56px;
    height: 56px;
    top: -8px;
    right: -20px;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    position: absolute;
    border-radius: 50%;
    background: ${({ bg }) => bg};
    z-index: 0;
    width: 40px;
    height: 40px;
    top: 0px;
    right: -17px;
  }
`;
const IconBubbleSmall = styled.span`
  position: absolute;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  z-index: 0;
  width: 45px;
  height: 45px;
  bottom: -4px;
  left: -20px;
  @media ${tabletQuery} {
    width: 60px;
    height: 60px;
    bottom: -4px;
    left: -28px;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    position: absolute;
    border-radius: 50%;
    background: ${({ bg }) => bg};
    z-index: 0;
    width: 45px;
    height: 45px;
    bottom: -4px;
    left: -20px;
  }
`;
const IconWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ $decor }) => $decor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  svg {
    filter: brightness(0) invert(1);
  }
  @media ${tabletQuery} {
    width: 80px;
    height: 80px;
  }
  @media only screen and (width > 550px) and (width < 780px) {
    width: 56px;
    height: 56px;
  }
`;
const PlanName = styled.h3`
  font-size: 23px;
  font-weight: 700;
  color: ${({ color }) => color};
  margin: 0 0 4px;
  @media ${tabletQuery} {
    font-size: clamp(26px, 3.5vw, 28px);
    font-weight: 800;
    line-height: 1.2;
    white-space: nowrap;
    margin-bottom: 6px;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    font-size: 23px;
    font-weight: 700;
    color: ${({ color }) => color};
    margin: 0 0 4px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-weight: 800;
  }
`;
const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  margin-bottom: 2px;
  @media ${tabletQuery} {
    margin-left: 11px;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    margin-left: 0px;
  }
`;
const Currency = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #0f1230;
  margin-bottom: 7px;
  @media ${tabletQuery} {
    font-size: 17px;
    margin-bottom: 14px;
  }
`;
const Amount = styled.span`
  font-size: 44px;
  font-weight: 700;
  color: #0f1230;
  line-height: 1;
  @media ${tabletQuery} {
    font-size: 60px;
  }
`;
const Period = styled.span`
  font-size: 13px;
  color: #888;
  margin-bottom: 7px;
  @media ${tabletQuery} {
    font-size: 17px;
    margin-bottom: 14px;
  }
`;
const Divider = styled.div`
  width: 70px;
  height: 3px;
  border-radius: 2px;
  background: ${({ color }) => color};
  margin: 8px 0 0px;
  @media ${tabletQuery} {
    margin: 2px 0 0 36px;
  }
`;
const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media ${tabletQuery} {
    grid-column: 2;
    grid-row: 1 / span 2;
    margin: 16px 0 0 15px;
    gap: 14px;
    z-index: 1;
    align-self: start;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
`;
const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #525f92;
  @media ${tabletQuery} {
    font-size: 16px;
    gap: 12px;
  }
`;
const CheckBadge = styled.div`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media ${tabletQuery} {
    width: 28px;
    height: 28px;
    min-width: 28px;
  }
`;
const PriceButton = styled(PrimaryButton)`
  margin-top: auto;
  ${({ $featured }) =>
    $featured &&
    css`
      animation: ${pulse} 2.5s ease-in-out infinite;
    `}

  @media ${tabletQuery} {
    grid-column: 1;
    grid-row: 2;
    margin-top: 0;
    z-index: 1;
    align-self: start;
  }
`;

const PriceCards = ({ plan }) => (
  <Card featured={plan.featured} delay={plan.delay}>
    <CardWave>
      <WaveIcon
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        color={plan.wave}
      />
    </CardWave>
    {plan.featured && <FeaturedBadge>{cardLabels.featuredBadge}</FeaturedBadge>}
    <CardDecor>
      <DecorWave viewBox="0 0 500 500" color={plan.panelBg} />
      <DecorDots color={plan.color}>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} />
        ))}
      </DecorDots>
    </CardDecor>
    <CardHeader $panelBg={plan.panelBg}>
      <IconCluster>
        <IconBubble bg={plan.iconBg} />
        <IconBubbleSmall bg={plan.iconBg} />
        <IconWrap bg={plan.iconBg} $decor={plan.decor}>
          {plan.icon}
        </IconWrap>
      </IconCluster>
      <HeaderText>
        <PlanName color={plan.color}>
          {cardLabels.planPrefix} {plan.type}
        </PlanName>
        <PriceRow>
          <Currency>{cardLabels.currency}</Currency>
          <Amount>{plan.price}</Amount>
          <Period>{cardLabels.period}</Period>
        </PriceRow>
        <Divider color={plan.divider} />
      </HeaderText>
    </CardHeader>
    <FeatureList>
      {plan.features.map((f) => (
        <Feature key={f}>
          <CheckBadge bg={plan.iconBg}>
            <CheckBadgeIcon
              width={28}
              height={28}
              viewBox="0 0 24 24"
              color="none"
              stroke={plan.color}
            />
          </CheckBadge>
          {f}
        </Feature>
      ))}
    </FeatureList>
    <PriceButton size="small" fullWidth $featured={plan.featured}>
      {cardLabels.button}
    </PriceButton>
  </Card>
);
export default PriceCards;
