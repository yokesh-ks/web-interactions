import React from "react";
import styled from "styled-components";

export const RightArrow = ({ onClick }) => {
  return (
    <IconContain onClick={onClick}>
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_101_3)">
          <path
            d="M36.5 16.25C36.5 7.27578 29.2242 0 20.25 0C11.2758 0 4 7.27578 4 16.25C4 25.2242 11.2758 32.5 20.25 32.5C29.2242 32.5 36.5 25.2242 36.5 16.25ZM19 22.507L23.9672 17.5H12.2812V15H23.9672L19 9.99297L20.7742 8.23203L28.7297 16.25L20.7734 24.268L19 22.507Z"
            fill="black"
            fillOpacity="0.3"
            shapeRendering="crispEdges"
          />
          <path
            d="M18.645 22.1549L18.2931 22.5097L18.6477 22.8618L20.4211 24.6228L20.7761 24.9752L21.1284 24.6202L29.0846 16.6022L29.4341 16.25L29.0846 15.8978L21.1292 7.87986L20.7769 7.52487L20.422 7.87715L18.6478 9.63809L18.293 9.99023L18.645 10.3451L22.7669 14.5H12.2812H11.7812V15V17.5V18H12.2812H22.7669L18.645 22.1549ZM20.25 0.5C28.9481 0.5 36 7.55192 36 16.25C36 24.9481 28.9481 32 20.25 32C11.5519 32 4.5 24.9481 4.5 16.25C4.5 7.55192 11.5519 0.5 20.25 0.5Z"
            stroke="white"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_101_3"
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
              result="effect1_backgroundBlur_101_3"
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
              in2="effect1_backgroundBlur_101_3"
              result="effect2_dropShadow_101_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_101_3"
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
  right: 0;
  top: 50%;
`;
