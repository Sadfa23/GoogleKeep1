import React from 'react';
const NoteItem = ({ note, onDelete, onEdit }) => {

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <span className="flex-1">{note.note}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(note.id)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;