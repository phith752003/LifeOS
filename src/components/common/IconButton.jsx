import React from 'react';

export const IconButton = ({ icon: Icon, onClick, variant = 'ghost', className = '', ...props }) => {
  const baseStyles = "p-2 rounded-lg transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-palette-3";
  const variants = {
    ghost: "text-text-secondary hover:bg-surface-hover hover:text-text-primary",
    primary: "bg-palette-3 text-white hover:bg-palette-2 shadow-sm",
    danger: "text-danger hover:bg-danger/10"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.ghost} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
    </button>
  );
};
