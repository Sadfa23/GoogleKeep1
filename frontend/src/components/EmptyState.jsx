import React from 'react';
import { Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


const EmptyState = () => {
    const { themeClasses } = useTheme();
    
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <div className={`w-24 h-24 rounded-full ${themeClasses.emptyStateBg} flex items-center justify-center mb-6`}>
          <Lightbulb size={40} className={themeClasses.emptyStateIcon} />
        </div>
        <p className={themeClasses.secondaryText + " text-lg"}>Notes that you add appear here</p>
      </div>
    );
  };

export default EmptyState