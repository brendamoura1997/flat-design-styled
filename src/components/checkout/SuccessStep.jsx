import styled from "styled-components";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import EmailIcon from "../../icons/EmailIcon";
import RocketDetailedIcon from "../../icons/RocketDetailedIcon";
import { theme } from "../../styles/theme";
import { cardLabels } from "../../utils/priceData";
import { checkoutLabels, formatPlanTotal } from "../../utils/checkoutData";
import { getCheckoutPalette } from "../../utils/checkoutPalettes";
import DotsGrid from "../decor/DotsGrid";
import CheckoutButton from "./CheckoutButton";
import PlanIcon from "./PlanIcon";
import SparkleRays from "./SparkleRays";

const MINT = "#b9f0d9";

const labels = checkoutLabels.success;

const rocketPalettes = {
  Basic: {
    rocket: "#EF427C",
    rocketDark: "#C11F60",
    rocketLight: "#FD8BAB",
    window: "#FF8ECA",
    windowDark: "#DA2663",
    flame: "#FFB52E",
    flameLight: "#FFE17A",
    flameDark: "#FF7A28",
    cloud: "#F9C7DA",
    cloudLight: "#FF93B5",
    star: "#FFB52E",
  },
  Premium: {
    rocket: "#754CFD",
    rocketDark: "#371FC1",
    rocketLight: "#AC8FFD",
    window: "#99B4F7",
    windowDark: "#441DD6",
    flame: "#FFB52E",
    flameLight: "#FFE17A",
    flameDark: "#FF7A28",
    cloud: "#C8C7F9",
    cloudLight: "#9E93FF",
    star: "#FFB52E",
  },
  Advanced: {
    rocket: "#8DDD85",
    rocketDark: "#5CAB50",
    rocketLight: "#B5ECAF",
    window: "#BEECB1",
    windowDark: "#6ECB66",
    flame: "#FFB52E",
    flameLight: "#FFE17A",
    flameDark: "#FF7A28",
    cloud: "#BBF1C8",
    cloudLight: "#8ED491",
    star: "#FFB52E",
  },
};

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
  padding: 4px 0 2px;
`;
const Hero = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  margin-bottom: 10px;

  @media ${theme.mediaQueries.mobile} {
    transform: scale(0.84);
  }

  @media ${theme.mediaQueries.smallMobile} {
    transform: scale(0.74);
  }
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
const HeroRays = styled(SparkleRays)`
  position: absolute;
  top: -8px;
  left: -56px;
`;
const HeroStar = styled.span`
  position: absolute;
  top: 4px;
  right: -36px;
  width: 24px;
  height: 24px;
  background: ${theme.colors.secondary.fourth.main};
  clip-path: polygon(
    50% 0,
    62% 38%,
    100% 50%,
    62% 62%,
    50% 100%,
    38% 62%,
    0 50%,
    38% 38%
  );
`;
const HeroDot = styled.span`
  position: absolute;
  bottom: 9px;
  right: -28px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${theme.colors.secondary.second.light};
`;
const Title = styled.h3`
  margin-bottom: 6px;
  font-size: 32px;
  font-weight: 800;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 32px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 28px;
  }
`;
const Message = styled.p`
  margin-bottom: 18px;
  white-space: pre-line;
  font-size: 15px;
  line-height: 1.4;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 14px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 13px;
  }
`;
const Summary = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 12px 22px;
  border-radius: 12px;
  background: var(--ck-success-box, #f5f2ff);
  border: 1px solid var(--ck-pix-border, #e3dcff);

  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const PlanInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
`;
const PlanText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const PlanName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--ck-plan-name, ${theme.colors.text.title});
`;
const PlanFeature = styled.span`
  font-size: 12px;
  color: ${theme.colors.text.slate};
`;
const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  padding-left: 22px;
  border-left: 1px solid rgba(26, 26, 46, 0.2);
  color: ${theme.colors.text.title};
`;
const PriceAmount = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const PriceNote = styled.span`
  font-size: 13px;
  color: ${theme.colors.text.slate};
`;
const MobilePlan = styled.div`
  display: none;

  @media ${theme.mediaQueries.mobile} {
    position: relative;
    display: block;
    width: 100%;
    margin-top: 20px;
  }
`;
const MobilePill = styled.div`
  position: absolute;
  top: -19px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 22px;
  border-radius: 14px;
  background: var(--ck-tag, #6046fd);
  color: ${theme.colors.white};
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    width: 22px;
    height: 22px;
    filter: brightness(0) invert(1);
  }

  svg path {
    fill: currentColor;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 13px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;
const MobileCard = styled.div`
  display: grid;
  grid-template-columns: 112px 1fr;
  align-items: center;
  gap: 6px;
  overflow: hidden;
  padding: 21px 14px 0px 4px;
  border-radius: 16px;
  background: var(--ck-success-box-mobile, #f5f2ff);
  // border: 1px solid var(--ck-pix-border, #e3dcff);
  border-bottom: 5px solid var(--ck-success-box-border-mobile, #e3dcff);
  text-align: left;

  @media ${theme.mediaQueries.smallMobile} {
    grid-template-columns: 100% 1fr;
    text-align: center;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    margin: 0 90px;
  }
`;
const MobileArt = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  line-height: 0;
  margin: 0 0 -8px -14px;

  @media ${theme.mediaQueries.smallMobile} {
    display: none;
  }
`;
const MobileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  @media ${theme.mediaQueries.smallMobile} {
    width: 100%;
    margin: 8px 0;
  }
`;
const MobileFeature = styled.span`
  font-size: 15px;
  color: ${theme.colors.text.slate};

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 12px;
  }
`;
const MobilePrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.smallMobile} {
    justify-content: center;
    text-align: center;
  }
`;
const MobileAmount = styled.span`
  font-size: 27px;
  font-weight: 800;

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 20px;
  }
`;
const MobileNote = styled.span`
  font-size: 15px;
  color: ${theme.colors.text.slate};
`;
const Divider = styled.div`
  width: 100%;
  max-width: 600px;
  height: 1px;
  margin: 16px 0 12px;
  background: var(--ck-qr-divider, ${theme.colors.border.input});

  @media only screen and (width > 550px) and (width < 780px) {
    max-width: 360px;
  }
`;
const EmailNotice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 14px;
  color: ${theme.colors.text.form};

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 12px;
  }
`;
const EmailLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${theme.mediaQueries.smallMobile} {
    align-items: start;
    gap: 1px;
  }
`;
const EmailAddress = styled.strong`
  font-weight: 700;
  color: ${theme.colors.text.title};
  overflow-wrap: anywhere;
`;
const CloseButton = styled(CheckoutButton)`
  min-width: 220px;
  margin-top: 16px;

  @media ${theme.mediaQueries.mobile} {
    min-width: 0;
    width: 100%;
    flex: none;
  }
`;

const SuccessStep = ({ plan, email, onClose }) => {
  const palette = getCheckoutPalette(plan);
  const rocketColors = rocketPalettes[plan?.type] || rocketPalettes.Premium;

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
        <Hero aria-hidden="true">
          <HeroRays />
          <HeroCircle>
            <CheckBadgeIcon
              width={48}
              height={48}
              viewBox="7 7 10 10"
              color="none"
              stroke={palette.successCheck}
            />
          </HeroCircle>
          <HeroStar />
          <HeroDot />
        </Hero>
        <Title>{labels.title}</Title>
        <Message>{labels.message}</Message>
        <Summary>
          <PlanInfo>
            <PlanIcon plan={plan} size={42} />
            <PlanText>
              <PlanName>
                {cardLabels.planPrefix} {plan.type}
              </PlanName>
              <PlanFeature>{plan.features[0]}</PlanFeature>
            </PlanText>
          </PlanInfo>
          <PriceInfo>
            <PriceAmount>{formatPlanTotal(plan.price)}</PriceAmount>
            <PriceNote>{cardLabels.period}</PriceNote>
          </PriceInfo>
        </Summary>
        <MobilePlan>
          <MobilePill>
            {plan.icon}
            {cardLabels.planPrefix} {plan.type}
          </MobilePill>
          <MobileCard>
            <MobileArt aria-hidden="true">
              <RocketDetailedIcon
                width={112}
                height={112}
                colors={rocketColors}
              />
            </MobileArt>
            <MobileText>
              <MobileFeature>{plan.features[0]}</MobileFeature>
              <MobilePrice>
                <MobileAmount>{formatPlanTotal(plan.price)}</MobileAmount>
                <MobileNote>/ mês</MobileNote>
              </MobilePrice>
            </MobileText>
          </MobileCard>
        </MobilePlan>
        <Divider />
        <EmailNotice>
          <EmailLine>
            <EmailIcon
              width={20}
              height={20}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.primary.default}
              strokeWidth="1.5"
            />
            {labels.emailNotice}
          </EmailLine>
          <EmailAddress>{email || checkoutLabels.emptyValue}</EmailAddress>
        </EmailNotice>
        <CloseButton size="medium" type="button" onClick={onClose}>
          {labels.close}
        </CloseButton>
      </Content>
    </>
  );
};

export default SuccessStep;
