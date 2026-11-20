import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import CloseIcon from "../../icons/CloseIcon";
import ShieldHollowIcon from "../../icons/ShieldHollowIcon";
import { theme } from "../../styles/theme";
import useFormValues from "../../hooks/useFormValues";
import {
  CHECKOUT_STEP,
  PAYMENT_METHOD,
  checkoutHeaders,
  checkoutInitialValues,
  checkoutLabels,
  checkoutSteps,
} from "../../utils/checkoutData";
import SectionBadge from "../SectionBadge";
import CardIllustration from "./CardIllustration";
import CheckoutStepper from "./CheckoutStepper";
import ConfirmStep from "./ConfirmStep";
import DataStep from "./DataStep";
import PixStep from "./PixStep";
import SuccessStep from "./SuccessStep";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const backdropIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const modalSlideIn = keyframes`
  from { opacity: 0; transform: scale(0.94) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  overflow-y: auto;
  padding: 16px;
  background: rgba(8, 8, 20, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: ${backdropIn} 0.25s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 10px;
  }
`;
const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
  padding: 28px 32px 30px;
  overflow: hidden;
  border-radius: 22px;
  background: ${theme.colors.white};
  animation: ${modalSlideIn} 0.35s cubic-bezier(0.34, 1.36, 0.64, 1) both;

  &:focus {
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media ${tabletQueries} {
    padding: 32px 28px 32px;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 24px 16px 20px;
    border-radius: 20px;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  z-index: 2;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
  background: rgba(255, 255, 255, 0.8);
  &:hover {
    background: ${theme.colors.white};
  }

  @media ${theme.mediaQueries.mobile} {
    top: 14px;
    right: 12px;
  }
`;
const Header = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 40px;
`;
const SecureBadge = styled(SectionBadge)`
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;
const Title = styled.h2`
  margin-bottom: 6px;
  font-size: clamp(26px, 3.2vw, 36px);
  font-weight: 800;
  line-height: 1.1;
  color: ${theme.colors.text.title};
  hyphens: none;

  span {
    color: ${theme.colors.text.highlight};
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 28px;
  }
`;
const Subtitle = styled.p`
  font-size: clamp(14px, 1.3vw, 16px);
  line-height: 1.4;
  color: ${theme.colors.text.title};

  @media ${theme.mediaQueries.mobile} {
    font-size: 14px;
  }
`;

const CheckoutModal = ({ plan, onClose }) => {
  const [step, setStep] = useState(CHECKOUT_STEP.DATA);
  const form = useFormValues(checkoutInitialValues);
  const backdropRef = useRef(null);
  const dialogRef = useRef(null);
  const header = checkoutHeaders[step];
  const isDataStep = step === CHECKOUT_STEP.DATA;

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    return () => previouslyFocused?.focus?.();
  }, []);

  useEffect(() => {
    backdropRef.current?.scrollTo({ top: 0 });
    dialogRef.current?.focus();
  }, [step]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
      <ModalBox
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        tabIndex={-1}
      >
        <CardIllustration refined={isDataStep} />
        <CloseButton
          type="button"
          aria-label={checkoutLabels.close}
          $refined={isDataStep}
          onClick={onClose}
        >
          <CloseIcon
            width={22}
            height={22}
            viewBox="0 0 24 24"
            color="none"
            stroke={theme.colors.text.title}
          />
        </CloseButton>
        <Header>
          <SecureBadge
            icon={ShieldHollowIcon}
            iconProps={{ width: 16, height: 16 }}
          >
            {checkoutLabels.secureBadge}
          </SecureBadge>
          <Title id="checkout-title">
            {header.title} <span>{header.highlight}</span>
          </Title>
          <Subtitle>{header.subtitle}</Subtitle>
        </Header>
        <CheckoutStepper steps={checkoutSteps} current={step} />
        {step === CHECKOUT_STEP.DATA && (
          <DataStep
            plan={plan}
            form={form}
            onNext={() => setStep(CHECKOUT_STEP.CONFIRM)}
          />
        )}
        {step === CHECKOUT_STEP.CONFIRM && (
          <ConfirmStep
            plan={plan}
            values={form.values}
            onBack={() => setStep(CHECKOUT_STEP.DATA)}
            onConfirm={() =>
              setStep(
                form.values.paymentMethod === PAYMENT_METHOD.PIX
                  ? CHECKOUT_STEP.PIX
                  : CHECKOUT_STEP.SUCCESS,
              )
            }
          />
        )}
        {step === CHECKOUT_STEP.PIX && (
          <PixStep plan={plan} onPaid={() => setStep(CHECKOUT_STEP.SUCCESS)} />
        )}
        {step === CHECKOUT_STEP.SUCCESS && (
          <SuccessStep
            plan={plan}
            email={form.values.email}
            onClose={onClose}
          />
        )}
      </ModalBox>
    </Backdrop>,
    document.body,
  );
};

export default CheckoutModal;
