import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const [text, setText] =  useState('signature')

  const handleClick= ()=>{
    if(text ==='random title') {
      setText(109) 
    }
    else {
      setText('random title')
    }
    
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
