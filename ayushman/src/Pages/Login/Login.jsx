import React from 'react'

export default function Login() {
  return (
    <div className='login-container'>
      <div className='login-items'>
          <span> Patient </span>
          <span> Hospital </span>
          <span> Medical Council </span>

      </div>
      <div className='patient-container'>
        <div className='patient-container-1'>
            <input type="number" placeholder="+91 | Mobile No."/>
            <button type="button">Get OTP</button>
        </div>
        <div className='patient-container-2'>
            <span>OTP has been sent to above number</span>
        </div>
        <div>
          <button type="button">LOGIN</button>
        </div>

      </div>

    </div>
  )
}
