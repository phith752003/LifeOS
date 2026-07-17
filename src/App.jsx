import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import { mockUser, mockWeather, mockGoal, mockFinancialData, mockHabits, mockTasks, mockAnalytics } from './utils/mockData';

// UI Kit imports
import { Skeleton } from './components/common/Skeleton';
import { MainLayout } from './components/layout/MainLayout';
import { Card } from './components/common/Card';

import { CommandCenter } from './components/dashboard/CommandCenter';
import { FinancialHub } from './components/dashboard/FinancialHub';

import { HabitTracker } from './components/dashboard/HabitTracker';
import { TimePlanner } from './components/dashboard/TimePlanner';
import { AnalyticsDashboard } from './components/dashboard/AnalyticsDashboard';

export const DataContext = React.createContext(null);

const Dashboard = () => {
  return (
    <MainLayout>
      {/* CommandCenter (Phase 5): 8 cols */}
      <div className="col-span-1 md:col-span-2 lg:col-span-8">
        <CommandCenter />
      </div>

      {/* FinancialHub (Phase 5): 4 cols */}
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        <FinancialHub />
      </div>

      {/* TimePlanner (Phase 6): 6 cols */}
      <div className="col-span-1 md:col-span-2 lg:col-span-6">
        <TimePlanner />
      </div>

      {/* HabitTracker (Phase 6): 6 cols */}
      <div className="col-span-1 md:col-span-2 lg:col-span-6">
        <HabitTracker />
      </div>

      {/* AnalyticsDashboard (Phase 7): 12 cols */}
      <div className="col-span-1 md:col-span-2 lg:col-span-12">
        <AnalyticsDashboard />
      </div>

    </MainLayout>
  );
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        user: mockUser,
        weather: mockWeather,
        goal: mockGoal,
        financial: mockFinancialData,
        habits: mockHabits,
        tasks: mockTasks,
        analytics: mockAnalytics
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <ToastProvider>
        <DataContext.Provider value={{ data, setData }}>
          {!data ? (
            <div className="min-h-screen bg-bg text-text-primary flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <Skeleton variant="circular" className="w-12 h-12" />
                <p className="text-text-secondary animate-pulse text-body">Loading LifeOS...</p>
              </div>
            </div>
          ) : (
            <Dashboard />
          )}
        </DataContext.Provider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
