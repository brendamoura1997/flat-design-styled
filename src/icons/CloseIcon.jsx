// eslint-disable-next-line react/prop-types
const CloseIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={stroke}
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
};

export default CloseIcon;
