import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  //const {themeClasses} = useTheme()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Dynamic theme classes similar to Google Keep component
  
  const themeClasses = {
    mainBg: darkMode ? 'bg-gray-900' : 'bg-gray-100',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    textColor: darkMode ? 'text-gray-200' : 'text-gray-800',
    secondaryText: darkMode ? 'text-gray-400' : 'text-gray-500',
    inputBg: darkMode ? 'bg-gray-700' : 'bg-gray-50',
    inputBorder: darkMode ? 'border-gray-600' : 'border-gray-300',
    inputFocus: darkMode ? 'focus:border-amber-500' : 'focus:border-amber-400',
    buttonBg: 'bg-amber-400 hover:bg-amber-500',
    buttonText: 'text-gray-900',
    linkColor: darkMode ? 'text-amber-400' : 'text-amber-500',
    iconColor: darkMode ? 'text-gray-400' : 'text-gray-500',
  };
  
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${themeClasses.mainBg} transition-colors duration-200`}>
      {/* Toggle dark mode button */}
      <button 
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}
      >
        {darkMode ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className={themeClasses.iconColor}>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className={themeClasses.iconColor}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <div className={`w-full max-w-md ${themeClasses.cardBg} rounded-lg shadow-lg overflow-hidden transition-colors duration-200`}>
        {/* Header with logo */}
        <div className="p-6 flex flex-col items-center">
          <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
          </div>
          <h1 className={`text-2xl font-medium ${themeClasses.textColor}`}>Sign in to Keep</h1>
          <p className={`mt-2 ${themeClasses.secondaryText}`}>Access your notes anywhere, anytime</p>
        </div>

        {/* Login form */}
        <div className="px-6 pt-2 pb-8">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className={`block mb-2 text-sm font-medium ${themeClasses.textColor}`}>
                Email address
              </label>
              <div className={`flex items-center ${themeClasses.inputBg} ${themeClasses.inputBorder} border rounded-lg overflow-hidden`}>
                <span className="p-2">
                  <Mail size={20} className={themeClasses.iconColor} />
                </span>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-2 ${themeClasses.inputBg} ${themeClasses.textColor} outline-none`}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className={`block mb-2 text-sm font-medium ${themeClasses.textColor}`}>
                Password
              </label>
              <div className={`flex items-center ${themeClasses.inputBg} ${themeClasses.inputBorder} border rounded-lg overflow-hidden`}>
                <span className="p-2">
                  <Lock size={20} className={themeClasses.iconColor} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full p-2 ${themeClasses.inputBg} ${themeClasses.textColor} outline-none`}
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  className="p-2"
                >
                  {showPassword ? 
                    <EyeOff size={20} className={themeClasses.iconColor} /> : 
                    <Eye size={20} className={themeClasses.iconColor} />
                  }
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 accent-amber-400"
                />
                <label htmlFor="remember-me" className={`ml-2 text-sm ${themeClasses.secondaryText}`}>
                  Remember me
                </label>
              </div>
              <a href="#" className={`text-sm font-medium ${themeClasses.linkColor} hover:underline`}>
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-lg font-medium ${themeClasses.buttonBg} ${themeClasses.buttonText} focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 transition-colors duration-200`}
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className={themeClasses.secondaryText}>
              Don't have an account?{' '}
              <Link to={'/signup'}  className={`font-medium ${themeClasses.linkColor} hover:underline`}>
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className={`py-4 px-6 text-center border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-xs ${themeClasses.secondaryText}`}>
            &copy; 2025 Keep • <a href="#" className={`${themeClasses.linkColor} hover:underline`}>Privacy</a> • <a href="#" className={`${themeClasses.linkColor} hover:underline`}>Terms</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;