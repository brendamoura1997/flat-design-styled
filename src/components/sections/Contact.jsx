import styled, { keyframes } from "styled-components";
import Maps from "../../assets/images/maps.png";
import LockIcon from "../icons/LockIcon";
import ShieldIcon from "../icons/ShieldIcon";
import ClockIcon from "../icons/ClockIcon";
import LightningIcon from "../icons/LightningIcon";
import ChatIcon from "../icons/ChatIcon";
import UserIcon from "../icons/UserIcon";
import EmailFillIcon from "../icons/EmailFillIcon";
import PencilIcon from "../icons/PencilIcon.jsx";
import PhoneIcon from "../icons/PhoneIcon.jsx";
import LocationIcon from "../icons/LocationIcon.jsx";
import SendIcon from "../icons/SendIcon";
const PINK = "#E8134A";
// const NAVY = "#0F1B3D";
const NAVY = "#2C45AD";
// const SLATE = "#5A6785";
// const SLATE = "#7f8fb5";
const SLATE = "#566DA8";
const ADDR_RED_BG = "#ffe3ed";
const ADDR_BLUE_BG = "#E1E7FD";
const ADDR_GREEN_BG = "#D1F3E5";
const ADDR_ORANGE_BG = "#FDE9CD";
const ADDR_BLUE = "#336BFE";
const ADDR_GREEN = "#1FBE92";
const ADDR_RED = "#F9266A";
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
  // background: #f5f8fc;
  // background: #fff;
  background: #fdfdfd;
  padding: 56px 150px 56px 150px;
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
  top: 8%;
  left: 50%;
  transform: translateX(35px);
  width: 58px;
  height: 58px;
  background: #8397ff;
  border-radius: 6px;
  z-index: 0;
`;
const DotsGrid = styled.div`
  position: absolute;
  top: 15%;
  left: 54.5%;
  // transform: translateX(90%);
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
  top: 55%;
  left: 4%;
  transform: translateY(-50%);
  width: 3.5%;
  height: 12%;
  background-color: #669966;
  opacity: 0.5;
  border-radius: 6px;
  z-index: 0;
`;
const DecorCurveRed = styled.div`
  position: absolute;
  bottom: -3%;
  right: -12%;
  width: 25%;
  height: 21%;
  background: ${PINK};
  border-radius: 100% 100% 0px 0px;
  z-index: 0;
`;
const MainGrid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 56px;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
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
  // font-size: clamp(32px, 3.8vw, 54px);
  font-size: clamp(32px, 4vw, 48px);
  // font-weight: 800;
  line-height: 1.12;
  color: #000;
  margin: 0 0 16px;
  span {
    color: ${PINK};
  }
`;
const Subtitle = styled.p`
  color: #4b5675;
  font-size: 14.5px;
  max-width: 470px;
  margin: 0 0 22px 5px;
  line-height: 1.55;
`;
const FormLayout = styled.div`
  // flex: 1;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  // border: 1px solid #dbe3ef;
  border: 1px solid rgba(21, 0, 159, 0.18);
  border-radius: 20px;
  padding: 24px;
  box-sizing: border-box;
`;
const FormInputsCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 18px;

  & > :last-child {
    grid-column: 1 / -1;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  padding: 15px 16px 15px 58px;
  border: 1.5px solid #d3dcec;
  border-radius: 14px;
  font-size: 15px;
  color: ${NAVY};
  // background: #fbfcfe;
  // background: #f8fbff;
  background: #f6fbff;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  &::placeholder {
    color: #66748f;
  }
  &:focus {
    // border-color: ${ADDR_BLUE};
    border-color: #66748f;
  }
`;
const InputIcon = styled.span`
  position: absolute;
  left: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  // background: #e8edf5;
  background: #e5ecfb;
  // background: #e8f1ff;
  display: flex;
  align-items: center;
  justify-content: center;
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
  // height: 80%;
  min-height: 100px;
  padding: 16px 16px 16px 58px;
  border: 1.5px solid #d3dcec;
  border-radius: 14px;
  font-size: 15px;
  color: ${NAVY};
  background: #fbfcfe;
  box-sizing: border-box;
  resize: vertical;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
  &::placeholder {
    color: #66748f;
  }
  &:focus {
    border-color: #66748f;
  }
`;
const TextareaIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e8edf5;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 18px 24px;
  background: #1a1aad;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
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
  width: 40%;
  display: flex;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  margin-top: 18px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 0;
  }
`;
const InfoCard = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  // border: 1px solid #dfe6f1;
  border: 1px solid rgba(21, 0, 159, 0.18);
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  // box-shadow: 0 10px 15px rgba(21, 0, 159, 0.05);
`;
const MapBox = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: 240px;
  // border: 1px solid black;
`;
const MapPlaceholder = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;
const AddressOverlay = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  border-radius: 14px;
  padding: 14px 22px 14px 14px;
  // box-shadow: 0 6px 20px rgba(20, 30, 60, 0.14);
  box-shadow: 0 6px 10px rgba(21, 0, 159, 0.12);
  border: 1px solid rgba(21, 0, 159, 0.2);
`;
const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  // background: #f8f9fc;
  // background: #f8fbff;
  background: #f7fafd;
  border: 1.5px solid #e1e7f1;
  border-radius: 14px;
  padding: 10px 0;
  hr {
    border: none;
    border-top: 1px solid #e1e7f1;
    width: calc(100% - 40px);
    margin: 0 auto;
  }
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 14px 20px;
`;
const IconCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;
const AddressCircle = styled(IconCircle)`
  width: 50px;
  height: 50px;
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
  color: ${SLATE};
  line-height: 1.5;
`;
const FeatureRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12%;
  gap: 0;
  padding: 32px 0;
  position: relative;
  border-top: 1px solid #dde3ec;
  z-index: 1;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
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
  width: 64px;
  height: 64px;
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
  font-size: 16px;
  color: ${({ color }) => color};
  margin-bottom: 5px;
`;
const FeatureDesc = styled.div`
  font-size: 14px;
  color: #4b5675;
  line-height: 1.55;
`;
const VerticalDivider = styled.div`
  width: 1px;
  height: 70px;
  background-color: #d5dce8;
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
              color="#dff5ec"
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
                    width={18}
                    height={18}
                    color={SLATE}
                    stroke={SLATE}
                    viewBox="0 0 24 24"
                  />
                </InputIcon>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="Seu email" />
                <InputIcon>
                  <EmailFillIcon
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    color={SLATE}
                    stroke="white"
                  />
                </InputIcon>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="Assunto" />
                <InputIcon>
                  <PhoneIcon
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                    color={SLATE}
                    stroke={SLATE}
                  />
                </InputIcon>
              </InputWrapper>
            </FormInputsCol>
            <FormTextareaCol>
              <TextareaWrapper>
                <Textarea placeholder="Sua mensagem" />
                <TextareaIcon>
                  <PencilIcon
                    width={17}
                    height={17}
                    viewBox="0 0 24 24"
                    color={SLATE}
                    stroke={SLATE}
                  />
                </TextareaIcon>
              </TextareaWrapper>
            </FormTextareaCol>
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
          </FormLayout>
        </LeftCol>
        <RightCol>
          <DecorCurveRed />
          <InfoCard>
            <MapBox>
              <MapPlaceholder src={Maps} alt="Localização" />
              <AddressOverlay>
                <AddressCircle bg={ADDR_RED_BG}>
                  <LocationIcon
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    color="#E11D48"
                    stroke="#E11D48"
                  />
                </AddressCircle>
                <InfoContent>
                  <InfoLabel color={NAVY}>Endereço</InfoLabel>
                  <InfoText>
                    123 Avenida Florença,
                    <br />
                    São Paulo, BRA
                  </InfoText>
                </InfoContent>
              </AddressOverlay>
            </MapBox>
            <InfoList>
              <InfoItem>
                <IconCircle bg={ADDR_BLUE_BG}>
                  <PhoneIcon
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    color={ADDR_BLUE}
                    stroke={ADDR_BLUE}
                  />
                </IconCircle>
                <InfoContent>
                  <InfoLabel color={NAVY}>Telefone</InfoLabel>
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
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    color="#5BB580"
                    stroke="white"
                  />
                </IconCircle>
                <InfoContent>
                  <InfoLabel color={NAVY}>Email</InfoLabel>
                  <InfoText>
                    faleconosco@example.com
                    <br />
                    example@example.com
                  </InfoText>
                </InfoContent>
              </InfoItem>
              <hr />
              <InfoItem>
                <IconCircle bg={ADDR_ORANGE_BG}>
                  <ClockIcon
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    color="none"
                    stroke="#F59E0B"
                  />
                </IconCircle>
                <InfoContent>
                  <InfoLabel color={NAVY}>Horário de atendimento</InfoLabel>
                  <InfoText>
                    Segunda a Sexta
                    <br />
                    9h às 18h
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </InfoList>
          </InfoCard>
        </RightCol>
      </MainGrid>

      <FeatureRow>
        <FeatureItem>
          <FeatureIcon bg={ADDR_RED_BG}>
            <LightningIcon
              width={32}
              height={32}
              viewBox="0 0 24 24"
              color={ADDR_RED}
              stroke="none"
            />
          </FeatureIcon>
          <FeatureContent>
            <FeatureTitle color={ADDR_RED}>Resposta rápida</FeatureTitle>
            <FeatureDesc>
              Retornamos seu contato
              <br />
              em até 1 dia útil.
            </FeatureDesc>
          </FeatureContent>
        </FeatureItem>
        <VerticalDivider />
        <FeatureItem>
          <FeatureIcon bg={ADDR_GREEN_BG}>
            <ShieldIcon
              width={26}
              height={26}
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
              width={26}
              height={26}
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
