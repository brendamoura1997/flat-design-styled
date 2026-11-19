import styled from "styled-components";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import { theme } from "../../styles/theme";
import { cardLabels } from "../../utils/priceData";
import { checkoutLabels, formatPlanTotal } from "../../utils/checkoutData";
import PlanIcon from "./PlanIcon";

const MINT = "#b9f0d9";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const Panel = styled.aside`
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  padding: 66px 24px 28px;
  background: ${({ $bg }) => $bg};
  color: ${theme.colors.text.title};

  @media ${tabletQueries}, ${theme.mediaQueries.mobile} {
    grid-row: auto;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 62px 16px 24px;
  }
`;
const Tag = styled.span`
  position: absolute;
  top: 18px;
  left: 0;
  padding: 9px 22px 9px 20px;
  border-radius: 0 999px 999px 0;
  background: ${theme.colors.secondary.second.main};
  color: ${theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;
const DecorLarge = styled.span`
  position: absolute;
  right: -18%;
  bottom: -14%;
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: 0.45;
  pointer-events: none;
`;
const DecorSmall = styled.span`
  position: absolute;
  left: -12%;
  bottom: -10%;
  width: 34%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: 0.25;
  pointer-events: none;
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const PlanRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
`;
const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;
const PlanName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: ${theme.colors.text.title};
`;
const PlanFeature = styled.span`
  font-size: 14px;
  line-height: 1.3;
  color: ${theme.colors.text.slate};
`;
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
  padding-left: 16px;
  border-left: 1px solid rgba(26, 26, 46, 0.2);
`;
const PriceAmount = styled.span`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.1;
  color: ${theme.colors.text.title};
`;
const PriceNote = styled.span`
  font-size: 14px;
  color: ${theme.colors.text.slate};
`;
const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: ${theme.colors.text.title};
`;
const CheckBadge = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${MINT};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
const Divider = styled.div`
  height: 1px;
  background: rgba(82, 48, 224, 0.18);
`;
const TotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;
const TotalLabel = styled.span`
  font-size: 22px;
  font-weight: 700;
`;
const TotalValue = styled.span`
  font-size: 28px;
  font-weight: 700;
`;
const Note = styled.p`
  font-size: 15px;
  line-height: 1.4;
  color: ${theme.colors.text.title};
`;

const OrderSummary = ({ plan, label }) => (
  <Panel $bg={plan.iconBg}>
    <Tag>{label}</Tag>
    <DecorLarge $color={plan.panelBg} aria-hidden="true" />
    <DecorSmall $color={plan.panelBg} aria-hidden="true" />
    <Content>
      <PlanRow>
        <PlanIcon plan={plan} size={64} />
        <PlanInfo>
          <PlanName>
            {cardLabels.planPrefix} {plan.type}
          </PlanName>
          <PlanFeature>{plan.features[0]}</PlanFeature>
        </PlanInfo>
        <PriceBox>
          <PriceAmount>
            {cardLabels.currency} {plan.price}
          </PriceAmount>
          <PriceNote>{cardLabels.period}</PriceNote>
        </PriceBox>
      </PlanRow>
      <FeatureList>
        {plan.features.slice(1).map((feature) => (
          <FeatureItem key={feature}>
            <CheckBadge>
              <CheckBadgeIcon
                width={28}
                height={28}
                viewBox="0 0 24 24"
                color="none"
                stroke={theme.colors.secondary.third.main}
              />
            </CheckBadge>
            {feature}
          </FeatureItem>
        ))}
      </FeatureList>
      <Divider />
      <div>
        <TotalRow>
          <TotalLabel>{checkoutLabels.summary.total}</TotalLabel>
          <TotalValue>{formatPlanTotal(plan.price)}</TotalValue>
        </TotalRow>
        <Note>{checkoutLabels.summary.billing}</Note>
      </div>
      <Note>{checkoutLabels.summary.cancellation}</Note>
    </Content>
  </Panel>
);

export default OrderSummary;
