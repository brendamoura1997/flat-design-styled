//Price.jsx
import { Fragment } from "react";
import styled from "styled-components";
import SendIcon from "../icons/SendIcon";
import StarIcon from "../icons/StarIcon";
import RocketIcon from "../icons/RocketIcon";
import HeartIcon from "../icons/HeartIcon";
import ShieldHollowIcon from "../icons/ShieldHollowIcon";
import NotAllowedIcon from "../icons/NotAllowedIcon";
import { theme } from "../styles/theme";
import { useScreenSize } from "../hooks/useDevice";
import SectionBadge from "../components/SectionBadge";
import PriceCards from "../components/PriceCards";
import { plansContent, priceFooter } from "../utils/priceData";

const tabletQuery = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const Section = styled.section`
  position: relative;
  min-height: 120vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-family: "Nunito", "Segoe UI", sans-serif;
  background: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png");

  @media ${theme.mediaQueries.desktopWide} {
    padding: 64px 0;
  }

  @media ${tabletQuery} {
    min-height: auto;
    padding: 64px 0;
  }
  @media ${theme.mediaQueries.mobile} {
    min-height: auto;
    padding: 40px 0 64px;
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

const Headline = styled.h2`
  font-size: clamp(32px, 4vw, 52px);
  color: #0d0d0d;
  line-height: 1.15;
  margin: 0 0 16px;
  font-weight: 700;

  span {
    color: #e8002d;
  }

  @media ${tabletQuery} {
    font-size: clamp(45px, 4.88vw, 50px);
    line-height: 1.15;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(33px, 4.2vw, 45px);
    line-height: 1.1;
    margin-bottom: 12px;
    hyphens: none;
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
  @media ${theme.mediaQueries.mobile}, ${theme.mediaQueries.mobileWide} {
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
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: space-between;
    gap: 0;
    max-width: 360px;
    margin: 20px auto 0;
    padding: 14px 6px;
    font-size: 11px;
    background: #fff;
    border: 1px solid rgba(222, 246, 238, 0.9);
    border-radius: 16px;
    span {
      flex: 1;
      flex-direction: column;
      justify-content: flex-start;
      text-align: center;
      gap: 6px;
    }
    svg {
      box-sizing: content-box;
      padding: 6px;
      background: #e4f6f0;
      border-radius: 50%;
    }
    .dot {
      flex: none;
      align-self: center;
      width: 1px;
      height: 40px;
      border-radius: 0;
      margin: 0 7px;
      background: #cfe8de;
    }
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 11px;
    flex-direction: column;
    align-items: start;
    padding: 10px 0 10px 10px;

    span {
      flex: 1;
      flex-direction: row;
      margin: 3px 0;
    }
    .dot {
      display: none;
    }
  }
`;

const bubbles = [
  {
    color: "rgba(253, 227, 232, 0.7)",
    size: 13.6,
    top: 11,
    left: -5.6,
    mTop: -3,
    mLeft: -8,
  },
  {
    color: "rgba(253, 227, 232, 0.7)",
    size: 7.2,
    top: 44,
    left: -6.9,
    mTop: 29,
    mLeft: 93,
  },
  {
    color: "rgba(233, 227, 251, 0.7)",
    size: 9.4,
    top: 18,
    left: 30.7,
    mTop: 31,
    mLeft: -7,
  },
  {
    color: "rgba(233, 227, 251, 0.7)",
    size: 7.9,
    top: 67,
    left: 60,
    mTop: 62,
    mLeft: 92,
  },
  {
    color: "rgba(217, 242, 231, 0.7)",
    size: 11.3,
    top: 11,
    left: 94,
    mTop: 64,
    mLeft: -8,
  },
  {
    color: "rgba(217, 242, 231, 0.7)",
    size: 6.7,
    top: 36,
    left: 100,
    mTop: 94,
    mLeft: 90,
  },
];
const footerIcons = [ShieldHollowIcon, NotAllowedIcon, ShieldHollowIcon];
const Price = () => {
  const { isMobile, isTablet } = useScreenSize();

  const planStyles = [
    {
      color: "#e8002d",
      iconBg: "#ffeaed",
      panelBg: "rgb(255, 200, 218)",
      decor: "#f8305a",
      wave: "#ff9fac",
      divider: "#e8002d",
      featured: false,
      delay: "0.1s",
      icon: (
        <SendIcon
          width={isTablet ? 30 : 24}
          height={isTablet ? 30 : 24}
          viewBox="0 0 24 24"
          color="none"
          stroke="#E11D48"
          strokeWidthOutside="1.8"
          strokeWidthInside="1.5"
        />
      ),
    },
    {
      color: "#5230e0",
      iconBg: "#f0ebff",
      panelBg: "rgb(216, 208, 255)",
      decor: "#6446dc",
      wave: "#a79ef7",
      divider: "#7c5cbf",
      featured: true,
      delay: "0.2s",
      icon: (
        <StarIcon
          width={isTablet ? 30 : 24}
          height={isTablet ? 30 : 24}
          viewBox="0 0 24 24"
          color="none"
          stroke="#5230e0"
          strokeWidth="1.8"
        />
      ),
    },
    {
      color: "#2eaa7a",
      iconBg: "#def6ee",
      panelBg: "rgb(174, 232, 205)",
      decor: "#1fa971",
      wave: "#4fd1a8",
      divider: "#2eaa7a",
      featured: false,
      delay: "0.3s",
      icon: (
        <RocketIcon
          width={isTablet ? 30 : 24}
          height={isTablet ? 30 : 24}
          viewBox="0 0 24 24"
          color="none"
          stroke="#3DAA72"
          strokeWidth="1.8"
        />
      ),
    },
  ];

  const plans = plansContent.map((content, i) => ({
    ...content,
    ...planStyles[i],
  }));

  return (
    <Section>
      {isMobile ? (
        <> </>
      ) : (
        <DotsGrid>
          {Array.from({ length: 35 }).map((_, i) => (
            <span key={i} />
          ))}
        </DotsGrid>
      )}

      <Inner>
        <div style={{ textAlign: "center" }}>
          <SectionBadge icon={HeartIcon}>
            Planos que se adaptam ao seu momento
          </SectionBadge>
          <Headline id="price">
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
            <PriceCards key={plan.type} plan={plan} />
          ))}
        </Cards>
        <Footer>
          {priceFooter.map((text, i) => {
            const Icon = footerIcons[i];
            return (
              <Fragment key={text}>
                {i > 0 && <span className="dot" />}
                <span>
                  <Icon
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#2BAF8E"
                  />
                  {text}
                </span>
              </Fragment>
            );
          })}
        </Footer>
      </Inner>
    </Section>
  );
};
export default Price;
