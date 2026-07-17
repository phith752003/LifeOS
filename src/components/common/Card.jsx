import React, { useRef } from 'react';
import anime from 'animejs';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Card = ({ children, className = '', hoverable = false, padding = 'p-6', ...props }) => {
  const cardRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const handleMouseEnter = () => {
    if (!hoverable || reducedMotion) return;
    anime({
      targets: cardRef.current,
      translateY: -4,
      boxShadow: 'var(--shadow-lg)',
      duration: 300,
      easing: 'easeOutExpo'
    });
  };

  const handleMouseLeave = () => {
    if (!hoverable || reducedMotion) return;
    anime({
      targets: cardRef.current,
      translateY: 0,
      boxShadow: 'var(--shadow-sm)',
      duration: 300,
      easing: 'easeOutExpo'
    });
  };

  return (
    <div
      ref={cardRef}
      className={`bg-surface rounded-xl shadow-sm border border-border ${hoverable ? 'cursor-pointer hover:border-border-hover' : ''} ${padding} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};
