// eslint-disable-next-line react/prop-types
const WaveTabletIcon = ({ width, height, color, viewBox, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120 500C145 445 190 410 250 392C325 370 340 318 390 278C430 246 467 226 500 220V500H120Z" />
    </svg>
  );
};

export default WaveTabletIcon;
