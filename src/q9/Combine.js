import React from 'react'

const Combine = () => {
    let fruits1 = ["apple", "banana"]; 
    let fruits2 = ["cherry", "orange"]; 

    let Allfruits=[...fruits1,...fruits2];
    
  return (
    <>
       {/* <h1>First Array :  {fruits1.join(",")}</h1>
       <h1>Second Array : {fruits2.join(",")}</h1>
       <h4>The combine arrays is : {fruits1.join(",")},{fruits2.join(",")}</h4>
       <h4>Combine two array : {Allfruits.join(",")}</h4> */}

       <ul>
        <li><h1>Fruit List : </h1></li>
          {Allfruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
          ))}
      </ul> 
    </>
  )
}

export default Combine