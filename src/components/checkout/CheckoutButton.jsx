import styled from "styled-components";
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
`;

export default CheckoutButton;
