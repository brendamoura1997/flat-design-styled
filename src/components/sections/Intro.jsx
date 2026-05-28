import styled from "styled-components";
import Woman from "../../assets/images/woman.png";
import AnimatedShapes from "../layout/AnimatedShapes";
import FixedShapes from "../layout/FixedShapes";
import { useScreenSize } from "../../hooks/useDevice";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px 20px 20px 60px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 25px;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 70%;
    border-radius: 10px;
    align-items: flex-start;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
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
  font-size: clamp(0.65rem, 0.9vw, 0.85rem);
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    z-index: 30;
  }
`;

const Desc = styled.p`
  width: 58%;
  font-size: clamp(0.9rem, 1.25vw, 1.1rem);
  line-height: 1.65;
  color: #444;
  margin: 0 0 44px;

  @media only screen and (max-width: 1200px) {
    width: 72%;
  }

  @media only screen and (max-width: 768px) {
    width: 75%;
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
  font-size: clamp(0.7rem, 1vw, 0.9rem);
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;

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

  svg {
    flex-shrink: 0;
    transition: transform 0.18s ease;
  }

  &:focus-visible {
    outline: 2px solid #5b5bd6;
    outline-offset: 3px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 8px;
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
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.span`
  font-weight: 700;
  font-size: clamp(0.8rem, 1.1vw, 0.95rem);
  color: #1a1a2e;
`;

const FeatureDesc = styled.span`
  font-size: clamp(0.65rem, 0.9vw, 0.82rem);
  color: #888;
  margin-top: 4px;
  max-width: 130px;
  line-height: 1.45;
`;

const Right = styled.div`
  width: 40%;
  position: relative;
  overflow: hidden;
  z-index: 1;
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

  ${({ pos }) => pos === "tl" && `top: 24px; left: 24px;`}
  ${({ pos }) => pos === "tr" && `top: 24px; right: 24px;`}

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
      <DotGrid pos="tl" cols={4} color="#f53b5a">
        {dots(16)}
      </DotGrid>

      <DotGrid pos="tr" cols={4} color="#c0052b">
        {dots(16)}
      </DotGrid>

      <Left>
        {isMobile && <FixedShapes />}

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
            Acreditamos que criar produtos e serviços em estreita parceria com
            nossos clientes é a única maneira de ter um impacto real em seus
            negócios.
          </Desc>

          <Info>
            <Button>
              COMECE UM PROJETO
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>

            <Contact>
              <PhoneIconWrap>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f53b5a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f53b5a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </FeatureIcon>

              <FeatureText>
                <FeatureTitle>Foco no cliente</FeatureTitle>
                <FeatureDesc>Soluções pensadas para o seu negócio</FeatureDesc>
              </FeatureText>
            </Feature>

            <Feature>
              <FeatureIcon bg="#edeeff">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b5bd6"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </FeatureIcon>

              <FeatureText>
                <FeatureTitle>Resultados reais</FeatureTitle>
                <FeatureDesc>
                  Estratégias que geram impacto de verdade
                </FeatureDesc>
              </FeatureText>
            </Feature>

            <Feature>
              <FeatureIcon bg="#e8f5ee">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2e9e60"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </FeatureIcon>

              <FeatureText>
                <FeatureTitle>Design criativo</FeatureTitle>
                <FeatureDesc>Ideias que conectam e transformam</FeatureDesc>
              </FeatureText>
            </Feature>
          </Features>
        </LeftContent>
      </Left>

      {!isMobile && (
        <Right>
          <Image src={Woman} alt="Mulher com smartphone" />
        </Right>
      )}

      {!isMobile && <AnimatedShapes />}
    </Container>
  );
};

export default Intro;
