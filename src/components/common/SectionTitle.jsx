import React from 'react';

export const SectionTitle = ({ title, subtitle, action, className = '' }) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div>
        <h2 className="text-h3 text-text-primary">{title}</h2>
        {subtitle && <p className="text-body text-text-secondary mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
