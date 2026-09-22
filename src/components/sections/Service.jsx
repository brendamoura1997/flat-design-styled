//Service.jsx
import { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import How from "../../assets/images/how.png";
import MonitorIcon from "../icons/MonitorIcon";
import CodeIcon from "../icons/CodeIcon";
import PurseIcon from "../icons/PurseIcon";
import StarIcon from "../icons/StarIcon";
import PlayIcon from "../icons/PlayIcon";
import { theme } from "../../styles/theme";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;
const compactQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile}`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const backdropIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const modalSlideIn = keyframes`
  from { opacity: 0; transform: scale(0.88) translateY(24px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
`;

const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%;  }
`;

const GlobalStyle = createGlobalStyle`
  body { overflow: ${(p) => (p.locked ? "hidden" : "auto")}; }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0px;
  height: 100%;
  @media ${tabletQueries} {
    justify-content: flex-start;
    gap: 0;
  }
  @media ${theme.mediaQueries.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    position: relative;
    height: auto;
  }
`;
const SemiCircle = styled.div`
  position: absolute;
  width: 11%;
  height: 10%;
  bottom: 7%;
  left: 1%;
  border: 2px solid #ffdce0;
  border-radius: 100px 100px 0 0;
  @media ${tabletQueries} {
    width: 25%;
    height: auto;
    aspect-ratio: 2 / 1;
    bottom: 6%;
  }
  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const DecorSquareBlue = styled.div`
  position: absolute;
  top: 13.7%;
  left: 32.8%;
  width: 7.6%;
  height: auto;
  aspect-ratio: 1 / 1;
  border: 2px solid #ffdce0;
  rotate: 45deg;
  border-radius: 6px;
  z-index: 0;

  @media ${tabletQueries} {
    top: 8.6vw;
    left: 25.2%;
    width: 8.4%;
    height: auto;
    aspect-ratio: 1 / 1;
  }

  @media ${theme.mediaQueries.mobile} {
    top: auto;
    bottom: 18%;
    left: auto;
    right: 18%;
    width: 18%;
    height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    z-index: 1;
  }
`;

const DecorSquareBlueTablet = styled.div`
  @media ${tabletQueries} {
    position: absolute;
    top: 18%;
    left: 5.5%;
    width: 9.6%;
    height: auto;
    aspect-ratio: 1 / 1;
    border: 2px solid rgba(246, 66, 103, 1);
    background: rgba(246, 66, 103, 1);
    rotate: 45deg;
    border-radius: 6px;
    z-index: 0;
  }
  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;
const DecorCircle = styled.div`
  position: absolute;
  top: 28%;
  left: -3%;
  width: 40%;
  height: 47%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 0;

  @media ${tabletQueries} {
    top: 25%;
    left: -7.7%;
    width: 49%;
    height: 57%;
  }
  @media ${theme.mediaQueries.mobile} {
    top: auto;
    bottom: 0;
    left: -8.6%;
    width: 76%;
    height: 39vw;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  }
`;

const Sparkles = styled.div`
  position: absolute;
  top: 48.9%;
  left: 36.3%;
  z-index: 0;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 4px;
    border-radius: 4px;
    background: #fff;
  }
  &::before {
    width: 47px;
    left: -24px;
    top: -22px;
    rotate: -56deg;
  }
  &::after {
    width: 45px;
    left: 4px;
    top: 7px;
    rotate: -26deg;
  }
  @media ${tabletQueries} {
    top: 59.2%;
    left: 29.4%;
  }
  @media ${theme.mediaQueries.mobile} {
    top: auto;
    bottom: 37vw;
    left: 49%;

    &::before {
      width: 37px;
      left: 6px;
      top: -3px;
      rotate: -56deg;
    }
    &::after {
      width: 35px;
      left: 25px;
      top: 16px;
      rotate: -26deg;
    }
  }
`;

const DecorSquarePink = styled.div`
  position: absolute;
  top: 83.5%;
  left: 33.8%;
  width: 3.8%;
  aspect-ratio: 1 / 1;
  background: #f8306f;
  rotate: 45deg;
  border-radius: 8px;
  z-index: 0;
  @media ${tabletQueries} {
    bottom: 5%;
    top: auto;
    left: 29%;
    width: 5.2%;
  }
  @media ${theme.mediaQueries.mobile} {
    top: auto;
    bottom: 5vw;
    left: auto;
    right: 30.1%;
    width: 9.7%;
    border-radius: 4px;
  }
`;

const DotsGrid = styled.div`
  position: absolute;
  top: 4%;
  left: 2%;
  display: grid;
  grid-template-columns: repeat(5, 9px);
  gap: 18px 21px;
  z-index: 0;
  span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #fdc4cb;
    display: block;
  }
  span:nth-child(n + 21) {
    display: none;
  }

  @media ${tabletQueries} {
    top: 3vw;
    left: 3%;
    grid-template-columns: repeat(5, 16px);
    gap: 18px;
    span {
      width: 8px;
      height: 8px;
    }
    span:nth-child(n + 21) {
      display: none;
    }
  }
  @media ${theme.mediaQueries.mobile} {
    top: auto;
    bottom: calc(69vw - 56px);
    left: 4.6vw;
    grid-template-columns: repeat(5, 6px);
    gap: 9px;
    z-index: 1;
    span {
      width: 5px;
      height: 5px;
    }
    span:nth-child(n + 21) {
      display: block;
    }
  }
`;

const DotsGridMobile = styled.div`
  display: none;

  @media ${tabletQueries} {
    position: absolute;
    bottom: 55.5vw;
    left: 25%;
    display: grid;
    grid-template-columns: repeat(4, 7px);
    gap: 15px;
    z-index: 0;
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #ffdce0;
      display: block;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    position: absolute;
    bottom: 25vw;
    left: auto;
    right: 7%;
    display: grid;
    grid-template-columns: repeat(4, 7px);
    gap: 10px;
    z-index: 1;
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #ffdce0;
      display: block;
    }
  }
`;

const Left = styled.div`
  width: 37%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 3%;

  @media ${tabletQueries} {
    width: 41%;
    margin-left: 1%;
    align-self: flex-end;
  }
  @media ${theme.mediaQueries.mobile} {
    width: 100%;
    margin-left: 0;
    flex-shrink: 0;
    order: 1;
    aspect-ratio: 1.2;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom center;

  align-self: stretch;
  @media ${tabletQueries} {
    display: block;
    height: auto;
  }
  @media ${theme.mediaQueries.mobile} {
    position: absolute;
    top: 10%;
    left: auto;
    z-index: 3;
    width: 62%;
    height: auto;
    object-fit: contain;
  }
`;
const Right = styled.div`
  width: 50%;
  @media ${tabletQueries} {
    width: 49%;
    margin-left: 2.5%;
  }

  @media ${theme.mediaQueries.mobile} {
    width: 100%;
    margin-left: 0;
  }
`;
const Wrapper = styled.div`
  padding: 60px 3vw;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s ease both;
  @media ${tabletQueries} {
    padding: 48px 0;
  }
  @media ${theme.mediaQueries.mobile} {
    padding: 10% 6% 0%;
  }
`;
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #def6ee;
  color: #3daa72;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 10px;
  width: fit-content;
  @media ${tabletQueries} {
    font-size: clamp(0.75rem, 0.5rem + 0.6vw, 0.875rem);
    padding: 7px 14px;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.6875rem, 0.55rem + 0.6vw, 0.8125rem);
    padding: 6px 12px;
    gap: 6px;
    margin-bottom: 8px;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: 0.625rem;
  }
`;
const Title = styled.h1`
  font-size: clamp(50px, 4.88vw, 60px);
  line-height: 1.15;
  color: #111;
  hyphens: none;
  word-break: normal;
  overflow-wrap: normal;

  @media ${tabletQueries} {
    font-size: clamp(45px, 4.88vw, 50px);
    line-height: 1.15;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(38px, 4.2vw, 45px);
    line-height: 1.1;
  }
`;
const Highlight = styled.span`
  color: #e91e63;
`;
const Desc = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin-top: 20px;
  color: #666;
  max-width: 520px;
  @media ${tabletQueries} {
    font-size: clamp(0.875rem, 0.45rem + 0.95vw, 1.0625rem);
    margin-top: 16px;
    max-width: 92%;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.875rem, 0.75rem + 0.55vw, 1rem);
    margin-top: 12px;
    max-width: 100%;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 16px;
  margin-top: 2vw;
  @media ${compactQueries} {
    flex-direction: column;
  }
  @media ${tabletQueries} {
    gap: 14px;
    margin-top: 28px;
  }
  @media ${theme.mediaQueries.mobile} {
    gap: 12px;
    margin-top: 20px;
  }
`;
const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.8vw 1vw;
  border: 1px solid #ebebeb;
  border-radius: 14px;
  background: #fff;
  gap: 0;
  @media ${compactQueries} {
    flex: none;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto;
    align-items: start;
    text-align: left;
  }
  @media ${tabletQueries} {
    column-gap: 20px;
    padding: 18px 22px;
  }
  @media ${theme.mediaQueries.mobile} {
    column-gap: 16px;
    padding: 14px 16px;
    border-radius: 12px;
  }
`;
const CardIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(p) => p.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  @media ${compactQueries} {
    grid-column: 1;
    grid-row: 1 / span 3;
    align-self: center;
    margin-bottom: 0;
    svg {
      width: 48%;
      height: 48%;
    }
  }
  @media ${tabletQueries} {
    width: clamp(48px, 6vw, 64px);
    height: clamp(48px, 6vw, 64px);
  }
  @media ${theme.mediaQueries.mobile} {
    width: clamp(46px, 13.5vw, 56px);
    height: clamp(46px, 13.5vw, 56px);
  }
`;
const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin: 0 0 7px 0;
  @media ${compactQueries} {
    grid-column: 2;
    grid-row: 1;
    margin-bottom: 6px;
  }
  @media ${tabletQueries} {
    font-size: clamp(0.9375rem, 0.6rem + 1vw, 1.125rem);
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.9375rem, 0.85rem + 0.5vw, 1.0625rem);
  }
`;
const CardDivider = styled.div`
  width: 32px;
  height: 3px;
  background-color: #e91e63;
  border-radius: 2px;
  margin-bottom: 14px;
  @media ${compactQueries} {
    grid-column: 2;
    grid-row: 2;
    margin-bottom: 10px;
  }
`;
const CardDesc = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: #777;
  margin: 0;
  @media ${compactQueries} {
    grid-column: 2;
    grid-row: 3;
  }
  @media ${tabletQueries} {
    font-size: clamp(0.8125rem, 0.45rem + 0.85vw, 0.9rem);
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.8125rem, 0.75rem + 0.3vw, 0.875rem);
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border: none;
  padding: 16px 24px;
  background-color: #1a1aad;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  border-radius: 9px;
  margin-top: 28px;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition:
    background 0.2s,
    transform 0.15s;
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
  @media ${tabletQueries} {
    font-size: clamp(0.9375rem, 0.6rem + 0.8vw, 1.125rem);
    padding: 14px 22px;
    margin-top: 24px;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(0.9375rem, 0.8rem + 0.4vw, 1.0625rem);
    padding: 13px 20px;
    margin-top: 16px;
    border-radius: 8px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(8, 8, 20, 0.78);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${backdropIn} 0.25s ease both;
  padding: 20px;
`;
const ModalBox = styled.div`
  position: relative;
  background: #0f0f1a;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 860px;
  box-shadow:
    0 32px 80px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.07);
  animation: ${modalSlideIn} 0.35s cubic-bezier(0.34, 1.36, 0.64, 1) both;
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px 14px;
  background: linear-gradient(135deg, #1a1aad18, #e91e6318);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
`;
const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ModalTitleDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e91e63;
  box-shadow: 0 0 8px #e91e6388;
`;
const ModalTitleText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.3px;
`;

const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.15s;
  flex-shrink: 0;
  &:hover {
    background: rgba(231, 213, 219, 0.25);
    color: #fff;
    border-color: rgba(231, 213, 219, 0.4);
  }
`;
const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: #000;
`;
const VideoFrame = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
const ModalFooter = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const FooterHint = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  margin-left: 8px;
  letter-spacing: 0.3px;
`;
const cards = [
  {
    bg: "#fce4ec",
    icon: (
      <MonitorIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke="#E11D48"
      />
    ),
    title: "Design",
    desc: "Criamos interfaces modernas e intuitivas que encantam e geram resultados.",
  },
  {
    bg: "#ede7f6",
    icon: (
      <CodeIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke="#6D28D9"
      />
    ),
    title: "Desenvolvimento",
    desc: "Soluções digitais sob medida com performance, segurança e escalabilidade.",
  },
  {
    bg: "#def6ee",
    icon: (
      <PurseIcon
        width={28}
        height={28}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
        strokeWidth="1.5"
      />
    ),
    title: "Marketing Digital",
    desc: "Estratégias que atraem, engajam e convertem o público certo.",
  },
];
const Service = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) setOpen(false);
  };
  return (
    <>
      <GlobalStyle locked={open} />
      <Container>
        <DotsGrid>
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} />
          ))}
        </DotsGrid>
        <DecorSquareBlue />
        <DecorSquareBlueTablet />
        <DecorCircle />
        <Sparkles />
        <DecorSquarePink />
        <DotsGridMobile>
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} />
          ))}
        </DotsGridMobile>
        <SemiCircle />
        <Left>
          <Image src={How} alt="Como funciona" />
        </Left>
        <Right id="service">
          <Wrapper>
            <Badge>
              <StarIcon
                width={11}
                height={11}
                viewBox="0 0 24 24"
                color="none"
                stroke="#3DAA72"
                strokeWidth="2"
              />
              Soluções pensadas para impulsionar seu negócio
            </Badge>
            <Title>
              Processo simples <br />
              para <Highlight>começar</Highlight>
            </Title>
            <Desc>
              Oferecemos serviços de experiência digital para startups e
              pequenas empresas que buscam um parceiro para suas necessidades de
              mídia digital, design e desenvolvimento, geração de leads e
              comunicação. Trabalhamos com você, não para você. Embora tenhamos
              ótimos recursos
            </Desc>
            <CardContainer>
              {cards.map((card) => (
                <Card key={card.title}>
                  <CardIconWrapper bg={card.bg}>{card.icon}</CardIconWrapper>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDivider />
                  <CardDesc>{card.desc}</CardDesc>
                </Card>
              ))}
            </CardContainer>
            <Button onClick={() => setOpen(true)}>
              <PlayIcon
                width={24}
                height={24}
                viewBox="0 0 24 24"
                color="none"
                stroke="white"
              />
              Como funciona
            </Button>
          </Wrapper>
        </Right>
      </Container>
      {open && (
        <Backdrop
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Como funciona"
        >
          <ModalBox>
            <ModalHeader>
              <ModalTitle>
                <ModalTitleDot />
                <ModalTitleText>Como Funciona</ModalTitleText>
              </ModalTitle>

              <CloseBtn
                onClick={() => setOpen(false)}
                aria-label="Fechar modal"
                title="Fechar (Esc)"
              >
                ✕
              </CloseBtn>
            </ModalHeader>
            <VideoWrapper>
              <VideoFrame
                src="https://www.youtube.com/embed/9_s_Essow6s"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </VideoWrapper>
            <ModalFooter>
              <FooterHint>Pressione Esc para fechar</FooterHint>
            </ModalFooter>
          </ModalBox>
        </Backdrop>
      )}
    </>
  );
};
export default Service;
