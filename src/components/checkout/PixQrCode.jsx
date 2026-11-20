import styled from "styled-components";

const SIZE = 29;
const FINDER = 7;
const DARK = "#0a0a1e";

const finderOrigins = [
  [0, 0],
  [0, SIZE - FINDER],
  [SIZE - FINDER, 0],
];

const createRandom = (seed) => {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
};

const isFinderZone = (row, col) =>
  finderOrigins.some(
    ([top, left]) =>
      row >= top - 1 &&
      row <= top + FINDER &&
      col >= left - 1 &&
      col <= left + FINDER,
  );

const buildDataPath = () => {
  const random = createRandom(20260);
  let path = "";
  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      if (!isFinderZone(row, col) && random() > 0.5) {
        path += `M${col} ${row}h1v1h-1z`;
      }
    }
  }
  return path;
};

const dataPath = buildDataPath();

const Svg = styled.svg`
  display: block;
  max-width: 100%;
  height: auto;
`;

const PixQrCode = ({ size = 140, label }) => (
  <Svg
    width={size}
    height={size}
    viewBox={`0 0 ${SIZE} ${SIZE}`}
    shapeRendering="crispEdges"
    role="img"
    aria-label={label}
  >
    <rect width={SIZE} height={SIZE} fill="#ffffff" />
    <path d={dataPath} fill={DARK} />
    {finderOrigins.map(([top, left]) => (
      <g key={`${top}-${left}`}>
        <rect x={left} y={top} width={FINDER} height={FINDER} fill={DARK} />
        <rect
          x={left + 1}
          y={top + 1}
          width={FINDER - 2}
          height={FINDER - 2}
          fill="#ffffff"
        />
        <rect
          x={left + 2}
          y={top + 2}
          width={FINDER - 4}
          height={FINDER - 4}
          fill={DARK}
        />
      </g>
    ))}
  </Svg>
);

export default PixQrCode;
