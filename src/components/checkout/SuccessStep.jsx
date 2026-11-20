import styled from "styled-components";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import EmailIcon from "../../icons/EmailIcon";
import { theme } from "../../styles/theme";
import { cardLabels } from "../../utils/priceData";
import { checkoutLabels, formatPlanTotal } from "../../utils/checkoutData";
import DotsGrid from "../decor/DotsGrid";
import CheckoutButton from "./CheckoutButton";
import PlanIcon from "./PlanIcon";
import SparkleRays from "./SparkleRays";

const MINT = "#b9f0d9";

const labels = checkoutLabels.success;

const DecorCircle = styled.span`
  position: absolute;
  left: -86px;
  bottom: -92px;
  width: 204px;
  height: 204px;
  border-radius: 50%;
  background: #e4e1fc;
  z-index: 0;
  pointer-events: none;
`;

const DecorCircleSmall = styled.span`
  position: absolute;
  left: -86px;
  bottom: -112px;
  width: 184px;
  height: 184px;
  border-radius: 50%;
  background: #cec9fa;
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
  padding: 4px 0 2px;
`;
const Hero = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  margin-bottom: 10px;
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
  background: #f5f2ff;
  border: 1px solid #e3dcff;

  @media ${theme.mediaQueries.mobile} {
    gap: 14px;
    padding: 12px 14px;
  }
`;
const PlanInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;

  @media ${theme.mediaQueries.mobile} {
    gap: 10px;
  }
`;
const PlanText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const PlanName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 16px;
  }
`;
const PlanFeature = styled.span`
  font-size: 12px;
  color: ${theme.colors.text.slate};

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
  }
`;
const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  padding-left: 22px;
  border-left: 1px solid rgba(26, 26, 46, 0.2);
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    padding-left: 14px;
  }
`;
const PriceAmount = styled.span`
  font-size: 20px;
  font-weight: 700;

  @media ${theme.mediaQueries.mobile} {
    font-size: 18px;
  }
`;
const PriceNote = styled.span`
  font-size: 13px;
  color: ${theme.colors.text.slate};

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`;
const Divider = styled.div`
  width: 100%;
  max-width: 600px;
  height: 1px;
  margin: 16px 0 12px;
  background: ${theme.colors.border.input};
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
`;
const EmailLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

const SuccessStep = ({ plan, email, onClose }) => (
  <>
    <DecorCircle aria-hidden="true" />
    <DecorCircleSmall aria-hidden="true" />
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
        <HeroRays />
        <HeroCircle>
          <CheckBadgeIcon
            width={48}
            height={48}
            viewBox="7 7 10 10"
            color="none"
            stroke={theme.colors.secondary.third.main}
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

export default SuccessStep;
