import React from 'react'
import '../Login/Login.css'

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
            <p>OTP has been sent to above number</p>
            <div className='otp1'><input type="number"/></div>
            <div className='otp2'><input type="number"/></div>
            <div className='otp3'><input type="number"/></div>
            <div className='otp4'><input type="number"/></div>
        </div>
        <div>
          <button type="button">LOGIN</button>
        </div>

      </div>

    </div>
  )
}
