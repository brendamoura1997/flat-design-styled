import styled from "styled-components";
import { theme } from "../styles/theme.jsx";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const borderColor = ({ $hasError }) =>
  $hasError ? theme.colors.brand.default : theme.colors.border.input;
const focusBorderColor = ({ $hasError }) =>
  $hasError ? theme.colors.brand.default : "#66748f";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  flex: ${({ $multiline }) => ($multiline ? 1 : "0 1 auto")};
`;
const ErrorMessage = styled.p`
  margin: 0 0 0 6px;
  font-size: 12px;
  line-height: 1.3;
  color: ${theme.colors.brand.default};

  @media ${tabletQueries} {
    font-size: 14px;
  }

  @media ${theme.mediaQueries.mobile} {
    font-size: 11px;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  padding: 15px 16px 15px 58px;
  border: 1.5px solid ${borderColor};
  border-radius: 14px;
  font-size: 15px;
  color: ${theme.colors.text.form};
  background: ${theme.colors.white};
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  &::placeholder {
    color: #66748f;
    font-size: 13px;
  }
  &:focus {
    border-color: ${focusBorderColor};
  }

  @media ${theme.mediaQueries.desktopWide} {
    padding: 13px 16px 13px 58px;
  }

  @media ${tabletQueries} {
    padding: 19px 16px 19px 70px;
    border-radius: 16px;
    font-size: 17px;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    padding: 12px 10px 12px 50px;
    border-radius: 12px;
    font-size: clamp(12px, 3.6vw, 14px);
    &::placeholder {
      font-size: 11px;
      font-weight: 500;
    }
  }
`;
const InputIcon = styled.span`
  position: absolute;
  left: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${theme.colors.form.iconBg};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  line-height: 1;

  @media ${tabletQueries} {
    left: 16px;
    width: 42px;
    height: 42px;
    svg {
      width: 23px;
      height: 23px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    left: 6px;
    width: 32px;
    height: 32px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const TextareaWrapper = styled.div`
  position: relative;
  flex: 1;
`;
const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 16px 16px 16px 58px;
  border: 1.5px solid ${borderColor};
  border-radius: 14px;
  font-size: 15px;
  color: ${theme.colors.text.form};
  background: ${theme.colors.form.bg};
  box-sizing: border-box;
  resize: vertical;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
  &::placeholder {
    color: ${theme.colors.form.placeholder};
    font-size: 13px;
  }
  &:focus {
    border-color: ${focusBorderColor};
  }

  @media ${tabletQueries} {
    min-height: 150px;
    padding: 22px 16px 16px 70px;
    border-radius: 16px;
    font-size: 17px;
    &::placeholder {
      font-size: 16px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    min-height: 94px;
    padding: 13px 12px 12px 50px;
    border-radius: 12px;
    font-size: 14px;
    background: ${theme.colors.white};
    &::placeholder {
      font-size: 11px;
      font-weight: 500;
    }
  }
`;
const TextareaIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${theme.colors.form.iconBg};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media ${tabletQueries} {
    left: 16px;
    top: 16px;
    width: 42px;
    height: 42px;
    svg {
      width: 23px;
      height: 23px;
    }
  }

  @media ${theme.mediaQueries.mobile} {
    left: 6px;
    top: 6px;
    width: 32px;
    height: 32px;
    background: ${theme.colors.form.iconBg};
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const FormField = ({ icon, multiline = false, error, ...rest }) => {
  const errorId = error ? `${rest.name}-error` : undefined;
  const fieldProps = {
    ...rest,
    $hasError: Boolean(error),
    "aria-invalid": Boolean(error),
    "aria-describedby": errorId,
  };

  const errorMessage = error && (
    <ErrorMessage id={errorId}>{error}</ErrorMessage>
  );

  if (multiline) {
    return (
      <Field $multiline>
        <TextareaWrapper>
          <Textarea {...fieldProps} />
          <TextareaIcon>{icon}</TextareaIcon>
        </TextareaWrapper>
        {errorMessage}
      </Field>
    );
  }

  return (
    <Field>
      <InputWrapper>
        <Input {...fieldProps} />
        <InputIcon>{icon}</InputIcon>
      </InputWrapper>
      {errorMessage}
    </Field>
  );
};

export default FormField;
