import styled from "styled-components";
import ArrowIcon from "../../icons/ArrowIcon";
import CardIcon from "../../icons/CardIcon";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import LockIcon from "../../icons/LockIcon";
import UserIcon from "../../icons/UserIcon";
import { theme } from "../../styles/theme";
import {
  PAYMENT_METHOD,
  cardFields,
  checkoutLabels,
  paymentMethods,
  personalFields,
} from "../../utils/checkoutData";
import CheckoutButton from "./CheckoutButton";
import CheckoutField from "./CheckoutField";
import OrderSummary from "./OrderSummary";
import PaymentMethodOption from "./PaymentMethodOption";
import StepLayout from "./StepLayout";

const labels = checkoutLabels.data;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.text.form};

  @media ${theme.mediaQueries.mobile} {
    font-size: 17px;
  }
`;
const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 16px;

  @media ${theme.mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`;
const Payment = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 14px;

  & > legend {
    margin-bottom: 14px;
  }
`;
const Methods = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${theme.mediaQueries.mobile} {
    gap: 8px;
  }
`;
const CardFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 18px;

  & > :nth-child(-n + 2) {
    grid-column: 1 / -1;
  }
`;
const PixNotice = styled.p`
  padding: 14px 16px;
  border-radius: 14px;
  background: ${theme.colors.secondary.second.soft};
  font-size: 15px;
  line-height: 1.5;
  color: ${theme.colors.text.form};
`;
const TermsLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${theme.colors.text.form};
  cursor: pointer;

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`;
const TermsInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;
const TermsBox = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid
    ${({ $checked }) =>
      $checked ? theme.colors.primary.default : theme.colors.border.input};
  border-radius: 7px;
  background: ${({ $checked }) =>
    $checked ? theme.colors.primary.default : theme.colors.white};
  box-sizing: border-box;
  transition:
    background 0.2s,
    border-color 0.2s;

  ${TermsInput}:focus-visible + & {
    box-shadow: 0 0 0 3px rgba(26, 26, 173, 0.25);
  }
`;
const TermsLink = styled.a`
  color: ${theme.colors.primary.default};
  text-decoration: underline;
  text-underline-offset: 2px;
`;
const Security = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${theme.colors.text.slate};

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const keepInPlace = (event) => event.preventDefault();

const DataStep = ({ plan, form, onNext }) => {
  const { values, handleChange, getFieldProps } = form;
  const isCard = values.paymentMethod === PAYMENT_METHOD.CARD;

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext();
  };

  return (
    <StepLayout as="form" onSubmit={handleSubmit} noValidate>
      <OrderSummary plan={plan} label={checkoutLabels.summary.order} />
      <Main>
        <Section>
          <SectionTitle>
            <UserIcon
              width={24}
              height={24}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.text.form}
            />
            {labels.personalTitle}
          </SectionTitle>
          <FieldGrid>
            {personalFields.map(({ name, title, ...field }) => (
              <CheckoutField
                key={name}
                {...getFieldProps(name)}
                aria-label={title}
                {...field}
              />
            ))}
          </FieldGrid>
        </Section>

        <Payment>
          <SectionTitle as="legend">
            <CardIcon
              width={24}
              height={24}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.text.form}
            />
            {labels.paymentTitle}
          </SectionTitle>
          <Methods>
            {paymentMethods.map((option) => (
              <PaymentMethodOption
                key={option.value}
                option={option}
                checked={values.paymentMethod === option.value}
                onChange={handleChange}
              />
            ))}
          </Methods>
          {isCard ? (
            <CardFields>
              {cardFields.map(({ name, ...field }) => (
                <CheckoutField key={name} {...getFieldProps(name)} {...field} />
              ))}
            </CardFields>
          ) : (
            <PixNotice>{labels.pixNotice}</PixNotice>
          )}
        </Payment>

        <TermsLabel>
          <TermsInput
            type="checkbox"
            name="acceptedTerms"
            checked={values.acceptedTerms}
            onChange={handleChange}
          />
          <TermsBox $checked={values.acceptedTerms} aria-hidden="true">
            {values.acceptedTerms && (
              <CheckBadgeIcon
                width={22}
                height={22}
                viewBox="6 6 12 12"
                color="none"
                stroke={theme.colors.white}
              />
            )}
          </TermsBox>
          <span>
            {labels.terms.prefix}
            <TermsLink href="#" onClick={keepInPlace}>
              {labels.terms.termsOfUse}
            </TermsLink>
            {labels.terms.conjunction}
            <TermsLink href="#" onClick={keepInPlace}>
              {labels.terms.privacyPolicy}
            </TermsLink>
            {labels.terms.suffix}
          </span>
        </TermsLabel>

        <Security>
          <LockIcon
            width={20}
            height={20}
            viewBox="0 0 24 24"
            color={theme.colors.primary.default}
          />
          {labels.security}
        </Security>
      </Main>
      <Actions>
        <CheckoutButton
          size="medium"
          type="submit"
          iconPosition="right"
          icon={
            <ArrowIcon
              width={20}
              height={20}
              viewBox="0 0 24 24"
              color="none"
              stroke={theme.colors.white}
            />
          }
        >
          {labels.next}
        </CheckoutButton>
      </Actions>
    </StepLayout>
  );
};

export default DataStep;
