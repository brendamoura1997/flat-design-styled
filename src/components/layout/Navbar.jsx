import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 10%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.99)" : "transparent"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0,0,0,0.15)" : "none"};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
`;
const WrapperLogo = styled.a`
  display: flex;
  padding: 0px 8px;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  font-size: 12px;
  top: -2px;
  left: 9px;
  position: relative;
  letter-spacing: 15px;
  color: crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 20px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
  padding: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: crimson;
    transition: width 0.25s ease;
  }

  &:hover {
    color: crimson;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: #e90c0c;
  }

  &:active {
    background-color: rgb(248, 20, 20);
    transform: scale(0.97);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const navbarHeight =
      document.querySelector("nav, [data-navbar]")?.offsetHeight || 70;
    const top =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <Container scrolled={scrolled}>
      <Wrapper>
        <Left>
          <WrapperLogo href="/">
            <Logo>FLAT DESIGN</Logo>

            <LogoDown>STYLED</LogoDown>
          </WrapperLogo>

          <Menu>
            <MenuItem href="#intro" onClick={(e) => handleNavClick(e, "intro")}>
              Início
            </MenuItem>
            <MenuItem
              href="#feature"
              onClick={(e) => handleNavClick(e, "feature")}
            >
              Funcionalidades
            </MenuItem>
            <MenuItem
              href="#service"
              onClick={(e) => handleNavClick(e, "service")}
            >
              Serviços
            </MenuItem>
            <MenuItem href="#price" onClick={(e) => handleNavClick(e, "price")}>
              Preço
            </MenuItem>
            <MenuItem
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contato
            </MenuItem>
          </Menu>
        </Left>
        <Button>INSCREVA-SE JÁ</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
