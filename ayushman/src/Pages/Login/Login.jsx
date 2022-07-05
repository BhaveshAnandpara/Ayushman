import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'

export default function Login(props) {



  return (

    <section className='login-main '>

      <div className='login-items '>

        <button className={`  ${props.loginItem == "Patient" ? " active-loginItem" : ""} `}  > Patient </button>
        <button className={`  ${props.loginItem == "Hospital" ? " active-loginItem" : ""} `}  > Hospital </button>
        <button className={`  ${props.loginItem == "Medical Council" ? " active-loginItem" : ""} `}  > Medical Council </button>

      </div>

      <div className='login-content-container'>

        <div className='login-container'>

          <div className='patient-container'>
            <div className='patient-container-1'>
              <input type="text" className='phoneNoInput' placeholder="+91 | Mobile No." />
              <button type="button" className='getOTPbtn'>Get OTP</button>
            </div>
            <p className='loginText' >OTP has been sent to above number</p>
            <div className='patient-container-2'>

            <input className='OTPinput' type="text" maxLength={6} />
            </div>
              <button type="button" className='btn'>LOGIN</button>


          </div>
        </div>
      </div>

      {/* <div className='hospital-login-container border'>
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



      </div> */}
    </section>
  )
}
