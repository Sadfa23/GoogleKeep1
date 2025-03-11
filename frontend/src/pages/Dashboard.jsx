import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import KeepHeader from '../components/HeaderComponent'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import axios from 'axios';
import NoteItem from '../components/NoteItem';
import EditTask from '../components/EditTask';
import { useNavigate } from 'react-router-dom';



const GoogleKeepClone = () => {
  const { themeClasses } = useTheme();
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);


 

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/allnotes',{withCredentials:true})
      const tasks = await response.data;
      setTasks(tasks)
    } catch (error) {
      console.log('Error fetching data from frontend', error)
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete/${id}`,{withCredentials:true});
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.log('Error deleting data from frontend', error)
    }
  }

  const addTask = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/create', { note: newTask }, { withCredentials: true });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.log('Error adding data from frontend', error);
    }
  };
  const editTask = async (id) => {
    
    try {
      console.log(id)
      alert('This funcyionality is yet  to be added')
      /*
      await axios.put(`http://127.0.0.1:5000/update/${id}`, { note: editText }, { withCredentials: true });

      setTasks(tasks.map(task => (task.id === id ? { ...task, note: editText } : task)));
      //setEditingTask(null);
      //setEditText('');
      */
    } catch (error) {
      console.log('Error updating data from frontend', error);
    }
  };

  useEffect(()=>{
    fetchTasks()
  },[])
  
  return (
    <div className={`flex flex-col h-screen ${themeClasses.mainBg} ${themeClasses.textColor} font-sans transition-colors duration-200`}>
      <KeepHeader />
      <div className="flex flex-1">
        <Sidebar />
        <div className="mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="border p-2 w-full mb-2"
              placeholder="Add a new task"
              required={true}
            />
            <button
              onClick={addTask}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Task
            </button>
          </div>
        <div className="tasks-container">
          {tasks.map((task) => (
           <NoteItem key={task.id} note={task} onDelete={deleteTask} onEdit={editTask} />
          ))}
        </div>
        <MainContent />
        
      </div>
      <Footer />
    </div>
  );
};

export default GoogleKeepClone