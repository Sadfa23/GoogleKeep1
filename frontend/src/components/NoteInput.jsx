import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import NoteInputButton from '../components/NoteInputButton'
import axios from 'axios';


const NoteInput = () => {
  const { themeClasses } = useTheme();
  const [note, setNote] = useState('')
  const [isSubmitting, setIsSubmitting] = useState('')

  const addTask = async () => {
    try {
      await axios.post('http://127.0.0.1:5000/create', {withCredentials:true});
      console.log('note added successfully')
    } catch (error) {
      console.log('Error creating a note from frontend', error)
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  
  return (
    <div className={`w-full max-w-md ${themeClasses.cardBg} rounded-lg shadow-xl ${themeClasses.shadowColor}  mb-8 px-4 py-3 flex items-center`}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your note here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[120px]"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !note.trim()}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 ${
            isSubmitting || !note.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Creating...' : 'Create Note'}
        </button>
      </form>
      <div className="ml-auto flex">
        <NoteInputButton 
          icon={
            <svg viewBox="0 0 24 24" width="20" height="20" fill="green">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
              <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" />
            </svg>
          } 
        />
      </div>
    </div>
  );
};

export default NoteInput