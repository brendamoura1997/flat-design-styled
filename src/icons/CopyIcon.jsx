const CopyIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4C2.895 15 2 14.105 2 13V4C2 2.895 2.895 2 4 2H13C14.105 2 15 2.895 15 4V5"
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CopyIcon;
