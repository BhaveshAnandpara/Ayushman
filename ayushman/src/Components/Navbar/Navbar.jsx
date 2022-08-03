import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container '>

      <div className="nav-items">
          <span> Home </span>
          <Link to="/findhospital"> Hospital </Link>
          <span> Approximate Cost </span>
          <span> Feedback </span>  
      </div>

      <div className='nav-login '>
      <Link to="/login">Login</Link>
      </div>

      </div>
  )
}
