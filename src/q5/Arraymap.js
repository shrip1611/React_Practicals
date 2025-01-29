import React from 'react'

const Arraymap = () => {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];

  return (
    <>
        <h1>Week Days</h1>
        <ul>
            {weekDays.map((day,index)=>(
                <li key={index}>{day}</li>
            ))}
        </ul>

    </>
  )
}

export default Arraymap