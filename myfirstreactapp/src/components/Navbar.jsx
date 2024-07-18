import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
 

const Navbar = () => {

   const {user,logout} = useAuth() 

  return (
    <div className='navbar'>
        <ul className='navbar-list'>
            <li className='navbar-item'>
                <Link to='/' className='navbar-link'>Home</Link>
            </li>
            <li className='navbar-item'>
                <Link to='/about' className='navbar-link'>About</Link>
            </li>

 
     {user && <span  className='text-white'>{user.username}</span> }
    
    {
    user ? 


    <li className='navbar-item'>
         <Link onClick={logout} className='navbar-link'>Logout</Link>
    </li>
    
    
    : (
        <>
        <Link to = '/login' className='navbar-link' >
          <li className='navbar-item'>Login</li>
        </Link>

        <li className='navbar-link'>Register</li>
        </>
    )
}
           
        </ul>
    </div>
  )
}

export default Navbar
