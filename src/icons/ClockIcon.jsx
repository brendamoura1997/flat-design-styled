// eslint-disable-next-line react/prop-types
const ClockIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      {/* Outer circle */}
      <circle
        cx="12"
        cy="12"
        r="9"
        fill={color}
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Clock hands */}
      <path
        d="M12 7 V12 L14.8 14.8"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClockIcon;
