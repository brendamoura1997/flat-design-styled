import styled from "styled-components";
import { theme } from "../../styles/theme";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const StepLayout = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 36fr) minmax(0, 60fr);
  gap: 20px 28px;

  @media ${tabletQueries}, ${theme.mediaQueries.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export default StepLayout;
