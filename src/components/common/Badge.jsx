import React from 'react';

export const Badge = ({ children, variant = 'info', className = '' }) => {
  const variantStyles = {
    info: 'bg-info/10 text-info',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    danger: 'bg-danger/10 text-danger',
    default: 'bg-border text-text-secondary'
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-caption font-medium ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {children}
    </span>
  );
};
