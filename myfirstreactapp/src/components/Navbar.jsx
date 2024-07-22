import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useSelector } from 'react-redux'
 

const Navbar = () => {


  const {count} = useSelector(state => state.counter)
   const {user,logout} = useAuth() 

  return (
    <div className='navbar'>
        <ul className='navbar-list'>
        <li className='navbar-item'>
                <Link to='/' className='navbar-link text-xl italic'>Satyal Bazar</Link>
            </li>

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
<Link to = '' className='navbar-link margin-left: auto' >
    <li className='navbar-item italic '>Cart: {count}</li>
</Link>
        </ul>
    </div>
  )
}

export default Navbar
