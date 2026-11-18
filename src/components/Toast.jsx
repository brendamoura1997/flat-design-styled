import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme.jsx";
import CheckCircleIcon from "../icons/CheckCircleIcon.jsx";
import CloseIcon from "../icons/CloseIcon.jsx";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Region = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1100;
  width: calc(100% - 48px);
  max-width: 400px;
  pointer-events: none;

  @media ${tabletQueries} {
    max-width: 460px;
  }

  @media ${theme.mediaQueries.mobile} {
    right: 16px;
    bottom: 16px;
    left: 16px;
    width: auto;
    max-width: none;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 14px 14px 16px;
  border-radius: 14px;
  background: ${theme.colors.feedback.success};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  pointer-events: auto;
  animation: ${slideIn} 0.3s ease both;

  svg {
    flex-shrink: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media ${tabletQueries} {
    padding: 18px 18px 18px 22px;
    font-size: 16px;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 12px 12px 12px 14px;
    font-size: 13px;
  }
`;

const Message = styled.span`
  flex: 1;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.white};
    outline-offset: 2px;
  }
`;

const Toast = ({ open, message, onClose, duration = 6000 }) => {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return undefined;
    const timer = setTimeout(() => onCloseRef.current(), duration);
    return () => clearTimeout(timer);
  }, [open, duration]);

  return createPortal(
    <Region role="status" aria-live="polite" aria-atomic="true">
      {open && (
        <Box>
          <CheckCircleIcon
            width={22}
            height={22}
            viewBox="0 0 24 24"
            color="none"
            stroke={theme.colors.white}
          />
          <Message>{message}</Message>
          <CloseButton
            type="button"
            aria-label="Fechar notificação"
            onClick={onClose}
          >
            <CloseIcon
              width={16}
              height={16}
              viewBox="0 0 24 24"
              stroke={theme.colors.white}
            />
          </CloseButton>
        </Box>
      )}
    </Region>,
    document.body,
  );
};

export default Toast;
