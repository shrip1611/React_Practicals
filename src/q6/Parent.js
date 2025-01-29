import React from 'react'
import Child from './Child';

const Parent = () => {
    const name='john';

  return (
    <>
    <h1>my name is {name}</h1>
    <Child name={name}/>
    </>
  )
}

export default Parent