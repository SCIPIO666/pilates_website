'use client';

import React from 'react';

export interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'white' | 'olive' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  href,
  variant = 'olive',
  size = 'md',
  className = '',
  onClick,
}) => {
  const combinedClasses = `btn-cta btn-cta-${variant} btn-cta-${size} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        <span className="btn-cta-span">{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} onClick={onClick}>
      <span className="btn-cta-span">{children}</span>
    </button>
  );
};

export default CtaButton;
