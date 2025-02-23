import React from 'react';
const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="PV" transform="translate(20, 33)">
        {/* "P" with a smaller, natural curve */}
        <path
          d="M10 30 L10 5 L20 5 Q25 5, 25 12 Q25 20, 20 20 L10 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* "V" with sharper edges */}
        <path
          d="M32 5 L42 30 L52 5"
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

// Another SVG
//<g id="B" transform="translate(26, 28) scale(0.8)">
//  <path fill="currentColor" d="M0 45.26L0 9.47L13.50 9.47Q17.07 9.47 18.95 9.81Q21.58 10.25 23.36 11.49Q25.15 12.72 26.23 14.94Q27.32 17.16 27.32 19.82Q27.32 24.39 24.41 27.55Q21.51 30.71 13.92 30.71L4.74 30.71L4.74 45.26L0 45.26M4.74 26.49L13.99 26.49Q18.58 26.49 20.51 24.78Q22.44 23.07 22.44 19.97Q22.44 17.72 21.30 16.13Q20.17 14.53 18.31 14.01Q17.11 13.70 13.89 13.70L4.74 13.70L4.74 26.49ZM43.58 45.26L29.71 9.47L34.84 9.47L44.14 35.47Q45.26 38.60 46.02 41.33Q46.85 38.40 47.95 35.47L57.62 9.47L62.45 9.47L48.44 45.26L43.58 45.26Z"/>
//</g>
