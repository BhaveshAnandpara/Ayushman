import React from 'react'
import '../Login/Login.css'

export default function Login() {
  return (

    <div className='login-main'>
      <div className='login-items'>
        <span> Patient </span>
        <span> Hospital </span>
        <span> Medical Council </span>

      </div>

      <div className='login-container'>

        <div className='patient-container border'>
          <div className='patient-container-1'>
            <input type="number" placeholder="+91 | Mobile No." />
            <button type="button">Get OTP</button>
          </div>
          <div><p>OTP has been sent to above number</p></div>
          <div className='patient-container-2'>

            <div className='otp1'><input type="number" /></div>
            <div className='otp2'><input type="number" /></div>
            <div className='otp3'><input type="number" /></div>
            <div className='otp4'><input type="number" /></div>
          </div>
          <div>
            <button type="button">LOGIN</button>
          </div>

        </div>
      </div>
      <div className='hospital-login-container border'>
        <div className='hospital-id'>
          <input type="text" placeholder='Hospital ID'></input>
        </div>
        <div className='Hospital-password'> <input type="password" placeholder='Password'></input></div>
        <div className='submit'>
          <button type='submit'>Login</button>
        </div>


      </div>

      <div className='medical-login-container border'>
      <div className='authority-id'>
          <input type="text" placeholder='Authority ID'></input>
        </div>
        <div className='MedC-password'> <input type="password" placeholder='Password'></input></div>
        <div className='submit'>
          <button type='submit'>Login</button>
        </div>



      </div>
    </div>
  )
}
