import React from 'react'
import '../Navbar/Navbar.css'

export default function Navbar() {
  return (
    <div className='Nav-container'>
      <div classname="components-1">
        <nav>
          <ul>
         <a href='#'id='nav-comp0'>Home</a>
          <a href='#' id='nav-compo'>Hospital</a>
          
          <a href='#' id='nav-compo'>Approximate cost</a>
          <a href='#'id='nav-compo'>Feedback</a>
          
          </ul>
        </nav>
        
      </div>
      <div className='components-2'>
      <a href='#'>Login</a>
      </div>
      </div>
  )
}
