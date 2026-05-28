import styled from "styled-components";
import App from "../../assets/images/app.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 47%;
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
  background-color: #fde8ef;
  color: #e8325a;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 50px;
  width: fit-content;
  margin-bottom: 24px;
`;

const BadgeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid #e8325a;
  border-radius: 6px;
  font-size: 11px;
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
  background-color: darkblue;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 28px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #00008b;
    opacity: 0.9;
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
          <BadgeIcon>★</BadgeIcon>
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
