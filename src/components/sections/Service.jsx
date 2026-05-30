import { useState } from "react";
import styled, { keyframes } from "styled-components";
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
  background: #ffeaed;
  color: #e8002d;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 10px;
  width: fit-content;
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 1.15
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
  }

  &:active {
    background: #3131de;
    transform: scale(0.98);
  }
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
            <StarIcon
              width={11}
              height={11}
              viewBox="0 0 24 24"
              color="none"
              stroke="#e8002d"
            />
            Soluções pensadas para impulsionar seu negócio
          </Badge>
          <Title>
            Processo simples <br />
            para <Highlight>começar</Highlight>
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
