// eslint-disable-next-line react/prop-types
const PlayIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
      strokeWidth="2"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.5L16 12L10 15.5V8.5Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlayIcon;
