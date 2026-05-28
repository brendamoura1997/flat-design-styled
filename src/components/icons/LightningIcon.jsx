const LightningIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LightningIcon;
