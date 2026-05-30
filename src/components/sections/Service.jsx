import { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import How from "../../assets/images/how.png";
import MonitorIcon from "../icons/MonitorIcon";
import CodeIcon from "../icons/CodeIcon";
import PurseIcon from "../icons/PurseIcon";
import StarIcon from "../icons/StarIcon";
import PlayIcon from "../icons/PlayIcon";
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

const GlobalStyle = createGlobalStyle`
  body { overflow: ${(p) => (p.locked ? "hidden" : "auto")}; }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 40%;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    display: none;
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
`;
const DecorSquareBlue = styled.div`
  position: absolute;
  top: 32%;
  left: 31%;
  width: 9%;
  height: 16%;
  border: 2px solid #ffdce0;
  rotate: 45deg;
  border-radius: 6px;
  z-index: 0;
`;
const DotsGrid = styled.div`
  position: absolute;
  top: 4%;
  left: 2%;
  display: grid;
  grid-template-columns: repeat(5, 15px);
  gap: 13px;
  z-index: 0;
  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fdc4cb;
    display: block;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;
const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  padding: 60px 56px;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s ease both;
  @media only screen and (max-width: 480px) {
    padding: 28px 20px;
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
`;
const Title = styled.h1`
  font-size: 60px;
  line-height: 1.15;
  color: #111;
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
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 40px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px 16px;
  border: 1px solid #ebebeb;
  border-radius: 14px;
  background: #fff;
  gap: 0;
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
`;
const CardTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #111;
  margin: 0 0 7px 0;
`;
const CardDivider = styled.div`
  width: 32px;
  height: 3px;
  background-color: #e91e63;
  border-radius: 2px;
  margin-bottom: 14px;
`;
const CardDesc = styled.p`
  font-size: 13px;
  line-height: 1.65;
  color: #777;
  margin: 0;
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
  &:hover {
    background: #1212c2;
  }
  &:active {
    background: #3131de;
    transform: scale(0.98);
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
        <SemiCircle />
        <Left>
          <Image src={How} alt="Como funciona" />
        </Left>
        <Right>
          <Wrapper>
            <Badge>
              <StarIcon
                width={11}
                height={11}
                viewBox="0 0 24 24"
                color="none"
                stroke="#3DAA72"
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
                src="https://www.youtube.com/embed/kAUiuF1Vcu0?si=HIFLCWzU199QK-nA&autoplay=1"
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
