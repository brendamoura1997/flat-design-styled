const PhoneIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={stroke}
    >
      <path
        d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.1 14.5C14.35 14.25 14.7 14.18 15.01 14.28C16.02 14.62 17.11 14.8 18.2 14.8C18.75 14.8 19.2 15.25 19.2 15.8V18.6C19.2 19.15 18.75 19.6 18.2 19.6C10.08 19.6 3.6 13.12 3.6 5C3.6 4.45 4.05 4 4.6 4H7.4C7.95 4 8.4 4.45 8.4 5C8.4 6.1 8.58 7.18 8.92 8.19C9.02 8.5 8.94 8.84 8.7 9.1L6.6 10.8Z"
        fill={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 5C16.4 5.4 17.2 6 17.8 6.8"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 2C16.3 2.5 17.9 3.5 19.1 4.9"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PhoneIcon;
