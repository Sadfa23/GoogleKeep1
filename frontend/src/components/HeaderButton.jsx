import React from 'react';
import { useTheme } from '../context/ThemeContext';

const HeaderButton = ({ icon, onClick }) => {
  const { themeClasses } = useTheme();
  
  return (
    <button 
      className={`p-2 mx-1 rounded-full ${themeClasses.hoverBg}`}
      onClick={onClick}
    >
      <span className={themeClasses.iconColor}>{icon}</span>
    </button>
  );
};

export default HeaderButton