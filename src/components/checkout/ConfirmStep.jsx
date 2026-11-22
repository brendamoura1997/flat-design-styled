import styled from "styled-components";
import ArrowIcon from "../../icons/ArrowIcon";
import CardIcon from "../../icons/CardIcon";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import EditIcon from "../../icons/EditIcon";
import InfoIcon from "../../icons/InfoIcon";
import PixLogoIcon from "../../icons/PixLogoIcon";
import UserIcon from "../../icons/UserIcon";
import { theme } from "../../styles/theme";
import {
  PAYMENT_METHOD,
  checkoutLabels,
  paymentMethods,
  personalFields,
} from "../../utils/checkoutData";
import CardBrands from "./CardBrands";
import CheckoutButton from "./CheckoutButton";
import OrderSummary from "./OrderSummary";
import PixBadge from "./PixBadge";
import StepLayout from "./StepLayout";

const PANEL_BORDER = "var(--ck-pix-border, #e3dcff)";
const PANEL_BG = "var(--ck-confirm-panel, #f5f2ff)";
const CARD_BORDER = "var(--ck-card-border, #ebe6ff)";

const labels = checkoutLabels.confirm;
const pixLabels = checkoutLabels.pix;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;

  @media ${theme.mediaQueries.mobile} {
    gap: 12px;
  }
`;
const Panel = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 8px 8px;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 16px;
  background: ${PANEL_BG};

  @media ${theme.mediaQueries.mobile} {
    padding: 10px 8px 8px;
  }
`;
const PanelTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 7px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.text.form};
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media ${theme.mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding: 6px 16px;
  border: 1px solid ${CARD_BORDER};
  border-radius: 8px;
  background: var(--ck-item-bg, #fdfcff);
  border: 1px solid ${PANEL_BORDER};
`;
const ItemLabel = styled.span`
  font-size: 12px;
  color: ${theme.colors.text.form};
`;
const ItemValue = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.colors.text.title};
  overflow-wrap: anywhere;

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }
`;
const DataLabel = styled(ItemLabel)`
  font-size: 12px;
`;
const DataValue = styled(ItemValue)`
  font-size: 14px;

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }
`;
const PaymentPanel = styled.section`
  overflow: hidden;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 16px;
  background: ${PANEL_BG};
`;
const PaymentHeader = styled(PanelTitle)`
  padding: 10px 15px;
`;
const PixTitleRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;

    flex-wrap: nowrap;
    gap: 10px;
  }
`;
const PixTitle = styled(ItemValue)`
  font-size: 16px;
  font-weight: 700;

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
    white-space: nowrap;
    margin-left: 12px;
  }
`;
const RecurringBadge = styled(PixBadge)`
  padding: 3px 10px;
  font-size: 11px;
`;
const PixDescription = styled(ItemLabel)`
  max-width: 200px;
  font-size: 13px;
  line-height: 1.3;

  @media ${theme.mediaQueries.mobile} {
    max-width: 200px;
    font-size: 12px;
    padding-left: 10px;
    border-left: 3px solid var(--ck-pix-decor, #e5e0ff);
  }
`;
const PaymentRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 20px 12px 17px;
  background: var(--ck-item-bg, #fdfcff);
  flex-wrap: wrap;
  margin: 0 8px 8px 8px;
  border: 1px solid ${CARD_BORDER};
  border-radius: 8px;

  @media ${theme.mediaQueries.mobile} {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 12px;
    padding: 12px;
    overflow: hidden;
  }
`;
const PaymentDecor = styled.span`
  display: none;

  @media ${theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    right: -54px;
    bottom: -80px;
    width: 130px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--ck-pix-decor, #e5e0ff);
    pointer-events: none;
  }

  @media ${theme.mediaQueries.smallMobile} {
    display: none;
  }
`;
const PaymentLogo = styled.div`
  display: flex;
  align-items: center;
  padding-right: 21px;
  border-right: 1px solid ${PANEL_BORDER};
  align-self: stretch;

  @media ${theme.mediaQueries.mobile} {
    grid-column: 1;
    grid-row: 1;
    padding-right: 0;
    border-right: none;
    align-self: center;

    svg {
      width: 112px;
      height: auto;
    }
  }
`;
const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;

  @media ${theme.mediaQueries.mobile} {
    position: relative;
    z-index: 1;
    grid-column: 1 / -1;
    grid-row: 2;
    gap: 6px;
  }
`;
const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.primary.default};

  &:hover {
    text-decoration: underline;
  }

  @media ${theme.mediaQueries.mobile} {
    position: relative;
    z-index: 1;
    grid-column: 2;
    grid-row: 1;
  }
`;
const Notice = styled.p`
  display: flex;
  align-items: center;
  gap: 19px;
  padding: 10px 26px;
  border-radius: 16px;
  background: ${PANEL_BG};
  font-size: 13px;
  line-height: 1.4;
  color: ${theme.colors.text.form};
  border: 1px solid ${PANEL_BORDER};

  svg {
    flex-shrink: 0;
  }

  @media ${theme.mediaQueries.mobile} {
    gap: 12px;
    padding: 12px 14px;
    font-size: 13px;
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media ${theme.mediaQueries.mobile} {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;
const BackButton = styled(CheckoutButton)`
  min-width: 140px;
  border-radius: 14px;
  background: ${theme.colors.white};
  color: ${theme.colors.primary.default};
  border: 1.5px solid ${theme.colors.primary.default};

  &:hover,
  &:active {
    background: var(--ck-hover-bg, ${theme.colors.secondary.second.soft});
  }

  @media ${theme.mediaQueries.mobile} {
    min-width: 0;
    width: 100%;
    flex: none;
    border-radius: 12px;
    font-size: 14px;
  }
`;
const ConfirmButton = styled(CheckoutButton)`
  min-width: 200px;
  border-radius: 14px;

  @media ${theme.mediaQueries.mobile} {
    min-width: 0;
    width: 100%;
    flex: none;
    border-radius: 12px;
    font-size: 14px;
  }
`;

const ConfirmStep = ({ plan, values, onBack, onConfirm }) => {
  const method = paymentMethods.find(
    ({ value }) => value === values.paymentMethod,
  );
  const isCard = values.paymentMethod === PAYMENT_METHOD.CARD;
  const lastDigits = values.cardNumber
    .replace(/\D/g, "")
    .slice(-4)
    .padStart(4, "*");

  return (
    <StepLayout>
      <OrderSummary
        plan={plan}
        label={checkoutLabels.summary.chosenPlan}
        collapsible
      />
      <Main>
        <Panel>
          <PanelTitle>
            <UserIcon
              width={20}
              height={20}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.text.form}
            />
            {labels.personalTitle}
          </PanelTitle>
          <Cards>
            {personalFields.map(({ name, title }) => (
              <Item key={name}>
                <DataLabel>{title}</DataLabel>
                <DataValue>
                  {values[name] || checkoutLabels.emptyValue}
                </DataValue>
              </Item>
            ))}
          </Cards>
        </Panel>

        <PaymentPanel>
          <PaymentHeader>
            <CardIcon
              width={20}
              height={20}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.text.form}
            />
            {labels.paymentTitle}
          </PaymentHeader>
          <PaymentRow>
            {!isCard && <PaymentDecor aria-hidden="true" />}
            <PaymentLogo>
              {isCard ? (
                <CardBrands />
              ) : (
                <PixLogoIcon width={140} height={50} />
              )}
            </PaymentLogo>
            <PaymentInfo>
              {isCard ? (
                <>
                  <ItemLabel>{method.label}</ItemLabel>
                  <ItemValue>
                    {labels.cardMask}
                    {lastDigits}
                  </ItemValue>
                </>
              ) : (
                <>
                  <PixTitleRow>
                    <PixTitle>{pixLabels.title}</PixTitle>
                    <RecurringBadge>{pixLabels.badge}</RecurringBadge>
                  </PixTitleRow>
                  <PixDescription>{pixLabels.description}</PixDescription>
                </>
              )}
            </PaymentInfo>
            <EditButton type="button" onClick={onBack}>
              <EditIcon
                width={16}
                height={16}
                viewBox="0 0 24 24"
                color="none"
                stroke={theme.colors.primary.default}
              />
              {labels.edit}
            </EditButton>
          </PaymentRow>
        </PaymentPanel>

        <Notice>
          <InfoIcon
            width={26}
            height={26}
            viewBox="0 0 24 24"
            color="none"
            stroke={theme.colors.text.form}
          />
          {isCard ? labels.notice : labels.pixNotice}
        </Notice>
      </Main>
      <Actions>
        <BackButton
          size="medium"
          type="button"
          onClick={onBack}
          icon={
            <ChevronLeftIcon
              width={18}
              height={18}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.primary.default}
            />
          }
        >
          {labels.back}
        </BackButton>
        <ConfirmButton
          size="medium"
          type="button"
          onClick={onConfirm}
          iconPosition={isCard ? "left" : "right"}
          icon={
            isCard ? (
              <CheckBadgeIcon
                width={20}
                height={20}
                viewBox="6 6 12 12"
                color="none"
                stroke={theme.colors.white}
              />
            ) : (
              <ArrowIcon
                width={18}
                height={18}
                viewBox="0 0 24 24"
                color="none"
                stroke={theme.colors.white}
              />
            )
          }
        >
          {isCard ? labels.confirm : labels.pixConfirm}
        </ConfirmButton>
      </Actions>
    </StepLayout>
  );
};

export default ConfirmStep;
