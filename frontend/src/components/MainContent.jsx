import React from 'react';
import NoteInput from '../components/NoteInput'
import EmptyState from '../components/EmptyState'


const MainContent = () => {
    return (
      <div className="flex-1 p-4 flex flex-col items-center">
        <NoteInput />
        <EmptyState />
      </div>
    );
  };

export default MainContent
  