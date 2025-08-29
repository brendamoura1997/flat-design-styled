import styled from "styled-components";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
    </>
  );
}

export default App;
