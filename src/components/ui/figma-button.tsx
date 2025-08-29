import React from 'react';

interface FigmaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function FigmaButton({ children, onClick, className = '' }: FigmaButtonProps) {
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
                <img 
                  alt="" 
                  className="block max-w-none size-full" 
                  src="http://localhost:3845/assets/6721e33edd1c6a03d1fc19fd497bf07d7a1d5cdd.svg" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute flex items-center justify-center figma-button-decorative-2">
          <div className="figma-button-decorative-2-inner">
            <div className="figma-button-decorative-2-image">
              <div className="figma-button-decorative-2-inset">
                <img 
                  alt="" 
                  className="block max-w-none size-full" 
                  src="http://localhost:3845/assets/a5a2d8e792bad3b478b49a1fd8b50e4b5203f91b.svg" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute flex items-center justify-center figma-button-decorative-3">
          <div className="figma-button-decorative-3-inner">
            <div className="figma-button-decorative-3-image">
              <div className="figma-button-decorative-3-inset">
                <img 
                  alt="" 
                  className="block max-w-none size-full" 
                  src="http://localhost:3845/assets/aa7c413bcddc0cc3f43507241e274422c25edc39.svg" 
                />
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
