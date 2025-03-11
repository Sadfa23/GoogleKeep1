import React from 'react';

const EditTask = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    setEditText(editText)
    onSave({ ...task, editText });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl mb-4">Edit Task</h2>
        <input
          type="text"
          //value={editText}
          //onChange={(e) => setEditText(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button
          //onClick={() => onSave(task.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Save
        </button>
        <button
          //onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;