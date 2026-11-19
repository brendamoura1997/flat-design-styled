import styled from "styled-components";
import { theme } from "../../styles/theme";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;
const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.text.title};
  cursor: pointer;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 12px 10px ${({ $hasIcon }) => ($hasIcon ? "42px" : "14px")};
  border: 1.5px solid ${theme.colors.border.input};
  border-radius: 12px;
  background: ${theme.colors.white};
  color: ${theme.colors.text.form};
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${theme.colors.text.subtle};
    font-size: 13px;
    font-weight: 500;
  }

  &:focus {
    border-color: ${theme.colors.primary.default};
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 11px 12px 11px ${({ $hasIcon }) => ($hasIcon ? "42px" : "14px")};
    font-size: 14px;

    &::placeholder {
      font-size: 13px;
    }
  }
`;
const InputIcon = styled.span`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  line-height: 1;

  @media ${theme.mediaQueries.mobile} {
    left: 12px;
  }
`;

const CheckoutField = ({ icon, label, ...rest }) => {
  const id = `checkout-${rest.name}`;

  return (
    <Field>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <Input id={id} $hasIcon={Boolean(icon)} {...rest} />
        {icon && <InputIcon>{icon}</InputIcon>}
      </InputWrapper>
    </Field>
  );
};

export default CheckoutField;
