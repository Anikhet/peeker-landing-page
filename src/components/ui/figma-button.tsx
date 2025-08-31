import React from 'react';


interface FigmaButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function FigmaButton({ children, className = '' }: FigmaButtonProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Blur effect behind button */}
      <div className="absolute filter pointer-events-none figma-button-blur" />
      
      {/* Button background with gradient */}
      <div className="relative overflow-clip figma-button-container">
        {/* Inner button with shadow effects */}
        <div className="absolute figma-button-inner" />
        
        {/* Decorative elements */}
        <div className="absolute flex items-center justify-center figma-button-decorative-1">
          <div className="figma-button-decorative-1-inner">
            <div className="figma-button-decorative-1-image">
              <div className="figma-button-decorative-1-inset">
          
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute flex items-center justify-center figma-button-decorative-2">
          <div className="figma-button-decorative-2-inner">
            <div className="figma-button-decorative-2-image">
              <div className="figma-button-decorative-2-inset">
    
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute flex items-center justify-center figma-button-decorative-3">
          <div className="figma-button-decorative-3-inner">
            <div className="figma-button-decorative-3-image">
              <div className="figma-button-decorative-3-inset">

              </div>
            </div>
          </div>
        </div>
        
        {/* Button text - positioned exactly as in Figma */}
        <div className="absolute z-10 figma-button-text">
          <span className="figma-button-text-span">
            {children}
          </span>
        </div>
      </div>
    </div>
  );
}
