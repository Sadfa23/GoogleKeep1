import React from 'react';
import { Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SidebarItem from './SidebarItem';
import CreateNote from './CreateNote';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const { themeClasses } = useTheme();
    const navigate = useNavigate()
    
    return (
      <div className={`w-64 ${themeClasses.sidebarBorder}`}>
        <div className="py-1">
          <SidebarItem 
            icon={<Lightbulb size={18} />} 
            label="Notes" 
            isSelected={true}
          />
          <SidebarItem 
            icon={
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" />
              </svg>
            } 
            label="Reminders" 
          />
          <SidebarItem 
            icon={
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" />
              </svg>
            } 
            label="Edit labels" 
          />
          <SidebarItem 
            icon={
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5z" />
              </svg>
            } 
            label="Archive" 
          />
          <SidebarItem 
            icon={
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z" />
                <path d="M9 8h2v9H9zm4 0h2v9h-2z" />
              </svg>
            } 
            label="Bin" 
          />
        </div>
      </div>
    );
  };

export default Sidebar