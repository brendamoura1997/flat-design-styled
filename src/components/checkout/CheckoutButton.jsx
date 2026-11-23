import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import PrimaryButton from "../PrimaryButton";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const CheckoutButton = styled(PrimaryButton)`
  min-width: 200px;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 14px;

  @media ${tabletQueries} {
    padding: 14px 24px;
    border-radius: 12px;
    font-size: 16px;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    min-width: 0;
    flex: 1;
    padding: 13px 20px;
    border-radius: 10px;
    font-size: 15px;
  }

  ${({ $invalid }) =>
    $invalid &&
    css`
      background: #cccccc;
      color: #8a8a8a;
      cursor: not-allowed;
      box-shadow: none;

      &::after {
        display: none;
      }

      &:hover,
      &:active,
      &:focus {
        background: #cccccc;
        color: #8a8a8a;
        box-shadow: none;
        transform: none;
      }
    `}
`;

export default CheckoutButton;
