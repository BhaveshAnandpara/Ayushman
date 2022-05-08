import React from 'react'
import '../Navbar/Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container '>

      <div className="nav-items">
          <span> Home </span>
          <span> Hospital </span>
          <span> Approximate Cost </span>
          <span> Feedback </span>  
      </div>

      <div className='nav-login '>
        <span >Login</span>
      </div>

      </div>
  )
}
