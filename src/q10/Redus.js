import React,{useReducer,useState} from 'react'

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

const Redus = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch({ type: 'ADD_TASK', payload: taskText });
      setTaskText('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <>
         <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"/>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <h2>Total Tasks: {tasks.length}</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Redus