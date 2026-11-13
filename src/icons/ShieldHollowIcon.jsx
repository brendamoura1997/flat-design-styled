// eslint-disable-next-line react/prop-types
const ShieldHollowIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M12 2L4 6V12C4 16.418 7.582 20.583 12 22C16.418 20.583 20 16.418 20 12V6L12 2Z"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12L11 14.5L15.5 10"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldHollowIcon;
