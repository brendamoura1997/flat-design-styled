import styled from "styled-components";
import ArrowIcon from "../../icons/ArrowIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import CardIcon from "../../icons/CardIcon";
import CheckBadgeIcon from "../../icons/CheckBadgeIcon";
import LockIcon from "../../icons/LockIcon";
import PixLogoIcon from "../../icons/PixLogoIcon";
import ShieldIcon from "../../icons/ShieldIcon";
import UserIcon from "../../icons/UserIcon";
import { theme } from "../../styles/theme";
import {
  PAYMENT_METHOD,
  cardFields,
  checkoutLabels,
  formatPlanTotal,
  paymentMethods,
  personalFields,
} from "../../utils/checkoutData";
import CheckoutButton from "./CheckoutButton";
import CheckoutField from "./CheckoutField";
import OrderSummary from "./OrderSummary";
import PaymentMethodOption from "./PaymentMethodOption";
import StepLayout from "./StepLayout";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const labels = checkoutLabels.data;
const pixLabels = checkoutLabels.pix;

const Layout = styled(StepLayout)`
  grid-template-columns: minmax(0, 38fr) minmax(0, 62fr);
  gap: 14px 20px;

  @media ${tabletQueries}, ${theme.mediaQueries.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 700;
  color: ${theme.colors.text.form};

  @media ${theme.mediaQueries.mobile} {
    font-size: 17px;
  }
`;
const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 14px;

  @media ${theme.mediaQueries.mobile} {
    grid-template-columns: 1fr;
  }
`;
const Payment = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > legend {
    margin-bottom: 5px;
  }
`;
const Methods = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media ${theme.mediaQueries.mobile} {
    gap: 8px;
  }
`;
const CardFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 14px;

  & > :nth-child(-n + 2) {
    grid-column: 1 / -1;
  }
`;
const PixPanel = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 18px 16px 38px;
  border-radius: 14px;
  background: #f3eefe;

  @media ${theme.mediaQueries.mobile} {
    padding: 14px;
  }
`;
const PixDecor = styled.span`
  position: absolute;
  right: -8px;
  bottom: -65px;
  width: 140px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #e5e0ff;
  pointer-events: none;
`;

const PixDecorTiny = styled.span`
  position: absolute;
  right: -28px;
  bottom: -85px;
  width: 120px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #ded8ff;
  pointer-events: none;
`;

const PixIntro = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 30px;

  @media ${theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
const PixLogoBox = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding-right: 15px;
  border-right: 1px solid rgba(50, 188, 173, 0.45);

  @media ${theme.mediaQueries.mobile} {
    padding-right: 0;
    border-right: none;
  }
`;
const PixText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;
const PixTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.colors.text.form};
`;
const PixDescription = styled.p`
  max-width: 200px;
  font-size: 14px;
  line-height: 1.2;
  color: ${theme.colors.text.form};

  @media ${theme.mediaQueries.mobile} {
    max-width: none;
    line-height: 1.4;
  }
`;
const PixDetails = styled.ul`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 4px;

  @media ${theme.mediaQueries.mobile} {
    margin-left: 0;
  }
`;
const PixDetail = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12.5px;
  color: ${theme.colors.text.slate};

  svg {
    flex-shrink: 0;
  }
`;
const TermsLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  margin-top: 5px;
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
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid
    ${({ $checked }) =>
      $checked ? theme.colors.primary.default : theme.colors.border.input};
  border-radius: 6px;
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
const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  @media ${theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }
`;
const Security = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-size: 12px;
  color: ${theme.colors.text.slate};

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
  }
`;
const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  margin-top: 3px;

  @media ${theme.mediaQueries.mobile} {
    margin-top: 0;
  }
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
    <Layout as="form" onSubmit={handleSubmit} noValidate>
      <OrderSummary plan={plan} label={checkoutLabels.summary.order} roomy />
      <Main>
        <Section>
          <SectionTitle>
            <UserIcon
              width={20}
              height={20}
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
              width={20}
              height={20}
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
            <PixPanel>
              <PixDecor aria-hidden="true" />
              <PixDecorTiny aria-hidden="true" />
              <PixIntro>
                <PixLogoBox>
                  <PixLogoIcon width={140} height={56} large />
                </PixLogoBox>
                <PixText>
                  <PixTitle>{pixLabels.title}</PixTitle>
                  <PixDescription>{pixLabels.description}</PixDescription>
                </PixText>
              </PixIntro>
              <PixDetails>
                <PixDetail>
                  <CalendarIcon
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke={theme.colors.primary.default}
                  />
                  {pixLabels.monthlyCharge} {formatPlanTotal(plan.price)}
                </PixDetail>
                <PixDetail>
                  <ShieldIcon
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    color={theme.colors.primary.default}
                  />
                  {pixLabels.security}
                </PixDetail>
              </PixDetails>
            </PixPanel>
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
                width={18}
                height={18}
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
      </Main>
      <Footer>
        <Security>
          <LockIcon
            width={16}
            height={16}
            viewBox="0 0 24 24"
            color={theme.colors.primary.default}
          />
          {labels.security}
        </Security>
        <Actions>
          <CheckoutButton
            size="medium"
            type="submit"
            iconPosition="right"
            icon={
              <ArrowIcon
                width={18}
                height={18}
                viewBox="0 0 24 24"
                color="none"
                stroke={theme.colors.white}
              />
            }
          >
            {labels.next}
          </CheckoutButton>
        </Actions>
      </Footer>
    </Layout>
  );
};

export default DataStep;
