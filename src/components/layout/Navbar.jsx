import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapperLogo = styled.a`
  display: flex;
  padding: 0px 8px;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  width: wrap-content;
  height: wrap-content;
  cursor: pointer;
  border-radius: 10px;
  text-decoration: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  color: black;
`;

const LogoDown = styled.h1`
  font-weight: bold;
  // text-decoration: underline crimson;
  // font-size: 25px;
  // top: -5px;
  // left: 9px;
  // position: relative;
  // letter-spacing: 17px;

  font-size: 12px;
  top: -4px;
  left: 9px;
  position: relative;
  letter-spacing: 15px;
  color: crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <WrapperLogo href="/">
            <Logo>FLAT DESIGN</Logo>

            <LogoDown>STYLED</LogoDown>
          </WrapperLogo>

          <Menu>
            <MenuItem>Início</MenuItem>
            <MenuItem>Funcionalidades</MenuItem>
            <MenuItem>Serviços</MenuItem>
            <MenuItem>Preço</MenuItem>
            <MenuItem>Contato</MenuItem>
          </Menu>
        </Left>
        <Button>INSCREVA-SE JÁ</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
