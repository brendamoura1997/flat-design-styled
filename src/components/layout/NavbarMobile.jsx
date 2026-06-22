import styled, { keyframes, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import { theme } from "../../styles/theme";
import HomeIcon from "../icons/HomeIcon";
import PurseIcon from "../icons/PurseIcon";
import StarIcon from "../icons/StarIcon";
import CoinIcon from "../icons/CoinIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import SendIcon from "../icons/SendIcon";

const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%;  }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* Trava o scroll do body quando o menu está aberto */
const GlobalLockStyle = createGlobalStyle`
  body {
    overflow: ${({ $locked }) => ($locked ? "hidden" : "auto")};
  }
`;

const Container = styled.div`
  height: 9%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 0% 4%;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.99)" : "rgba(255, 255, 255, 0.99)"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 10px rgba(0,0,0,0.15)" : "none"};

  @media ${theme.mediaQueries.tablet} {
    height: 8%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperLogo = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: wrap-content;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.55) 50%,
      transparent 80%
    );
    transform: skewX(-15deg);
    animation: none;
    pointer-events: none;
  }
  &:active::after {
    animation: ${shine} 1.2s ease forwards;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  text-decoration-thickness: 3px;
  white-space: nowrap;
  color: black;
  font-size: clamp(1.1375rem, 0.9206rem + 1.0847vw, 1.5rem);
`;

const LogoDown = styled.h1`
  font-weight: 900;
  font-size: clamp(0.625rem, 0.5382rem + 0.434vw, 0.6875rem);
  top: -7px;
  left: 3%;
  position: relative;
  letter-spacing: 12px;
  color: crimson;
`;

/* Botão hamburguer */
const BurgerButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0;

  span {
    display: block;
    width: 24px;
    height: 3px;
    border-radius: 2px;
    background-color: black;
    transition: transform 0.2s ease;
  }

  &:active span {
    transform: scaleX(0.9);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.55);
  z-index: 1000;
  opacity: 0;
  animation: ${fadeIn} 0.25s ease forwards;
`;

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  background-color: #ffffff;
  z-index: 1001;
  overflow-y: auto;
  transform: translateX(100%);
  animation: ${slideIn} 0.3s ease forwards;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  padding: 4% 4% 0%;

  @media ${theme.mediaQueries.mobile} {
    width: 75%;
    padding: 6% 6% 0%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    width: 85%;
    padding: 4% 5% 6%;
  }
`;

const PanelHeader = styled.div`
  //   display: flex;
  //   align-items: flex-start;
  //   justify-content: space-between;

  border: 1px solid red;
`;

const PanelLogoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const PanelLogo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  text-decoration-thickness: 3px;
  white-space: nowrap;
  color: black;
  font-size: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
  line-height: 1.1;
`;

const PanelLogoDown = styled.h1`
  font-weight: 900;
  font-size: 0.75rem;
  top: -4px;
  position: relative;
  letter-spacing: 13px;
  color: crimson;
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 4px;
  top: 1.5%;
  right: 4%;

  &:active {
    transform: scale(0.92);
  }
`;

const Description = styled.p`
  margin-top: 6%;
  font-size: 0.9375rem;
  color: #333;
  line-height: 1.5;

  span {
    color: crimson;
    font-weight: 900;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e6e6e6;
  margin: 6% 0%;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  //   gap: 4%;
  gap: 1vh;
  border: 1px solid green;
  height: max-content;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 5%;
  text-decoration: none;
  cursor: pointer;
  padding: 5% 5%;
  border-radius: 8px;
  background-color: ${({ $active }) => ($active ? "#fdecee" : "#fafafa")};
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:active {
    transform: scale(0.98);
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 5% 5%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    padding: 3% 3%;
  }
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bg }) => $bg};
`;

const MenuItemLabel = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 22px;
  color: ${({ $active }) => ($active ? "crimson" : "#1a1a1a")};

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
  }
`;

const Chevron = styled.svg`
  width: 18px;
  height: 18px;
  color: #b0b0b0;
`;

const ContainerContact = styled.div`
  width: 100%;
  //   margin-top: 10%;
  //   margin-top: auto;
  border: 2px solid purple;
  bottom: 0;
`;

const ContactCard = styled.div`
  //   margin-top: 8%;
  background-color: #fdecee;
  border-radius: 16px;
  padding: 6%;
  display: flex;
  align-items: flex-start;
  gap: 5%;
`;

const ContactIconCircle = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactTitle = styled.p`
  font-weight: bold;
  font-size: 0.9375rem;
  color: #1a1a1a;
  margin-bottom: 2%;
`;

const ContactPhone = styled.p`
  font-weight: 900;
  font-size: 1.25rem;
  color: crimson;
  margin-bottom: 3%;
`;

const ContactNote = styled.p`
  font-size: 0.875rem;
  color: #555;
  line-height: 1.4;
`;

const SubscribeButton = styled.a`
  margin-top: 5%;
  background-color: crimson;
  color: white;
  border-radius: 16px;
  padding: 6%;
  display: flex;
  align-items: center;
  gap: 5%;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 20%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 80%
    );
    transform: skewX(-15deg);
    animation: none;
    pointer-events: none;
  }
  &:active::after {
    animation: ${shine} 1.2s ease forwards;
  }
  &:active {
    background-color: rgb(248, 20, 20);
    transform: scale(0.98);
  }
`;

const SubscribeIconCircle = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubscribeTextBlock = styled.div`
  flex: 1;
`;

const SubscribeTitle = styled.p`
  font-weight: 900;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

const SubscribeSubtitle = styled.p`
  font-size: 0.8125rem;
  margin-top: 1%;
  opacity: 0.95;
  line-height: 1.35;
`;

const Footer = styled.p`
  //   margin-top: 8%;
  text-align: center;
  font-size: 0.75rem;
  color: #999;
`;

/* ---------- Ícones SVG inline ---------- */

const CloseIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1a1a1a"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6 18 18" />
    <path d="M18 6 6 18" />
  </svg>
);

const ChevronIcon = () => (
  <Chevron
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 6 6 6-6 6" />
  </Chevron>
);

/* ---------- Configuração dos itens de menu ---------- */

const menuItems = [
  {
    id: "intro",
    label: "Início",
    icon: (
      <HomeIcon
        width={18}
        height={18}
        viewBox="0 0 24 24"
        color="none"
        stroke="#E8003D"
      />
    ),
    bg: "#fdd9dd",
  },
  {
    id: "feature",
    label: "Funcionalidades",
    icon: (
      <StarIcon
        width={18}
        height={18}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
      />
    ),
    bg: "#e3e0fc",
  },
  {
    id: "service",
    label: "Serviços",
    icon: (
      <PurseIcon
        width={18}
        height={18}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
      />
    ),
    bg: "#d8f0e2",
  },
  {
    id: "price",
    label: "Preço",
    icon: (
      <CoinIcon
        width={18}
        height={18}
        viewBox="0 0 24 24"
        color="none"
        stroke="#D4A017"
      />
    ),
    bg: "#fbeacb",
  },
  {
    id: "contact",
    label: "Contato",
    icon: (
      <EmailIcon
        width={18}
        height={18}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
      />
    ),
    bg: "#e3e0fc",
  },
];

const NavbarMobile = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    setActiveId(targetId);
    setIsOpen(false);
    if (!target) return;
    const navbarHeight =
      document.querySelector("nav, [data-navbar]")?.offsetHeight || 60;
    const top =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <GlobalLockStyle $locked={isOpen} />
      <Container scrolled={scrolled} $scrolled={scrolled} data-navbar>
        <Wrapper>
          <WrapperLogo href="/">
            <Logo>FLAT DESIGN</Logo>
            <LogoDown>STYLED</LogoDown>
          </WrapperLogo>
          <BurgerButton aria-label="Abrir menu" onClick={() => setIsOpen(true)}>
            <span />
            <span />
            <span />
          </BurgerButton>
        </Wrapper>
      </Container>

      {isOpen && (
        <>
          <Overlay onClick={() => setIsOpen(false)} />
          <Panel>
            <CloseButton
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </CloseButton>
            <PanelHeader>
              <PanelLogoBlock>
                <PanelLogo>FLAT DESIGN</PanelLogo>
                <PanelLogoDown>STYLED</PanelLogoDown>
              </PanelLogoBlock>

              <Description>
                Design que gera <span>impacto</span>.
                <br />
                Soluções que transformam.
              </Description>
            </PanelHeader>

            <Divider />

            <MenuList>
              {menuItems.map(({ id, label, icon, bg }) => (
                <MenuItem
                  key={id}
                  href={`#${id}`}
                  $active={activeId === id}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  <IconWrapper $bg={bg}>{icon}</IconWrapper>
                  <MenuItemLabel $active={activeId === id}>
                    {label}
                  </MenuItemLabel>
                  <ChevronIcon />
                </MenuItem>
              ))}
            </MenuList>

            <Divider />

            <ContainerContact>
              <ContactCard>
                <ContactIconCircle>
                  <PhoneIcon
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    color="#f53b5a"
                    stroke="#f53b5a"
                  />
                </ContactIconCircle>
                <div>
                  <ContactTitle>Ligue para nós</ContactTitle>
                  <ContactPhone>(11) 91234 – 5678</ContactPhone>
                  <ContactNote>
                    Para qualquer dúvida
                    <br />
                    ou sugestão
                  </ContactNote>
                </div>
              </ContactCard>

              <SubscribeButton
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                <SubscribeIconCircle>
                  <SendIcon
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#FFF"
                    strokeWidthOutside="2.2"
                    strokeWidthInside="1.5"
                  />
                </SubscribeIconCircle>
                <SubscribeTextBlock>
                  <SubscribeTitle>INSCREVA-SE JÁ</SubscribeTitle>
                  <SubscribeSubtitle>
                    Vamos conversar sobre o seu projeto
                  </SubscribeSubtitle>
                </SubscribeTextBlock>
                <ChevronIcon />
              </SubscribeButton>
            </ContainerContact>
            <Divider />
            <Footer>
              © 2026 Brenda Moura TI. Todos os direitos reservados.
            </Footer>
          </Panel>
        </>
      )}
    </>
  );
};

export default NavbarMobile;
