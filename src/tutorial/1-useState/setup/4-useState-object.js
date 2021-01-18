import React, { useState } from 'react';

const UseStateObject = () => {
 
  const [person, setPerson] = useState({
    name:'peter', 
    age :24, 
    message:'beautiful message'
  })

  // const [name, setName] = useState('james')
  // const [age, setAge] = useState('24')
  // const [message, setMessage] = useState('molly is the new company')

  const changeMessage= () => {
   setPerson({ ...person, message:'hello world'})
  //  setMessage('tesla is a big company')
  }

  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>
      change message
    </button>
    
    </>
  )
  
};

export default UseStateObject;
