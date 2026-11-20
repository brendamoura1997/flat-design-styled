import styled from "styled-components";
import { theme } from "../../styles/theme";
import PixBadge from "./PixBadge";

const Option = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  border: 1.5px solid
    ${({ $checked }) =>
      $checked ? theme.colors.primary.default : theme.colors.border.input};
  border-radius: 12px;
  background: ${({ $checked }) =>
    $checked ? theme.colors.secondary.second.soft : theme.colors.white};
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s;

  @media ${theme.mediaQueries.mobile} {
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 12px;
  }
`;
const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;
const Indicator = styled.span`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 2px solid
    ${({ $checked }) =>
      $checked ? theme.colors.primary.default : theme.colors.border.input};
  background: ${({ $checked }) =>
    $checked
      ? `radial-gradient(circle, ${theme.colors.primary.default} 0 42%, transparent 48%)`
      : theme.colors.white};
  box-sizing: border-box;

  ${RadioInput}:focus-visible + & {
    box-shadow: 0 0 0 3px rgba(26, 26, 173, 0.25);
  }
`;
const OptionLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.text.form};

  @media ${theme.mediaQueries.mobile} {
    font-size: 13px;
  }
`;
const OptionBadge = styled(PixBadge)`
  margin-left: auto;

  @media ${theme.mediaQueries.mobile} {
    margin-left: 28px;
  }
`;

const PaymentMethodOption = ({ option, checked, onChange }) => (
  <Option $checked={checked}>
    <RadioInput
      type="radio"
      name="paymentMethod"
      value={option.value}
      checked={checked}
      onChange={onChange}
    />
    <Indicator $checked={checked} aria-hidden="true" />
    {option.icon}
    <OptionLabel>{option.label}</OptionLabel>
    {option.badge && <OptionBadge>{option.badge}</OptionBadge>}
  </Option>
);

export default PaymentMethodOption;
