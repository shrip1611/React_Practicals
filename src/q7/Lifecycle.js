import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
    const[count, setCount]=useState(0);

    useEffect(()=>{
        console.log('Mount');

        return()=>{
            console.log('Unmount')
        };
    },[]);

    useEffect(() => {
        if (count > 0) {
          console.log('Update');
        }
      }, [count]); 


  return (
    <>
       <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>  
      <button onClick={() => setCount(count - 1)}>Decrement</button>  
    </>
  )
}

export default Lifecycle