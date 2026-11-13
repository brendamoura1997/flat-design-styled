// eslint-disable-next-line react/prop-types
const HomeIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default HomeIcon;
