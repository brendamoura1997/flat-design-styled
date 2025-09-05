import styled from "styled-components";
import Woman from "../../assets/images/woman.png";
import AnimatedShapes from "../layout/AnimatedShapes";
import FixedShapes from "../layout/FixedShapes";
import { useScreenSize } from "../../hooks/useDevice";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 25px;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 70%;
    border-radius: 10px;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 50px;
    // text-align: center;
    line-height: 55px;
    z-index: 30;
  }
`;

const Desc = styled.p`
  width: 60%;
  height: wrap-content;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 768px) {
    width: 70%;
    font-size: 17px;
    // text-align: center;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  const { isMobile } = useScreenSize();
  return (
    <Container>
      <Left>
        {isMobile && <FixedShapes />}
        <Title>Aventuras na era criativa</Title>
        <Desc>
          Acreditamos que criar produtos e serviços em estreita parceria com
          nossos clientes é a única maneira de ter um impacto real em seus
          negócios.
        </Desc>
        <Info>
          <Button>COMECE UM PROJETO</Button>
          <Contact>
            <Phone>Ligue para nós (11) 91234 - 5678</Phone>
            <ContactText>Para qualquer dúvida ou sugestão</ContactText>
          </Contact>
        </Info>
      </Left>
      {!isMobile ? (
        <>
          <Right>
            <Image src={Woman} />
          </Right>
        </>
      ) : (
        <></>
      )}

      {!isMobile && <AnimatedShapes />}
    </Container>
  );
};

export default Intro;
