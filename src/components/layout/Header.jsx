import React, { useContext } from 'react';
import { Moon, Sun, Menu, Bell } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { DataContext } from '../../App';
import { IconButton } from '../common/IconButton';

export const Header = ({ onMenuClick }) => {
  const { theme, toggleMode } = useTheme();
  const { data } = useContext(DataContext);
  const user = data?.user;

  return (
    <header className="sticky top-0 z-sticky bg-bg/80 backdrop-blur-md border-b border-border h-16 w-full flex items-center justify-between px-4 md:px-8 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <IconButton 
          icon={Menu} 
          onClick={onMenuClick} 
          className="md:hidden" 
          aria-label="Toggle menu"
        />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-palette-3 rounded-lg flex items-center justify-center text-white font-bold text-h3 shadow-sm">
            L
          </div>
          <span className="text-h3 text-text-primary hidden sm:block">LifeOS</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <a href="#dashboard" className="text-body font-medium text-text-primary hover:text-palette-3 transition-colors">Dashboard</a>
        <a href="#finances" className="text-body font-medium text-text-secondary hover:text-palette-3 transition-colors">Finances</a>
        <a href="#habits" className="text-body font-medium text-text-secondary hover:text-palette-3 transition-colors">Habits</a>
        <a href="#planner" className="text-body font-medium text-text-secondary hover:text-palette-3 transition-colors">Planner</a>
      </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <IconButton 
          icon={Bell} 
          aria-label="Notifications"
        />
        <IconButton 
          icon={theme.mode === 'light' ? Moon : Sun} 
          onClick={toggleMode} 
          aria-label="Toggle dark mode"
        />
        {user && (
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-border ml-2">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </header>
  );
};
