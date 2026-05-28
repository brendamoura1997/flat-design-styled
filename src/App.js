import styled, { css } from "styled-components";
import Navbar from "./components/layout/Navbar";
import Intro from "./components/sections/Intro";
import Feature from "./components/sections/Feature";
import Service from "./components/sections/Service";
import Price from "./components/sections/Price";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { useScreenSize } from "./hooks/useDevice";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
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

  @media only screen and (max-width: 1024px) {
    // clip-path: polygon(65% 0, 100% 0%, 100% 100%, 65% 100%);
    clip-path: polygon(75% 0, 100% 0%, 100% 100%, 75% 100%);
    z-index: -1;
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

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 100%, 100% 0%, 65% 67%, 75% 100%);
  background-color: crimson;
`;

function App() {
  const { isMobile, isDesktop } = useScreenSize();
  return (
    <>
      <Container>
        {/* {isDesktop && <Navbar />} */}
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <ContainerExtra>
        <Service />
        {!isMobile && <ServiceShape />}
      </ContainerExtra>
      <ContainerExtra>
        <Price />
        <PriceShape />
      </ContainerExtra>
      <ContainerExtra>
        <Contact />

        {!isDesktop && <Navbar />}
      </ContainerExtra>
      <Footer />
    </>
  );
}

export default App;
