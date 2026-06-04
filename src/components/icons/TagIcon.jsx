// eslint-disable-next-line react/prop-types
const TagIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M3 3H10.172C10.702 3 11.211 3.211 11.586 3.586L20.414 12.414C21.195 13.195 21.195 14.465 20.414 15.246L15.246 20.414C14.465 21.195 13.195 21.195 12.414 20.414L3.586 11.586C3.211 11.211 3 10.702 3 10.172V3Z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1" fill={stroke} strokeWidth="0" />
    </svg>
  );
};

export default TagIcon;
