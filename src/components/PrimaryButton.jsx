import styled, { css, keyframes } from "styled-components";
import { theme } from "../styles/theme";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const shine = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 130%;
  }
`;

const sizes = {
  large: css`
    padding: 16px 24px;
    font-size: 18px;
    font-weight: 800;
    border-radius: 9px;
    gap: 8px;

    @media ${tabletQueries} {
      font-size: clamp(0.9375rem, 0.6rem + 0.8vw, 1.125rem);
      padding: 14px 22px;
    }

    @media ${theme.mediaQueries.mobile} {
      font-size: clamp(0.9375rem, 0.8rem + 0.4vw, 1.0625rem);
      padding: 13px 20px;
      border-radius: 8px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  `,
  medium: css`
    padding: 18px 24px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    gap: 10px;

    @media ${tabletQueries} {
      padding: 23px 28px;
      border-radius: 14px;
      font-size: 20px;
      gap: 12px;
      svg {
        width: 24px;
        height: 24px;
      }
    }

    @media ${theme.mediaQueries.mobile} {
      padding: 13px 20px;
      border-radius: 10px;
      font-size: 15px;
      gap: 10px;
      svg {
        width: 18px;
        height: 18px;
      }
    }
  `,
  small: css`
    padding: 11px;
    font-size: 14px;
    border-radius: 9px;
    gap: 8px;

    @media ${tabletQueries} {
      padding: 14px;
      font-size: 16px;
    }
  `,
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  border: none;
  background-color: #1a1aad;
  color: #fff;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition:
    background 0.2s,
    transform 0.15s;
  overflow: hidden;
  position: relative;
  ${({ $size }) => sizes[$size]}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 80%
    );
    transform: skewX(-15deg);
    animation: none;
    pointer-events: none;
  }

  &:hover::after {
    animation: ${shine} 1.2s ease forwards;
  }

  &:hover {
    background: #1212c2;
  }

  &:active {
    background: #3131de;
    transform: scale(0.98);
  }
`;

const PrimaryButton = ({
  children,
  icon,
  iconPosition = "left",
  size = "large",
  fullWidth = false,
  ...rest
}) => (
  <StyledButton $size={size} $fullWidth={fullWidth} {...rest}>
    {iconPosition === "left" && icon}
    {children}
    {iconPosition === "right" && icon}
  </StyledButton>
);

export default PrimaryButton;
