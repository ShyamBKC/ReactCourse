import React, { useState } from 'react'
 

const Form = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log({username, password})
    }

  return (
    <div className='container'> 
       
   
   <form>
         <label htmlFor='username'>Username </label>
         <input type='text' name='username' 
         value={username}
         onChange={e=> setUsername(e.target.value)}
         ></input> <br /> <br />

         <label htmlFor='password'>Password </label>
         <input type='text' name='password' 
         value={password}
         onChange={e=> setPassword(e.target.value)} 
         ></input> <br /> <br />

         <button>Submit</button>

   </form>
    </div>

    
  )
}

export default Form