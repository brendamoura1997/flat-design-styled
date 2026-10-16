import styled, { keyframes } from "styled-components";
import Maps from "../../assets/images/maps.png";
import ClockIcon from "../icons/ClockIcon";
import ChatIcon from "../icons/ChatIcon";
import UserIcon from "../icons/UserIcon";
import EmailFillIcon from "../icons/EmailFillIcon";
import EmailIcon from "../icons/EmailIcon";
import TagIcon from "../icons/TagIcon.jsx";
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
const ADDR_BLUE = "#336BFE";
const ADDR_GREEN = "#1FBE92";
const SOLID_BLUE = "#1F5BFF";
const SOLID_GREEN = "#1BB566";
const SOLID_ORANGE = "#FFB41F";
const BANNER_NAVY = "#02298F";
const BANNER_BLUE = "#1F4FE0";
const BANNER_CYAN = "#12B5F0";
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
  gap: 50px;
  // background: #f5f8fc;
  // background: #fff;
  // background: #fdfdfd;
  background: #fbfcfe;
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
  top: 0px;
  left: -82px;
  width: 58px;
  height: 58px;
  background: #8397ff;
  border-radius: 6px;
  z-index: 0;
`;
const DotsGrid = styled.div`
  position: absolute;
  top: 65px;
  left: -49px;
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

const MainGrid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
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
  // background: #fff;
  // border: 1px solid #dbe3ef;
  // border: 1px solid rgba(21, 0, 159, 0.18);
  border-radius: 20px;
  // padding: 24px;
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
  color: #1b2a78;
  // background: #fbfcfe;
  // background: #f8fbff;
  // background: #f6fbff;
  background: #fff;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  &::placeholder {
    color: #66748f;
    font-size: 13px;
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
  color: #1b2a78;
  // background: #fbfcfe;
  background: #fbfcfe;
  box-sizing: border-box;
  resize: vertical;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
  &::placeholder {
    color: #66748f;
    font-size: 13px;
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
  width: 43%;
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  margin-top: 36px;

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 0;
  }
`;
const InfoCard = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  // border: 1px solid red;
`;
const MapBox = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: 192px;
  // border: 1px solid black;
`;
const MapPlaceholder = styled.img`
  position: absolute;
  // inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 0 0 12px;
  // border: 1.5px solid #d3dcec;
`;
const AddressOverlay = styled.div`
  position: absolute;
  top: 20px;
  right: -44px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  border-radius: 12px;
  padding: 14px 22px 14px 14px;
  // box-shadow: 0 6px 20px rgba(20, 30, 60, 0.14);
  box-shadow: 0 2px 5px rgba(21, 0, 159, 0.12);
  border: 1px solid rgba(21, 0, 159, 0.2);
`;
const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  // border: 1.5px solid #e1e7f1;
  border: 1.5px solid #d3dcec;
  border-radius: 12px 0 0 12px;
  padding: 10px 0;
  // box-shadow: 0 6px 18px rgba(21, 0, 159, 0.06);
  hr {
    border: none;
    border-top: 1px solid #dbe4f5;
    width: calc(100% - 40px);
    margin: 0 auto;
  }
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 20px;
`;
const IconCircle = styled.div`
  width: 50px;
  height: 50px;
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
  font-size: 14px;
  font-weight: 700;
  color: #1b2a78;
  margin-bottom: 3px;
`;
const InfoText = styled.div`
  font-size: 13px;
  color: #697ca8;
  line-height: 1.5;
`;
const ListLabel = styled(InfoLabel)`
  font-size: 15px;
  font-weight: 700;
  color: #1b2a78;
`;
const ListText = styled(InfoText)`
  // font-size: 14.5px;
  font-size: 13px;
  // color: ${SLATE};
  color: #697ca8;
`;
const PromoBanner = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 28.5%;
  overflow: hidden;
  border-radius: 0px 12px 12px 0;
  background: ${BANNER_NAVY};
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 22%;
    background: ${BANNER_BLUE};
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
`;
const BannerPlane = styled.div`
  position: absolute;
  top: 21%;
  left: 52%;
  display: flex;
`;
const BannerPath = styled.svg`
  position: absolute;
  top: calc(17% + 6px);
  left: 4px;
`;
const BannerDot = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${ADDR_GREEN};
`;
const BannerTriangle = styled.div`
  position: absolute;
  top: 43.5%;
  left: 20px;
  width: 44px;
  height: 44px;
  background: ${PINK};
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
`;
const BannerText = styled.p`
  position: absolute;
  top: 55%;
  left: 20px;
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
  z-index: 1;

  strong {
    font-weight: 700;
  }

  &::after {
    content: "";
    display: block;
    width: 44px;
    height: 3px;
    margin-top: 12px;
    border-radius: 2px;
    background: ${BANNER_CYAN};
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
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
                  <EmailIcon
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    color={SLATE}
                    stroke={SLATE}
                  />
                </InputIcon>
              </InputWrapper>
              <InputWrapper>
                <Input placeholder="Assunto" />
                <InputIcon>
                  <TagIcon
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
          <DecorSquareBlue />
          <DotsGrid>
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i} />
            ))}
          </DotsGrid>

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
                <IconCircle bg={SOLID_BLUE}>
                  <PhoneIcon
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    color="#FFF"
                    stroke="#FFF"
                  />
                </IconCircle>
                <InfoContent>
                  <ListLabel color={NAVY}>Telefone</ListLabel>
                  <ListText>
                    +55 11 1234 5678
                    <br />
                    +55 11 95326 5678
                  </ListText>
                </InfoContent>
              </InfoItem>
              <hr />
              <InfoItem>
                <IconCircle bg={SOLID_GREEN}>
                  <EmailFillIcon
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    color="#FFF"
                    stroke={SOLID_GREEN}
                  />
                </IconCircle>
                <InfoContent>
                  <ListLabel color={NAVY}>Email</ListLabel>
                  <ListText>
                    faleconosco@example.com
                    <br />
                    example@example.com
                  </ListText>
                </InfoContent>
              </InfoItem>
              <hr />
              <InfoItem>
                <IconCircle bg={SOLID_ORANGE}>
                  <ClockIcon
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    color="#FFF"
                    stroke={SOLID_ORANGE}
                  />
                </IconCircle>
                <InfoContent>
                  <ListLabel color={NAVY}>Horário de atendimento</ListLabel>
                  <ListText>
                    Segunda a Sexta
                    <br />
                    9h às 18h
                  </ListText>
                </InfoContent>
              </InfoItem>
            </InfoList>
          </InfoCard>
          <PromoBanner>
            <BannerPath
              width="92"
              height="115"
              viewBox="0 0 92 115"
              fill="none"
            >
              <path
                d="M4 108 C 20 112, 36 108, 44 98 C 52 88, 60 70, 50 62 C 40 54, 32 66, 40 78 C 46 86, 60 84, 70 74 C 78 66, 84 58, 88 48"
                stroke="#1EA7FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 5"
              />
            </BannerPath>
            <BannerPlane>
              <SendIcon
                width={44}
                height={44}
                viewBox="0 0 24 24"
                color="none"
                stroke="#FFF"
                strokeWidthOutside="1.4"
                strokeWidthInside="0.9"
              />
            </BannerPlane>
            <BannerDot />
            <BannerTriangle />
            <BannerText>
              Será um
              <br />
              prazer
              <br />
              falar com
              <br />
              <strong>você!</strong>
            </BannerText>
          </PromoBanner>
        </RightCol>
      </MainGrid>
    </Section>
  );
};
export default Contact;
