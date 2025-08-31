import React from 'react';

interface CursorIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const CursorIcon: React.FC<CursorIconProps> = ({ 
  className = "", 
  width = 94, 
  height = 95 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 94 95" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M39.0176 41.3134C38.6139 39.9773 40.0215 38.8167 41.2561 39.4677L53.9026 46.1351C55.2812 46.8619 54.8762 48.9358 53.3255 49.0906L48.8164 49.5407C48.1825 49.604 47.6494 50.0435 47.4664 50.6538L46.1645 54.9961C45.7169 56.4889 43.6039 56.4911 43.1532 54.9994L39.0176 41.3134Z" fill="#E6AD72"/>
      <g style={{mixBlendMode: "plus-lighter"}} filter="url(#filter0_f_293_40464)">
        <path d="M39.0176 41.3134C38.6139 39.9773 40.0215 38.8167 41.2561 39.4677L53.9026 46.1351C55.2812 46.8619 54.8762 48.9358 53.3255 49.0906L48.8164 49.5407C48.1825 49.604 47.6494 50.0435 47.4664 50.6538L46.1645 54.9961C45.7169 56.4889 43.6039 56.4911 43.1532 54.9994L39.0176 41.3134Z" fill="#E6AD72" fillOpacity="0.4"/>
      </g>
      <g style={{mixBlendMode: "plus-lighter"}} filter="url(#filter1_f_293_40464)">
        <path d="M39.0176 41.3134C38.6139 39.9773 40.0215 38.8167 41.2561 39.4677L53.9026 46.1351C55.2812 46.8619 54.8762 48.9358 53.3255 49.0906L48.8164 49.5407C48.1825 49.604 47.6494 50.0435 47.4664 50.6538L46.1645 54.9961C45.7169 56.4889 43.6039 56.4911 43.1532 54.9994L39.0176 41.3134Z" fill="#E6AD72" fillOpacity="0.4"/>
      </g>
      <defs>
        <filter id="filter0_f_293_40464" x="32.0288" y="32.363" width="29.6319" height="30.6725" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="3.45925" result="effect1_foregroundBlur_293_40464"/>
        </filter>
        <filter id="filter1_f_293_40464" x="0.468166" y="0.802395" width="92.7531" height="93.7936" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="19.2395" result="effect1_foregroundBlur_293_40464"/>
        </filter>
      </defs>
    </svg>
  );
};
