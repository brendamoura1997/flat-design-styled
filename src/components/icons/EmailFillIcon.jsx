const EmailFillIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <rect x="3" y="5" width="18" height="14" rx="1.5" strokeWidth="0" />
      <path
        d="M3 7L12 13L21 7"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailFillIcon;
