import React from "react";
import styled from "styled-components";

const px = (value) => (typeof value === "number" ? `${value}px` : value);

const Grid = styled.div`
  --dot-columns: ${({ $columns }) => $columns};
  --dot-size: ${({ $size }) => px($size)};
  --dot-gap: ${({ $gap }) => px($gap)};
  display: grid;
  grid-template-columns: repeat(var(--dot-columns), var(--dot-size));
  gap: var(--dot-gap);
  opacity: ${({ $opacity }) => $opacity};
  span {
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
    display: block;
  }
`;

const DotsGrid = ({
  columns = 4,
  rows = 4,
  color = "#f53b5a",
  size = 6,
  gap = 6,
  opacity = 1,
  ...rest
}) => (
  <Grid
    aria-hidden="true"
    $columns={columns}
    $size={size}
    $gap={gap}
    $opacity={opacity}
    $color={color}
    {...rest}
  >
    {Array.from({ length: columns * rows }, (_, i) => (
      <span key={i} />
    ))}
  </Grid>
);

export default DotsGrid;
