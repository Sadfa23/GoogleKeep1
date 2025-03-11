import React from 'react'
import { useTheme } from "../context/ThemeContext";

const SidebarItem = ({ icon, label, isSelected = false }) => {
    const { themeClasses } = useTheme();
    
    const baseClasses = `flex items-center px-6 py-3 text-sm font-medium rounded-r-full`;
    const selectedClasses = isSelected 
      ? `${themeClasses.selectBg} ${themeClasses.selectText}` 
      : `${themeClasses.textColor} ${themeClasses.hoverBg}`;
    
    return (
      <div className={`${baseClasses} ${selectedClasses}`}>
        <span className="mr-8">{icon}</span>
        <span>{label}</span>
      </div>
    );
  };

export default SidebarItem