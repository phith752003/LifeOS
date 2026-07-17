import React, { useContext, useEffect } from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { MetricCard } from '../common/MetricCard';
import { ProgressBar } from '../common/ProgressBar';
import { DataContext } from '../../App';
import { ArrowDownRight, ArrowUpRight, PiggyBank } from 'lucide-react';
import { useStagger } from '../../hooks/useStagger';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import anime from 'animejs';

export const FinancialHub = () => {
  const { data } = useContext(DataContext);
  const fin = data.financial;
  const reducedMotion = useReducedMotion();

  useStagger('.fin-anim-item');

  useEffect(() => {
    if (reducedMotion) return;
    anime({
      targets: '.fin-heatmap-cell',
      opacity: [0, 1],
      scale: [0.5, 1],
      delay: anime.stagger(2, {from: 'last'}),
      duration: 400,
      easing: 'easeOutExpo'
    });
  }, [reducedMotion]);

  const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="flex flex-col gap-6 h-full">
      <SectionTitle title="Financial Hub" className="fin-anim-item mb-0" />
      
      <div className="grid grid-cols-2 gap-4 fin-anim-item">
        <MetricCard 
          title="Income" 
          value={fin.income} 
          formatter={formatCurrency}
          icon={ArrowUpRight}
        />
        <MetricCard 
          title="Expense" 
          value={fin.expense} 
          formatter={formatCurrency}
          icon={ArrowDownRight}
        />
      </div>

      <Card className="flex-1 fin-anim-item flex flex-col justify-center">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <PiggyBank size={18} className="text-palette-2" />
            <span className="font-medium">Emergency Fund</span>
          </div>
          <span className="text-caption font-bold text-success">{fin.emergencyFund.percentage}%</span>
        </div>
        <ProgressBar progress={fin.emergencyFund.percentage} variant="success" height="h-3" />
        <div className="flex justify-between mt-2 text-caption text-text-secondary">
          <span>{formatCurrency(fin.emergencyFund.current)}</span>
          <span>Target: {formatCurrency(fin.emergencyFund.target)}</span>
        </div>
      </Card>

      <Card className="fin-anim-item">
        <h4 className="text-body font-medium mb-3">Activity Heatmap</h4>
        <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
          <div className="grid grid-rows-7 grid-flow-col gap-1">
            {fin.heatmap.cells.map((cell, idx) => {
              let bgColor = 'bg-surface-hover';
              if (cell.level === 1) bgColor = 'bg-palette-3/30';
              if (cell.level === 2) bgColor = 'bg-palette-3/60';
              if (cell.level >= 3) bgColor = 'bg-palette-3';

              return (
                <div 
                  key={idx} 
                  title={`${cell.date}: ${formatCurrency(cell.value)}`}
                  className={`w-3 h-3 rounded-sm fin-heatmap-cell ${bgColor} transition-colors hover:ring-2 ring-border opacity-0`}
                />
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};
