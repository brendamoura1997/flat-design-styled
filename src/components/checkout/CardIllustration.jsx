import styled from "styled-components";
import { theme } from "../../styles/theme";
import SparkleRays from "./SparkleRays";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 180px;
  pointer-events: none;
  z-index: 0;

  @media ${tabletQueries}, ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const Blob = styled.span`
  position: absolute;
  top: -108px;
  right: -72px;
  width: 256px;
  height: 256px;
  border-radius: 50%;
  background: var(--ck-blob-large, #e3e0fc);
`;
const BlobSmall = styled.span`
  position: absolute;
  top: 20px;
  right: 25px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--ck-blob-small, #cec9fa);
`;
const Rays = styled(SparkleRays)`
  position: absolute;
  top: 30px;
  left: 31px;
`;
const Card = styled.div`
  position: absolute;
  top: 38px;
  right: 81px;
  width: 132px;
  height: 84px;
  border-radius: 11px;
  background: linear-gradient(
    135deg,
    var(--ck-card-from, ${theme.colors.secondary.second.main}),
    var(--ck-card-to, ${theme.colors.primary.default})
  );
  box-shadow: 0 9px 18px var(--ck-card-shadow, rgba(26, 26, 173, 0.25));
  transform: rotate(-10deg);
  overflow: hidden;
`;
const Stripe = styled.span`
  position: absolute;
  top: 16px;
  left: 0;
  width: 100%;
  height: 17px;
  background: rgba(10, 10, 60, 0.55);
`;
const Chip = styled.span`
  position: absolute;
  top: 40px;
  left: 12px;
  width: 19px;
  height: 14px;
  border-radius: 3px;
  background: ${theme.colors.secondary.fourth.main};
`;
const Line = styled.span`
  position: absolute;
  height: 4px;
  border-radius: 2px;
  background: ${({ $color }) => $color};
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
`;

const CardIllustration = ({ refined = false }) => (
  <Wrapper aria-hidden="true">
    <Blob />
    <BlobSmall $refined={refined} />
    <Rays $refined={refined} />
    <Card $refined={refined}>
      <Stripe />
      <Chip />
      <Line
        $color="rgba(255, 255, 255, 0.45)"
        $top={62}
        $left={12}
        $width={55}
      />
      <Line $color={theme.colors.white} $top={50} $left={84} $width={31} />
    </Card>
  </Wrapper>
);

export default CardIllustration;
