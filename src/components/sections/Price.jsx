//Price.jsx
import styled, { keyframes, css } from "styled-components";
import SendIcon from "../icons/SendIcon";
import StarIcon from "../icons/StarIcon";
import RocketIcon from "../icons/RocketIcon";
import HeartIcon from "../icons/HeartIcon";
import ShieldHollowIcon from "../icons/ShieldHollowIcon";
import { theme } from "../../styles/theme";
import { useScreenSize } from "../../hooks/useDevice";

const tabletQuery = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.35); }
  50%       { box-shadow: 0 0 0 12px rgba(233, 30, 99, 0); }
`;
const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%;  }
`;

const Section = styled.section`
  position: relative;
  min-height: 120vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-family: "Nunito", "Segoe UI", sans-serif;
  background: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png");
  @media ${tabletQuery} {
    min-height: auto;
    padding: 64px 0;
  }
  @media ${theme.mediaQueries.mobile} {
    min-height: auto;
    padding: 72px 0 64px;
  }
`;
const DotsGrid = styled.div`
  position: absolute;
  top: 48px;
  left: 40px;
  display: grid;
  grid-template-columns: repeat(7, 6px);
  gap: 9px;
  z-index: 0;
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #e8002d;
    opacity: 0.35;
    display: block;
  }
  @media ${tabletQuery} {
    top: 32px;
    left: 28px;
    gap: 7px;
    grid-template-columns: repeat(7, 5px);
    span {
      width: 4px;
      height: 4px;
    }
  }
  @media ${theme.mediaQueries.mobile} {
    top: 20px;
    left: 16px;
    gap: 6px;
    grid-template-columns: repeat(7, 4px);
    span {
      width: 3px;
      height: 3px;
    }
  }
`;
const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  @media ${theme.mediaQueries.mobile} {
    padding: 0 16px;
  }
`;
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #def6ee;
  color: #3daa72;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 999px;
  margin-bottom: 24px;
  svg {
    flex-shrink: 0;
  }
  @media ${tabletQuery} {
    font-size: 13px;
    padding: 8px 18px;
    margin-bottom: 24px;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(11px, 3.2vw, 13px);
    padding: 7px 14px;
    margin-bottom: 18px;
  }
`;
const Headline = styled.h2`
  font-size: clamp(32px, 4vw, 52px);
  color: #0d0d0d;
  line-height: 1.15;
  margin: 0 0 16px;
  span {
    color: #e8002d;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(33px, 4.2vw, 45px);
    line-height: 1.1;
    margin-bottom: 12px;
  }
`;
const Sub = styled.p`
  font-size: 16px;
  color: #777;
  margin: 0 0 56px;
  @media ${tabletQuery} {
    font-size: 16px;
    margin-bottom: 48px;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(12px, 3.6vw, 14px);
    margin-bottom: 36px;
  }
`;
const Cards = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 22px;
  @media ${tabletQuery} {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  @media ${theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;
const Bubble = styled.span`
  position: absolute;
  z-index: 0;
  pointer-events: none;
  border-radius: 50%;
  aspect-ratio: 1;
  background: ${({ $color }) => $color};
  width: ${({ $size }) => $size}%;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  @media ${theme.mediaQueries.mobile} {
    width: ${({ $size }) => $size * 1.8}%;
    top: ${({ $mTop }) => $mTop}%;
    left: ${({ $mLeft }) => $mLeft}%;
  }
`;
const Card = styled.div`
  background: #fff;
  border: 1.5px solid ${({ featured }) => (featured ? "#c7b8f7" : "#ebebeb")};
  border-radius: 18px;
  padding: 29px 26px 22px;
  width: 30%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  box-shadow: ${({ featured }) =>
    featured
      ? "0 8px 32px rgba(138,99,255,0.10)"
      : "0 4px 16px rgba(0,0,0,0.05)"};
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ delay }) => delay || "0s"};
  @media ${tabletQuery} {
    width: 100%;
    max-width: 800px;
    flex: none;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-template-rows: auto auto;
    column-gap: 40px;
    row-gap: 24px;
    border-radius: 16px;
    padding: 40px;
    align-items: start;
  }
  @media ${theme.mediaQueries.mobile} {
    width: 100%;
    max-width: 360px;
    flex: none;
    border-radius: 18px;
    padding: 24px 26px 22px;
  }
`;
const FeaturedBadge = styled.div`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: #e43d5d;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 7px 18px;
  border-radius: 6px;
  white-space: nowrap;
  @media ${tabletQuery} {
    left: 40px;
    transform: none;
  }
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-bottom: 22px;
  @media ${tabletQuery} {
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 0;
    gap: 20px;
  }
`;
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const IconWrap = styled.div`
  width: 70px;
  // height: 100%;
  height: 70px;
  border-radius: 50%;
  // border-radius: 5%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media ${tabletQuery} {
    width: 70px;
    height: 70px;
  }
`;
const PlanName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ color }) => color};
  margin: 0 0 6px;
  @media ${tabletQuery} {
    font-size: 22px;
    margin-bottom: 8px;
  }
`;
const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
  margin-bottom: 2px;
  // border: 1px solid red;
`;
const Currency = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #0f1230;
  margin-bottom: 7px;
  @media ${tabletQuery} {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
const Amount = styled.span`
  font-size: 44px;
  font-weight: 700;
  color: #0f1230;
  line-height: 1;
  @media ${tabletQuery} {
    font-size: 48px;
  }
`;
const Period = styled.span`
  font-size: 13px;
  color: #888;
  margin-bottom: 7px;
  @media ${tabletQuery} {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Divider = styled.div`
  width: 40px;
  height: 3px;
  border-radius: 2px;
  background: ${({ color }) => color};
  margin: 8px 0 0px 26px;
  @media ${tabletQuery} {
    margin: 12px 0 0 0;
  }
`;
const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media ${tabletQuery} {
    grid-column: 2;
    grid-row: 1 / span 2;
    margin-bottom: 0;
    margin-top: 4px;
    gap: 12px;
  }
`;
const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  // font-weight: 600;
  color: #525f92;
  @media ${tabletQuery} {
    font-size: 16px;
    gap: 12px;
  }
`;
const CheckBadge = styled.div`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media ${tabletQuery} {
    width: 28px;
    height: 28px;
    min-width: 28px;
  }
`;
const Btn = styled.button`
  width: 100%;
  padding: 11px;
  background: #1a1aad;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition:
    background 0.2s,
    transform 0.15s;
  margin-top: auto;
  ${({ featured }) =>
    featured &&
    css`
      animation: ${pulse} 2.5s ease-in-out infinite;
    `}
  overflow: hidden;
  position: relative;

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
  @media ${tabletQuery} {
    grid-column: 1;
    grid-row: 2;
    margin-top: 0;
    font-size: 16px;
    padding: 14px;
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 48px;
  font-size: 13.5px;
  color: #888;
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ccc;
  }
  @media ${tabletQuery} {
    gap: 24px;
    margin-top: 48px;
    font-size: 13.5px;
  }
  @media ${theme.mediaQueries.mobile} {
    flex-wrap: wrap;
    gap: 10px 18px;
    margin-top: 36px;
    font-size: 12px;
  }
`;
const plans = [
  {
    type: "Basic",
    price: "10",
    color: "#e8002d",
    iconBg: "#ffeaed",
    divider: "#e8002d",
    featured: false,
    delay: "0.1s",
    features: [
      "20 Modelos Feitos à Mão",
      "Suporte Exclusivo",
      "5+ Sites Pré-Construídos",
      "Plugins Básicos",
    ],
    icon: (
      <SendIcon
        width={34}
        height={34}
        viewBox="0 0 24 24"
        color="none"
        stroke="#E11D48"
        strokeWidthOutside="2.2"
        strokeWidthInside="1.5"
      />
    ),
  },
  {
    type: "Premium",
    price: "20",
    color: "#5230e0",
    iconBg: "#f0ebff",
    divider: "#7c5cbf",
    featured: true,
    delay: "0.2s",
    features: [
      "50 Modelos Feitos à Mão",
      "Suporte Exclusivo",
      "10+ Sites Pré-Construídos",
      "Plugins Premium",
    ],
    icon: (
      <StarIcon
        width={34}
        height={34}
        viewBox="0 0 24 24"
        color="none"
        stroke="#5230e0"
      />
    ),
  },
  {
    type: "Advanced",
    price: "30",
    color: "#2eaa7a",
    iconBg: "#def6ee",
    divider: "#2eaa7a",
    featured: false,
    delay: "0.3s",
    features: [
      "70 Modelos Feitos à Mão",
      "Suporte Exclusivo",
      "20+ Sites Pré-Construídos",
      "Plugins Advanced",
    ],
    icon: (
      <RocketIcon
        width={34}
        height={34}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
        strokeWidth="2"
      />
    ),
  },
];
const bubbles = [
  { color: "#fde3e8", size: 13.6, top: 11, left: -5.6, mTop: -3, mLeft: -8 },
  { color: "#fde3e8", size: 7.2, top: 44, left: -6.9, mTop: 29, mLeft: 93 },
  { color: "#e9e3fb", size: 9.4, top: 18, left: 30.7, mTop: 31, mLeft: -7 },
  { color: "#e9e3fb", size: 7.9, top: 67, left: 60, mTop: 62, mLeft: 92 },
  { color: "#d9f2e7", size: 11.3, top: 11, left: 94, mTop: 64, mLeft: -8 },
  { color: "#d9f2e7", size: 6.7, top: 36, left: 100, mTop: 94, mLeft: 90 },
];
const Price = () => {
  const { isMobile } = useScreenSize();

  return (
    <Section>
      <DotsGrid id="price">
        {Array.from({ length: 35 }).map((_, i) => (
          <span key={i} />
        ))}
      </DotsGrid>
      <Inner>
        <div style={{ textAlign: "center" }}>
          <Badge>
            <HeartIcon
              width={13}
              height={13}
              viewBox="0 0 24 24"
              color="none"
              stroke="#3DAA72"
            />
            Planos que se adaptam ao seu momento
          </Badge>
          <Headline>
            {isMobile ? (
              <>
                Escolha o plano ideal para o seu <span>projeto</span>
              </>
            ) : (
              <>
                Escolha o plano ideal
                <br />
                para o seu <span>projeto</span>
              </>
            )}
          </Headline>
          <Sub>
            Soluções completas para transformar ideias em resultados reais.
          </Sub>
        </div>
        <Cards>
          {bubbles.map((b, i) => (
            <Bubble
              key={i}
              $color={b.color}
              $size={b.size}
              $top={b.top}
              $left={b.left}
              $mTop={b.mTop}
              $mLeft={b.mLeft}
            />
          ))}
          {plans.map((plan) => (
            <Card key={plan.type} featured={plan.featured} delay={plan.delay}>
              {plan.featured && <FeaturedBadge>Mais Escolhido</FeaturedBadge>}
              <CardHeader>
                <IconWrap bg={plan.iconBg}>{plan.icon}</IconWrap>
                <HeaderText>
                  <PlanName color={plan.color}>Plano {plan.type}</PlanName>
                  <PriceRow>
                    <Currency>R$</Currency>
                    <Amount>{plan.price}</Amount>
                    <Period>/mês</Period>
                  </PriceRow>
                  <Divider color={plan.divider} />
                </HeaderText>
              </CardHeader>
              <FeatureList>
                {plan.features.map((f) => (
                  <Feature key={f}>
                    <CheckBadge bg={plan.iconBg}>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 12L11 14.5L15.5 10"
                          stroke={plan.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </CheckBadge>
                    {f}
                  </Feature>
                ))}
              </FeatureList>
              <Btn featured={plan.featured}>Assine Agora</Btn>
            </Card>
          ))}
        </Cards>
        <Footer>
          <span>
            <ShieldHollowIcon
              width={18}
              height={18}
              viewBox="0 0 24 24"
              color="none"
              stroke="#2BAF8E"
            />
            Pagamento seguro
          </span>
          <span className="dot" />
          <span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#2BAF8E"
                strokeWidth="1.5"
              />
              <line
                x1="6.5"
                y1="17.5"
                x2="17.5"
                y2="6.5"
                stroke="#2BAF8E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Cancele quando quiser
          </span>
          <span className="dot" />
          <span>
            <ShieldHollowIcon
              width={18}
              height={18}
              viewBox="0 0 24 24"
              color="none"
              stroke="#2BAF8E"
            />
            Sem taxas ocultas
          </span>
        </Footer>
      </Inner>
    </Section>
  );
};
export default Price;
