import React, { useState } from 'react'

const Valid = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Pass123') {
      console.log('Login successful');
      setMessage('Login successful');
    } else {
      console.log('Unauthorized');
      setMessage('Unauthorized');
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message}
    </>
  )
}

export default Valid