/*
// Theme context for managing dark mode across components
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
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Header Component
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

// Search Bar Component
const SearchBar = () => {
  const { themeClasses } = useTheme();
  
  return (
    <div className={`flex items-center ${themeClasses.searchBg} rounded-lg px-4 py-2 ml-10 flex-grow max-w-3xl`}>
      <Search size={20} className={themeClasses.secondaryText + " mr-2"} />
      <span className={themeClasses.secondaryText}>Search</span>
    </div>
  );
};

// Header Button Component
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

// Sidebar Component
const Sidebar = () => {
  const { themeClasses } = useTheme();
  
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

// Sidebar Item Component
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

// Note Input Component
const NoteInput = () => {
  const { themeClasses } = useTheme();
  
  return (
    <div className={`w-full max-w-md ${themeClasses.cardBg} rounded-lg shadow ${themeClasses.shadowColor} mb-8 px-4 py-3 flex items-center`}>
      <span className={themeClasses.secondaryText}>Take a note...</span>
      <div className="ml-auto flex">
        <NoteInputButton 
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
              <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" />
            </svg>
          } 
        />
        <NoteInputButton 
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z" />
            </svg>
          } 
        />
        <NoteInputButton 
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
            </svg>
          } 
        />
      </div>
    </div>
  );
};

// Note Input Button Component
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

// Empty State Component
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

// Footer Component
const Footer = () => {
  const { themeClasses } = useTheme();
  
  return (
    <div className={`py-2 px-4 text-xs ${themeClasses.secondaryText}`}>
      Open-source licences
    </div>
  );
};

// Main Component
const MainContent = () => {
  return (
    <div className="flex-1 p-4 flex flex-col items-center">
      <NoteInput />
      <EmptyState />
    </div>
  );
};
*/
// Main App Component