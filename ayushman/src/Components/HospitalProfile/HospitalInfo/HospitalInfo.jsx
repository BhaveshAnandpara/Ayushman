import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../HospitalInfo/HospitalInfo.css'

export default function HospitalInfo() {
  return (
  <div className ="profile">
    <div className="profile-navbar">
            <span className="home">Home </span>
            <ArrowForwardIosIcon className="Arrow"/>
            <span className="findHospital">Find Hospital</span>
            <ArrowForwardIosIcon className="Arrow"/>
            <span className="Hospitals">ABC Hospital</span>
            <ArrowForwardIosIcon className="Arrow"/>
      </div>
      <div>
            <div className = "profile-img border">
              </div>
              <div className ="profile-info">
                <div className ="profile-hosp-text">
                  <p className="profile-hosp-name">ABC Hospital</p>
                  <p className ="profile-address">Dummy Road Address, Wardha, Maharashtra.</p>
                  <div>
                    <p className ="profile-hosp-type">Private</p>
                    <p className ="profile-hosp-type">Multi-Speciality</p>
                  </div>
                  <div>
                    <CallIcon className="Call"/>
                    <span className="number">+910000000000</span>
                  </div>
                </div>
              </div>
              <div className = "profile-direction-img">

                <div className = "profile-direction-text">Directions</div>
              </div> 
      </div>   
  </div>
    
  )
}