import styled from "styled-components";
import App from "../../assets/images/app.png";

const Container = styled.div`
  display: flex;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>Ótimo</b> design
          <br />
          <b>Ótimo</b> negócio
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
