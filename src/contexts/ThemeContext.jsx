import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('lifeos-theme');
    if (saved) return JSON.parse(saved);
    return { palette: 'deep-sea-mint', mode: 'dark' };
  });

  useEffect(() => {
    localStorage.setItem('lifeos-theme', JSON.stringify(theme));
    document.documentElement.setAttribute('data-theme', theme.mode);
    document.documentElement.setAttribute('data-palette', theme.palette);
  }, [theme]);

  const toggleMode = () => {
    setTheme(prev => ({ ...prev, mode: prev.mode === 'light' ? 'dark' : 'light' }));
  };

  const setPalette = (palette) => {
    setTheme(prev => ({ ...prev, palette }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
