import styled, { keyframes } from "styled-components";
import App from "../../assets/images/app.png";
import StarIcon from "../icons/StarIcon";
import PlusIcon from "../icons/PlusIcon";
import { theme } from "../../styles/theme";
const shine = keyframes`
  0%   { left: -100%; }
  100% { left: 150%;  }
`;
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;
const DotGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 5}, 5px);
  gap: 18px;
  z-index: 3;
  opacity: 0.55;
  ${({ $pos }) => $pos === "tl" && `top: 6%; left: 2%;`}
  ${({ $pos }) => $pos === "tr" && `top: 6%; right: 2%;`}
  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color || "#f53b5a"};
    display: block;
  }
  @media ${theme.mediaQueries.tablet} {
    gap: 12px;
    grid-template-columns: repeat(${({ $cols }) => $cols || 5}, 4px);
    ${({ $pos }) => $pos === "tl" && `top: 3%; left: 2%;`}
    ${({ $pos }) => $pos === "tr" && `top: 3%; right: 2%;`}
    span {
      width: 6px;
      height: 6px;
    }
  }
`;
const PinkBlob = styled.div`
  position: absolute;
  width: 15%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: #f06a8c;
  opacity: 0.55;
  top: 32%;
  left: 5%;
  z-index: 2;
  @media ${theme.mediaQueries.tablet} {
    width: 15%;
    top: 28%;
    left: 4%;
    z-index: 2;
  }
`;
const PurpleSquare = styled.div`
  position: absolute;
  width: 70px;
  height: 90px;
  background: #8c7ae6;
  border-radius: 16px;
  bottom: 22%;
  left: 5%;
  z-index: 2;
  @media ${theme.mediaQueries.tablet} {
    width: 52px;
    height: 68px;
    bottom: 38%;
    left: 3%;
  }
`;
const PinkRect = styled.div`
  position: absolute;
  height: 16%;
  width: 4%;
  background: #f4a0b3;
  border-radius: 14px;
  bottom: 15%;
  right: -1%;
  z-index: 0;

  @media ${theme.mediaQueries.tablet} {
    height: 11%;
    width: 5%;
  }
`;
const PurpleCircle = styled.div`
  position: absolute;
  width: 20%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: #eaecfb;
  bottom: -29%;
  right: -5%;
  z-index: 0;

  @media ${theme.mediaQueries.tablet} {
    width: 29%;
    bottom: -20%;
    right: -5%;
  }
`;
const CurvedPath = styled.svg`
  position: absolute;
  top: 38%;
  left: 35%;
  z-index: 2;

  @media ${theme.mediaQueries.tablet} {
    // width: 120px;
    // height: 240px;
    width: 20%;
    height: auto;
    top: auto;
    bottom: 3%;
    left: 26%;
  }
`;
const ArchBackground = styled.svg`
  display: none;
  @media ${theme.mediaQueries.mobile} {
    display: block;
    position: absolute;
    width: 36%;
    height: 64%;
    top: 10%;
    left: 6%;
    z-index: 0;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: start;
  gap: 12%;
  height: 100%;
  position: relative;
  z-index: 3;
  @media ${theme.mediaQueries.tablet} {
    gap: 2%;
  }
`;
const Left = styled.div`
  width: 43%;
  height: 143%;
  z-index: 0;
  @media ${theme.mediaQueries.tablet} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 43%;
    height: auto;
  }
`;
const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  z-index: 3;
  display: block;
  @media ${theme.mediaQueries.tablet} {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${theme.mediaQueries.tablet} {
    width: 52%;
    margin-left: 45%;
    padding: 20% 0;
  }
`;
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #def6ee;
  color: #3daa72;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 999px;
  width: fit-content;
  margin-bottom: 3%;
  @media ${theme.mediaQueries.tablet} {
    font-size: 16px;
    padding: 7px 14px;
    margin-bottom: 4%;
  }
`;
const Title = styled.span`
  font-size: 60px;
  line-height: 1.15;
  @media ${theme.mediaQueries.tablet} {
    font-size: 58px;
    line-height: 1.15;
  }
`;
const Pink = styled.span`
  color: #e8325a;
  font-weight: 800;
`;
const SubTitle = styled.span`
  font-size: 20px;
  font-style: italic;
  color: #333;
  margin-top: 4%;
  @media ${theme.mediaQueries.tablet} {
    font-size: 19px;
    margin-top: 5%;
  }
`;
const Desc = styled.p`
  font-size: 17px;
  color: #666;
  margin-top: 3%;
  line-height: 1.6;
  @media ${theme.mediaQueries.tablet} {
    font-size: 17px;
    margin-top: 4%;
    line-height: 1.4;
  }
`;
const Button = styled.button`
  width: fit-content;
  border: none;
  padding: 16px 24px;
  background-color: #1a1aad;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  border-radius: 9px;
  margin-top: 4%;
  cursor: pointer;
  letter-spacing: 0.3px;
  transition:
    background 0.2s,
    transform 0.15s;
  display: flex;
  align-items: center;
  gap: 8px;
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
  @media ${theme.mediaQueries.tablet} {
    font-size: 16px;
    padding: 12px 18px;
    margin-top: 5%;
  }
`;
const dots = (count) =>
  Array.from({ length: count }).map((_, i) => <span key={i} />);
const Feature = () => {
  return (
    <Wrapper>
      <DotGrid $pos="tl" $cols={4} $color="#f53b5a">
        {dots(16)}
      </DotGrid>
      <DotGrid $pos="tr" $cols={4} $color="#b2aee6">
        {dots(16)}
      </DotGrid>
      <PinkBlob />
      <PurpleSquare />
      <PinkRect />
      <PurpleCircle />
      <ArchBackground viewBox="0 0 300 420" preserveAspectRatio="none">
        <path
          d="M0 420 L0 150 C0 67, 67 0, 150 0 C233 0, 300 67, 300 150 L300 420 Z"
          fill="#f4a0b3"
        />
      </ArchBackground>
      <CurvedPath width="160" height="320" viewBox="0 0 160 320" fill="none">
        <path
          d="M5 0 C 70 0, 150 90, 130 190 C 115 250, 80 290, 60 300"
          stroke="#e8325a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="60" cy="300" r="7" fill="#e8325a" />
      </CurvedPath>
      <Container>
        <Left>
          <Image src={App} />
        </Left>
        <Right>
          <Badge>
            <StarIcon
              width={11}
              height={11}
              viewBox="0 0 24 24"
              color="none"
              stroke="#3DAA72"
            />
            Funcionalidades que fazem a diferença
          </Badge>
          <Title>
            <b>Ótimo</b> design
            <br />
            <b>Ótimo</b> <Pink>negócio</Pink>
          </Title>
          <SubTitle>
            Sabemos que um ótimo design significa ótimos negócios.
          </SubTitle>
          <Desc>
            Ajudamos nossos clientes a ter sucesso criando identidades de marca,
            experiências digitais e materiais impressos que comunicam com
            clareza, alcançam objetivos de marketing e têm uma ótima aparência.
          </Desc>
          <Desc>
            Cuidamos do seu negócio e garantimos que você alcance seus objetivos
            de marketing.
          </Desc>
          <Button>
            <PlusIcon
              width={20}
              height={20}
              viewBox="0 0 24 24"
              color="none"
              stroke="white"
            />{" "}
            Saiba Mais
          </Button>
        </Right>
      </Container>
    </Wrapper>
  );
};
export default Feature;
