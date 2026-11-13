import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  background: #def6ee;
  color: #3daa72;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 10px;

  svg {
    flex-shrink: 0;
  }

  @media ${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide} {
    font-size: clamp(0.8125rem, 0.6rem + 0.7vw, 1rem);
    padding: 8px 16px;
    margin-bottom: 14px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.6875rem, 0.55rem + 0.6vw, 0.8125rem);
    padding: 6px 12px;
    gap: 6px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 0.625rem;
  }
`;

const SectionBadge = ({ icon: Icon, iconProps, children, className }) => (
  <Wrapper className={className}>
    {Icon && (
      <Icon
        width={13}
        height={13}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
        strokeWidth="2"
        {...iconProps}
      />
    )}
    {children}
  </Wrapper>
);

export default SectionBadge;
