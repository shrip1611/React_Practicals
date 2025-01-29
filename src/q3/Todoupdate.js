import React, { useState } from 'react';

const Todoupdate = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [edit, setEdit] = useState(false); 
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null); 
  
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    if (edit) {
      const updatedTasks = tasks.map((task, index) =>
        index === currentTaskIndex ? newTask : task
      );
      setTasks(updatedTasks);
      setEdit(false);
      setCurrentTaskIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    
    setNewTask(''); 
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]); 
    setEdit(true);
    setCurrentTaskIndex(index); 
  };

  return (
    <>
      <h1>Todo List</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">{edit ? 'Update Task' : 'Add Task'}</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <p>Total tasks: {tasks.length}</p>
    </>
  );
}

export default Todoupdate;
