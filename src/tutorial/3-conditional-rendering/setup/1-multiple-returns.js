import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/perrybatess';
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user,setUser] = useState('default user');
  const [img, setImg] = useState('default img')

  useEffect(() => {
  
    fetch(url)
      .then(response => {
        if(response.status >= 200 && response.status  <=299){
            return response.json()
        }

        else{
          setIsLoading(false)
          setIsError(true)
          //throw new Error(response.statusText)
        }
      })
      .then(user => {
        const { login, avatar_url } = user;
        setUser(login)
        setImg(avatar_url)
        setIsLoading(false)
      })
      .catch(error => console.log(error));

  },[])

  if(isloading){
    return (
      <>
      <h2>Loading...</h2>;
      </>
    )
     
  }

  if(isError){
    return (
      <>
      <h1>User not found</h1>
      </>
    )
  }
  
  return (
    <>
    <li className="users">
    <h5>{user}</h5>
     <span> <img src={img} alt='img'/></span> 
     </li>
    
    </>
  )
};

export default MultipleReturns;
