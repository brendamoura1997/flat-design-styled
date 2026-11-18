import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = styled.div`
  padding: 1%;
  text-align: right;
  background-color: ${theme.colors.surface.dark};
  color: lightgray;

  @media only screen and (max-width: 480px) {
    padding: 1% 2%;
  }
`;

const Copyright = styled.span`
  font-size: 12px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Copyright> Brenda Moura TI | All Rights Reserved. ©2026 </Copyright>
    </Container>
  );
};

export default Footer;
