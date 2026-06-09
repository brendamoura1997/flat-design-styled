import styled, { css, ThemeProvider } from "styled-components";
import Navbar from "./components/layout/Navbar";
import Intro from "./components/sections/Intro";
import Feature from "./components/sections/Feature";
import Service from "./components/sections/Service";
import Price from "./components/sections/Price";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { useScreenSize } from "./hooks/useDevice";
import { theme } from "./styles/theme";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  // @media ${theme.mediaQueries.tablet} {
  //   height: fit-content;
  // }
  // @media ${theme.mediaQueries.mobile} {
  //   height: fit-content;
  // }
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
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 58vw 100%);
  background-color: crimson;

  @media ${theme.mediaQueries.tablet} {
    clip-path: polygon(100% 46%, 100% 100%, 13% 100%);
  }

  @media ${theme.mediaQueries.mobile} {
    clip-path: polygon(80% 20%, 100% 0%, 100% 100%, 0% 100%);
    height: 30%;
    top: 70%;
  }

  @media ${theme.mediaQueries.smallMobile} {
    // clip-path: polygon(80% 20%, 100% 0%, 100% 100%, 20% 100%);
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
  // clip-path: polygon(43% 0%, 28% 100%, 0% 100%, 0% 0%);
  background-color: #f88497;
`;

function App() {
  const { isMobile, isDesktop } = useScreenSize();
  return (
    <ThemeProvider theme={theme}>
      {/* {!isMobile && <Navbar />} */}
      <Container id="intro">
        <Intro />
        <IntroShape />
      </Container>
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
