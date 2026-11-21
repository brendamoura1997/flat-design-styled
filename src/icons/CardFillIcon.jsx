const CardFillIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none">
      <rect x="2" y="4.5" width="20" height="15" rx="3" fill={color} />
      <path
        d="M2 9.5H22"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15H10"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CardFillIcon;
