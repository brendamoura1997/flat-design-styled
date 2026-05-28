import styled, { keyframes } from "styled-components";

const PINK = "#E8134A";
const DARK_BLUE = "#0D0F8A";
const PINK_BG = "#FFF0F4";
const ADDR_RED_BG = "#FFE4EC";
const ADDR_BLUE_BG = "#E8EEFF";
const ADDR_GREEN_BG = "#DFFAF0";
const ADDR_ORANGE_BG = "#FFF4DC";
const ADDR_RED = "#E8134A";
const ADDR_BLUE = "#4B6BF5";
const ADDR_GREEN = "#2BAF8E";
const ADDR_ORANGE = "#F5A623";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: white;
  // background: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png");
  padding: 72px 64px 64px;
  position: relative;
  overflow: hidden;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  animation: ${fadeIn} 0.6s ease both;

  @media (max-width: 1024px) {
    padding: 48px 32px;
  }
`;

const DecorSquareBlue = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-80px);
  width: 52px;
  height: 52px;
  background: #6b82f5;
  border-radius: 6px;
  z-index: 0;
`;

const DecorDotGrid = styled.div`
  position: absolute;
  top: 80px;
  left: calc(50% - 10px);
  width: 80px;
  height: 80px;
  background-image: radial-gradient(circle, #ccc 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  z-index: 0;
`;

const DecorSquareGreen = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 32px;
  height: 90px;
  background: #2baf8e;
  border-radius: 0 6px 6px 0;
  z-index: 0;
`;

const DecorCurveRed = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 80px;
  height: 140px;
  background: ${PINK};
  border-radius: 70px 0 0 70px;
  z-index: 0;
`;

const MainGrid = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  margin-bottom: 56px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${ADDR_RED_BG};
  color: ${PINK};
  font-weight: 700;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 20px;
`;

const Headline = styled.h2`
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 900;
  line-height: 1.1;
  color: #111;
  margin: 0 0 14px;

  span {
    color: ${PINK};
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14.5px;
  max-width: 400px;
  margin: 0 0 28px;
  line-height: 1.65;
`;

const FormLayout = styled.div`
  display: flex;
  gap: 14px;
  align-items: stretch;
`;

const FormInputsCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 42px 13px 16px;
  border: 1.5px solid #e4e4e4;
  border-radius: 10px;
  font-size: 13.5px;
  color: #333;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;

  &::placeholder {
    color: #bbb;
  }
  &:focus {
    border-color: ${PINK};
  }
`;

const InputIcon = styled.span`
  position: absolute;
  right: 14px;
  color: #bbb;
  font-size: 15px;
  pointer-events: none;
  line-height: 1;
`;

const FormTextareaCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TextareaWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 148px;
  padding: 13px 42px 13px 16px;
  border: 1.5px solid #e4e4e4;
  border-radius: 10px;
  font-size: 13.5px;
  color: #333;
  background: #fff;
  box-sizing: border-box;
  resize: none;
  outline: none;
  font-family: inherit;
  line-height: 1.5;

  &::placeholder {
    color: #bbb;
  }
  &:focus {
    border-color: ${PINK};
  }
`;

const TextareaIcon = styled.span`
  position: absolute;
  right: 14px;
  top: 14px;
  color: #bbb;
  font-size: 15px;
  pointer-events: none;
`;

const SubmitButton = styled.button`
  margin-top: 14px;
  width: 100%;
  padding: 15px 24px;
  background: ${DARK_BLUE};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  transition:
    background 0.2s,
    transform 0.1s;

  &:hover {
    background: #0a0c6e;
  }
  &:active {
    transform: scale(0.99);
  }
`;

const RightCol = styled.div`
  width: 46%;
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const InfoCard = styled.div`
  background: ${PINK_BG};
  border-radius: 18px;
  padding: 80px 24px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

const InfoList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

const IconCircle = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.div`
  font-weight: 700;
  font-size: 13.5px;
  color: ${({ color }) => color};
  margin-bottom: 3px;
`;

const InfoText = styled.div`
  font-size: 13px;
  color: #555;
  line-height: 1.55;
`;

const MapPlaceholder = styled.img`
  width: 220px;
  flex-shrink: 0;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  border-radius: 14px;

  @media (max-width: 1100px) {
    width: 160px;
    min-height: 180px;
  }
`;

const FeatureRow = styled.div`
  display: flex;
  gap: 0;
  padding-top: 40px;
  border-top: 1.5px solid #f0f0f0;
  position: relative;
  z-index: 1;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
  padding: 0 32px;

  &:first-child {
    padding-left: 40px;
  }
  &:last-child {
    padding-right: 40px;
  }

  @media (max-width: 700px) {
    padding: 0 16px;
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${({ color }) => color};
  margin-bottom: 5px;
`;

const FeatureDesc = styled.div`
  font-size: 13px;
  color: #666;
  line-height: 1.55;
`;

const Contact = () => {
  return (
    <Section>
      <DecorSquareBlue />
      <DecorDotGrid />
      <DecorSquareGreen />
      <DecorCurveRed />

      <MainGrid>
        <LeftCol>
          <Badge>
            <span>💬</span>
            Fale com a gente
          </Badge>

          <Headline>
            Perguntas? <br />
            Vamos nos <span>conectar!</span>
          </Headline>

          <Subtitle>
            Preencha o formulário ao lado ou utilize nossos canais de
            atendimento. Responderemos o mais rápido possível.
          </Subtitle>

          <FormLayout>
            <FormInputsCol>
              <InputWrapper>
                <Input placeholder="Seu nome" />
                <InputIcon>👤</InputIcon>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="Seu email" />
                <InputIcon>✉</InputIcon>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="Assunto" />
                <InputIcon>🏷</InputIcon>
              </InputWrapper>
            </FormInputsCol>

            <FormTextareaCol>
              <TextareaWrapper>
                <Textarea placeholder="Sua mensagem" />
                <TextareaIcon>✏️</TextareaIcon>
              </TextareaWrapper>
            </FormTextareaCol>
          </FormLayout>

          <SubmitButton>
            Enviar mensagem
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </SubmitButton>
        </LeftCol>

        <RightCol>
          <InfoCard>
            <InfoList>
              <InfoItem>
                <IconCircle bg={ADDR_RED_BG}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={ADDR_RED}
                    stroke="none"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </IconCircle>
                <InfoContent>
                  <InfoLabel color={ADDR_RED}>Endereço</InfoLabel>
                  <InfoText>
                    123 Avenida Florença,
                    <br />
                    São Paulo, BRA
                  </InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <IconCircle bg={ADDR_BLUE_BG}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={ADDR_BLUE}
                    stroke="none"
                  >
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                </IconCircle>
                <InfoContent>
                  <InfoLabel color={ADDR_BLUE}>Telefone</InfoLabel>
                  <InfoText>
                    +55 11 1234 5678
                    <br />
                    +55 11 95326 5678
                  </InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <IconCircle bg={ADDR_GREEN_BG}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={ADDR_GREEN}
                    stroke="none"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </IconCircle>
                <InfoContent>
                  <InfoLabel color={ADDR_GREEN}>Email</InfoLabel>
                  <InfoText>
                    ficafictional.dev
                    <br />
                    example@example.com
                  </InfoText>
                </InfoContent>
              </InfoItem>

              <InfoItem>
                <IconCircle bg={ADDR_ORANGE_BG}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={ADDR_ORANGE}
                    stroke="none"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
                  </svg>
                </IconCircle>
                <InfoContent>
                  <InfoLabel color={ADDR_ORANGE}>
                    Horário de atendimento
                  </InfoLabel>
                  <InfoText>
                    Segunda a Sexta
                    <br />
                    9h às 18h
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </InfoList>

            <MapPlaceholder
              src="https://picsum.photos/seed/city42/400/400"
              alt="Localização"
            />
          </InfoCard>
        </RightCol>
      </MainGrid>

      <FeatureRow>
        <FeatureItem>
          <FeatureIcon bg={ADDR_RED_BG}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill={ADDR_RED}
              stroke="none"
            >
              <path d="M7 2v11h3v9l7-12h-4l4-8z" />
            </svg>
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle color={ADDR_RED}>Resposta rápida</FeatureTitle>
            <FeatureDesc>
              Retornamos seu contato
              <br />
              em até 24 horas úteis.
            </FeatureDesc>
          </FeatureContent>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon bg={ADDR_GREEN_BG}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill={ADDR_GREEN}
              stroke="none"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle color={ADDR_GREEN}>
              Atendimento personalizado
            </FeatureTitle>
            <FeatureDesc>
              Soluções sob medida
              <br />
              para seu negócio.
            </FeatureDesc>
          </FeatureContent>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon bg={ADDR_BLUE_BG}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill={ADDR_BLUE}
              stroke="none"
            >
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle color={ADDR_BLUE}>Seus dados protegidos</FeatureTitle>
            <FeatureDesc>
              Utilizamos suas informações
              <br />
              apenas para contato.
            </FeatureDesc>
          </FeatureContent>
        </FeatureItem>
      </FeatureRow>
    </Section>
  );
};

export default Contact;
