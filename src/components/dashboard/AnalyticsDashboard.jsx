import React, { useContext, useEffect, useRef } from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { DataContext } from '../../App';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { Activity, Brain, Flame, Info, TrendingUp, AlertCircle } from 'lucide-react';
import anime from 'animejs';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useStagger } from '../../hooks/useStagger';

export const AnalyticsDashboard = () => {
  const { data } = useContext(DataContext);
  const analytics = data.analytics;
  const reducedMotion = useReducedMotion();
  const svgRef = useRef(null);

  useStagger('.analytics-anim-item');

  useEffect(() => {
    if (reducedMotion) {
      if (svgRef.current) {
        const circle = svgRef.current.querySelector('.progress-ring');
        if (circle) circle.style.strokeDashoffset = 100 - analytics.completionRate;
      }
      const bars = document.querySelectorAll('.bar-chart-fill');
      bars.forEach(el => el.style.height = el.dataset.height);
      return;
    }

    // Bar chart animation
    anime({
      targets: '.bar-chart-fill',
      height: (el) => el.dataset.height,
      duration: 800,
      easing: 'easeOutElastic(1, .8)',
      delay: anime.stagger(50)
    });

    // Circular progress animation
    const circle = svgRef.current?.querySelector('.progress-ring');
    if (circle) {
      anime({
        targets: circle,
        strokeDashoffset: [100, 100 - analytics.completionRate],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 200
      });
    }
  }, [analytics, reducedMotion]);

  const getBurnoutColor = (score) => {
    if (score < 30) return 'text-success';
    if (score < 70) return 'text-warning';
    return 'text-danger';
  };

  const getInsightIcon = (type) => {
    if (type === 'positive') return <TrendingUp size={16} className="text-success" />;
    if (type === 'warning') return <AlertCircle size={16} className="text-warning" />;
    return <Info size={16} className="text-info" />;
  };

  return (
    <Card className="h-full flex flex-col">
      <SectionTitle title="Analytics & Insights" className="analytics-anim-item" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        {/* Left Column: Top Metrics */}
        <div className="flex flex-col justify-between gap-4 analytics-anim-item">
          <div className="bg-surface-hover p-4 rounded-xl flex items-center gap-4 border border-border">
            <div className="relative w-16 h-16 shrink-0" ref={svgRef}>
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path
                  className="text-border"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="progress-ring text-palette-3"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                  strokeDashoffset="100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-caption font-bold text-palette-3"><AnimatedCounter value={analytics.completionRate} />%</span>
              </div>
            </div>
            <div>
              <p className="text-body font-medium">Completion Rate</p>
              <p className="text-caption text-text-secondary">Overall efficiency</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-surface-hover p-4 rounded-xl border border-border flex-1">
              <div className="flex items-center gap-2 mb-2 text-text-secondary">
                <Brain size={16} />
                <span className="text-caption font-medium">Focus Score</span>
              </div>
              <p className="text-h2 text-text-primary"><AnimatedCounter value={analytics.focusScore} /></p>
            </div>
            <div className="bg-surface-hover p-4 rounded-xl border border-border flex-1">
              <div className="flex items-center gap-2 mb-2 text-text-secondary">
                <Flame size={16} />
                <span className="text-caption font-medium leading-tight">Burnout Risk</span>
              </div>
              <p className={`text-h2 ${getBurnoutColor(analytics.burnoutRisk)}`}><AnimatedCounter value={analytics.burnoutRisk} />%</p>
            </div>
          </div>
        </div>

        {/* Middle Column: Productivity Chart */}
        <div className="bg-surface-hover p-4 rounded-xl border border-border flex flex-col analytics-anim-item">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-text-secondary">
              <Activity size={16} />
              <span className="text-body font-medium text-text-primary">7-Day Productivity</span>
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between gap-2 h-32 px-2">
            {analytics.weekly.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 flex-1 group h-full justify-end">
                <div className="w-full bg-border rounded-t-sm h-[100px] relative overflow-hidden flex items-end">
                  <div 
                    className="bar-chart-fill w-full bg-palette-3 rounded-t-sm transition-colors group-hover:bg-palette-2"
                    data-height={`${day.productivityScore}%`}
                    style={{ height: '0%' }}
                  />
                </div>
                <span className="text-[10px] text-text-tertiary font-medium">{day.dayLabel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: AI Insights */}
        <div className="flex flex-col gap-3 analytics-anim-item min-h-[150px]">
          <h4 className="text-body font-medium">AI Insights</h4>
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-hide">
            {analytics.insights.map((insight, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-surface-hover border border-border flex items-start gap-3">
                <div className="mt-0.5 bg-surface p-1.5 rounded-md shadow-sm">
                  {getInsightIcon(insight.type)}
                </div>
                <div>
                  <p className="text-caption text-text-primary leading-relaxed">{insight.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Card>
  );
};
