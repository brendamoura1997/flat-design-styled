import styled, { css } from "styled-components";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import { theme } from "../../styles/theme";
import { cardLabels } from "../../utils/priceData";
import { checkoutLabels, formatPlanTotal } from "../../utils/checkoutData";
import PlanIcon from "./PlanIcon";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;
const TAG_COLOR = "#6046fd";

const Panel = styled.aside`
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  padding: 56px 14px 22px;
  background: ${({ $bg }) => $bg};
  color: ${theme.colors.text.title};
  border: 1px solid #e3dcff;

  @media ${tabletQueries}, ${theme.mediaQueries.mobile} {
    grid-row: auto;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 62px 16px 24px;
  }
`;

const Tag = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 10px 24px 10px 20px;
  border-radius: 0 26px 26px 0;
  background: ${TAG_COLOR};
  color: ${theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  ${({ $roomy }) =>
    $roomy &&
    css`
      padding: 10px 24px 10px 20px;
      font-size: 13px;
    `}
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 7px;

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
  background: white;
  border-bottom: 2px solid #cfc8fb;
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

const Waves = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 118px;
  z-index: 0;
  pointer-events: none;
`;

const Sparkle = styled.svg`
  position: absolute;
  left: ${({ $left }) => $left}px;
  bottom: ${({ $bottom }) => $bottom}px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  fill: ${theme.colors.white};
  z-index: 0;
  pointer-events: none;
`;

const WaveDecor = ({ color }) => (
  <Waves
    viewBox="0 0 400 160"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M0 14C50 4 110 22 170 52C240 88 330 92 400 58V160H0Z"
      fill={color}
      opacity="0.3"
    />
    <path
      d="M0 66C60 56 120 80 190 100C260 120 340 116 400 92V160H0Z"
      fill={color}
      opacity="0.45"
    />
    <path
      d="M0 112C50 104 110 124 190 136C270 148 340 144 400 128V160H0Z"
      fill={color}
      opacity="0.65"
    />
  </Waves>
);

const SparkleDecor = ({ left, bottom, size }) => (
  <Sparkle
    viewBox="0 0 24 24"
    $left={left}
    $bottom={bottom}
    $size={size}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 0C12.9 6.9 17.1 11.1 24 12C17.1 12.9 12.9 17.1 12 24C11.1 17.1 6.9 12.9 0 12C6.9 11.1 12.9 6.9 12 0Z" />
  </Sparkle>
);

const OrderSummary = ({ plan, label, roomy = false }) => (
  <Panel $bg={plan.iconBg} $roomy={roomy}>
    <Tag $roomy={roomy}>{label}</Tag>
    <WaveDecor color={plan.panelBg} />
    <SparkleDecor left={42} bottom={21} size={17} />
    <SparkleDecor left={60} bottom={38} size={11} />

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

      <Divider $roomy={roomy} />

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
