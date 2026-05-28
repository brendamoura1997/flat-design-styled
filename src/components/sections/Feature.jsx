import styled from "styled-components";
import App from "../../assets/images/app.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 100%;
  @media only screen and (max-width: 480px) {
    width: 80%;
    flex-direction: column;
    padding: 30px 20px;
    margin-left: 40px;
  }
`;

const Left = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
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
  padding: 8px 18px;
  border-radius: 999px;
  width: fit-content;
  margin-bottom: 20px;
`;

const BadgeIcon = styled.span`
  font-size: 15px;
`;

const Title = styled.span`
  font-size: 70px;
  line-height: 1.1;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const Pink = styled.span`
  color: #e8325a;
  font-weight: 800;
`;

const SubTitle = styled.span`
  font-size: 20px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 17px;
  color: #666;
  margin-top: 20px;
  line-height: 1.6;
`;

const Button = styled.button`
  width: 160px;
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

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Badge>
          <BadgeIcon>☆</BadgeIcon>
          Funcionalidades que fazem a diferença
        </Badge>
        <Title>
          <b>Ótimo</b> design
          <br />
          <b>Ótimo</b> <Pink>negócio</Pink>
        </Title>
        <SubTitle>
          Sabemos que um ótimo design significa ótimos negócios.
        </SubTitle>
        <Desc>
          Ajudamos nossos clientes a ter sucesso criando identidades de marca,
          experiências digitais e materiais impressos que comunicam com clareza,
          alcançam objetivos de marketing e têm uma ótima aparência.
        </Desc>
        <Desc>
          Cuidamos do seu negócio e garantimos que você alcance seus objetivos
          de marketing.
        </Desc>
        <Button>Saiba Mais</Button>
      </Right>
    </Container>
  );
};

export default Feature;
