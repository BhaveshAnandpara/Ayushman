import React from 'react'
import bedIcon from '../../../Assets/Icons/bed-icon.png'

export default function EmergencySection() {
  return (
    <div className='EmergencySection'>
        <div className='EmergencySection1'>
            <p>Availability of beds</p>
            <img className='bed-icon1' src={bedIcon} alt="bed-icon" />
        </div>

        <div className='EmergencySection2'>
            <p>Ambulance Service</p>
        </div>
    </div>

  )
}
