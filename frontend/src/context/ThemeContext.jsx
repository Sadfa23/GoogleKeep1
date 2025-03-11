import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Dynamic theme classes
  const themeClasses = {
    mainBg: darkMode ? 'bg-gray-900' : 'bg-white',
    textColor: darkMode ? 'text-gray-200' : 'text-gray-800',
    secondaryText: darkMode ? 'text-gray-400' : 'text-gray-500',
    headerBorder: darkMode ? 'border-gray-700' : 'border-gray-200',
    sidebarBorder: darkMode ? 'border-gray-700' : 'border-r',
    searchBg: darkMode ? 'bg-gray-800' : 'bg-gray-100',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    shadowColor: darkMode ? 'shadow-gray-900' : 'shadow-sm',
    hoverBg: darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
    iconColor: darkMode ? 'text-gray-400' : 'text-gray-600',
    selectBg: darkMode ? 'bg-gray-800' : 'bg-amber-50',
    selectText: darkMode ? 'text-amber-400' : 'text-gray-800',
    emptyStateBg: darkMode ? 'bg-gray-800' : 'bg-gray-100',
    emptyStateIcon: darkMode ? 'text-gray-600' : 'text-gray-300',
    inputBg: darkMode ? 'bg-gray-700' : 'bg-gray-50',
    inputBorder: darkMode ? 'border-gray-600' : 'border-gray-300',
    inputFocus: darkMode ? 'focus:border-amber-500' : 'focus:border-amber-400',
    buttonBg: 'bg-amber-400 hover:bg-amber-500',
    buttonText: 'text-gray-900',
    linkColor: darkMode ? 'text-amber-400' : 'text-amber-500',
    
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
