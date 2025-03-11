import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GoogleKeepLanding = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between w-full px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
            <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" />
          </svg>
          <span className="font-medium text-lg text-gray-800">Notekeeper</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">About</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Features</button>
          <button onClick={()=>navigate('/login')} className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-16 max-w-full mx-auto">
        <div className="md:w-1/2 mb-10 md:mb-0 md:px-10 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Capture your thoughts, <span className="text-yellow-500">anytime, anywhere</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A simple and elegant note-taking app that helps you organize your ideas, create lists, and store important information.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button 
              className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition duration-200 flex-shrink-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={()=>navigate('/signup')}
            >
              Get Started Free
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">No credit card required. Free forever.</p>
        </div>

        {/* Note Cards Preview */}
        <div className="md:w-1/2 relative md:px-10 lg:px-16">
          <div className="w-64 h-48 bg-white rounded-lg shadow-lg absolute -top-6 -left-6 transform rotate-6 z-10 p-4 border-t-4 border-blue-400">
            <h3 className="font-medium mb-2">Shopping List</h3>
            <ul className="text-sm text-gray-700">
              <li className="flex items-center mb-1">
                <span className="w-4 h-4 border border-gray-400 rounded-full mr-2"></span>
                Milk
              </li>
              <li className="flex items-center mb-1">
                <span className="w-4 h-4 border border-gray-400 rounded-full mr-2"></span>
                Eggs
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 border border-gray-400 rounded-full mr-2"></span>
                Bread
              </li>
            </ul>
          </div>
          <div className="w-64 h-48 bg-white rounded-lg shadow-lg absolute top-8 left-12 transform -rotate-3 z-20 p-4 border-t-4 border-green-400">
            <h3 className="font-medium mb-2">Project Ideas</h3>
            <p className="text-sm text-gray-700">
              Build a garden planter box for herbs and vegetables. Research best materials and designs.
            </p>
          </div>
          <div className="w-64 h-48 bg-white rounded-lg shadow-lg relative top-16 left-6 z-30 p-4 border-t-4 border-yellow-400">
            <h3 className="font-medium mb-2">Meeting Notes</h3>
            <p className="text-sm text-gray-700">
              Discuss Q3 goals with team. Review last quarter's metrics and set new targets.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="w-full mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Features You'll Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Organize with Labels</h3>
              <p className="text-gray-600">
                Keep your notes organized with customizable labels and categories.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Reminders & Alerts</h3>
              <p className="text-gray-600">
                Never miss important deadlines with customizable reminders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Sync Across Devices</h3>
              <p className="text-gray-600">
                Access your notes anywhere with seamless syncing across all your devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of users who organize their thoughts with Notekeeper.
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition duration-200">
            Create Your Free Account
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-100 py-8 mt-auto">
        <div className="w-full mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" />
              </svg>
              <span className="font-medium text-gray-800">Notekeeper</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Help</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Notekeeper. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleKeepLanding;