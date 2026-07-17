import React, { useState, useEffect, useContext } from 'react';
import { Card } from '../common/Card';
import { ProgressBar } from '../common/ProgressBar';
import { DataContext } from '../../App';
import { CloudSun, Target } from 'lucide-react';
import { useStagger } from '../../hooks/useStagger';

export const CommandCenter = () => {
  const { data } = useContext(DataContext);
  const [time, setTime] = useState(new Date());

  useStagger('.command-anim-item');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const daysLeft = Math.ceil((new Date(data.goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-palette-1/10 to-transparent border-palette-1/20 overflow-hidden relative" padding="p-6 md:p-8">
      <div className="command-anim-item z-10">
        <h2 className="text-display font-bold text-text-primary tracking-tight mb-2">
          {time.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
        </h2>
        <p className="text-h3 text-text-secondary">
          {getGreeting()}, <span className="text-palette-2">{data.user.name}</span>.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 mt-8 command-anim-item z-10">
        <div className="flex items-center gap-4 bg-surface/50 p-4 rounded-xl border border-border backdrop-blur-sm xl:w-1/3">
          <div className="w-12 h-12 rounded-full bg-palette-4/20 flex items-center justify-center text-palette-4 shrink-0">
            <CloudSun size={24} />
          </div>
          <div>
            <p className="text-caption text-text-secondary">{data.weather.city}</p>
            <p className="text-h3 font-semibold">{data.weather.temperature}°C</p>
          </div>
        </div>

        <div className="bg-surface/50 p-4 rounded-xl border border-border backdrop-blur-sm xl:w-2/3 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 text-body font-medium truncate pr-4">
              <Target size={18} className="text-palette-3 shrink-0" />
              <span className="truncate">{data.goal.title}</span>
            </div>
            <span className="text-caption font-bold text-palette-3 shrink-0">{daysLeft} days left</span>
          </div>
          <ProgressBar progress={data.goal.progress} variant="primary" />
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-palette-3/10 rounded-full blur-3xl pointer-events-none" />
    </Card>
  );
};
