import React from 'react';

interface ViziaLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'manifesto';
  showSlogan?: boolean;
  animated?: boolean;
}

export const ViziaLogo: React.FC<ViziaLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSlogan = false,
  animated = false,
}) => {
  // Brand color tokens directly derived from the official logo
  const turquoise = '#18C5BB';
  const navy = variant === 'light' ? '#FFFFFF' : '#0E2A43';
  const sloganColor = variant === 'light' ? 'rgba(255, 255, 255, 0.75)' : '#66737A';

  // Mark dimensions scale
  const markSizeMap = {
    sm: 28,
    md: 36,
    lg: 48,
    hero: 64,
    manifesto: 140,
  };

  const markSize = markSizeMap[size];

  // SVG Mark: 6 square pixels
  // 1: small top-left (turquoise)
  // 2: medium stepped down-right (turquoise)
  // 3: 2x2 top-left (turquoise)
  // 4: 2x2 top-right (navy / white)
  // 5: 2x2 bottom-left (navy / white)
  // 6: 2x2 bottom-right (navy / white)
  const MarkSVG = (
    <svg
      width={markSize}
      height={markSize}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${animated ? 'animate-pulse' : ''}`}
      aria-label="VIZIA Isotipo"
    >
      {/* Pixel 1: Smallest top-left pixel */}
      <rect
        x="16"
        y="16"
        width="22"
        height="22"
        fill={turquoise}
        className={animated ? 'transition-all duration-700 delay-100' : ''}
      />

      {/* Pixel 2: Intermediate stepped pixel */}
      <rect
        x="44"
        y="40"
        width="30"
        height="30"
        fill={turquoise}
        className={animated ? 'transition-all duration-700 delay-300' : ''}
      />

      {/* 2x2 Cluster */}
      {/* Pixel 3: Top-left of 2x2 block (Turquoise) */}
      <rect
        x="80"
        y="75"
        width="46"
        height="46"
        fill={turquoise}
        className={animated ? 'transition-all duration-700 delay-500' : ''}
      />

      {/* Pixel 4: Top-right of 2x2 block (Navy / Light) */}
      <rect
        x="132"
        y="75"
        width="46"
        height="46"
        fill={navy}
        className={animated ? 'transition-all duration-700 delay-700' : ''}
      />

      {/* Pixel 5: Bottom-left of 2x2 block (Navy / Light) */}
      <rect
        x="80"
        y="127"
        width="46"
        height="46"
        fill={navy}
        className={animated ? 'transition-all duration-700 delay-700' : ''}
      />

      {/* Pixel 6: Bottom-right of 2x2 block (Navy / Light) */}
      <rect
        x="132"
        y="127"
        width="46"
        height="46"
        fill={navy}
        className={animated ? 'transition-all duration-700 delay-900' : ''}
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-flex items-center ${className}`}>{MarkSVG}</div>;
  }

  const textSizeClasses = {
    sm: 'text-lg tracking-[0.14em]',
    md: 'text-2xl tracking-[0.14em]',
    lg: 'text-3xl tracking-[0.15em]',
    hero: 'text-4xl tracking-[0.16em]',
    manifesto: 'text-6xl tracking-[0.18em]',
  };

  const sloganSizeClasses = {
    sm: 'text-[9px] tracking-[0.02em]',
    md: 'text-[11px] tracking-[0.02em]',
    lg: 'text-[13px] tracking-[0.03em]',
    hero: 'text-[14px] tracking-[0.03em]',
    manifesto: 'text-[20px] tracking-[0.04em]',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        {MarkSVG}
        <span
          className={`font-bold font-sans ${textSizeClasses[size]} leading-none`}
          style={{ color: navy }}
        >
          VIZIA
        </span>
      </div>

      {showSlogan && (
        <span
          className={`font-sans font-normal mt-1.5 ${sloganSizeClasses[size]}`}
          style={{ color: sloganColor }}
        >
          De un píxel a una decisión.
        </span>
      )}
    </div>
  );
};
