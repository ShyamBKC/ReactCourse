import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='border border-black'>
        
        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            
            <Link to='/about'>
            <li>About</li>
            </Link>

        </ul>
    </div>
  )
}

export default Navbar