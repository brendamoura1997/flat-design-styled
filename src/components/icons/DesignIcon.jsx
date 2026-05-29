// eslint-disable-next-line react/prop-types
const DesignIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 9H21"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V21"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DesignIcon;
