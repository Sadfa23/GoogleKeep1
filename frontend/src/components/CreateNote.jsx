import React, { useState } from 'react';

const CreateNote = () => {
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!note.trim()) return;
    
    setIsSubmitting(true);
    
    // Here you would typically send the note to your backend or state management
    console.log('Creating note:', note);
    
    // Simulate API request
    setTimeout(() => {
      setNote('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Create New Note</h2>
      
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
    </div>
  );
};

export default CreateNote;