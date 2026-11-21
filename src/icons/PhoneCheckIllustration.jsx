const PhoneCheckIllustration = ({
  width = 461,
  height = 286,
  viewBox = "0 0 461 286",
  primaryColor = "#4032D5",
  secondaryColor = "#B8B2FF",
  tertiaryColor = "#DCD8FF",
  surfaceColor = "#FFFFFF",
  accentColor = "#18C5B0",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="phoneScreenGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={surfaceColor} />
          <stop offset="100%" stopColor={tertiaryColor} />
        </linearGradient>
        <clipPath id="phoneBackgroundClip">
          <rect width="461" height="286" rx="32" />
        </clipPath>
      </defs>

      <g clipPath="url(#phoneBackgroundClip)">
        <circle cx="292" cy="88" r="172" fill={secondaryColor} opacity="0.65" />
        <circle cx="219" cy="85" r="100" fill={tertiaryColor} opacity="0.55" />
        <circle cx="416" cy="178" r="47" fill={secondaryColor} opacity="0.85" />

        <circle cx="63" cy="224" r="20" fill={secondaryColor} opacity="0.65" />

        <path
          d="M172 50L188 72"
          stroke={primaryColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M154 63L179 80"
          stroke={primaryColor}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M182 84L183 94"
          stroke={primaryColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M407 43L411 51L420 55L411 59L407 68L403 59L394 55L403 51L407 43Z"
          fill={surfaceColor}
        />

        <path
          d="M215 41L338 60C354 62 365 76 362 92L333 229C330 244 316 254 301 251L173 229L201 59C203 47 210 41 215 41Z"
          fill={primaryColor}
        />

        <path
          d="M214 43L336 62C350 64 359 77 356 91L329 223C326 238 314 246 300 243L177 222L204 59C206 49 210 44 214 43Z"
          fill={primaryColor}
        />

        <path
          d="M220 47L335 65C345 67 351 77 349 88L322 220C320 232 310 240 298 237L183 217L209 60C210 51 214 46 220 47Z"
          fill="url(#phoneScreenGradient)"
        />

        <path
          d="M258 53L298 59L294 66C293 69 290 70 286 69L261 65C258 64 256 61 257 58L258 53Z"
          fill={primaryColor}
        />

        <path
          d="M279 57L290 59"
          stroke={primaryColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <g transform="translate(211 108) rotate(-8 47 42)">
          <path
            d="M11 25L36 10C43 6 51 7 55 14L65 29L78 21C85 17 93 20 97 27L105 41C109 48 106 56 99 60L76 74C69 78 61 76 57 69L47 54L34 62C27 66 19 64 15 57L7 43C3 36 5 29 11 25Z"
            fill={accentColor}
          />
          <path
            d="M34 21L49 43C53 49 61 51 67 47L82 38"
            stroke={surfaceColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 54L31 45C38 41 46 43 50 50L62 68"
            stroke={surfaceColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <circle cx="344" cy="210" r="53" fill={tertiaryColor} opacity="0.35" />
        <circle cx="343" cy="207" r="51" fill={surfaceColor} />

        <path
          d="M322 205L337 220L367 192"
          stroke={primaryColor}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default PhoneCheckIllustration;
