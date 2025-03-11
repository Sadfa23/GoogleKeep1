import React from 'react';
import { useTheme } from '../context/ThemeContext';


const NoteInputButton = ({ icon, onClick }) => {
  const { themeClasses } = useTheme();
  
  return (
    <button 
      className={`p-2 ${themeClasses.iconColor}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default NoteInputButton