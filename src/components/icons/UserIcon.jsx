const UserIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={stroke || color}
    >
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        strokeWidth="1.8"
      />

      <path
        d="M5 19C5 16.2386 8.13401 14 12 14C15.866 14 19 16.2386 19 19"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UserIcon;
