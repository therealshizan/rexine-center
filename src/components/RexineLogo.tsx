import React from 'react';

interface RexineLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  showSubtitle?: boolean;
}

export const RexineLogo: React.FC<RexineLogoProps> = ({
  variant = 'dark',
  className = 'h-9',
  showSubtitle = true,
}) => {
  const textColor = variant === 'light' ? '#FFFFFF' : '#111111';
  const copperColor = '#C67C4E';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        viewBox="0 0 320 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full"
      >
        {/* RE */}
        <text
          x="0"
          y="46"
          fill={textColor}
          fontSize="50"
          fontWeight="900"
          fontFamily="Montserrat, system-ui, sans-serif"
          letterSpacing="-1.5"
        >
          RE
        </text>

        {/* X - Left solid diagonal line */}
        <path
          d="M 68 46 L 86 10 L 102 10 L 84 46 Z"
          fill={textColor}
        />

        {/* X - Right halftone dot matrix forming the arrow */}
        {/* Column 1 */}
        <circle cx="86" cy="28" r="2" fill={copperColor} />
        
        {/* Column 2 */}
        <circle cx="90" cy="24" r="2" fill={copperColor} />
        <circle cx="90" cy="28" r="2" fill={copperColor} />
        <circle cx="90" cy="32" r="2" fill={copperColor} />

        {/* Column 3 */}
        <circle cx="94" cy="20" r="2" fill={copperColor} />
        <circle cx="94" cy="24" r="2" fill={copperColor} />
        <circle cx="94" cy="28" r="2" fill={copperColor} />
        <circle cx="94" cy="32" r="2" fill={copperColor} />
        <circle cx="94" cy="36" r="2" fill={copperColor} />

        {/* Column 4 */}
        <circle cx="98" cy="16" r="2" fill={copperColor} />
        <circle cx="98" cy="20" r="2" fill={copperColor} />
        <circle cx="98" cy="24" r="2" fill={copperColor} />
        <circle cx="98" cy="28" r="2" fill={copperColor} />
        <circle cx="98" cy="32" r="2" fill={copperColor} />
        <circle cx="98" cy="36" r="2" fill={copperColor} />
        <circle cx="98" cy="40" r="2" fill={copperColor} />

        {/* Column 5 */}
        <circle cx="102" cy="12" r="2" fill={copperColor} />
        <circle cx="102" cy="16" r="2" fill={copperColor} />
        <circle cx="102" cy="20" r="2" fill={copperColor} />
        <circle cx="102" cy="24" r="2" fill={copperColor} />
        <circle cx="102" cy="28" r="2" fill={copperColor} />
        <circle cx="102" cy="32" r="2" fill={copperColor} />
        <circle cx="102" cy="36" r="2" fill={copperColor} />
        <circle cx="102" cy="40" r="2" fill={copperColor} />
        <circle cx="102" cy="44" r="2" fill={copperColor} />

        {/* Column 6 (Arrow peak) */}
        <circle cx="106" cy="16" r="2" fill={copperColor} />
        <circle cx="106" cy="20" r="2" fill={copperColor} />
        <circle cx="106" cy="24" r="2" fill={copperColor} />
        <circle cx="106" cy="28" r="2" fill={copperColor} />
        <circle cx="106" cy="32" r="2" fill={copperColor} />
        <circle cx="106" cy="36" r="2" fill={copperColor} />
        <circle cx="106" cy="40" r="2" fill={copperColor} />

        {/* Column 7 */}
        <circle cx="110" cy="20" r="2" fill={copperColor} />
        <circle cx="110" cy="24" r="2" fill={copperColor} />
        <circle cx="110" cy="28" r="2" fill={copperColor} />
        <circle cx="110" cy="32" r="2" fill={copperColor} />
        <circle cx="110" cy="36" r="2" fill={copperColor} />

        {/* Column 8 */}
        <circle cx="114" cy="24" r="2" fill={copperColor} />
        <circle cx="114" cy="28" r="2" fill={copperColor} />
        <circle cx="114" cy="32" r="2" fill={copperColor} />

        {/* Column 9 */}
        <circle cx="118" cy="28" r="2" fill={copperColor} />

        {/* INE */}
        <text
          x="126"
          y="46"
          fill={textColor}
          fontSize="50"
          fontWeight="900"
          fontFamily="Montserrat, system-ui, sans-serif"
          letterSpacing="-1.5"
        >
          INE
        </text>

        {/* CENTRE */}
        {showSubtitle && (
          <text
            x="26"
            y="66"
            fill={textColor}
            fontSize="14"
            fontWeight="800"
            fontFamily="Montserrat, system-ui, sans-serif"
            letterSpacing="14"
          >
            CENTRE
          </text>
        )}
      </svg>
    </div>
  );
};
