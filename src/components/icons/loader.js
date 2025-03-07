import React from 'react';
const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="PV" transform="translate(22, 33)">
        {/* "P" with a smaller, natural curve */}
        <path
          d="M10 30 L10 5 L20 5 Q25 5, 25 12 Q25 20, 20 20 L10 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* "J" - vertically aligned and sharper */}
        <path
          d="M45 5 L45 25 Q45 30, 40 30 L35 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Hexagon Border */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                      L 11, 27
                      L 11, 72
                      L 50, 95
                      L 89, 73
                      L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
