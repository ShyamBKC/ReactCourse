import React from 'react'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
    const navigate = useNavigate()
 
const backToHome = () => {
    navigate('/')
}


  return (
    <div className='border border-black'>
        
       <p> 404 page not found</p>
       <button onClick={backToHome}> Back to Home</button>
        </div>
  )
}

export default ErrorPage