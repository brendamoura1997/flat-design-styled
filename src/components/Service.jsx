import React, { useState } from "react";
import styled from "styled-components";
import How from "../assets/images/how.png";
import MiniCard from "./MiniCard";
import Play from "../assets/images/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
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
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 205px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed; /* melhor que absolute, cobre a tela inteira */
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; /* centraliza o vídeo */
  justify-content: center;
  align-items: center;
  z-index: 1000; /* garante que fica por cima */
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
          <Title>Processo simples para começar</Title>
          <Desc>
            Oferecemos serviços de experiência digital para startups e pequenas
            empresas que buscam um parceiro para suas necessidades de mídia
            digital, design e desenvolvimento, geração de leads e comunicação.
            Trabalhamos com você, não para você. Embora tenhamos ótimos recursos
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
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
