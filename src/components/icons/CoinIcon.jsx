// eslint-disable-next-line react/prop-types
const CoinIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V8M12 16V17M14.5 9.5C14.5 8.67 13.33 8 12 8C10.67 8 9.5 8.67 9.5 9.5C9.5 10.33 10.5 11 12 11.5C13.5 12 14.5 12.67 14.5 13.5C14.5 14.33 13.33 15 12 15C10.67 15 9.5 14.33 9.5 13.5"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CoinIcon;
