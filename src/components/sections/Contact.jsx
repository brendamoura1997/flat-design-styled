import styled, { keyframes } from "styled-components";
import Maps from "../../assets/images/maps.png";
import LockIcon from "../icons/LockIcon";
import ShieldIcon from "../icons/ShieldIcon";
import ClockIcon from "../icons/ClockIcon";
import LightningIcon from "../icons/LightningIcon";
import ChatIcon from "../icons/ChatIcon";
import UserIcon from "../icons/UserIcon";
import EmailIcon from "../icons/EmailIcon";
import EmailFillIcon from "../icons/EmailFillIcon";
import PencilIcon from "../icons/PencilIcon.jsx";
import TagIcon from "../icons/TagIcon.jsx";
import PhoneIcon from "../icons/PhoneIcon.jsx";
import LocationIcon from "../icons/LocationIcon.jsx";
import SendIcon from "../icons/SendIcon";
const PINK = "#E8134A";
const PINK_BG = "#fdf3f6";
const ADDR_RED_BG = "#fadee6";
const ADDR_BLUE_BG = "#e7e3f8";
const ADDR_GREEN_BG = "#dfede4";
const ADDR_ORANGE_BG = "#feecd8";
const ADDR_RED = "#E8134A";
const ADDR_BLUE = "#4B6BF5";
const ADDR_GREEN = "#2BAF8E";
const ADDR_ORANGE = "#F5A623";
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%;  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
  background: white;
  padding: 32px 150px 72px 150px;
  position: relative;
  overflow: hidden;
  height: 100%;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  animation: ${fadeIn} 0.6s ease both;

  @media (max-width: 1024px) {
    padding: 48px 32px;
  }
`;
const DecorSquareBlue = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-80px);
  width: 52px;
  height: 52px;
  background: #6b82f5;
  border-radius: 6px;
  z-index: 0;
`;
const DotsGrid = styled.div`
  position: absolute;
  top: 19%;
  left: 46.5%;
  display: grid;
  grid-template-columns: repeat(5, 6px);
  gap: 9px;
  z-index: 0;
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #e8002d;
    opacity: 0.35;
    display: block;
  }
`;
const DecorSquareGreen = styled.div`
  position: absolute;
  top: 52%;
  left: 3%;
  transform: translateY(-50%);
  width: 3%;
  height: 11%;
  background-color: #669966;
  opacity: 0.5;
  border-radius: 6px;
  z-index: 0;
`;
const DecorCurveRed = styled.div`
  position: absolute;
  bottom: 0%;
  right: -9%;
  width: 20%;
  height: 25%;
  background: ${PINK};
  border-radius: 100% 100% 0px 0px;
  z-index: 0;
`;
const MainGrid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 60px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
`;
const Badge = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
  background: #def6ee;
  color: #3daa72;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 10px;
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
  background: #1a1aad;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  letter-spacing: 0.3px;
  transition:
    background 0.2s,
    transform 0.15s;
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
`;
const RightCol = styled.div`
  width: 50%;
  display: flex;
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
  padding: 0px 24px 0px 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InfoList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  hr {
    border: 1px solid #ececec;
    width: 80%;
  }
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
  font-size: 14px;
  color: ${({ color }) => color};
  margin-bottom: 3px;
`;
const InfoText = styled.div`
  font-size: 13px;
  color: #555;
  line-height: 1.55;
`;
const MapPlaceholder = styled.img`
  width: 50%;
  height: 70%;
  flex-shrink: 0;
  min-height: 220px;
  object-fit: cover;
  border: 5px solid #fff;
  border-radius: 14px;
  z-index: 1;
  @media (max-width: 1100px) {
    width: 160px;
    min-height: 180px;
  }
`;
const FeatureRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12%;
  gap: 0;
  padding: 40px 0;
  position: relative;
  border-top: 1px solid #eee;
  z-index: 1;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
const VerticalDivider = styled.div`
  width: 1px;
  height: 60px;
  background-color: #d9d9d9;
`;
const Contact = () => {
  return (
    <Section id="contact">
      <DecorSquareBlue />
      <DotsGrid>
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} />
        ))}
      </DotsGrid>
      <DecorSquareGreen />
      <MainGrid>
        <LeftCol>
          <Badge>
            <ChatIcon
              width={13}
              height={13}
              color="#def6ee"
              stroke="#3DAA72"
              viewBox="0 0 24 24"
            />
            Fale com a gente
          </Badge>
          <Headline>
            Perguntas? <br />
            Vamos nos <span>conectar!</span>
          </Headline>
          <Subtitle>
            Preencha o formulário abaixo ou utilize nossos canais de
            atendimento. Responderemos o mais rápido possível.
          </Subtitle>
          <FormLayout>
            <FormInputsCol>
              <InputWrapper>
                <Input placeholder="Seu nome" />
                <InputIcon>
                  <UserIcon
                    width={20}
                    height={20}
                    color="#9CA3AF"
                    stroke="#9CA3AF"
                    viewBox="0 0 24 24"
                  />
                </InputIcon>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="Seu email" />
                <InputIcon>
                  <EmailIcon
                    width={19}
                    height={19}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#9CA3AF"
                  />
                </InputIcon>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="Assunto" />
                <InputIcon>
                  <TagIcon
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#9CA3AF"
                  />
                </InputIcon>
              </InputWrapper>
            </FormInputsCol>
            <FormTextareaCol>
              <TextareaWrapper>
                <Textarea placeholder="Sua mensagem" />
                <TextareaIcon>
                  <PencilIcon
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#9CA3AF"
                  />
                </TextareaIcon>
              </TextareaWrapper>
            </FormTextareaCol>
          </FormLayout>
          <SubmitButton>
            Enviar mensagem
            <SendIcon
              width={18}
              height={18}
              viewBox="0 0 24 24"
              color="none"
              stroke="#FFF"
              strokeWidthOutside="2.2"
              strokeWidthInside="1.5"
            />
          </SubmitButton>
        </LeftCol>
        <RightCol>
          <InfoCard>
            <InfoList>
              <InfoItem>
                <IconCircle bg={ADDR_RED_BG}>
                  <LocationIcon
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    color="#E11D48"
                    stroke="#E11D48"
                  />
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
              <hr />
              <InfoItem>
                <IconCircle bg={ADDR_BLUE_BG}>
                  <PhoneIcon
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    color="#6366F1"
                    stroke="#6366F1"
                  />
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
              <hr />
              <InfoItem>
                <IconCircle bg={ADDR_GREEN_BG}>
                  <EmailFillIcon
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    color="#5BB580"
                    stroke="white"
                  />
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
              <hr />
              <InfoItem>
                <IconCircle bg={ADDR_ORANGE_BG}>
                  <ClockIcon
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#F59E0B"
                  />
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
            <MapPlaceholder src={Maps} alt="Localização" />
            <DecorCurveRed />
          </InfoCard>
        </RightCol>
      </MainGrid>

      <FeatureRow>
        <FeatureItem>
          <FeatureIcon bg={ADDR_RED_BG}>
            <LightningIcon
              width={24}
              height={24}
              viewBox="0 0 24 24"
              color="#E11D48"
              stroke="none"
            />
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
        <VerticalDivider />
        <FeatureItem>
          <FeatureIcon bg={ADDR_GREEN_BG}>
            <ShieldIcon
              width={22}
              height={22}
              color={ADDR_GREEN}
              viewBox="0 0 24 24"
              stroke="none"
            />
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
        <VerticalDivider />
        <FeatureItem>
          <FeatureIcon bg={ADDR_BLUE_BG}>
            <LockIcon
              width={22}
              height={22}
              color={ADDR_BLUE}
              viewBox="0 0 24 24"
              stroke="none"
            />
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
