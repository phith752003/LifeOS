import React, { useState } from 'react';
import { Header } from './Header';

export const MainLayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <Header onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-border z-dropdown shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#dashboard" className="text-body font-medium text-text-primary" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
            <a href="#finances" className="text-body font-medium text-text-secondary" onClick={() => setMobileMenuOpen(false)}>Finances</a>
            <a href="#habits" className="text-body font-medium text-text-secondary" onClick={() => setMobileMenuOpen(false)}>Habits</a>
            <a href="#planner" className="text-body font-medium text-text-secondary" onClick={() => setMobileMenuOpen(false)}>Planner</a>
          </nav>
        </div>
      )}

      {/* Main Content Area: Bento Grid Container */}
      <main className="flex-1 p-4 md:p-8 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-min">
          {children}
        </div>
      </main>
    </div>
  );
};
