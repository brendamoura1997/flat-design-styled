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
  left: -70px;
  bottom: -90px;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: ${theme.colors.secondary.second.light};
  opacity: 0.35;
  z-index: 0;
  pointer-events: none;
`;
const DecorDot = styled.span`
  position: absolute;
  left: 150px;
  bottom: 40px;
  width: 36px;
  height: 36px;
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
  right: 36px;
  bottom: 36px;
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
  padding: 8px 0 4px;
`;
const Hero = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  margin-bottom: 16px;
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
  top: -10px;
  left: -64px;
`;
const HeroStar = styled.span`
  position: absolute;
  top: 6px;
  right: -44px;
  width: 30px;
  height: 30px;
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
  bottom: 12px;
  right: -34px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${theme.colors.secondary.second.light};
`;
const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 40px;
  font-weight: 800;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 32px;
  }
`;
const Message = styled.p`
  margin-bottom: 26px;
  white-space: pre-line;
  font-size: 18px;
  line-height: 1.4;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 14px;
  }
`;
const Summary = styled.div`
  width: 100%;
  max-width: 710px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 16px 28px;
  border-radius: 14px;
  background: ${theme.colors.secondary.second.soft};

  @media ${theme.mediaQueries.mobile} {
    gap: 14px;
    padding: 12px 14px;
  }
`;
const PlanInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
  font-size: 19px;
  font-weight: 700;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 16px;
  }
`;
const PlanFeature = styled.span`
  font-size: 14px;
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
  padding-left: 28px;
  border-left: 1px solid rgba(26, 26, 46, 0.2);
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    padding-left: 14px;
  }
`;
const PriceAmount = styled.span`
  font-size: 26px;
  font-weight: 700;

  @media ${theme.mediaQueries.mobile} {
    font-size: 18px;
  }
`;
const PriceNote = styled.span`
  font-size: 16px;
  color: ${theme.colors.text.slate};

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`;
const Divider = styled.div`
  width: 100%;
  max-width: 710px;
  height: 1px;
  margin: 24px 0 18px;
  background: ${theme.colors.border.input};
`;
const EmailNotice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: 16px;
  color: ${theme.colors.text.form};

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`;
const EmailLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const EmailAddress = styled.strong`
  font-weight: 700;
  color: ${theme.colors.text.title};
  overflow-wrap: anywhere;
`;
const CloseButton = styled(CheckoutButton)`
  min-width: 280px;
  margin-top: 24px;

  @media ${theme.mediaQueries.mobile} {
    min-width: 0;
    width: 100%;
    flex: none;
  }
`;

const SuccessStep = ({ plan, email, onClose }) => (
  <>
    <DecorCircle aria-hidden="true" />
    <DecorDot aria-hidden="true" />
    <DecorDots
      columns={4}
      rows={4}
      color={theme.colors.secondary.second.light}
      size={4}
      gap={14}
      opacity={0.6}
    />
    <Content>
      <Hero aria-hidden="true">
        <HeroRays />
        <HeroCircle>
          <CheckBadgeIcon
            width={64}
            height={64}
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
          <PlanIcon plan={plan} size={52} />
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
            width={24}
            height={24}
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
