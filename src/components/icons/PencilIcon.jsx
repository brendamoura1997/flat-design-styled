// eslint-disable-next-line react/prop-types
const PencilIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M4 20L8.5 19L19 8.5C19.5523 7.94772 19.5523 7.05228 19 6.5L17.5 5C16.9477 4.44772 16.0523 4.44772 15.5 5L5 15.5L4 20Z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6.5L17.5 9.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
