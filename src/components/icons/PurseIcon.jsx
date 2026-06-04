// eslint-disable-next-line react/prop-types
const PurseIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
      strokeWidth="1.5"
    >
      <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
      <path d="M22 10.5 12 14 2 10.5" />
      <circle cx="19" cy="18" r="3" />
    </svg>
  );
};

export default PurseIcon;
