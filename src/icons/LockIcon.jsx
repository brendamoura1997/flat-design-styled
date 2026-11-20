// eslint-disable-next-line react/prop-types
const LockIcon = ({ width, height, color, viewBox, stroke }) => {
  const outlineColor = stroke || color;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={outlineColor}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Arco superior */}
      <path d="M7.5 9V6a4.5 4.5 0 0 1 9 0v3" />

      {/* Corpo do cadeado */}
      <rect x="4.5" y="9" width="15" height="13" rx="2" />

      {/* Círculo da fechadura */}
      <circle cx="12" cy="14.5" r="1.2" fill={outlineColor} stroke="none" />

      {/* Haste da fechadura */}
      <path d="M12 15.7v1.8" />
    </svg>
  );
};

export default LockIcon;
