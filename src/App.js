import styled, { css, ThemeProvider } from "styled-components";
import NavbarDesktop from "./components/layout/NavbarDesktop";
import Intro from "./components/sections/Intro";
import Feature from "./components/sections/Feature";
import Service from "./components/sections/Service";
import Price from "./components/sections/Price";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { useScreenSize } from "./hooks/useDevice";
import { theme } from "./styles/theme.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import ResetStyle from "./styles/ResetStyle.jsx";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  @media ${theme.mediaQueries.mobileWide} {
    height: fit-content;
  }
`;

const ContainerIntro = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media ${theme.mediaQueries.desktopWide} {
    height: 100vh;
  }
  @media ${theme.mediaQueries.tabletWide} {
    height: fit-content;
  }
  @media ${theme.mediaQueries.mobileWide} {
    height: fit-content;
  }
`;

const ContainerExtra = styled.div`
  height: 120vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  z-index: 2;
  @media ${theme.mediaQueries.tablet} {
    clip-path: polygon(100% 59%, 100% 100%, 0% 100%);
  }
  @media ${theme.mediaQueries.tabletWide} {
    clip-path: polygon(100% 59%, 100% 100%, 0% 100%);
  }
  @media ${theme.mediaQueries.mobile} {
    clip-path: polygon(80% 20%, 100% 0%, 100% 100%, 0% 100%);
    height: 30%;
    top: 70%;
  }
  @media ${theme.mediaQueries.smallMobile} {
    clip-path: polygon(100% 16%, 100% 100%, 0% 100%);
  }
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 43% 100%, 0 100%);
  background-color: pink;
  @media only screen and (max-width: 1024px) {
    clip-path: polygon(0 0, 20% 0%, 20% 100%, 0 100%);
  }
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 43% 0%, 43% 100%, 0 100%);
  background-color: #f88497;
`;

const DotGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols || 5}, 1fr);
  grid-template-rows: repeat(${({ $rows }) => $rows || 5}, 1fr);
  bottom: 0;
  width: 100%;
  height: 36%;
  gap: 6px;
  z-index: 1;
  opacity: 0.55;
  ${({ $pos }) => $pos === "tl" && ``}
  ${({ $pos }) => $pos === "tr" && `right: 0%;`}
  span {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color || "#f53b5a"};
    display: block;
  }
  @media ${theme.mediaQueries.tabletWide} {
    span {
      background-color: #fff;
    }
  }
  @media ${theme.mediaQueries.mobile} {
    height: 29%;
    span {
      width: 2.5px;
      height: 2.5px;
      border-radius: 50%;
      background-color: ${({ $color }) => $color || "#f53b5a"};
      display: block;
    }
  }
  @media ${theme.mediaQueries.smallMobile} {
    height: 25%;
  }
`;

const dots = (count) =>
  Array.from({ length: count }).map((_, i) => <span key={i} />);

function App() {
  const { isMobile, isDesktop, isTablet } = useScreenSize();

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      {isDesktop ? <NavbarDesktop /> : null}
      <ContainerIntro id="intro">
        <Intro />
        <IntroShape />
        {!isDesktop && (
          <DotGrid $pos="tr" $cols={30} $rows={10} $color="#f53b5a">
            {isTablet ? dots(320) : dots(1000)}
          </DotGrid>
        )}
      </ContainerIntro>

      <Container id="feature">
        <Feature />
        <FeatureShape />
      </Container>

      <ContainerExtra>
        <Service />
        {!isMobile && <ServiceShape />}
      </ContainerExtra>

      <ContainerExtra>
        <Price />
      </ContainerExtra>

      <ContainerExtra>
        <Contact />
      </ContainerExtra>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
