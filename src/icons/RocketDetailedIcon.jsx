import { useId } from "react";

const RocketDetailedIcon = ({
  width = 160,
  height = 160,
  viewBox = "0 0 180 180",
  color,
  colors = {},
  stroke = "none",
}) => {
  const uniqueId = useId().replace(/:/g, "");
  const palette = {
    rocket: colors.rocket ?? color ?? "#6038E8",
    rocketDark: colors.rocketDark ?? "#3820B8",
    rocketLight: colors.rocketLight ?? "#A18BFF",
    window: colors.window ?? "#B8A8FF",
    windowDark: colors.windowDark ?? "#5030D6",
    flame: colors.flame ?? "#FFB52E",
    flameLight: colors.flameLight ?? "#FFE17A",
    flameDark: colors.flameDark ?? "#FF7A28",
    cloud: colors.cloud ?? "#DCD7FF",
    cloudLight: colors.cloudLight ?? "#F2F0FF",
    circle: colors.circle ?? "#FFFFFF",
    star: colors.star ?? "#FFB52E",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={stroke}
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`${uniqueId}-rocket-body-gradient`}
          x1="67"
          y1="26"
          x2="113"
          y2="116"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={palette.rocketLight} />
          <stop offset="0.48" stopColor={palette.rocket} />
          <stop offset="1" stopColor={palette.rocketDark} />
        </linearGradient>
        <linearGradient
          id={`${uniqueId}-rocket-fin-gradient`}
          x1="52"
          y1="78"
          x2="87"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={palette.rocket} />
          <stop offset="1" stopColor={palette.rocketDark} />
        </linearGradient>
        <linearGradient
          id={`${uniqueId}-rocket-flame-gradient`}
          x1="90"
          y1="117"
          x2="90"
          y2="161"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={palette.flameLight} />
          <stop offset="0.58" stopColor={palette.flame} />
          <stop offset="1" stopColor={palette.flameDark} />
        </linearGradient>
      </defs>

      {/* Círculo branco atrás do foguete e das nuvens */}
      <circle cx="92" cy="104" r="74" fill={palette.circle} opacity="0.9" />

      <path
        d="M8 157.2
     C8 149.6 14.2 143.4 21.8 143.4
     C24.1 134.7 32 128.2 41.5 128.2
     C49.8 128.2 57 133.1 60.1 140.2
     C62.6 138.4 65.6 137.4 68.9 137.4
     C77.2 137.4 84.1 143.7 84.8 151.9
     C91.8 152.8 97.2 158.7 97.2 165.8
     C97.2 172.1 92 177.3 85.7 177.3
     H27.8
     C16.9 177.3 8 168.4 8 157.2Z"
        fill={palette.cloudWhite}
      />
      <path
        d="M13 144.5C13 134.8 20.8 127 30.5 127C32.8 115.4 43 107 55.2 107C66.2 107 75.6 113.8 79.4 123.5C82.4 121.3 86.2 120 90.3 120C101.1 120 109.9 128.4 110.6 139.1C121.1 139.6 129.5 148.3 129.5 159C129.5 169.9 120.7 178.7 109.8 178.7H36.4C23.5 178.7 13 168.2 13 155.3V144.5Z"
        fill={palette.cloud}
      />
      <path
        d="M4 151.8C4 143.4 10.8 136.6 19.2 136.6C21.9 126.9 30.8 120 41.4 120C48.2 120 54.3 123.1 58.3 128C61.6 125.8 65.6 124.5 69.9 124.5C79.8 124.5 88.1 131.4 90.2 140.7C99.2 142.2 106 150 106 159.4C106 169.9 97.5 178.4 87 178.4H30.6C15.9 178.4 4 166.5 4 151.8Z"
        fill={palette.cloudLight}
      />
      <path
        d="M105.4 153.4C107.3 146.7 113.5 141.8 120.8 141.8C125.5 141.8 129.7 143.9 132.5 147.2C134.6 145.8 137.1 145 139.8 145C147.4 145 153.6 151.2 153.6 158.8C153.6 159.2 153.6 159.6 153.5 160C160.5 160.9 166 166.9 166 174.1V178.5H105.4V153.4Z"
        fill={palette.cloud}
      />

      <g transform="rotate(34 90 88)">
        <path
          d="M72 87.5L43.5 119.5C41.9 121.3 43.1 124.2 45.5 124.3L77.2 123.1L84.5 103.2L72 87.5Z"
          fill={`url(#${uniqueId}-rocket-fin-gradient)`}
        />
        <path
          d="M108 87.5L136.5 119.5C138.1 121.3 136.9 124.2 134.5 124.3L102.8 123.1L95.5 103.2L108 87.5Z"
          fill={palette.rocketDark}
        />
        <path
          d="M90 8C72.9 24.1 63.8 48.5 63.8 78.3V111.7C63.8 115.2 65.7 118.4 68.8 120.1L82.8 127.7C87.2 130.1 92.8 130.1 97.2 127.7L111.2 120.1C114.3 118.4 116.2 115.2 116.2 111.7V78.3C116.2 48.5 107.1 24.1 90 8Z"
          fill={`url(#${uniqueId}-rocket-body-gradient)`}
        />
        <path
          d="M90 8C79.7 21.2 73.5 39.3 71.2 60.6C78.2 55.2 85.1 52.6 92.1 52.6C99.4 52.6 105.5 55.1 110.6 59.7C106.9 37.9 99.9 20.6 90 8Z"
          fill={palette.rocketLight}
          opacity="0.48"
        />
        <path
          d="M72.1 91.2V112.3C72.1 114.2 73.1 115.9 74.8 116.8L82.7 121.2V85.1C78.8 86.5 75.2 88.5 72.1 91.2Z"
          fill={palette.rocketLight}
          opacity="0.45"
        />
        <path
          d="M90 41.5C81.7 41.5 75 48.2 75 56.5C75 64.8 81.7 71.5 90 71.5C98.3 71.5 105 64.8 105 56.5C105 48.2 98.3 41.5 90 41.5Z"
          fill={palette.windowDark}
          opacity="0.9"
        />
        <path
          d="M90 45.5C83.9 45.5 79 50.4 79 56.5C79 62.6 83.9 67.5 90 67.5C96.1 67.5 101 62.6 101 56.5C101 50.4 96.1 45.5 90 45.5Z"
          fill={palette.window}
        />
        <path
          d="M84.1 49.8C81.7 51.8 80.2 54.9 80.5 58.2C80.9 62.6 84.6 65.9 89 66.2C91.9 66.4 94.5 65.1 96.2 63.1C89.6 63.7 84.1 58.1 84.1 51.5V49.8Z"
          fill={palette.rocketLight}
          opacity="0.9"
        />
        <path
          d="M75.5 119.3C79.7 122.6 84.8 124.3 90 124.3C95.2 124.3 100.3 122.6 104.5 119.3L100.8 135.1C99.8 139.3 96.1 142.3 91.8 142.3H88.2C83.9 142.3 80.2 139.3 79.2 135.1L75.5 119.3Z"
          fill={palette.rocketDark}
        />
        <path
          d="M83.3 132.5C85.4 136.1 87.5 139.6 90 143.2C92.5 139.6 94.6 136.1 96.7 132.5C96.2 141.2 93.2 149.4 90 157C86.8 149.4 83.8 141.2 83.3 132.5Z"
          fill={`url(#${uniqueId}-rocket-flame-gradient)`}
        />
        <path
          d="M88 137.5C88.6 142.2 89.3 146.8 90 151.3C90.9 146.8 91.5 142.2 92 137.5C94.1 142.9 95.7 148.2 96.8 153.5C94.9 159.2 92.7 164.5 90 169.5C87.3 164.5 85.1 159.2 83.2 153.5C84.3 148.2 85.9 142.9 88 137.5Z"
          fill={palette.flameLight}
          opacity="0.9"
        />
      </g>

      <path
        d="M34 52L37.1 59.1L44.5 62L37.1 64.9L34 72L30.9 64.9L23.5 62L30.9 59.1L34 52Z"
        fill={palette.star}
      />
      <path
        d="M151 91L153.2 96.3L158.5 98.5L153.2 100.7L151 106L148.8 100.7L143.5 98.5L148.8 96.3L151 91Z"
        fill={palette.star}
      />
      <path
        d="M154 37L156 41.5L160.5 43.5L156 45.5L154 50L152 45.5L147.5 43.5L152 41.5L154 37Z"
        fill={palette.star}
      />
      <path
        d="M23 88L24.7 91.8L28.5 93.5L24.7 95.2L23 99L21.3 95.2L17.5 93.5L21.3 91.8L23 88Z"
        fill={palette.star}
      />
      <circle cx="132" cy="119" r="2.5" fill={palette.rocketLight} />
      <circle cx="45" cy="30" r="2" fill={palette.star} />
      <circle cx="165" cy="71" r="1.8" fill={palette.rocketLight} />
    </svg>
  );
};
export default RocketDetailedIcon;
