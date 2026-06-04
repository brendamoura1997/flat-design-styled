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
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Hour hand pointing to ~10 o'clock */}
      <line
        x1="12"
        y1="12"
        x2="8.5"
        y2="7.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Minute hand pointing to ~12 o'clock */}
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ClockIcon;
