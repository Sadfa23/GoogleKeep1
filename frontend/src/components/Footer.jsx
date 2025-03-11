import React from 'react';
import { useTheme } from '../context/ThemeContext';


const Footer = () => {
  const { themeClasses } = useTheme();
  
  return (
    <div className={`py-2 px-4 text-xs ${themeClasses.secondaryText}`}>
      Open-source licences
    </div>
  );
};

export default Footer
