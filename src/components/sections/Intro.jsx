import styled, { keyframes } from "styled-components";
import Woman from "../../assets/images/woman.png";
import AnimatedShapes from "../layout/AnimatedShapes";
import FixedShapes from "../layout/FixedShapes";
import { useScreenSize } from "../../hooks/useDevice";
import RocketIcon from "../icons/RocketIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ClientIcon from "../icons/ClientIcon";
import DesignIcon from "../icons/DesignIcon";
import ArrowIcon from "../icons/ArrowIcon";
import { theme } from "../../styles/theme";

const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%;  }
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px 20px 30px 60px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
    padding: 15% 0 0 0;
    overflow: visible;
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

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
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

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const TopSection = styled.div`
  display: none;
  border: 1px solid blue;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    padding: 0px 4%;
    position: relative;
  }
`;

const Tagline = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  // @media only screen and (max-width: ${theme.breakpoints.tablet}) {
  //   border-radius: 20px;
  //   padding: 6px 14px 6px 10px;
  //   align-self: flex-start;
  // }
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
  font-size: clamp(0.65rem, 0.9vw, 0.85rem);
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #f53b5a;
  margin: 0;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.65rem;
    letter-spacing: 2px;
    font-weight: 700;
  }
`;

const Title = styled.h1`
  width: 65%;
  font-size: clamp(2.7rem, 5.5vw, 4.5rem);
  line-height: clamp(2.7rem, 5.8vw, 4.7rem);
  font-weight: 900;
  color: #1a1a2e;
  margin: 0 0 20px;
  span {
    color: #de113a;
  }
  @media only screen and (max-width: 1200px) {
    width: 80%;
  }

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    font-size: 2.7rem;
    line-height: 2.7rem;
    margin-bottom: 4%;
  }
`;

const Desc = styled.p`
  width: 62%;
  font-size: clamp(0.9rem, 1.25vw, 1.1rem);
  line-height: 1.65;
  color: #444;
  margin: 0 0 44px;
  @media only screen and (max-width: 1200px) {
    width: 72%;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 80%;
    font-size: 0.9rem;
    line-height: 1.4rem;
    margin-bottom: 0;
  }
`;

const MobileDotGridTopRight = styled.div`
  display: none;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 6px);
    gap: 6px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    opacity: 0.55;
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #f53b5a;
      display: block;
    }
  }
`;

const ActionSection = styled.div`
  display: none;
  border: 1px solid green;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0px 4%;
  }
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
  font-size: clamp(0.68rem, 1vw, 0.9rem);
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  position: relative;
  overflow: hidden;
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
  transition:
    background-color 0.18s ease,
    transform 0.12s ease,
    box-shadow 0.18s ease;
  &:focus-visible {
    outline: 2px solid #5b5bd6;
    outline-offset: 3px;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    width: fit-content;
    justify-content: start;
    padding: 4% 5%;
  }
`;

const MobileContact = styled.div`
  display: none;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 14px;
    background-color: #fde8ec;
    border-radius: 8px;
    padding: 4% 5%;
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
  transition:
    background-color 0.18s ease,
    transform 0.12s ease;
  cursor: pointer;
  &:hover {
    background-color: #fbd0d8;
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.96);
    background-color: #f8bac5;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    background-color: #fff;
    width: 30px;
    height: 30px;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #de113a;
  font-weight: 700;
  font-size: clamp(0.8rem, 1.1vw, 0.95rem);
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.85rem;
  }
`;

const PhoneSub = styled.span`
  color: #888;
  font-size: clamp(0.65rem, 0.9vw, 0.82rem);
  margin-top: 3px;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 60px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileImageSection = styled.div`
  display: none;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: block;
    position: relative;
    width: 100%;
    height: 520px;
    margin-top: 32px;
    overflow: hidden;
  }
`;

const WomanImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 62%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;

  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    height: 50%;
    top: 0px;
  }
`;

const MobileFeaturesOverlay = styled.div`
  display: none;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    padding: 16px 0 0 20px;
    z-index: 2;
  }
`;

const MobileBottomCard = styled.div`
  display: none;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background-color: #ffffff;
    border-radius: 14px;
    padding: 16px 18px;
    position: absolute;
    bottom: 18px;
    left: 16px;
    width: calc(50% - 8px);
    z-index: 3;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`;

const MobileDotGridBottomLeft = styled.div`
  display: none;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 6px);
    gap: 6px;
    position: absolute;
    bottom: 130px;
    left: 16px;
    z-index: 2;
    opacity: 0.55;
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #f8b4c2;
      display: block;
    }
  }
`;

const Features = styled.div`
  display: flex;
  gap: 36px;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 24px;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
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
  background-color: ${({ bg }) => bg || "#fde8ec"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
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
  font-size: clamp(0.8rem, 1.1vw, 0.95rem);
  color: #1a1a2e;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.88rem;
  }
`;

const FeatureDesc = styled.span`
  font-size: clamp(0.65rem, 0.9vw, 0.82rem);
  color: #888;
  margin-top: 4px;
  max-width: 130px;
  line-height: 1.45;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    font-size: 0.75rem;
    max-width: 110px;
  }
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 7%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const DotGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols || 5}, 6px);
  gap: 6px;
  z-index: 3;
  opacity: 0.55;
  ${({ pos }) => pos === "tl" && `top: 11%; left: 2%;`}
  ${({ pos }) => pos === "tr" && `top: 11%; right: 2%;`}
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ color }) => color || "#f53b5a"};
    display: block;
  }
  @media only screen and (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileFeatureRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 28px;
`;

const Intro = () => {
  const { isMobile } = useScreenSize();
  const dots = (count) =>
    Array.from({ length: count }).map((_, i) => <span key={i} />);

  return (
    <Container>
      <DotGrid pos="tl" cols={4} color="#f53b5a">
        {dots(16)}
      </DotGrid>
      <DotGrid pos="tr" cols={4} color="#c0052b">
        {dots(16)}
      </DotGrid>

      {isMobile ? (
        <>
          <TopSection>
            <MobileDotGridTopRight>{dots(16)}</MobileDotGridTopRight>
            <Tagline>
              <TaglineDash />
              <Subtitle>Design que gera impacto</Subtitle>
            </Tagline>
            <Title>
              Aventuras na
              <br />
              era <span>criativa</span>
            </Title>
            <Desc>
              Este site tem como objetivo mostrar meus conhecimentos em UI/UX
              para construir um site cuja identidade visual seja baseada na
              estética flat-design.
            </Desc>
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
              <PhoneIconWrap>
                <PhoneIcon
                  width={isMobile ? 18 : 22}
                  height={isMobile ? 18 : 22}
                  viewBox="0 0 24 24"
                  color="#f53b5a"
                  stroke="#f53b5a"
                />
              </PhoneIconWrap>
              <ContactText>
                <Phone>
                  {isMobile
                    ? "Ligue: (11) 91234 - 5678"
                    : "Ligue para nós (11) 91234 - 5678"}
                </Phone>
                <PhoneSub>Para qualquer dúvida ou sugestão</PhoneSub>
              </ContactText>
            </MobileContact>
          </ActionSection>

          <MobileImageSection>
            <WomanImage src={Woman} alt="Mulher com smartphone" />

            <MobileFeaturesOverlay>
              <MobileFeatureRow>
                <FeatureIcon bg="#fde8ec">
                  <ClientIcon
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#f53b5a"
                  />
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>Foco no cliente</FeatureTitle>
                  <FeatureDesc>
                    Soluções pensadas para o seu negócio
                  </FeatureDesc>
                </FeatureText>
              </MobileFeatureRow>
              <MobileFeatureRow>
                <FeatureIcon bg="#edeeff">
                  <RocketIcon
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#5b5bd6"
                    strokeWidth="1.5"
                  />
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>Resultados reais</FeatureTitle>
                  <FeatureDesc>
                    Estratégias que geram impacto de verdade
                  </FeatureDesc>
                </FeatureText>
              </MobileFeatureRow>
            </MobileFeaturesOverlay>

            <MobileDotGridBottomLeft>{dots(16)}</MobileDotGridBottomLeft>

            <MobileBottomCard>
              <FeatureIcon bg="#def6ee">
                <DesignIcon
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  color="none"
                  stroke="#3DAA72"
                />
              </FeatureIcon>
              <FeatureText>
                <FeatureTitle>Design criativo</FeatureTitle>
                <FeatureDesc>Ideias que conectam e transformam</FeatureDesc>
              </FeatureText>
            </MobileBottomCard>
          </MobileImageSection>
        </>
      ) : (
        <>
          <Left>
            <LeftContent>
              <Tagline>
                <TaglineDash />
                <Subtitle>Design que gera impacto</Subtitle>
              </Tagline>
              <Title>
                Aventuras na
                <br />
                era <span>criativa</span>
              </Title>
              <Desc>
                Este site tem como objetivo mostrar meus conhecimentos em UI/UX
                para construir um site cuja identidade visual seja baseada na
                estética flat-design.
              </Desc>
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
                <Contact>
                  <PhoneIconWrap>
                    <PhoneIcon
                      width={22}
                      height={22}
                      viewBox="0 0 24 24"
                      color="#f53b5a"
                      stroke="#f53b5a"
                    />
                  </PhoneIconWrap>
                  <ContactText>
                    <Phone>Ligue para nós (11) 91234 - 5678</Phone>
                    <PhoneSub>Para qualquer dúvida ou sugestão</PhoneSub>
                  </ContactText>
                </Contact>
              </Info>
              <Features>
                <Feature>
                  <FeatureIcon bg="#fde8ec">
                    <ClientIcon
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      color="none"
                      stroke="#f53b5a"
                    />
                  </FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>Foco no cliente</FeatureTitle>
                    <FeatureDesc>
                      Soluções pensadas para o seu negócio
                    </FeatureDesc>
                  </FeatureText>
                </Feature>
                <Feature>
                  <FeatureIcon bg="#edeeff">
                    <RocketIcon
                      width={22}
                      height={22}
                      viewBox="0 0 24 24"
                      color="none"
                      stroke="#5b5bd6"
                      strokeWidth="1.5"
                    />
                  </FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>Resultados reais</FeatureTitle>
                    <FeatureDesc>
                      Estratégias que geram impacto de verdade
                    </FeatureDesc>
                  </FeatureText>
                </Feature>
                <Feature>
                  <FeatureIcon bg="#def6ee">
                    <DesignIcon
                      width={22}
                      height={22}
                      viewBox="0 0 24 24"
                      color="none"
                      stroke="#3DAA72"
                    />
                  </FeatureIcon>
                  <FeatureText>
                    <FeatureTitle>Design criativo</FeatureTitle>
                    <FeatureDesc>Ideias que conectam e transformam</FeatureDesc>
                  </FeatureText>
                </Feature>
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
