import React from 'react';
import { Card } from './Card';
import { AnimatedCounter } from './AnimatedCounter';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const MetricCard = ({ title, value, formatter, trend, trendValue, icon: Icon, className = '' }) => {
  const renderTrend = () => {
    if (!trend) return null;
    const isUp = trend === 'up';
    const isNeutral = trend === 'neutral';
    const TrendIcon = isUp ? TrendingUp : isNeutral ? Minus : TrendingDown;
    const colorClass = isUp ? 'text-success' : isNeutral ? 'text-text-secondary' : 'text-danger';

    return (
      <div className={`flex items-center gap-1 text-caption font-medium ${colorClass}`}>
        <TrendIcon size={14} />
        <span>{trendValue}</span>
      </div>
    );
  };

  return (
    <Card className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between text-text-secondary">
        <span className="text-body font-medium">{title}</span>
        {Icon && <Icon size={18} />}
      </div>
      <div className="flex items-baseline justify-between mt-1">
        <AnimatedCounter 
          value={value} 
          formatter={formatter} 
          className="text-h2 text-text-primary" 
        />
        {renderTrend()}
      </div>
    </Card>
  );
};
