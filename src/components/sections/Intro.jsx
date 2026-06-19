// Intro.jsx
import styled, { keyframes } from "styled-components";
import Woman from "../../assets/images/woman.png";
import AnimatedShapes from "../layout/AnimatedShapes";
import AnimatedShapesMobile from "../layout/AnimatedShapesMobile";
import { useScreenSize } from "../../hooks/useDevice";
import RocketIcon from "../icons/RocketIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ClientIcon from "../icons/ClientIcon";
import DesignIcon from "../icons/DesignIcon";
import ArrowIcon from "../icons/ArrowIcon";
import { theme } from "../../styles/theme";

const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%; }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  // padding: 20px 20px 30px 60px;
  padding: 5% 1% 0% 3%;
  // border: 4px solid blue;

  position: relative;
  overflow: hidden;

  @media ${theme.mediaQueries.isDesktopWide} {
    padding: 0% 2% 0% 5%;
    height: 100%;
  }

  @media ${theme.mediaQueries.tablet} {
    padding: 10% 0 0 0;
    flex-direction: column;
  }

  @media ${theme.mediaQueries.tabletWide} {
    padding: 10% 0 0 0;
    flex-direction: column;
    height: 100%;
  }

  @media ${theme.mediaQueries.mobile} {
    flex-direction: column;
    padding: 15% 0 0 0;
  }

  @media ${theme.mediaQueries.isMobileWide} {
    height: fit-content;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  // border: 2px solid blue;

  @media ${theme.mediaQueries.isDesktopWide} {
    padding: 10% 0% 0% 0%;
  }

  @media only screen and (max-aspect-ratio: 1000/1000) {
    width: 100%;
    height: auto;
    // margin-top: 0;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  // border: 2px solid red;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    width: 100%;
  }
  @media ${theme.mediaQueries.isDesktopWide} {
    width: 100%;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6%;
  position: relative;
`;

const Tagline = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const TaglineDash = styled.span`
  display: inline-block;
  width: 22px;
  height: 3px;
  background-color: #de113a;
  border-radius: 2px;
  flex-shrink: 0;
`;

const Subtitle = styled.p`
  font-size: 13.6px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #f53b5a;

  @media ${theme.mediaQueries.isDesktopWide} {
    font-size: 9.6px;
  }

  @media ${theme.mediaQueries.tablet} {
    font-size: 13.6px;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 2px;
  }
`;

const Title = styled.h1`
  width: 80vw;
  font-size: 72px;
  line-height: 75.2px;
  font-weight: 900;
  color: #1a1a2e;
  // margin: 0 0 20px;
  margin: 0 0 2% 0;
  span {
    color: #de113a;
  }
  @media ${theme.mediaQueries.isDesktopWide} {
    font-size: 55.2px;
    line-height: 55.8px;
  }

  @media ${theme.mediaQueries.tablet} {
    width: 80%;
    font-size: 78.2px;
    line-height: 75.8px;
    margin-bottom: 3%;
  }
  @media ${theme.mediaQueries.mobile} {
    width: 100%;
    font-size: 48.2px;
    line-height: 50.2px;
    margin-bottom: 4%;
  }
  @media ${theme.mediaQueries.smallMobile} {
    width: 100%;
    font-size: 40.2px;
    line-height: 40.2px;
    margin-bottom: 4%;
  }
`;

const Desc = styled.p`
  width: 62%;
  font-size: 17.6px;
  line-height: 1.65;
  color: #444;
  // margin: 0 0 44px;
  margin: 0 0 4%;
  @media ${theme.mediaQueries.isDesktopWide} {
    width: 62%;
    font-size: 14.6px;
    line-height: 1.65;
    margin: 0 0 4%;
  }
  @media ${theme.mediaQueries.tablet} {
    width: 69%;
    font-size: 20.6px;
    line-height: 30.4px;
    margin-bottom: 0;
  }
  @media ${theme.mediaQueries.mobile} {
    width: 80%;
    font-size: 15px;
    line-height: 22.4px;
    margin-bottom: 0;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: 13px;
    line-height: 18px;
  }
`;

const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 0 6%;
  margin-top: 4%;
  @media ${theme.mediaQueries.tabletWide} {
    margin-top: 0%;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: fit-content;
  padding: 16px 28px;
  background-color: #1a1a6e;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14.4px;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  position: relative;
  overflow: hidden;
  transition:
    background-color 0.18s ease,
    transform 0.12s ease,
    box-shadow 0.18s ease;
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
    pointer-events: none;
  }
  &:hover::after {
    animation: ${shine} 1.2s ease forwards;
  }
  &:hover {
    background: #1212c2;
  }
  &:active {
    background: #3131de;
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid #5b5bd6;
    outline-offset: 3px;
  }
  @media ${theme.mediaQueries.isDesktopWide} {
    font-size: 12.4px;
    padding: 13px 18px;
  }
  @media ${theme.mediaQueries.tablet} {
    width: fit-content;
    justify-content: flex-start;
    padding: 2% 3%;
  }
  @media ${theme.mediaQueries.tabletWide} {
    width: fit-content;
    justify-content: flex-start;
    padding: 2% 3%;
    margin-bottom: 2%;
  }
  @media ${theme.mediaQueries.mobile} {
    width: fit-content;
    justify-content: flex-start;
    padding: 3% 4%;
    font-size: 12.4px;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: 10px;
    line-height: 16px;
  }
`;

const MobileContact = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  margin-bottom: 3%;
  @media ${theme.mediaQueries.tabletWide} {
    margin-bottom: 4%;
  }
  @media ${theme.mediaQueries.tablet} {
    margin-bottom: 3%;
  }
`;

const PhoneIconWrap = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #fbd0d8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background-color 0.18s ease,
    transform 0.12s ease;

  @media ${theme.mediaQueries.isDesktopWide} {
    width: 40px;
    height: 40px;
  }

  @media only screen and (max-aspect-ratio: 1) {
    width: 40px;
    height: 40px;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #de113a;
  font-weight: 700;
  font-size: 15.2px;
  transition: color 0.18s ease;
  @media ${theme.mediaQueries.tablet} {
    font-size: 20px;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: 16.4px;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: 14px;
  }
`;

const PhoneSub = styled.span`
  color: #888;
  font-size: 13.12px;
  margin-top: 2%;

  @media ${theme.mediaQueries.isDesktopWide} {
    margin-top: 0px;
  }

  @media ${theme.mediaQueries.tablet} {
    font-size: 19px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: 12px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 8%;
  @media ${theme.mediaQueries.isDesktopWide} {
    gap: 26px;
  }
`;

const MobileImageSection = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  right: 2%;
  @media ${theme.mediaQueries.tabletWide} {
    position: absolute;
    bottom: 0%;
    height: 50%;
  }
  @media ${theme.mediaQueries.isMobileWide} {
    position: relative;
    height: 28vh;
  }
`;

const WomanImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  height: 55%;
  object-fit: contain;
  object-position: center bottom;
  @media ${theme.mediaQueries.tablet} {
    width: 45%;
    height: 55%;
    bottom: 0;
    object-fit: contain;
    object-position: center bottom;
  }
  @media ${theme.mediaQueries.tabletWide} {
    bottom: 0%;
    height: 100%;
  }
  @media ${theme.mediaQueries.mobile} {
    width: 52%;
    height: 40%;
    bottom: 5%;
    object-fit: contain;
    object-position: center bottom;
  }
  @media ${theme.mediaQueries.smallMobile} {
    width: 40%;
    height: 40%;
  }
  @media ${theme.mediaQueries.isMobileWide} {
    bottom: 0%;
    height: 100%;
  }
`;

const PhantomDiv = styled.div`
  display: none;
  @media ${theme.mediaQueries.tabletWide} {
    display: block;
    width: 100%;
    height: 32vh;
  }
`;

const MobileBottomCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 14px;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 14px;
  padding: 3% 3%;
  position: absolute;
  bottom: 10%;
  left: 7%;
  width: calc(56% - 8px);
  z-index: 3;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  @media ${theme.mediaQueries.tabletWide} {
    width: 30%;
    left: 8%;
    bottom: 5%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    bottom: 30%;
    padding: 2% 2%;
  }
`;

const MobileDotGrid = styled.div`
  display: none;
  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: grid;
    grid-template-columns: repeat(4, 6px);
    gap: 6px;
    position: absolute;
    opacity: 0.55;
    ${({ $pos }) => $pos === "tr" && `bottom: 5%; right: 5%;`}
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${({ $color }) => $color || "#f53b5a"};
      display: block;
    }
    @media ${theme.mediaQueries.tablet} {
      gap: 15px;
      grid-template-columns: repeat(4, 9px);
      span {
        width: 6px;
        height: 6px;
      }
    }
    @media ${theme.mediaQueries.mobile} {
      gap: 6px;
      grid-template-columns: repeat(4, 6px);
      span {
        width: 4px;
        height: 4px;
      }
    }
  }
`;

const Features = styled.div`
  display: flex;
  // gap: 36px;
  gap: 5%;
  border-radius: 8px;
  // border: 1px solid red;
  width: 100%;

  @media ${theme.mediaQueries.isDesktopWide} {
    width: 93%;
    // padding: 3% 3% 3% 0%;
    // gap: 18px;
    gap: 4%;
    margin-bottom: 8%;
  }
  @media ${theme.mediaQueries.tablet} {
    display: none;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

const FeatureIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${({ $bg }) => $bg || "#fde8ec"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media only screen and (max-aspect-ratio: 1000/1000) {
    width: 40px;
    height: 40px;
  }
  @media ${theme.mediaQueries.isDesktopWide} {
    width: 35px;
    height: 35px;
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.span`
  font-weight: 700;
  font-size: 15.2px;
  color: #1a1a2e;
  @media ${theme.mediaQueries.tablet} {
    font-size: 20.4px;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: 15.4px;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: 14px;
  }
`;

const FeatureDesc = styled.span`
  font-size: 13.12px;
  color: #888;
  margin-top: 4px;
  max-width: 130px;
  line-height: 1.45;
  @media ${theme.mediaQueries.isDesktopWide} {
    line-height: 1.35;
  }
  @media ${theme.mediaQueries.tablet} {
    font-size: 19px;
    max-width: 100%;
  }
  @media ${theme.mediaQueries.mobile} {
    font-size: 15px;
    max-width: 100%;
  }
  @media ${theme.mediaQueries.smallMobile} {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Right = styled.div`
  width: 40%;
  height: 115%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: 4;
  top: 2%;
  // border: 1px solid green;

  @media ${theme.mediaQueries.isDesktopWide} {
    top: 3%;
    height: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  z-index: 5;
  width: fit-content;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom center;
  // border: 1px solid blue;
`;

const DotGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 5}, 6px);
  gap: 6px;
  z-index: 3;
  opacity: 0.55;
  ${({ $pos }) => $pos === "tl" && `top: 11%; left: 2%;`}
  ${({ $pos }) => $pos === "tr" && `top: 11%; right: 2%;`}
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color || "#f53b5a"};
    display: block;
  }
  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: none;
  }
  @media ${theme.mediaQueries.isDesktopWide} {
    gap: 3px;
    grid-template-columns: repeat(${({ $cols }) => $cols || 5}, 5px);

    span {
      width: 4px;
      height: 4px;
    }
  }
`;

const MobileFeatureRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 3%;
  padding: 0% 1% 1% 0%;
  z-index: 5;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  width: fit-content;
`;

const Contact = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition:
    background-color 0.18s ease,
    transform 0.12s ease;
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
      rgba(255, 255, 255, 0.6) 50%,
      transparent 80%
    );
    transform: skewX(-15deg);
    pointer-events: none;
  }
  &:hover::after {
    animation: ${shine} 1.2s ease forwards;
  }
  &:hover ${Phone} {
    filter: brightness(1.3);
  }
  &:active {
    transform: scale(0.98);
  }
  &:active ${Phone} {
    filter: brightness(1.3);
  }
  &:active ${PhoneIconWrap} {
    transform: scale(0.96);
  }
  &:focus-visible {
    outline: 2px solid #5b5bd6;
    outline-offset: 3px;
  }
`;

const FEATURES = [
  {
    bg: "#fde8ec",
    icon: (size) => (
      <ClientIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#f53b5a"
      />
    ),
    title: "Foco no cliente",
    desc: "Soluções pensadas para o seu negócio",
  },
  {
    bg: "#edeeff",
    icon: (size) => (
      <RocketIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#5b5bd6"
        strokeWidth="1.5"
      />
    ),
    title: "Resultados reais",
    desc: "Estratégias que geram impacto de verdade",
  },
  {
    bg: "#def6ee",
    icon: (size) => (
      <DesignIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        color="none"
        stroke="#3DAA72"
      />
    ),
    title: "Design criativo",
    desc: "Ideias que conectam e transformam",
  },
];

const TaglineBlock = () => (
  <Tagline>
    <TaglineDash />
    <Subtitle>Design que gera impacto</Subtitle>
  </Tagline>
);

const TitleBlock = () => (
  <Title>
    Aventuras na
    <br />
    era <span>criativa</span>
  </Title>
);

const DescBlock = () => (
  <Desc>
    Este site tem como objetivo mostrar meus conhecimentos em UI/UX para
    construir um site cuja identidade visual seja baseada na estética
    flat-design.
  </Desc>
);

const PhoneBlock = ({ mobile, isDesktopWide }) => (
  <Contact href="#">
    <PhoneIconWrap>
      <PhoneIcon
        width={mobile ? 18 : isDesktopWide ? 20 : 22}
        height={mobile ? 18 : isDesktopWide ? 20 : 22}
        viewBox="0 0 24 24"
        color="#f53b5a"
        stroke="#f53b5a"
      />
    </PhoneIconWrap>
    <ContactText>
      <Phone>
        {mobile
          ? "Ligue: (11) 91234 - 5678"
          : "Ligue para nós (11) 91234 - 5678"}
      </Phone>
      <PhoneSub>Para qualquer dúvida ou sugestão</PhoneSub>
    </ContactText>
  </Contact>
);

const dots = (count) =>
  Array.from({ length: count }).map((_, i) => <span key={i} />);

const Intro = () => {
  const { isMobile, isDesktop, isDesktopWide } = useScreenSize();
  const iconSize = isMobile ? 15 : 22;

  const desktopIconSize = isDesktopWide ? 18 : 22;

  return (
    <Container>
      <DotGrid $pos="tl" $cols={4} $color="#f53b5a">
        {dots(16)}
      </DotGrid>
      <DotGrid $pos="tr" $cols={4} $color="#c0052b">
        {dots(16)}
      </DotGrid>

      {!isDesktop ? (
        <>
          <TopSection>
            <MobileDotGrid $pos="tr">{dots(16)}</MobileDotGrid>
            <TaglineBlock />
            <TitleBlock />
            <DescBlock />
          </TopSection>

          <ActionSection>
            <Button>
              COMECE UM PROJETO
              <ArrowIcon
                width={20}
                height={20}
                viewBox="0 0 24 24"
                color="none"
                stroke="white"
              />
            </Button>

            <MobileContact>
              <PhoneBlock mobile />
            </MobileContact>

            {FEATURES.slice(0, 2).map(({ bg, icon, title, desc }) => (
              <MobileFeatureRow key={title}>
                <FeatureIcon $bg={bg}>{icon(iconSize)}</FeatureIcon>
                <FeatureText>
                  <FeatureTitle>{title}</FeatureTitle>
                  <FeatureDesc>{desc}</FeatureDesc>
                </FeatureText>
              </MobileFeatureRow>
            ))}
          </ActionSection>

          <PhantomDiv />

          <MobileImageSection>
            <WomanImage src={Woman} alt="Mulher com smartphone" />
            <MobileBottomCard>
              <FeatureIcon $bg={FEATURES[2].bg}>
                {FEATURES[2].icon(20)}
              </FeatureIcon>
              <FeatureText>
                <FeatureTitle>{FEATURES[2].title}</FeatureTitle>
                <FeatureDesc>{FEATURES[2].desc}</FeatureDesc>
              </FeatureText>
            </MobileBottomCard>
          </MobileImageSection>

          <AnimatedShapesMobile />
        </>
      ) : (
        <>
          <Left>
            <LeftContent>
              <TaglineBlock />
              <TitleBlock />
              <DescBlock />

              <Info>
                <Button>
                  COMECE UM PROJETO
                  <ArrowIcon
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="white"
                  />
                </Button>
                <PhoneBlock isDesktopWide={isDesktopWide} />
              </Info>

              <Features>
                {FEATURES.map(({ bg, icon, title, desc }) => (
                  <Feature key={title}>
                    <FeatureIcon $bg={bg}>{icon(desktopIconSize)}</FeatureIcon>
                    <FeatureText>
                      <FeatureTitle>{title}</FeatureTitle>
                      <FeatureDesc>{desc}</FeatureDesc>
                    </FeatureText>
                  </Feature>
                ))}
              </Features>
            </LeftContent>
          </Left>

          <Right>
            <Image src={Woman} alt="Mulher com smartphone" />
          </Right>

          <AnimatedShapes />
        </>
      )}
    </Container>
  );
};

export default Intro;
