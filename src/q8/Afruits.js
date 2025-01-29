import React from 'react'

const Afruits = () => {
    const fruits = ["apple", "banana", "cherry", "bat"];
    const Fruits = fruits.filter(fruit => fruit !== "bat");
  return (
    <>
         <h1>Fruit List</h1>
      <ul>
        {Fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    
    </>
  )
}

export default Afruits