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
      <img src="src/assets/images/rexine-logo.png" width="150px" height="150px" />
    </div>
  );
};
