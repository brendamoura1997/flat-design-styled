import styled from "styled-components";
import { theme } from "../styles/theme";

const FeatureIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${({ $bg }) => $bg || "#fde8ec"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media only screen and (max-aspect-ratio: 1000/1000) {
    width: 40px;
    height: 40px;
  }
  @media ${theme.mediaQueries.desktopWide} {
    width: 35px;
    height: 35px;
  }
`;
const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;
const FeatureTitle = styled.span`
  font-weight: 700;
  font-size: clamp(0.8075rem, 0.8075rem + 0.17vw, 0.95rem);
  color: #1a1a2e;
  @media ${theme.mediaQueries.tablet} {
    font-size: clamp(1.0838rem, 1.0838rem + 0.23vw, 1.275rem);
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.8181rem, 0.8181rem + 0.17vw, 0.9625rem);
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: clamp(0.7438rem, 0.9438rem + 0.19vw, 0.875rem);
  }
`;
const FeatureDesc = styled.span`
  font-size: clamp(0.697rem, 0.697rem + 0.15vw, 0.82rem);
  color: #888;
  margin-top: 1%;
  max-width: 130px;
  line-height: 1.45;
  @media ${theme.mediaQueries.desktopWide} {
    line-height: 1.35;
  }
  @media ${theme.mediaQueries.tablet} {
    font-size: clamp(1.0094rem, 1.0094rem + 0.21vw, 1.1875rem);
    max-width: 100%;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.7969rem, 0.7969rem + 0.17vw, 0.9375rem);
    max-width: 100%;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: clamp(0.6375rem, 0.9375rem + 0.19vw, 0.75rem);
    line-height: 18px;
  }
`;

const IntroCards = ({ bg, icon, title, desc, size }) => {
  return (
    <>
      <FeatureIcon $bg={bg}>{icon(size)}</FeatureIcon>
      <FeatureText>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDesc>{desc}</FeatureDesc>
      </FeatureText>
    </>
  );
};
export default IntroCards;
