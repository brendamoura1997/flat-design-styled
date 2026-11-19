const PixIcon = ({ width, height, color, viewBox }) => {
  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <path
        d="M12 3L21 12L12 21L3 12L12 3Z"
        fill={color}
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M12 8.5L15.5 12L12 15.5L8.5 12L12 8.5Z" fill="#ffffff" />
    </svg>
  );
};

export default PixIcon;
