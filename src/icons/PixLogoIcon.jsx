const PixLogoIcon = ({
  width,
  height,
  color = "#32bcad",
  textColor = "#8a8f9c",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 48"
      fill="none"
      aria-hidden="true"
    >
      <g fill={color}>
        <rect
          x="18"
          y="4"
          width="12"
          height="12"
          rx="3"
          transform="rotate(45 24 10)"
        />
        <rect
          x="32"
          y="18"
          width="12"
          height="12"
          rx="3"
          transform="rotate(45 38 24)"
        />
        <rect
          x="18"
          y="32"
          width="12"
          height="12"
          rx="3"
          transform="rotate(45 24 38)"
        />
        <rect
          x="4"
          y="18"
          width="12"
          height="12"
          rx="3"
          transform="rotate(45 10 24)"
        />
      </g>
      <text
        x="52"
        y="33"
        fill={textColor}
        fontSize="30"
        fontWeight="300"
        letterSpacing="1"
      >
        pix
      </text>
    </svg>
  );
};

export default PixLogoIcon;
