import React,{useState} from 'react';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
      };

      const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_,i) => i !== index);
        setTasks(newTasks);
      };
    
  return (
    <>
    <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <h2>Total Tasks: {tasks.length}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo