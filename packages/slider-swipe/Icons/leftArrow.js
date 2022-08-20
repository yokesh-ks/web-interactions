import React from "react";
import styled from "styled-components";

export const LeftArrow = ({ onClick }) => {
  return (
    <IconContain onClick={onClick}>
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_101_2)">
          <path
            d="M4 16.25C4 25.2242 11.2758 32.5 20.25 32.5C29.2242 32.5 36.5 25.2242 36.5 16.25C36.5 7.27578 29.2242 0 20.25 0C11.2758 0 4 7.27578 4 16.25ZM21.5 9.99297L16.5328 15H28.2188V17.5H16.5328L21.5 22.507L19.7266 24.268L11.7703 16.25L19.7266 8.23203L21.5 9.99297Z"
            fill="black"
            fillOpacity="0.3"
            shapeRendering="crispEdges"
          />
          <path
            d="M21.855 10.3451L22.2069 9.99031L21.8523 9.63817L20.0789 7.87723L19.7239 7.52481L19.3716 7.87985L11.4154 15.8978L11.0659 16.25L11.4154 16.6022L19.3716 24.6202L19.7239 24.9752L20.0789 24.6228L21.8523 22.8618L22.2069 22.5097L21.855 22.1549L17.7331 18H28.2188H28.7188V17.5V15V14.5H28.2188H17.7331L21.855 10.3451ZM20.25 32C11.5519 32 4.5 24.9481 4.5 16.25C4.5 7.55192 11.5519 0.5 20.25 0.5C28.9481 0.5 36 7.55192 36 16.25C36 24.9481 28.9481 32 20.25 32Z"
            stroke="white"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_101_2"
            x="0"
            y="-4"
            width="40.5"
            height="44.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_101_2"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_101_2"
              result="effect2_dropShadow_101_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_101_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </IconContain>
  );
};

const IconContain = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
`;
