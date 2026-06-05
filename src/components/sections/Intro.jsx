import styled, { keyframes } from "styled-components";
import Woman from "../../assets/images/woman.png";
import AnimatedShapes from "../layout/AnimatedShapes";
import { useScreenSize } from "../../hooks/useDevice";
import RocketIcon from "../icons/RocketIcon";
import PhoneIcon from "../icons/PhoneIcon";
import ClientIcon from "../icons/ClientIcon";
import DesignIcon from "../icons/DesignIcon";
import ArrowIcon from "../icons/ArrowIcon";

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

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
    padding: 0;
    overflow: visible;
    padding: 40px 0px 00px 0px;
    width: 100%;
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
  //  border: 5px solid green;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 100%;
    margin-top: 0;
    align-items: flex-start;
    padding: 0px 10px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  //  border: 5px solid red;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const Tagline = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const TaglineDash = styled.span`
  display: inline-block;
  width: 28px;
  height: 3px;
  background-color: #de113a;
  border-radius: 2px;
  flex-shrink: 0;
`;

const Subtitle = styled.p`
  font-size: clamp(0.6rem, 0.9vw, 0.85rem);
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #f53b5a;
  margin: 0;
`;

const Title = styled.h1`
  width: 65%;
  font-size: clamp(2.2rem, 5.5vw, 4.5rem);
  line-height: clamp(2.4rem, 5.8vw, 4.7rem);
  font-weight: 900;
  color: #1a1a2e;
  margin: 0 0 20px;
  span {
    color: #de113a;
  }
  @media only screen and (max-width: 1200px) {
    width: 80%;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 100%;
    font-size: 2.3rem;
    line-height: 2.1rem;
  }
`;

const Desc = styled.p`
  width: 62%;
  font-size: clamp(0.8rem, 1.25vw, 1.1rem);
  line-height: 1.65;
  color: #444;
  margin: 0 0 44px;
  @media only screen and (max-width: 1200px) {
    width: 72%;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 85%;
    margin-bottom: 22px;
    line-height: 1.55;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 60px;
  border: 1px solid red;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
    border: 3px solid green;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 0px;
    margin-bottom: 0px;
    flex-wrap: wrap;
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
  font-size: clamp(0.6rem, 1vw, 0.9rem);
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

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    padding: 8px 7px;
    letter-spacing: 2px;
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

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 36px;
    height: 36px;
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
`;

const PhoneSub = styled.span`
  color: #888;
  font-size: clamp(0.65rem, 0.9vw, 0.82rem);
  margin-top: 3px;
`;

const Features = styled.div`
  display: flex;
  gap: 36px;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 24px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    width: 100%;
    margin-bottom: 0;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 16px;
    padding: 20px 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
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
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 58px;
    height: 58px;
  }
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }
`;

const FeatureTitle = styled.span`
  font-weight: 700;
  font-size: clamp(0.8rem, 1.1vw, 0.95rem);
  color: #1a1a2e;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    font-size: 0.78rem;
    color: #1a1a6e;
  }
`;

const FeatureDesc = styled.span`
  font-size: clamp(0.65rem, 0.9vw, 0.82rem);
  color: #888;
  margin-top: 4px;
  max-width: 130px;
  line-height: 1.45;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    font-size: 0.7rem;
    max-width: 90px;
  }
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 7%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: 100%;
    height: 320px;
    margin-top: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    width: auto;
    height: 100%;
    object-fit: contain;
    object-position: bottom center;
  }
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
  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.tablet}) {
    ${({ pos }) => pos === "tl" && `top: 28px; left: 20px;`}
    ${({ pos }) => pos === "tr" && `display: none;`}
  }
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ color }) => color || "#f53b5a"};
    display: block;
  }
`;

const Intro = () => {
  const { isMobile } = useScreenSize();
  const dots = (count) =>
    Array.from({ length: count }).map((_, i) => <span key={i} />);

  return (
    <Container>
      {/* <DotGrid pos="tl" cols={4} color="#f53b5a">
        {dots(16)}
      </DotGrid>
      <DotGrid pos="tr" cols={4} color="#c0052b">
        {dots(16)}
      </DotGrid> */}
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
            Este site tem como objetivo mostrar meus conhecimentos em UI/UX para
            construir um site cuja identidade visual seja baseeda na estética
            flat-design.
          </Desc>
          <Info>
            <Button>
              {isMobile ? (
                <>
                  COMECE UM <br />
                  PROJETO
                </>
              ) : (
                "COMECE UM PROJETO"
              )}
              <ArrowIcon
                width={isMobile ? 18 : 20}
                height={isMobile ? 18 : 20}
                viewBox="0 0 24 24"
                color="none"
                stroke="white"
              />
            </Button>
            <Contact>
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
                    ? "Ligue (11) 91234 - 5678"
                    : "Ligue para nós (11) 91234 - 5678"}
                </Phone>
                <PhoneSub>Para qualquer dúvida ou sugestão</PhoneSub>
              </ContactText>
            </Contact>
          </Info>
          {/* <Features>
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
                <FeatureDesc>Soluções pensadas para o seu negócio</FeatureDesc>
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
          </Features> */}
        </LeftContent>
      </Left>

      <Right>
        <Image src={Woman} alt="Mulher com smartphone" />
      </Right>

      {!isMobile && <AnimatedShapes />}
    </Container>
  );
};

export default Intro;
