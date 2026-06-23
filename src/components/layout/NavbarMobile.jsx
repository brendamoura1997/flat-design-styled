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
  padding: 4% 4% 3%;

  @media ${theme.mediaQueries.mobile} {
    width: 80%;
    padding: 6% 5% 3%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    width: 85%;
    padding: 5% 5% 3%;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  // border: 1px solid red;
`;
const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;

  // border: 1px solid blue;
`;
const RightHeader = styled.div``;

const PanelLogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  // border: 1px solid red;

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

  &:hover::after {
    animation: ${shine} 1.2s ease forwards;
  }
`;

const PanelLogo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
  text-decoration-thickness: 4px;
  white-space: nowrap;
  color: black;
  transition: color 0.3s ease;
  // font-size: 46px;
  font-size: clamp(1.5rem, 1.5rem + 2.7vw, 3rem);
  line-height: 1.1;

  @media ${theme.mediaQueries.mobile} {
    font-size: 30px;
    text-decoration-thickness: 3px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 24px;
    text-decoration-thickness: 2px;
  }
`;

const PanelLogoDown = styled.h1`
  font-weight: 900;
  // font-size: 20px;
  font-size: clamp(0.625rem, 0.6rem + 1.2vw, 1.5rem);
  top: -3px;
  position: relative;
  letter-spacing: 22px;
  margin-left: 3%;
  color: crimson;

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
    letter-spacing: 14px;
    top: -2px;
    font-weight: 700;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 10px;
    letter-spacing: 12px;
    top: -1px;
  }
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
  margin-top: 4%;
  // font-size: 22px;
  font-size: clamp(0.8125rem, 0.7rem + 1.3vw, 1.45rem);
  color: #333;
  line-height: 1.5;

  span {
    color: crimson;
    font-weight: 900;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    margin-top: 3%;
    font-size: 13px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #dadada;
  margin: 6% 0%;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  //   gap: 4%;
  gap: 1vh;
  // border: 1px solid green;
  height: max-content;
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 5%;
  text-decoration: none;
  cursor: pointer;
  padding: 4%;
  border-radius: 8px;
  background-color: ${({ $active }) => ($active ? "#fdecee" : "#fafafa")};
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;

  &:active {
    transform: scale(0.98);
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 4%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    padding: 3%;
  }
`;

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bg }) => $bg};

  @media ${theme.mediaQueries.mobile} {
    width: 42px;
    height: 42px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    width: 32px;
    height: 32px;
  }
`;

const MenuItemLabel = styled.span`
  flex: 1;
  font-weight: bold;
  font-size: 22px;
  color: ${({ $active }) => ($active ? "crimson" : "#1a1a1a")};

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 14px;
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
  // border: 1px solid purple;
  bottom: 0;
`;

const ContactCard = styled.div`
  //   margin-top: 8%;
  background-color: #fdecee;
  border-radius: 8px;
  padding: 4%;
  display: flex;
  align-items: flex-start;
  gap: 5%;

  @media ${theme.mediaQueries.mobile} {
    padding: 4%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    padding: 4% 3%;
  }
`;

const ContactIconCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;

  @media ${theme.mediaQueries.mobile} {
    width: 42px;
    height: 42px;
  }
  @media ${theme.mediaQueries.smallMobile} {
    width: 32px;
    height: 32px;
  }
`;

const ContactTitle = styled.p`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 22px;
  color: #1a1a1a;
  // margin-bottom: 1%;

  @media ${theme.mediaQueries.mobile} {
    letter-spacing: 0.5px;
    font-size: 15px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    letter-spacing: 0px;
    font-size: 14px;
  }
`;

const ContactPhone = styled.p`
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 23px;
  color: crimson;
  margin-bottom: 2%;

  @media ${theme.mediaQueries.mobile} {
    letter-spacing: 0.5px;
    font-size: 16px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    letter-spacing: 0px;
    font-size: 15px;
  }
`;

const ContactNote = styled.p`
  font-size: 20px;
  color: #555;
  line-height: 1.4;

  @media ${theme.mediaQueries.mobile} {
    line-height: 1.2;
    font-size: 15px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    line-height: 1;
    font-size: 12px;
  }
`;

const SubscribeButton = styled.a`
  margin-top: 5%;
  background-color: crimson;
  color: white;
  border-radius: 8px;
  padding: 4%;
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

  @media ${theme.mediaQueries.mobile} {
    padding: 4%;
  }
  @media ${theme.mediaQueries.smallMobile} {
    padding: 4% 3%;
  }
`;

const SubscribeIconCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${theme.mediaQueries.mobile} {
    width: 42px;
    height: 42px;
  }
  @media ${theme.mediaQueries.smallMobile} {
    width: 32px;
    height: 32px;
  }
`;

const SubscribeTextBlock = styled.div`
  flex: 1;
`;

const SubscribeTitle = styled.p`
  font-weight: 900;
  font-size: 22px;
  letter-spacing: 1px;

  @media ${theme.mediaQueries.mobile} {
    letter-spacing: 0.5px;
    font-size: 16px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    letter-spacing: 0px;
    font-size: 14px;
  }
`;

const SubscribeSubtitle = styled.p`
  font-size: 20px;
  margin-top: 1%;
  opacity: 0.95;
  line-height: 1.35;

  @media ${theme.mediaQueries.mobile} {
    line-height: 1.2;
    font-size: 15px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    line-height: 1.1;
    font-size: 13px;
  }
`;

const Footer = styled.p`
  //   margin-top: 8%;
  text-align: center;
  font-size: 20px;
  color: #999;

  @media ${theme.mediaQueries.mobile} {
    font-size: 14px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 12px;
  }
`;

const MobileDotGrid = styled.div`
  display: none;
  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: grid;
    grid-template-columns: repeat(4, 6px);
    // gap: 10px;
    gap: clamp(6px, 8px + 0.5vw, 15px);
    position: absolute;
    opacity: 0.55;
    ${({ $pos }) => $pos === "tr" && `top: 12%; right: 13%;`}
    span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${({ $color }) => $color || "#f53b5a"};
      display: block;
    }

    @media ${theme.mediaQueries.mobile} {
      gap: 6px;
      grid-template-columns: repeat(4, 5px);
      ${({ $pos }) => $pos === "tr" && `top: 10%; right: 11%;`}
      span {
        width: 4px;
        height: 4px;
      }
    }
    @media ${theme.mediaQueries.smallMobile} {
      gap: 5px;
      grid-template-columns: repeat(4, 4px);
      ${({ $pos }) => $pos === "tr" && `top: 11.5%; right: 11%;`}
    }
  }
`;

const Rect = styled.div`
  width: 50px;
  height: 90px;
  background-color: #669966;
  border-radius: 4px;
  opacity: 0.5;
  position: absolute;
  top: 6%;
  right: 6%;

  @media ${theme.mediaQueries.mobile} {
    width: 28px;
    height: 45px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    width: 23px;
    height: 40px;
    top: 6.5%;
  }
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 5%;
  right: 24%;

  @media ${theme.mediaQueries.mobile} {
    width: 35px;
    height: 35px;
    right: 21%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    width: 30px;
    height: 30px;
    top: 5.5%;
    right: 20%;
  }
`;

const dots = (count) =>
  Array.from({ length: count }).map((_, i) => <span key={i} />);

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
              <LeftHeader>
                <PanelLogoBlock>
                  <PanelLogo>FLAT DESIGN</PanelLogo>
                  <PanelLogoDown>STYLED</PanelLogoDown>
                </PanelLogoBlock>

                <Description>
                  Design que gera <span>impacto</span>.
                  <br />
                  Soluções que transformam.
                </Description>
              </LeftHeader>
              <RightHeader>
                <Circle />
                <Rect />
                <MobileDotGrid $pos="tr">{dots(16)}</MobileDotGrid>
              </RightHeader>
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
                  <ContactNote>Para qualquer dúvida ou sugestão</ContactNote>
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
