import styled from "styled-components";
import { theme } from "../../styles/theme";
import SparkleRays from "./SparkleRays";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 380px;
  height: 230px;
  pointer-events: none;
  z-index: 0;

  @media ${tabletQueries}, ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const Blob = styled.span`
  position: absolute;
  top: -110px;
  right: -90px;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: ${theme.colors.secondary.second.light};
  opacity: 0.3;
`;
const BlobSmall = styled.span`
  position: absolute;
  top: 70px;
  right: 40px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${theme.colors.secondary.second.light};
  opacity: 0.35;
`;
const Rays = styled(SparkleRays)`
  position: absolute;
  top: 40px;
  left: 28px;
`;
const Card = styled.div`
  position: absolute;
  top: 54px;
  right: 118px;
  width: 170px;
  height: 108px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary.second.main},
    ${theme.colors.primary.default}
  );
  box-shadow: 0 12px 24px rgba(26, 26, 173, 0.25);
  transform: rotate(-10deg);
  overflow: hidden;
`;
const Stripe = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 22px;
  background: rgba(10, 10, 60, 0.55);
`;
const Chip = styled.span`
  position: absolute;
  top: 52px;
  left: 16px;
  width: 24px;
  height: 18px;
  border-radius: 4px;
  background: ${theme.colors.secondary.fourth.main};
`;
const Line = styled.span`
  position: absolute;
  height: 5px;
  border-radius: 3px;
  background: ${({ $color }) => $color};
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
`;

const CardIllustration = () => (
  <Wrapper aria-hidden="true">
    <Blob />
    <BlobSmall />
    <Rays />
    <Card>
      <Stripe />
      <Chip />
      <Line
        $color="rgba(255, 255, 255, 0.45)"
        $top={80}
        $left={16}
        $width={70}
      />
      <Line $color={theme.colors.white} $top={64} $left={108} $width={40} />
    </Card>
  </Wrapper>
);

export default CardIllustration;
