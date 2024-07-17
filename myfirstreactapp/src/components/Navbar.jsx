import React from 'react'
import { Link } from 'react-router-dom'
 

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navbar-list'>
            <li className='navbar-item'>
                <Link to='/' className='navbar-link'>Home</Link>
            </li>
            <li className='navbar-item'>
                <Link to='/about' className='navbar-link'>About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
