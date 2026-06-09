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
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px 20px 30px 60px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    flex-direction: column;
    height: auto;
    padding: 10% 0 0 0;
    overflow: visible;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 15% 0 0 0;
  }
`;

const Left = styled.div`
  margin-top: 7%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    width: 100%;
    height: auto;
    margin-top: 0;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    width: 100%;
  }
`;

const TopSection = styled.div`
  display: none;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: flex;
    flex-direction: column;
    padding: 0 6%;
    position: relative;
  }
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
  margin: 0;

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
  margin: 0 0 20px;

  span {
    color: #de113a;
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
  margin: 0 0 44px;

  @media only screen and (max-aspect-ratio: 5/4) {
    width: 72%;
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
  gap: 20px;
  padding: 0 6%;
  margin-top: 4%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
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

  @media ${theme.mediaQueries.tablet} {
    width: fit-content;
    justify-content: flex-start;
    padding: 2% 3%;
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
}
`;

const MobileContact = styled.div`
  display: none;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    margin-bottom: 1%;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const PhoneIconWrap = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #fde8ec;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition:
    background-color 0.18s ease,
    transform 0.12s ease;

  &:hover {
    background-color: #fbd0d8;
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.96);
    background-color: #f8bac5;
  }

  @media only screen and (max-aspect-ratio: 1000/1000) {
    background-color: #fff;
    border: 1px solid #fbd0d8;
    width: 40px;
    height: 40px;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 1% 3% 0% 0%;
`;

const Phone = styled.span`
  color: #de113a;
  font-weight: 700;
  font-size: 15.2px;

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
  margin-top: 3px;

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
  margin-bottom: 60px;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: none;
  }
`;

const MobileImageSection = styled.div`
  display: none;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

const WomanImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  @media ${theme.mediaQueries.tablet} {
    width: 45%;
    height: 55%;
    bottom: 0;
    object-fit: contain;
    object-position: center bottom;
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
`;

const MobileBottomCard = styled.div`
  display: none;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 14px;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 14px;
    padding: 3% 2%;
    position: absolute;
    bottom: 10%;
    left: 16px;
    width: calc(50% - 8px);
    z-index: 3;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
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
  }
`;

const Features = styled.div`
  display: flex;
  gap: 36px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 1% 3% 0% 0%;

  @media only screen and (max-aspect-ratio: 5/4) {
    gap: 16px;
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
}
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 7%;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media only screen and (max-aspect-ratio: 1000/1000) {
    display: none;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
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
`;

const MobileFeatureRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 3%;
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

const PhoneBlock = ({ mobile }) => (
  <Contact>
    <PhoneIconWrap>
      <PhoneIcon
        width={mobile ? 18 : 22}
        height={mobile ? 18 : 22}
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
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  const iconSize = isMobile ? 15 : 22;

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
                <PhoneBlock />
              </Info>
              <Features>
                {FEATURES.map(({ bg, icon, title, desc }) => (
                  <Feature key={title}>
                    <FeatureIcon $bg={bg}>{icon(22)}</FeatureIcon>
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
