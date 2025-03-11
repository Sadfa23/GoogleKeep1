import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Search } from 'lucide-react';
const SearchBar = () => {
    const { themeClasses } = useTheme();
    
    return (
      <div className={`flex items-center ${themeClasses.searchBg} rounded-lg px-4 py-2 ml-10 flex-grow max-w-3xl`}>
        <Search size={20} className={themeClasses.secondaryText + " mr-2"} />
        <span className={themeClasses.secondaryText}>Search</span>
      </div>
    );
  };

export default SearchBar