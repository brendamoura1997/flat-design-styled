// eslint-disable-next-line react/prop-types
const SendIcon = ({
  width,
  height,
  color,
  viewBox,
  stroke,
  strokeWidthOutside,
  strokeWidthInside,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M22 2L11 13"
        fill="none"
        strokeWidth={strokeWidthInside}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        fill="none"
        strokeWidth={strokeWidthOutside}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SendIcon;
