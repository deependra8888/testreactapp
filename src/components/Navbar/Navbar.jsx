import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function navbar() {
  return (
    <nav className='navbar'>
      <Link to = '/' className='link'>Home</Link>
      <Link to = '/about' className='link'>About</Link>
      <Link to = '/work' className='link'>Work</Link>
    </nav>
  )
}

export default navbar