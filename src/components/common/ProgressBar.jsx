import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ProgressBar = ({ progress, className = '', height = 'h-2', variant = 'primary' }) => {
  const barRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const variantStyles = {
    primary: 'bg-palette-3',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger'
  };

  useEffect(() => {
    if (!barRef.current) return;
    
    if (reducedMotion) {
      barRef.current.style.width = `${progress}%`;
      return;
    }

    anime({
      targets: barRef.current,
      width: `${progress}%`,
      duration: 800,
      easing: 'easeOutExpo'
    });
  }, [progress, reducedMotion]);

  return (
    <div className={`w-full bg-border rounded-full overflow-hidden ${height} ${className}`}>
      <div 
        ref={barRef}
        className={`h-full rounded-full ${variantStyles[variant] || variantStyles.primary}`}
        style={{ width: '0%' }}
      />
    </div>
  );
};
