const LocationIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M12 2C8.686 2 6 4.686 6 8C6 12.5 12 21 12 21C12 21 18 12.5 18 8C18 4.686 15.314 2 12 2Z"
        fill={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8" r="3.5" fill="#fff6f6" strokeWidth="1.5" />
    </svg>
  );
};

export default LocationIcon;
