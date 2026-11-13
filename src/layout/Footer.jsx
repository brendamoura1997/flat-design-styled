import styled from "styled-components";

const Container = styled.div`
  padding: 1%;
  text-align: right;
  background-color: #111;
  color: lightgray;
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
