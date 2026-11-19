import styled from "styled-components";
import CardIcon from "../../icons/CardIcon";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import InfoIcon from "../../icons/InfoIcon";
import PencilIcon from "../../icons/PencilIcon";
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
import StepLayout from "./StepLayout";

const PANEL_BORDER = "#e3dcff";

const labels = checkoutLabels.confirm;
const personalRows = [personalFields.slice(0, 2), personalFields.slice(2)];

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`;
const Panel = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid ${PANEL_BORDER};
  border-radius: 18px;
  background: ${theme.colors.secondary.second.soft};

  @media ${theme.mediaQueries.mobile} {
    padding: 12px;
  }
`;
const PanelTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.text.form};
`;
const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 14px;
  background: ${theme.colors.white};

  @media ${theme.mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;
const ItemLabel = styled.span`
  font-size: 14px;
  color: ${theme.colors.text.form};
`;
const ItemValue = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: ${theme.colors.text.title};
  overflow-wrap: anywhere;

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }
`;
const PaymentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 4px 4px 4px 0;
  flex-wrap: wrap;
`;
const PaymentLogo = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  border-right: 1px solid ${PANEL_BORDER};
  align-self: stretch;
`;
const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;
const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 500;
  color: ${theme.colors.primary.default};

  &:hover {
    text-decoration: underline;
  }
`;
const Notice = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 14px;
  background: ${theme.colors.secondary.second.soft};
  font-size: 15px;
  line-height: 1.4;
  color: ${theme.colors.text.form};

  svg {
    flex-shrink: 0;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
const BackButton = styled(CheckoutButton)`
  min-width: 0;
  background: ${theme.colors.white};
  color: ${theme.colors.primary.default};
  border: 1.5px solid ${theme.colors.primary.default};

  &:hover,
  &:active {
    background: ${theme.colors.secondary.second.soft};
  }
`;
const ConfirmButton = styled(CheckoutButton)`
  min-width: 240px;
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
      <OrderSummary plan={plan} label={checkoutLabels.summary.chosenPlan} />
      <Main>
        <Panel>
          <PanelTitle>
            <UserIcon
              width={24}
              height={24}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.text.form}
            />
            {labels.personalTitle}
          </PanelTitle>
          <Rows>
            {personalRows.map((row) => (
              <Row key={row[0].name}>
                {row.map(({ name, title }) => (
                  <Item key={name}>
                    <ItemLabel>{title}</ItemLabel>
                    <ItemValue>
                      {values[name] || checkoutLabels.emptyValue}
                    </ItemValue>
                  </Item>
                ))}
              </Row>
            ))}
          </Rows>
        </Panel>

        <Panel>
          <PanelTitle>
            <CardIcon
              width={24}
              height={24}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.text.form}
            />
            {labels.paymentTitle}
          </PanelTitle>
          <PaymentRow>
            <PaymentLogo>{isCard ? <CardBrands /> : method.icon}</PaymentLogo>
            <PaymentInfo>
              <ItemLabel>{method.label}</ItemLabel>
              {isCard && (
                <ItemValue>
                  {labels.cardMask}
                  {lastDigits}
                </ItemValue>
              )}
            </PaymentInfo>
            <EditButton type="button" onClick={onBack}>
              <PencilIcon
                width={18}
                height={18}
                viewBox="0 0 24 24"
                color="none"
                stroke={theme.colors.primary.default}
              />
              {labels.edit}
            </EditButton>
          </PaymentRow>
        </Panel>

        <Notice>
          <InfoIcon
            width={28}
            height={28}
            viewBox="0 0 24 24"
            color="none"
            stroke={theme.colors.primary.default}
          />
          {labels.notice}
        </Notice>
      </Main>
      <Actions>
        <BackButton
          size="medium"
          type="button"
          onClick={onBack}
          icon={
            <ChevronLeftIcon
              width={20}
              height={20}
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
          icon={
            <CheckBadgeIcon
              width={26}
              height={26}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.white}
            />
          }
        >
          {labels.confirm}
        </ConfirmButton>
      </Actions>
    </StepLayout>
  );
};

export default ConfirmStep;
