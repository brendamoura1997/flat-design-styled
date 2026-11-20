import styled from "styled-components";
import { theme } from "../../styles/theme";

const PixBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  background: #b9f0d9;
  color: ${theme.colors.feedback.success};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
`;

export default PixBadge;
