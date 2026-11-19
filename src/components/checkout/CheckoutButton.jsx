import styled from "styled-components";
import { theme } from "../../styles/theme";
import PrimaryButton from "../PrimaryButton";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const CheckoutButton = styled(PrimaryButton)`
  min-width: 260px;

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
  }
`;

export default CheckoutButton;
