// eslint-disable-next-line react/prop-types
import styled from "styled-components";

const ChevronIcon = ({ width, height, color, viewBox, stroke }) => {
  const Chevron = styled.svg`
    width: 18px;
    height: 18px;
    color: #b0b0b0;
  `;

  return (
    <Chevron
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6 6 6-6 6" />
    </Chevron>
  );
};

export default ChevronIcon;
