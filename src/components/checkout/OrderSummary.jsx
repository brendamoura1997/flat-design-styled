import styled, { css } from "styled-components";
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
  border-radius: 18px;
  padding: 56px 14px 22px;
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
  top: 16px;
  left: 0;
  padding: 6px 18px 6px 16px;
  border-radius: 0 999px 999px 0;
  background: #6046fd;
  color: ${theme.colors.white};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;

  ${({ $roomy }) =>
    $roomy &&
    css`
      top: 16px;
      padding: 6px 18px 6px 16px;
      font-size: 14px;
      letter-spacing: 0.5px;
    `}
`;
const DecorLarge = styled.span`
  position: absolute;
  right: -18%;
  bottom: -25%;
  width: 68%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: 0.45;
  pointer-events: none;

  ${({ $roomy }) =>
    $roomy &&
    css`
      right: -16%;
      bottom: -20%;
      width: 68%;
    `}
`;
const DecorSmall = styled.span`
  position: absolute;
  left: -12%;
  bottom: -17%;
  width: 44%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: 0.25;
  pointer-events: none;

  ${({ $roomy }) =>
    $roomy &&
    css`
      bottom: -17%;
    `}
`;
const DecorTiny = styled.span`
  position: absolute;
  right: -16%;
  bottom: -17%;
  width: 42%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  opacity: 0.6;
  pointer-events: none;

  ${({ $roomy }) =>
    $roomy &&
    css`
      right: -16%;
      bottom: -17%;
      width: 42%;
    `}
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 7px;
  // border: 1px solid red;

  ${({ $roomy }) =>
    $roomy &&
    css`
      gap: 22px;
    `}
`;
const PlanRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
`;
const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;
const PlanName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  color: ${theme.colors.text.title};

  ${({ $roomy }) =>
    $roomy &&
    css`
      font-size: 17px;
    `}
`;
const PlanFeature = styled.span`
  font-size: 12px;
  line-height: 1.3;
  color: ${theme.colors.text.slate};

  ${({ $roomy }) =>
    $roomy &&
    css`
      font-size: 12.5px;
    `}
`;
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  justify-content: center;
  padding-left: 12px;
  border-left: 1px solid rgba(26, 26, 46, 0.2);
`;
const PriceAmount = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  color: ${theme.colors.text.title};

  ${({ $roomy }) =>
    $roomy &&
    css`
      font-size: 21px;
    `}
`;
const PriceNote = styled.span`
  font-size: 12px;
  color: ${theme.colors.text.slate};
`;
const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ $roomy }) =>
    $roomy &&
    css`
      gap: 7px;
    `}
`;
const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${theme.colors.text.title};

  ${({ $roomy }) =>
    $roomy &&
    css`
      font-size: 14px;
    `}
`;
const CheckBadge = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${MINT};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ $roomy }) =>
    $roomy &&
    css`
      width: 20px;
      height: 20px;

      svg {
        width: 20px;
        height: 20px;
      }
    `}
`;
const Divider = styled.div`
  height: 1px;
  background: rgba(82, 48, 224, 0.18);

  ${({ $roomy }) =>
    $roomy &&
    css`
      margin-bottom: -6px;
    `}
`;
const TotalRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;
const TotalLabel = styled.span`
  font-size: 17px;
  font-weight: 700;

  ${({ $roomy }) =>
    $roomy &&
    css`
      font-size: 18px;
    `}
`;
const TotalValue = styled.span`
  font-size: 21px;
  font-weight: 700;

  ${({ $roomy }) =>
    $roomy &&
    css`
      font-size: 22px;
    `}
`;
const Note = styled.p`
  font-size: 13px;
  line-height: 1.4;
  color: ${theme.colors.text.title};
`;
const Cancellation = styled(Note)`
  ${({ $roomy }) =>
    $roomy &&
    css`
      margin-top: -12px;
    `}
`;

const OrderSummary = ({ plan, label, roomy = false }) => (
  <Panel $bg={plan.iconBg} $roomy={roomy}>
    <Tag $roomy={roomy}>{label}</Tag>
    <DecorLarge $color={plan.panelBg} $roomy={roomy} aria-hidden="true" />
    <DecorSmall $color={plan.panelBg} $roomy={roomy} aria-hidden="true" />
    <DecorTiny $color={plan.panelBg} $roomy={roomy} aria-hidden="true" />
    <Content $roomy={roomy}>
      <PlanRow>
        <PlanIcon plan={plan} size={roomy ? 52 : 48} />
        <PlanInfo>
          <PlanName $roomy={roomy}>
            {cardLabels.planPrefix} {plan.type}
          </PlanName>
          <PlanFeature $roomy={roomy}>{plan.features[0]}</PlanFeature>
        </PlanInfo>
        <PriceBox>
          <PriceAmount $roomy={roomy}>
            {cardLabels.currency} {plan.price}
          </PriceAmount>
          <PriceNote>{cardLabels.period}</PriceNote>
        </PriceBox>
      </PlanRow>
      <FeatureList $roomy={roomy}>
        {plan.features.slice(1).map((feature) => (
          <FeatureItem key={feature} $roomy={roomy}>
            <CheckBadge $roomy={roomy}>
              <CheckBadgeIcon
                width={22}
                height={22}
                viewBox="0 0 24 24"
                color="none"
                stroke={theme.colors.secondary.third.main}
              />
            </CheckBadge>
            {feature}
          </FeatureItem>
        ))}
      </FeatureList>
      <Divider $roomy={roomy} />
      <div>
        <TotalRow>
          <TotalLabel $roomy={roomy}>{checkoutLabels.summary.total}</TotalLabel>
          <TotalValue $roomy={roomy}>{formatPlanTotal(plan.price)}</TotalValue>
        </TotalRow>
        <Note>{checkoutLabels.summary.billing}</Note>
      </div>
      <Cancellation $roomy={roomy}>
        {checkoutLabels.summary.cancellation}
      </Cancellation>
    </Content>
  </Panel>
);

export default OrderSummary;
