import React from 'react';
import { Card } from './Card';
import { Inbox } from 'lucide-react';

export const EmptyState = ({ title, message, action, icon: Icon = Inbox, className = '' }) => {
  return (
    <Card className={`flex flex-col items-center justify-center text-center p-8 ${className}`}>
      <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center mb-4 text-text-tertiary">
        <Icon size={32} />
      </div>
      <h3 className="text-h3 text-text-primary mb-2">{title}</h3>
      <p className="text-body text-text-secondary max-w-sm mb-6">{message}</p>
      {action && <div>{action}</div>}
    </Card>
  );
};
