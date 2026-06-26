import styled, { keyframes, createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import { theme } from "../../styles/theme";
import { useScreenSize } from "../../hooks/useDevice";
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

const GlobalLockStyle = createGlobalStyle`
  body {
    overflow: ${({ $locked }) => ($locked ? "hidden" : "auto")};
  }
`;

const Container = styled.div`
  height: 8%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 0% 3%;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? "rgba(255, 255, 255, 0.99)" : "none"};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 10px rgba(0,0,0,0.15)" : "none"};

  @media ${theme.mediaQueries.mobile} {
    height: 7%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    height: 9%;
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
  font-size: clamp(1.5625rem, 1.5rem + 0.9vw, 2.2rem);

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    font-size: 25px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 25px;
  }
`;

const LogoDown = styled.h1`
  font-weight: 900;
  font-size: clamp(0.5rem, 1.5rem + 0.9vw, 0.9rem);
  top: -7px;
  left: 3%;
  position: relative;
  letter-spacing: 14px;
  color: crimson;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    font-size: 10px;
    letter-spacing: 12px;
    top: -6px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 8px;
  }
`;

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

  @media ${theme.mediaQueries.mobile} {
    span {
      width: 24px;
      height: 2.5px;
    }
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

  @media ${theme.mediaQueries.mobile} {
    width: 80%;
  }
  @media ${theme.mediaQueries.mobileWide} {
    width: 75%;
  }
  @media ${theme.mediaQueries.smallMobile} {
    width: 85%;
  }
`;

const PanelInner = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4% 4% 3%;

  @media ${theme.mediaQueries.mobile} {
    padding: 6% 5% 3%;
  }
  @media ${theme.mediaQueries.mobileWide} {
    padding: 4% 5% 3%;
  }
  @media ${theme.mediaQueries.smallMobile} {
    padding: 5% 5% 3%;
  }
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: clamp(1.5rem, 1.3rem + 2.8vw, 3rem);
  line-height: 1.1;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
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
  font-size: clamp(0.625rem, 0.5rem + 1.3vw, 1.5rem);
  top: -3px;
  position: relative;
  letter-spacing: 21px;
  margin-left: 3%;
  color: crimson;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
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
  font-size: clamp(0.8125rem, 0.4rem + 1.8vw, 1.45rem);
  color: #333;
  line-height: 1.5;

  span {
    color: crimson;
    font-weight: 900;
  }

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
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
  gap: 1vh;
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

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobileWide} {
    padding: 3%;
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

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
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
  font-size: clamp(0.875rem, 0.6rem + 1.2vw, 1.375rem);
  color: ${({ $active }) => ($active ? "crimson" : "#1a1a1a")};

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 13.5px;
  }
`;

const Chevron = styled.svg`
  width: 18px;
  height: 18px;
  color: #b0b0b0;
`;

const ContainerContact = styled.div`
  width: 100%;
  bottom: 0;
`;

const ContactCard = styled.div`
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 4%;
  display: flex;
  align-items: flex-start;
  gap: 5%;

  @media ${theme.mediaQueries.mobile} {
    padding: 4%;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
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
  border: 1px solid #f5b4c0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
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
  font-size: clamp(0.875rem, 0.65rem + 1vw, 1.375rem);
  color: #1a1a1a;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    letter-spacing: 0.5px;
    font-size: 14px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    letter-spacing: 0px;
    font-size: 13px;
  }
`;

const ContactPhone = styled.p`
  font-weight: 900;
  letter-spacing: 1px;
  font-size: clamp(0.9375rem, 0.75rem + 1.2vw, 1.5375rem);
  color: crimson;
  margin-bottom: 2%;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    letter-spacing: 0.5px;
    font-size: 15px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    letter-spacing: 0px;
    font-size: 14px;
  }
`;

const ContactNote = styled.p`
  font-size: clamp(0.8125rem, 0.64rem + 1vw, 1.35rem);
  color: #555;
  line-height: 1.4;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    line-height: 1.2;
    font-size: 13px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    line-height: 1;
    font-size: 11.5px;
  }
`;

const SubscribeButton = styled.a`
  margin-bottom: 5%;
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

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
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
  font-size: clamp(0.875rem, 0.65rem + 1vw, 1.375rem);
  letter-spacing: 1px;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    letter-spacing: 0.5px;
    font-size: 14px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    letter-spacing: 0px;
    font-size: 14px;
  }
`;

const SubscribeSubtitle = styled.p`
  font-size: clamp(0.8125rem, 0.64rem + 1vw, 1.35rem);
  margin-top: 1%;
  opacity: 0.95;
  line-height: 1.35;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    line-height: 1.2;
    font-size: 13px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    line-height: 1.1;
    font-size: 11.5px;
  }
`;

const Footer = styled.p`
  text-align: center;
  font-size: clamp(0.75rem, 0.6rem + 1vw, 1.25rem);
  color: #999;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
    font-size: 12px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    font-size: 11px;
  }
`;

const MobileDotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 10%);
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
  @media ${theme.mediaQueries.tabletWide} {
    gap: 6px;
    grid-template-columns: repeat(4, 6px);
    ${({ $pos }) => $pos === "tr" && `top: 13%; right: 11%;`}
    span {
      width: 4px;
      height: 4px;
    }
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
`;

const Rect = styled.div`
  width: 8%;
  height: 7%;
  background-color: #669966;
  border-radius: 4px;
  opacity: 0.5;
  position: absolute;
  top: 7%;
  right: 8%;

  @media ${theme.mediaQueries.tabletWide}, ${theme.mediaQueries.mobile} {
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
  width: 11%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 5%;
  right: 24%;

  @media ${theme.mediaQueries.tabletWide} {
    width: 40px;
    height: 40px;
    top: 7%;
    right: 19%;
  }

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

const menuItems = [
  {
    id: "intro",
    label: "Início",
    icon: (size) => (
      <HomeIcon
        width={size}
        height={size}
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
    icon: (size) => (
      <StarIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#6955d8"
      />
    ),
    bg: "#e3e0fc",
  },
  {
    id: "service",
    label: "Serviços",
    icon: (size) => (
      <PurseIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
        strokeWidth="2"
      />
    ),
    bg: "#d8f0e2",
  },
  {
    id: "price",
    label: "Preço",
    icon: (size) => (
      <CoinIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#d19703"
      />
    ),
    bg: "#fbeacb",
  },
  {
    id: "contact",
    label: "Contato",
    icon: (size) => (
      <EmailIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#6955d8"
        strokeWidth="2"
      />
    ),
    bg: "#e3e0fc",
  },
];

const NavbarMobile = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("intro");
  const { isMobile, isTablet } = useScreenSize();

  const iconSize = isMobile ? 18 : 25;

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
            <PanelInner>
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
                    <IconWrapper $bg={bg}>{icon(iconSize)}</IconWrapper>
                    <MenuItemLabel $active={activeId === id}>
                      {label}
                    </MenuItemLabel>
                    <ChevronIcon />
                  </MenuItem>
                ))}
              </MenuList>

              <Divider />

              <ContainerContact>
                <SubscribeButton
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  <SubscribeIconCircle>
                    <SendIcon
                      width={iconSize}
                      height={iconSize}
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

                <ContactCard>
                  <ContactIconCircle>
                    <PhoneIcon
                      width={iconSize}
                      height={iconSize}
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
              </ContainerContact>
              <Divider />
              <Footer>
                © 2026 Brenda Moura TI. Todos os direitos reservados.
              </Footer>
            </PanelInner>
          </Panel>
        </>
      )}
    </>
  );
};

export default NavbarMobile;
