import React, { useState } from 'react'

const Counter = (props) => {
    const[number,setNumber]=useState(props.num)
    const increment=()=>{
        setNumber(number+1)
    }
    const decrement=()=>{
        setNumber(number-1)
    }
  return (
    <>
    <h1>Counter: {number}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter