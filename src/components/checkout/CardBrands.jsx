import styled from "styled-components";

const Brands = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Mastercard = styled.span`
  position: relative;
  display: block;
  width: 30px;
  height: 18px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }

  &::before {
    left: 0;
    background: #eb001b;
  }

  &::after {
    right: 0;
    background: #f79e1b;
    opacity: 0.9;
  }
`;
const Visa = styled.span`
  font-size: 16px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: -0.5px;
  color: #1a1f71;
`;
const Elo = styled.span`
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #1b2a78;
`;

const CardBrands = () => (
  <Brands aria-hidden="true">
    <Mastercard />
    <Visa>VISA</Visa>
    <Elo>elo</Elo>
  </Brands>
);

export default CardBrands;
