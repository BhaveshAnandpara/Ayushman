import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import '../Login/Login.css'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { setIsLogged } from '../../States/actions-creators'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { acitionCreators } from '../../States/index'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {

  const dispatch = useDispatch()
  const {setIsLogged} = bindActionCreators(acitionCreators,dispatch)
  const navigate = useNavigate()

  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [OTP, setOTP] = useState("")
  const [hash, setHash] = useState("")


  function hospLogin(){

    let hospID = document.querySelector('.hospIDInput').value
    let password = document.querySelector('.passInput').value

    if(!hospID){
      alert("Please Enter Hospital ID")
    }
    else if( !password ){
      alert("Please Enter Password")
    }
    else{
      var data = JSON.stringify({
        "hospID": hospID,
        "password": password
      });
  
      var config = {
        method: 'post',
        url: 'http://localhost:8001/hospAuth/hospLogin',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
  
      axios(config)
        .then(function (response) {
            console.log(response.data)
            setIsLogged()
            navigate('/hospitaldashboard')
        })
        .catch(function (error) {
          alert(error)
        });
    }
  }



  useEffect(() => {
    var data = JSON.stringify({
      "phoneNo": phone,
      "password": password
    });

    var config = {
      method: 'post',
      url: 'http://localhost:8001/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data)
        setHash(response.data.hash)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [phone, password])


  useEffect(() => {
    verifyOTP()
  }, [OTP])

  function verifyOTP(){
    var data = JSON.stringify({
      "phoneNo": phone,
      "hash": hash,
      "password": password,
      "OTP": OTP
    });

    var config = {
      method: 'post',
      url: 'http://localhost:8001/auth/verifyOTP',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        if( response.data.msg === "Invalid Mobile Number" || response.data.msg === undefined ){
          console.log("Nice")
        }
        else{
          alert(response.data.msg)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Header />
      <Navbar />
      <section className='login-main '>

        <div className='login-items '>

          <Link to='/login/patient' className={`  ${props.loginItem === "Patient" ? " active-loginItem" : ""} `}  > Patient </Link>
          <Link to='/login/hospital' className={`  ${props.loginItem === "Hospital" ? " active-loginItem" : ""} `}  > Hospital </Link>
          <Link to='/login/medicalCouncil' className={`  ${props.loginItem === "MedicalCouncil" ? " active-loginItem" : ""} `}  > Medical Council </Link>

        </div>

        <div className='login-content-container'>

          <div className='login-container'>

{ props.loginItem === 'Patient' &&

            <div className='patient-container'>
              <div className='patient-container-1'>
                <input type="text" className='phoneNoInput' maxLength={10} defaultValue={""} placeholder="+91 | Mobile No." />
                <input type="text" className='passInput' maxLength={50} defaultValue={""} placeholder="Password" />
                <button type="button" className='getOTPbtn' onClick={() => {
                  setPhone(document.querySelector('.phoneNoInput').value)
                  setPassword(document.querySelector('.passInput').value)
                }} >Get OTP</button>
              </div>
              <p className='loginText' >OTP has been sent to above number</p>
              <div className='patient-container-2'>

                <input className='OTPinput' type="text" maxLength={6} />
              </div>
              <button type="button" className='btn' onClick={() => {
                setOTP(document.querySelector('.OTPinput').value)
              }} >LOGIN</button>

            </div>

          }

{ props.loginItem === 'Hospital' &&

            <div className='hospital-container'>
              <div className='hospital-container-1 '>
                <input type="text" className='hospIDInput' maxLength={10} defaultValue={""} placeholder="Hospital ID" />
                <input type="text" className='passInput' maxLength={50} defaultValue={""} placeholder="Password" />
              </div>
              <button type="button" className='btn' onClick={() => {
                hospLogin()

              }} >LOGIN</button>

            </div>

          }

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
    </>
  )
}
