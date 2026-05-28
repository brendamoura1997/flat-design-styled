const ChatIcon = ({ width, height, color, viewBox, stroke }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={stroke}
    >
      <path
        d="M20 11.5C20 15.09 16.42 18 12 18c-.67 0-1.32-.07-1.94-.2L5 20l1.58-3.37C5.59 15.3 5 13.46 5 11.5 5 7.91 8.58 5 13 5s7 2.91 7 6.5z"
        fill={color}
      />
    </svg>
  );
};

export default ChatIcon;
