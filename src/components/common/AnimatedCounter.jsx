import React from 'react';
import { useCountAnimation } from '../../hooks/useCountAnimation';

export const AnimatedCounter = ({ value, formatter, className = '' }) => {
  const ref = useCountAnimation(value, formatter);

  return (
    <span ref={ref} className={className}>
      {formatter ? formatter(0) : 0}
    </span>
  );
};
