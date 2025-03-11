import React from 'react';
import { Menu, RefreshCw,Settings, Grid, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchBar from '../components/SearchBar'
import HeaderButton from '../components/HeaderButton'

const KeepHeader = () => {
    const { themeClasses, toggleDarkMode, darkMode } = useTheme();
    
    return (
      <div className={`flex items-center ${themeClasses.headerBorder} border-b h-16 px-4`}>
        <button className={`p-2 rounded-full ${themeClasses.hoverBg} mr-2`}>
          <Menu size={20} />
        </button>
        
        <div className="flex items-center">
          <div className="w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center mr-2">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
          </div>
          <span className={themeClasses.textColor + " text-xl"}>Keep</span>
        </div>
        
        <SearchBar />
        
        <div className="flex items-center ml-auto">
          <button 
            className={`p-2 mx-1 rounded-full ${themeClasses.hoverBg}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? 
              <Sun size={20} className={themeClasses.iconColor} /> : 
              <Moon size={20} className={themeClasses.iconColor} />
            }
          </button>
          <HeaderButton icon={<RefreshCw size={20} />} />
          <HeaderButton icon={<Settings size={20} />} />
          <HeaderButton icon={<Grid size={20} />} />
          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium ml-2">
            T
          </div>
        </div>
      </div>
    );
  };
  
export default KeepHeader