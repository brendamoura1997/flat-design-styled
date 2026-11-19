import styled from "styled-components";

const Brands = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Mastercard = styled.span`
  position: relative;
  display: block;
  width: 36px;
  height: 22px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 22px;
    height: 22px;
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
  font-size: 19px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: -0.5px;
  color: #1a1f71;
`;
const Elo = styled.span`
  font-size: 20px;
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
