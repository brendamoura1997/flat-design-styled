import { useState } from "react";
import styled, { keyframes } from "styled-components";
import How from "../../assets/images/how.png";
import Play from "../../assets/icons/play.png";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
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

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

const Video = styled.iframe`
  display: ${(props) => (!props.open ? "none" : "block")};
  height: 300px;
  width: 560px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
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
  background-color: #fce4ec;
  color: #e8002d;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 10px;
  width: fit-content;
`;

const BadgeIcon = styled.span`
  font-size: 15px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #111;
  line-height: 1.15;
  margin: 0;
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
  background-color: ${(props) => props.bg};
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
    transform: translateY(-2px);
  }
`;

const ButtonIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 150px;
  right: 0px;
  background-color: light-gray;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  z-index: 1100;
`;

const cards = [
  {
    bg: "#fce4ec",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e91e63"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Design",
    desc: "Criamos interfaces modernas e intuitivas que encantam e geram resultados.",
  },
  {
    bg: "#ede7f6",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Desenvolvimento",
    desc: "Soluções digitais sob medida com performance, segurança e escalabilidade.",
  },
  {
    bg: "#e8f5e9",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2e7d32"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
        <path d="M22 10.5 12 14 2 10.5" />
        <circle cx="19" cy="18" r="3" />
        <line x1="19" y1="15" x2="19" y2="13" />
      </svg>
    ),
    title: "Marketing Digital",
    desc: "Estratégias que atraem, engajam e convertem o público certo.",
  },
];

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          src="https://www.youtube.com/embed/kAUiuF1Vcu0?si=HIFLCWzU199QK-nA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        {open && !smallScreen && (
          <CloseButton onClick={() => setOpen(false)}>✕</CloseButton>
        )}
      </Left>
      <Right>
        <Wrapper>
          <Badge>
            <BadgeIcon>☆</BadgeIcon>
            Soluções pensadas para impulsionar seu negócio
          </Badge>
          <Title>
            Processo simples para <Highlight>começar</Highlight>
          </Title>
          <Desc>
            Oferecemos serviços de experiência digital para startups e pequenas
            empresas que buscam um parceiro para suas necessidades de mídia
            digital, design e desenvolvimento, geração de leads e comunicação.
            Trabalhamos com você, não para você. Embora tenhamos ótimos recursos
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
            <ButtonIcon src={Play} />
            Como funciona
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            src="https://www.youtube.com/embed/kAUiuF1Vcu0?si=HIFLCWzU199QK-nA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <CloseButton onClick={() => setOpen(false)}>✕</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
