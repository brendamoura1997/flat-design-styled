// eslint-disable-next-line react/prop-types
const NotAllowedIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
      <line
        x1="6.5"
        y1="17.5"
        x2="17.5"
        y2="6.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NotAllowedIcon;
