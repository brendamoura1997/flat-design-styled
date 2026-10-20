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
import { theme } from "../../styles/theme";
import { useScreenSize } from "../../hooks/useDevice";

const PINK = "#E8134A";
const NAVY = "#2C45AD";
const SLATE = "#566DA8";
const ADDR_RED_BG = "#ffe3ed";
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
const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;
const mobileLargeQueries = `only screen and (aspect-ratio < 9/16) and (width > 550px), only screen and (width > 400px) and (width < 700px)`;

const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%;  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background: #fbfcfe;
  padding: 56px 150px 86px 150px;
  position: relative;
  overflow: hidden;
  height: 100%;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  animation: ${fadeIn} 0.6s ease both;

  @media (max-width: 1200px) {
    padding: 48px 32px;
  }

  @media ${tabletQueries} {
    padding: 56px 48px 72px;
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 36px 16px 34px;
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
  z-index: 1;

  @media ${theme.mediaQueries.desktopWide} {
    width: 50px;
    height: 50px;
    background: #5b84f5;
    border-radius: 8px;
  }

  @media ${tabletQueries} {
    top: 4%;
    left: auto;
    right: 12.2%;
    width: 68px;
    height: 68px;
    border-radius: 8px;
  }

  @media only screen and (width > 550px) and (width < 780px) {
    top: 44px;
    left: auto;
    right: 11%;
    width: 63px;
    height: 63px;
    border-radius: 8px;
  }

  @media ${theme.mediaQueries.mobile} {
    top: 10px;
    left: auto;
    right: 12.5%;
    width: 38px;
    height: 38px;
    border-radius: 5px;
  }
`;
const DotsGrid = styled.div`
  position: absolute;
  top: 65px;
  left: -49px;
  display: grid;
  grid-template-columns: repeat(5, 4px);
  gap: 10px;
  z-index: 0;
  span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #e8002d;
    opacity: 0.35;
    display: block;
  }

  @media ${theme.mediaQueries.desktopWide} {
    top: 55px;
    gap: 9px;
  }

  @media ${tabletQueries} {
    top: 113px;
    left: auto;
    right: calc(10% - 45px);
    grid-template-columns: repeat(4, 8px);
    gap: 13px;
    span {
      width: 7px;
      height: 7px;
    }
    span:nth-child(n + 21) {
      display: none;
    }
  }
  @media only screen and (width > 550px) and (width < 780px) {
    top: 95px;
    left: auto;
    right: calc(10% - 45px);
    grid-template-columns: repeat(4, 8px);
    gap: 10px;
    span {
      width: 7px;
      height: 7px;
    }
    span:nth-child(n + 21) {
      display: none;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    top: 41px;
    left: auto;
    right: calc(15% - 36px);
    grid-template-columns: repeat(4, 4px);
    gap: 6px;
    span {
      width: 4px;
      height: 4px;
    }
    span:nth-child(n + 21) {
      display: none;
    }
  }
`;
const DecorSquareGreen = styled.div`
  position: absolute;
  top: 55%;
  left: 4%;
  transform: translateY(-50%);
  width: 45px;
  height: 12%;
  background-color: #669966;
  opacity: 0.5;
  border-radius: 6px;
  z-index: 0;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const MainGrid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
  position: relative;
  z-index: 1;

  @media ${tabletQueries} {
    flex-direction: column;
    gap: 40px;
  }

  @media ${theme.mediaQueries.mobile} {
    gap: 0px;
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

  @media ${tabletQueries} {
    gap: 8px;
    font-size: 16px;
    padding: 10px 20px;
    margin-bottom: 14px;
    svg {
      width: 17px;
      height: 17px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
    font-weight: 600;
    padding: 6px 12px;
    margin-bottom: 14px;
  }
`;
const Headline = styled.h2`
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.12;
  color: #000;
  margin: 0 0 16px;
  hyphens: none;

  span {
    color: ${PINK};
  }

  @media ${tabletQueries} {
    font-size: clamp(44px, 6.2vw, 58px);
    margin: 0 0 20px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 32px;
    color: #0b1a45;
    margin: 0 0 16px;
  }
`;
const Subtitle = styled.p`
  color: #777;
  font-size: 14.5px;
  max-width: 470px;
  margin: 0 0 22px 5px;
  line-height: 1.55;

  @media ${tabletQueries} {
    font-size: 18px;
    max-width: 640px;
    margin: 0 0 28px 5px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: clamp(12px, 3.6vw, 14px);
    max-width: none;
    margin: 0 0 14px 4px;
  }
`;
const FormLayout = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  box-sizing: border-box;

  @media ${tabletQueries} {
    gap: 20px;
  }

  @media ${theme.mediaQueries.mobile} {
    gap: 10px;
    background: #fff;
    border: 1px solid #dbe5f7;
    border-radius: 16px;
    padding: 12px;
    margin: 0 -4px;
  }
`;
const FormInputsCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 18px;

  & > :last-child {
    grid-column: 1 / -1;
  }

  @media ${tabletQueries} {
    gap: 20px 24px;
  }

  @media ${theme.mediaQueries.mobile} {
    gap: 10px 8px;
    grid-template-columns: 1fr;
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
    border-color: #66748f;
  }

  @media ${theme.mediaQueries.desktopWide} {
    padding: 13px 16px 13px 58px;
  }

  @media ${tabletQueries} {
    padding: 19px 16px 19px 70px;
    border-radius: 16px;
    font-size: 17px;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 12px 10px 12px 50px;
    border-radius: 12px;
    font-size: clamp(12px, 3.6vw, 14px);
    &::placeholder {
      font-size: 11px;
      font-weight: 500;
    }
  }
`;
const InputIcon = styled.span`
  position: absolute;
  left: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e5ecfb;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  line-height: 1;

  @media ${tabletQueries} {
    left: 16px;
    width: 42px;
    height: 42px;
    svg {
      width: 23px;
      height: 23px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    left: 6px;
    width: 32px;
    height: 32px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
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
  min-height: 100px;
  padding: 16px 16px 16px 58px;
  border: 1.5px solid #d3dcec;
  border-radius: 14px;
  font-size: 15px;
  color: #1b2a78;
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

  @media ${tabletQueries} {
    min-height: 150px;
    padding: 22px 16px 16px 70px;
    border-radius: 16px;
    font-size: 17px;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    min-height: 94px;
    padding: 13px 12px 12px 50px;
    border-radius: 12px;
    font-size: 14px;
    background: #fff;
    &::placeholder {
      font-size: 11px;
      font-weight: 500;
    }
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

  @media ${tabletQueries} {
    left: 16px;
    top: 16px;
    width: 42px;
    height: 42px;
    svg {
      width: 23px;
      height: 23px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    left: 6px;
    top: 6px;
    width: 32px;
    height: 32px;
    background: #e5ecfb;
    svg {
      width: 16px;
      height: 16px;
    }
  }
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

  @media ${tabletQueries} {
    padding: 23px 28px;
    border-radius: 14px;
    font-size: 20px;
    gap: 12px;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 13px 20px;
    border-radius: 10px;
    font-size: 15px;
    gap: 10px;
    svg {
      width: 18px;
      height: 18px;
    }
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

  @media ${tabletQueries} {
    width: 100%;
    margin-top: 0;
    gap: 12px;
    position: static;
  }

  @media ${theme.mediaQueries.mobile} {
    position: static;
    flex-direction: column;
    gap: 12px;
    width: 100%;
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

  @media ${tabletQueries} {
    gap: 12px;
  }

  @media ${theme.mediaQueries.mobile} {
    flex: 0 0 auto;
    gap: 10px;
  }
`;
const MapBox = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: 192px;

  @media ${tabletQueries} {
    height: 280px;
  }

  @media ${theme.mediaQueries.mobile} {
    height: 120px;
  }
`;
const MapPlaceholder = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 0 0 12px;

  @media ${tabletQueries} {
    border-radius: 16px 0 0 16px;
  }

  @media ${theme.mediaQueries.mobile} {
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #d7e3f8;
  }
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
  box-shadow: 0 2px 5px rgba(21, 0, 159, 0.12);
  border: 1px solid rgba(21, 0, 159, 0.2);

  @media ${tabletQueries} {
    top: 30px;
    right: -56px;
    gap: 18px;
    border-radius: 16px;
    padding: 18px 30px 18px 18px;
  }

  @media ${theme.mediaQueries.mobile} {
    top: 14px;
    right: 10px;
    gap: 10px;
    border-radius: 10px;
    padding: 10px 16px 10px 10px;
    box-shadow: 0 2px 5px rgba(21, 0, 159, 0.12);
    border: 1px solid rgba(21, 0, 159, 0.2);
  }
`;
const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1.5px solid #d3dcec;
  border-radius: 12px 0 0 12px;
  padding: 10px 0;

  hr {
    border: none;
    border-top: 1px solid #dbe4f5;
    width: calc(100% - 40px);
    margin: 0 auto;
  }

  @media ${tabletQueries} {
    border-radius: 16px 0 0 16px;
    padding: 14px 0;
    hr {
      width: calc(100% - 56px);
    }
  }

  @media ${theme.mediaQueries.mobile} {
    border: 1px solid #d7e3f8;
    border-radius: 12px;
    padding: 6px 0;
    hr {
      width: calc(100% - 28px);
    }
  }
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 20px;

  @media only screen and (max-width: 1200px) {
    padding: 15px 16px;
  }

  @media ${theme.mediaQueries.desktopWide} {
    padding: 14px 16px;
  }

  @media ${tabletQueries} {
    gap: 24px;
    padding: 24px 28px;
  }

  @media ${theme.mediaQueries.mobile} {
    gap: 14px;
    padding: 8px 14px;
  }
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

  @media ${tabletQueries} {
    width: 64px;
    height: 64px;
    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    width: 40px;
    height: 40px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const AddressCircle = styled(IconCircle)`
  width: 50px;
  height: 50px;

  @media ${tabletQueries} {
    width: 62px;
    height: 62px;
    svg {
      width: 34px;
      height: 34px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    width: 38px;
    height: 38px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const InfoContent = styled.div``;
const InfoLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1b2a78;
  margin-bottom: 3px;

  @media ${tabletQueries} {
    font-size: 18px;
    margin-bottom: 4px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 12.5px;
    margin-bottom: 2px;
  }
`;
const InfoText = styled.div`
  font-size: 13px;
  color: #7d89a5;
  line-height: 1.5;

  @media ${tabletQueries} {
    font-size: 16px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 11px;
  }
`;
const ListLabel = styled(InfoLabel)`
  font-size: 15px;
  font-weight: 700;
  color: #1b2a78;

  @media ${tabletQueries} {
    font-size: 20px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 12.5px;
  }
`;
const ListText = styled(InfoText)`
  font-size: 13px;
  color: #7d89a5;

  @media ${tabletQueries} {
    font-size: 16px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1.6;
  }
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

  @media ${tabletQueries} {
    border-radius: 0 16px 16px 0;
  }

  @media ${theme.mediaQueries.mobile} {
    flex: 0 0 auto;
    width: 100%;
    height: 96px;
    border-radius: 10px;
    &::after {
      z-index: -1;
      height: 100%;
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 63% 100%);
    }
  }

  @media ${mobileLargeQueries} {
    &::after {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, calc(100% - 127px) 100%);
    }
  }
`;
const BannerPlane = styled.div`
  position: absolute;
  top: 21%;
  left: 52%;
  display: flex;

  @media ${theme.mediaQueries.desktopWide} {
    top: 23%;
    left: 55%;
  }

  @media ${tabletQueries} {
    left: 73px;
    svg {
      width: 56px;
      height: 56px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    top: 15px;
    left: 65%;
    svg {
      width: 33px;
      height: 33px;
    }
  }

  @media ${theme.mediaQueries.smallMobile} {
    left: 67%;
  }

  @media ${mobileLargeQueries} {
    left: auto;
    right: 87px;
  }
`;
const BannerPath = styled.svg`
  position: absolute;
  top: calc(17% + 6px);
  left: 4px;

  @media ${theme.mediaQueries.desktopWide} {
    width: 85px;
  }

  @media ${tabletQueries} {
    width: 100px;
    height: auto;
  }

  @media ${theme.mediaQueries.mobile} {
    top: -7px;
    left: 50%;
    width: 70px;
    height: auto;
  }

  @media ${mobileLargeQueries} {
    left: auto;
    right: 101.5px;
  }
`;
const BannerDot = styled.div`
  position: absolute;
  top: 210px;
  left: 75px;
  width: 10%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${ADDR_GREEN};

  @media ${tabletQueries} {
    top: 290px;
    left: 99px;
  }

  @media ${theme.mediaQueries.mobile} {
    top: 36px;
    left: auto;
    right: 20px;
    width: 20px;
    height: 20px;
  }

  @media ${theme.mediaQueries.smallMobile} {
    right: 13px;
    width: 15px;
    height: 15px;
  }
`;
const BannerTriangle = styled.div`
  position: absolute;
  top: 43.5%;
  left: 20px;
  width: 44px;
  height: 44px;
  background: ${PINK};
  clip-path: polygon(100% 0, 100% 100%, 0 100%);

  @media ${tabletQueries} {
    left: 26px;
    width: 58px;
    height: 58px;
  }

  @media ${theme.mediaQueries.mobile} {
    top: 46px;
    left: 73%;
    width: 41px;
    height: 41px;
  }

  @media ${mobileLargeQueries} {
    left: auto;
    right: 51.6px;
  }
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

  @media ${tabletQueries} {
    left: 26px;
    font-size: 26px;
    &::after {
      width: 58px;
      height: 4px;
      margin-top: 16px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    top: 19px;
    left: 22px;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.2;
    &::after {
      width: 41px;
      height: 3px;
      margin-top: 10px;
    }
  }
`;
const DesktopBreak = styled.br`
  @media ${theme.mediaQueries.mobile} {
    display: none;
  }
`;

const Contact = () => {
  const { isDesktop } = useScreenSize();

  const dotsQuantity = isDesktop ? 20 : 16;

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
            {Array.from({ length: dotsQuantity }).map((_, i) => (
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
              Será um <DesktopBreak />
              prazer
              <br />
              falar com <DesktopBreak />
              <strong>você!</strong>
            </BannerText>
          </PromoBanner>
        </RightCol>
      </MainGrid>
    </Section>
  );
};
export default Contact;
