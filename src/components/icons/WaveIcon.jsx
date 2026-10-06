// eslint-disable-next-line react/prop-types
const WaveIcon = ({ width, height, color, viewBox, preserveAspectRatio }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 10 0 C 65 0, 145 1, 200 0 C 187 12, 163 18, 135 23 C 98 29, 53 34, 0 60 V 10 Q 0 0 10 0 Z" />
    </svg>
  );
};

export default WaveIcon;
