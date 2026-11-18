import styled from "styled-components";
import { theme } from "../styles/theme.jsx";

const tabletQueries = `${theme.mediaQueries.tablet}, ${theme.mediaQueries.tabletWide}`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  padding: 15px 16px 15px 58px;
  border: 1.5px solid ${theme.colors.border.input};
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
    border-color: #66748f;
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
  border: 1.5px solid ${theme.colors.border.input};
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
    border-color: #66748f;
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

const FormField = ({ icon, multiline = false, ...rest }) => {
  if (multiline) {
    return (
      <TextareaWrapper>
        <Textarea {...rest} />
        <TextareaIcon>{icon}</TextareaIcon>
      </TextareaWrapper>
    );
  }

  return (
    <InputWrapper>
      <Input {...rest} />
      <InputIcon>{icon}</InputIcon>
    </InputWrapper>
  );
};

export default FormField;
