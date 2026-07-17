import React from 'react';

export const Skeleton = ({ className = '', variant = 'rectangular' }) => {
  const variantStyles = {
    circular: 'rounded-full',
    rectangular: 'rounded-md',
    text: 'rounded-sm'
  };

  return (
    <div className={`bg-border animate-pulse ${variantStyles[variant]} ${className}`} />
  );
};
