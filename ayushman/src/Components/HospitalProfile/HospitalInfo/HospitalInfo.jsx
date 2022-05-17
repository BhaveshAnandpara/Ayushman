import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIosIcon from '@mui/icons-material'
export default function HospitalInfo() {
  return (
    <div>
            <span>Home</span>
            <span>Find Hospital</span>
            <span>ABC Hospital</span>
      <div>
            <div className = "profile-img">
            
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
                    
                    <span>+910000000000</span>
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