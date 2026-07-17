import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import anime from 'animejs';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ErrorState = ({ title = "Something went wrong", message, onRetry, className = '' }) => {
  const iconRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !iconRef.current) return;
    anime({
      targets: iconRef.current,
      rotate: [-10, 10, -10, 10, 0],
      duration: 600,
      easing: 'easeOutExpo',
      delay: 200
    });
  }, [reducedMotion]);

  return (
    <Card className={`flex flex-col items-center justify-center text-center p-8 border-danger/30 bg-danger/5 ${className}`}>
      <div ref={iconRef} className="w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center mb-4 text-danger">
        <AlertTriangle size={32} />
      </div>
      <h3 className="text-h3 text-danger mb-2">{title}</h3>
      <p className="text-body text-text-secondary max-w-sm mb-6">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-body font-medium hover:bg-surface-hover transition-colors"
        >
          <RefreshCw size={16} />
          <span>Try Again</span>
        </button>
      )}
    </Card>
  );
};
