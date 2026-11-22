import { useState } from "react";
import { useScreenSize } from "../../hooks/useDevice";
import styled, { css } from "styled-components";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import { theme } from "../../styles/theme";
import { cardLabels } from "../../utils/priceData";
import { checkoutLabels, formatPlanTotal } from "../../utils/checkoutData";
import { getCheckoutPalette } from "../../utils/checkoutPalettes";
import PlanIcon from "./PlanIcon";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;
const compactQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile}`;
const TAG_COLOR = "#6046fd";

const Panel = styled.aside`
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  padding: 56px 14px 22px;
  background: ${({ $bg }) => $bg};
  color: ${theme.colors.text.title};
  border: 1px solid var(--ck-panel-border, #e3dcff);

  @media ${tabletQueries}, ${theme.mediaQueries.mobile} {
    grid-row: auto;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 46px 16px 24px;
  }

  ${({ $collapsible, $collapsed }) =>
    $collapsible &&
    css`
      @media ${compactQueries} {
        padding-bottom: ${$collapsed ? "24px" : "92px"};
      }
    `}
`;

const Tag = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 10px 24px 10px 20px;
  border-radius: 0 26px 26px 0;
  background: var(--ck-tag, ${TAG_COLOR});
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

  @media ${theme.mediaQueries.mobile} {
    gap: 12px;
    ${({ $roomy }) =>
      $roomy &&
      css`
        gap: 12px;
      `}
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ $roomy }) => ($roomy ? "22px" : "12px")};

  @media ${compactQueries} {
    display: ${({ $collapsed }) => ($collapsed ? "none" : "flex")};
  }
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
  border-bottom: 2px solid var(--ck-check-border, #cfc8fb);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    stroke: var(--ck-check-stroke, ${theme.colors.secondary.third.main});
  }

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
  background: var(--ck-divider, rgba(82, 48, 224, 0.18));

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

  ${({ $collapsible, $collapsed }) =>
    $collapsible &&
    css`
      @media ${compactQueries} {
        height: 84px;
        display: ${$collapsed ? "none" : "block"};
      }
    `}
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

  ${({ $collapsible, $collapsed }) =>
    $collapsible &&
    css`
      @media ${compactQueries} {
        display: ${$collapsed ? "none" : "block"};
      }
    `}
`;

const ToggleRow = styled.div`
  display: none;

  @media ${compactQueries} {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: -22px;

    &::before,
    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--ck-panel-border, #e3dcff);
    }
  }
`;

const ToggleButton = styled.button`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--ck-plan-icon, ${theme.colors.secondary.second.main});

  svg {
    transform: rotate(${({ $expanded }) => ($expanded ? "90deg" : "-90deg")});
    transition: transform 0.2s;
  }

  &:focus-visible {
    outline: 2px solid var(--ck-accent, ${theme.colors.primary.default});
    outline-offset: 2px;
  }
`;

const WaveDecor = ({ colors, collapsible, collapsed }) => (
  <Waves
    viewBox="0 0 400 160"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
    $collapsible={collapsible}
    $collapsed={collapsed}
  >
    <path
      d="M0 14C50 4 110 22 170 52C240 88 330 92 400 58V160H0Z"
      fill={colors[0]}
    />
    <path
      d="M0 66C60 56 120 80 190 100C260 120 340 116 400 92V160H0Z"
      fill={colors[1]}
    />
    <path
      d="M0 112C50 104 110 124 190 136C270 148 340 144 400 128V160H0Z"
      fill={colors[2]}
    />
  </Waves>
);

const SparkleDecor = ({ left, bottom, size, collapsible, collapsed }) => (
  <Sparkle
    viewBox="0 0 24 24"
    $left={left}
    $bottom={bottom}
    $size={size}
    $collapsible={collapsible}
    $collapsed={collapsed}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 0C12.9 6.9 17.1 11.1 24 12C17.1 12.9 12.9 17.1 12 24C11.1 17.1 6.9 12.9 0 12C6.9 11.1 12.9 6.9 12 0Z" />
  </Sparkle>
);

const OrderSummary = ({ plan, label, roomy = false, collapsible = false }) => {
  const [expanded, setExpanded] = useState(false);
  const collapsed = collapsible && !expanded;
  const { isMobile } = useScreenSize();
  const planIconSize = isMobile ? 38 : roomy ? 52 : 48;

  return (
    <>
      <Panel
        $bg={getCheckoutPalette(plan).summaryBg}
        $roomy={roomy}
        $collapsible={collapsible}
        $collapsed={collapsed}
      >
        <Tag $roomy={roomy}>{label}</Tag>
        <WaveDecor
          colors={getCheckoutPalette(plan).waves}
          collapsible={collapsible}
          collapsed={collapsed}
        />
        <SparkleDecor
          left={42}
          bottom={21}
          size={17}
          collapsible={collapsible}
          collapsed={collapsed}
        />
        <SparkleDecor
          left={60}
          bottom={38}
          size={11}
          collapsible={collapsible}
          collapsed={collapsed}
        />

        <Content $roomy={roomy}>
          <PlanRow>
            <PlanIcon plan={plan} size={planIconSize} />

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

          <Details $roomy={roomy} $collapsed={collapsed}>
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
                <TotalLabel $roomy={roomy}>
                  {checkoutLabels.summary.total}
                </TotalLabel>

                <TotalValue $roomy={roomy}>
                  {formatPlanTotal(plan.price)}
                </TotalValue>
              </TotalRow>

              <Note>{checkoutLabels.summary.billing}</Note>
            </div>

            <Cancellation $roomy={roomy}>
              {checkoutLabels.summary.cancellation}
            </Cancellation>
          </Details>
        </Content>
      </Panel>
      {collapsible && (
        <ToggleRow>
          <ToggleButton
            type="button"
            $expanded={expanded}
            aria-expanded={expanded}
            aria-label={
              expanded
                ? "Ocultar detalhes do pedido"
                : "Mostrar detalhes do pedido"
            }
            onClick={() => setExpanded((current) => !current)}
          >
            <ChevronLeftIcon
              width={16}
              height={16}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.white}
            />
          </ToggleButton>
        </ToggleRow>
      )}
    </>
  );
};

export default OrderSummary;
